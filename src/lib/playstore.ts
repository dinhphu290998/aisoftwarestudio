import * as cheerio from 'cheerio';
// Using require to avoid TS import issues with commonjs packages
const gplay = require('google-play-scraper').default || require('google-play-scraper');

export interface AppData {
  title: string;
  link: string;
  icon: string;
  developerId: string;
  installs: number;
}

export async function fetchDeveloperApps(devIdEncoded: string): Promise<AppData[]> {
  try {
    const url = `https://play.google.com/store/apps/developer?id=${devIdEncoded}&hl=vi`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      next: { revalidate: 3600 } // Cache for 1 hour in Next.js
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return [];
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const basicApps: { title: string, link: string, icon: string, id: string }[] = [];
    const seenLinks = new Set<string>();

    $('a[href^="/store/apps/details"]').each((_, el) => {
      const link = $(el).attr('href');
      if (!link || seenLinks.has(link)) return;
      
      const parent = $(el).parent();
      
      // Look for text nodes in spans (which separates Title and Dev cleanly)
      const textNodes = parent.find('span').map((_, node) => $(node).text().trim()).get();
      const validTexts = textNodes.filter(t => t.length > 0 && !t.includes('★') && t !== 'star');
      
      let title = validTexts[0] || 'Unknown App';
      
      // Images: first is usually banner, second is square icon
      const imgs = parent.find('img').map((_, img) => $(img).attr('src') || $(img).attr('srcset')).get();
      
      let icon = '';
      if (imgs.length > 1) {
         icon = imgs.find(src => src && src.includes('=s')) || imgs[imgs.length - 1];
      } else if (imgs.length === 1) {
         icon = imgs[0];
      }
      
      if (icon) {
         icon = icon.split(' ')[0]; // handle srcset format just in case
         if (icon.startsWith('//')) icon = 'https:' + icon;
      } else {
         icon = 'https://via.placeholder.com/150'; // fallback
      }

      if (title && icon) {
        seenLinks.add(link);
        const appIdMatch = link.match(/id=([^&]+)/);
        const appId = appIdMatch ? appIdMatch[1] : '';
        if (appId) {
          basicApps.push({
            title,
            link: `https://play.google.com${link}`,
            icon,
            id: appId
          });
        }
      }
    });

    // Now fetch real download counts for all found apps concurrently
    const appsWithInstalls: AppData[] = await Promise.all(
      basicApps.map(async (app) => {
        let installs = 0;
        try {
          const details = await gplay.app({ appId: app.id });
          installs = details.minInstalls || 0;
        } catch (e) {
          console.error(`Error fetching details for ${app.id}:`, e);
        }
        return {
          title: app.title,
          link: app.link,
          icon: app.icon,
          developerId: devIdEncoded,
          installs
        };
      })
    );

    // Sort by installs descending
    return appsWithInstalls.sort((a, b) => b.installs - a.installs);

  } catch (error) {
    console.error("Error fetching apps for", devIdEncoded, error);
    return [];
  }
}
