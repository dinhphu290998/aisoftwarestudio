const cheerio = require('cheerio');
async function test() {
  const res = await fetch('https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader&hl=en');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const apps = [];
  $('a[href^="/store/apps/details"]').each((i, el) => {
     const $el = $(el);
     // Usually the app structure has an image that is square.
     const img = $el.find('img').first();
     const icon = img.attr('src') || img.attr('srcset') || '';
     
     // The title is usually in a div that is clamped or in a span
     // Play store uses `.DdYzDd` for title often, but it's obfuscated.
     // However, the title is usually the first span/div with text, but developer name is ALSO inside.
     // Actually, if we look at Google Play, the Title is a div, and developer name is another div underneath.
     
     const texts = $el.find('div').map((_, node) => $(node).text().trim()).get()
                     .filter(t => t.length > 0 && !t.includes('★'));
     
     console.log('Texts found:', texts);
  });
}
test();
