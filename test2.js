const cheerio = require('cheerio');
async function test() {
  const res = await fetch('https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader&hl=en');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  $('a[href^="/store/apps/details"]').each((i, el) => {
     const $el = $(el);
     const spanTexts = $el.find('span').map((_, node) => $(node).text().trim()).get().filter(t => t.length > 0);
     console.log('Span Texts:', spanTexts);
     
     // App icons usually have class "T75of" or "Q4vdJd" or similar, but let's just grab the one with the smallest dimensions or the first one?
     // Actually, Play Store app cards have a 512x512 logo, but in the DOM it might have `srcset`.
     // Let's find all images.
     const imgs = $el.find('img').map((_, img) => $(img).attr('src') || $(img).attr('srcset')).get();
     console.log('Images:', imgs);
  });
}
test();
