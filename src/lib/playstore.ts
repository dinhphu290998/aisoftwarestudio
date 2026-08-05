import * as cheerio from 'cheerio';

export interface AppData {
  title: string;
  link: string;
  icon: string;
  developerId: string;
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
    const apps: AppData[] = [];
    const seenLinks = new Set<string>();

    $('a[href^="/store/apps/details"]').each((_, el) => {
      const link = $(el).attr('href');
      if (!link || seenLinks.has(link)) return;
      
      const parent = $(el).parent();
      
      // Look for text nodes
      const textNodes = parent.find('span, div').map((_, node) => $(node).text().trim()).get();
      // Filter out very short strings (like ratings "4.5" or empty) and very long ones
      const validTexts = textNodes.filter(t => t.length > 2 && t.length < 60 && !t.includes('★'));
      
      let title = validTexts[0] || 'Unknown App';
      
      let icon = parent.find('img').attr('src') || parent.find('img').attr('srcset');
      if (icon) {
         icon = icon.split(' ')[0]; // handle srcset
         if (icon.startsWith('//')) icon = 'https:' + icon;
      } else {
         icon = 'https://via.placeholder.com/150'; // fallback
      }

      // Add if valid
      if (title && icon) {
        seenLinks.add(link);
        apps.push({
          title,
          link: `https://play.google.com${link}`,
          icon,
          developerId: devIdEncoded
        });
      }
    });

    return apps;
  } catch (error) {
    console.error("Error fetching apps for", devIdEncoded, error);
    return [];
  }
}
