const gplay = require('google-play-scraper');

async function checkDownloads() {
  try {
    const devId = 'TẠ NGỌC QUỐC BẢO';
    const apps = await gplay.developer({ devId: devId, lang: 'en', country: 'us' });
    
    // Sort apps by exact score/installs
    const sorted = apps.sort((a, b) => b.minInstalls - a.minInstalls);
    
    console.log("Downloads Rank:");
    sorted.forEach((app, idx) => {
      console.log(`${idx + 1}. ${app.title} - ${app.minInstalls} installs`);
    });
  } catch (error) {
    console.error(error);
  }
}
checkDownloads();
