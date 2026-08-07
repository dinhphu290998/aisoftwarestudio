const cheerio = require('cheerio');
async function fetchDev(devId) {
  const url = 'https://play.google.com/store/apps/developer?id=' + devId + '&hl=en';
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await response.text();
  const $ = cheerio.load(html);
  let c = 0;
  $('a[href^="/store/apps/details"]').each(() => c++);
  return c;
}
Promise.all([
  fetchDev('Snap+Video+-+Video+Downloader'),
  fetchDev('La%CC%83+Ti%C3%AA%CC%81n+Tu%CC%80ng'),
  fetchDev('T%E1%BA%A0+NG%E1%BB%8CC+QU%E1%BB%90C+B%E1%BA%A2O')
]).then(res => console.log('Apps per dev:', res, 'Total:', res.reduce((a,b)=>a+b,0)));
