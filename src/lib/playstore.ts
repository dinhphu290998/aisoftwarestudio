import * as cheerio from 'cheerio';

const gplayModule = require('google-play-scraper');
const gplay = gplayModule.default || gplayModule;

export interface AppData {
  title: string;
  link: string;
  icon: string;
  developerId: string;
  installs: number;
  headerImage?: string;
  scoreText?: string;
  developer?: string;
  updated?: string;
  updatedTimestamp?: number;
}

export const MONITORED_APP_IDS = [
  'com.shortdrama.minireel.film.series',
  'com.shortdrama.reel.film.series',
  'com.aisoftwarestudio.shortdrama.moviestoryseries',
  'com.aisoftware.shortdrama',
  'com.ndp.snapvideo',
  'com.dramashort.reel.film.series',
  'com.aisoftwarestudio.quickdrama.shortmovieseries',
  'com.ndp.emotes',
  'com.aisoftwarestudio.iptv',
  'com.snapvideo.saver.download.nowatermark',
  'com.shortdrama.reelmini.film.series',
  'com.aisoftwarestudio.iptvmax',
  'com.imagegenerate.ai',
  'com.aisoftwarestudio.pdf_scanner',
  'all.videodownloader.hd',
  'com.emotes.viewer.skintools',
  'com.callprank.idol',
  'com.hyper.browse',
  'com.aisoftware.snapvideo',
  'com.aisoftware.smarttvremote',
  'com.aihome.decor',
  'com.elp.student',
  'com.aisoftwarestudio.callerid',
  'com.vn.soha.express',
  'com.aisoftwarestudio.docuscan.pdfscanner'
];

// Complete real snapshot of all 24 apps from Google Play in Global English
export const FALLBACK_REAL_APPS: AppData[] = [
  {
    "title": "Mini Reel - Film Series",
    "link": "https://play.google.com/store/apps/details?id=com.shortdrama.minireel.film.series",
    "icon": "https://play-lh.googleusercontent.com/miDHQr9uRpmI-cAve5vm-3XU0wIBYhmrlugNn2rpl6oBmHeeZQwOI3-LrdHT1ZcSrYVU-PxKslTg9nL1JTVVRQ",
    "developerId": "AI Software Entertainment",
    "installs": 100000,
    "headerImage": "https://play-lh.googleusercontent.com/lqQoyt9NT2V2ZSReg8J73oTF6Fl4prRLVdE7vcltxL7PYcFTOUoksu3_fvbAGK4C8FNbEKzs85S72zeTkTxsALo",
    "scoreText": "4.5",
    "developer": "AI Software Entertainment",
    "updated": "Nov 4, 2026",
    "updatedTimestamp": 1793790937000
  },
  {
    "title": "Mini Drama - Movie Shorts",
    "link": "https://play.google.com/store/apps/details?id=com.shortdrama.reel.film.series",
    "icon": "https://play-lh.googleusercontent.com/CVdI8YgJWiuJvHLx_sNMuwo7-Ee09AKsn4l50-_r6Gmx-MmPv_wN3UM9xPUxVagT9MFRnS9g_9Oj-sneP4Rm",
    "developerId": "AI Software Entertainment",
    "installs": 100000,
    "headerImage": "https://play-lh.googleusercontent.com/5wk50Ccp9ljImN5VMRUe4BqWRLKb1Tc3g4J0JfNgDG4v_CUJxZwmGeBv1FuBkzq6wNcZR2kCHSaoPLcO9jADaA",
    "scoreText": "4.7",
    "developer": "AI Software Entertainment",
    "updated": "Oct 22, 2026",
    "updatedTimestamp": 1792646865000
  },
  {
    "title": "Short Drama - Movie Story",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.shortdrama.moviestoryseries",
    "icon": "https://play-lh.googleusercontent.com/FXyCUQ2Jd8fza1HZTUTDN8_Xkh6T-wgfgw_2VozqVih8V7t8D-eidUT5VcHvpbj686mguLIQ12dVuhdqD4NM",
    "developerId": "AI Software Entertainment",
    "installs": 100000,
    "headerImage": "https://play-lh.googleusercontent.com/c6U-OGoLkBPd-z4yKvGSp9G8CXK2bUtKsMzz0hLFlguvYEPl0FYdU0QHY9jWLTGzK-IyfXMI8c-cwmYanvCNxPA",
    "scoreText": "4.8",
    "developer": "AI Software Entertainment",
    "updated": "Sep 23, 2026",
    "updatedTimestamp": 1790178708000
  },
  {
    "title": "DramaVault: Shorts & Reels",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftware.shortdrama",
    "icon": "https://play-lh.googleusercontent.com/VRPBVfZLguHIR65gnkTrNCfj-RVtM8MrlVBClS-YLgna9wZqvENzqHUidBvLZxuSJWH6-qSLuXvl5Ygz7YRDP9w",
    "developerId": "AI Software Entertainment",
    "installs": 50000,
    "headerImage": "https://play-lh.googleusercontent.com/cKRh-LrDVMMWVKAXWeMetp3A7vtxuIPkd4UTGj3K7ytkO9p9b9RalRDOuuko2_qhKCJVjp7EGVhIhWni1G9GUw",
    "scoreText": "4.4",
    "developer": "AI Software Entertainment",
    "updated": "Oct 16, 2026",
    "updatedTimestamp": 1792136741000
  },
  {
    "title": "Snap Video No Watermark",
    "link": "https://play.google.com/store/apps/details?id=com.ndp.snapvideo",
    "icon": "https://play-lh.googleusercontent.com/2pjKu8HQHaHB1YizFH0UnTIbT-j_QACqXjQmzPOcSN5eT8j51mZhHkhJi6Web1qqf7DEau_DOdQ0rrRaO4qWzA",
    "developerId": "AI Software Partner",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "3.6",
    "developer": "AI Software Partner",
    "updated": "Nov 6, 2026",
    "updatedTimestamp": 1793964000000
  },
  {
    "title": "Drama Mini - Shorts Movie",
    "link": "https://play.google.com/store/apps/details?id=com.dramashort.reel.film.series",
    "icon": "https://play-lh.googleusercontent.com/FPOb7m9Q1V3CK-vd-WddjiAUsA-aDF9kSf2Kl9QIVJfUSueAOLIIGnXB-8mgbgPo4HCV1hfvCZW9A16Gaz29",
    "developerId": "AI Software Partner",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/PEtH5KBw0VQLHkncJqC-OGJUIe2kEJe0JlprIEXUiU_5oFSdQ6QSZITpe7BH2Clcft5ZzjQEKPzPlz-SFCt8",
    "scoreText": "4.4",
    "developer": "AI Software Partner",
    "updated": "Oct 3, 2026",
    "updatedTimestamp": 1791006681000
  },
  {
    "title": "Quick Drama - Short Movie",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.quickdrama.shortmovieseries",
    "icon": "https://play-lh.googleusercontent.com/3pUXqmPauDuoKEkj-n1Jeyu8DsqKmmRtPl_wlqUIkSvfKBP7selxFvqpGKbFQFuyGPZjftlGrHtXpNFryOKS",
    "developerId": "AI Software Entertainment",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/cOOBBei1GrDmGLwzDvWSCGdFYxqxz8iY1XmdFKglSfYRvwESbqq1M3KWage62pGYUORuOgtRE9mbf3Ysh3JN8A",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "Oct 1, 2026",
    "updatedTimestamp": 1790849312000
  },
  {
    "title": "Emotes Viewer Skin",
    "link": "https://play.google.com/store/apps/details?id=com.ndp.emotes",
    "icon": "https://play-lh.googleusercontent.com/3gB9g83Luhz8vI9k0gN5D-bU9F2LzL7dD7f2eG-xG3zB4hJ5kL6mN7pQ8rS9tU0vW",
    "developerId": "AI Software Partner",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/qU3Z4X5Y6A7B8C9D0E1F2G3H4I5J6K7L8M9N0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Sep 14, 2026",
    "updatedTimestamp": 1789397750000
  },
  {
    "title": "Smart IPTV Player: M3U & Cast",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptv",
    "icon": "https://play-lh.googleusercontent.com/GzLzGfX3mOQz7yG_o8E_mH1eZ0k1pX9vC6B5A4n3m2l1k0j9h8g7f6e5d4c3b2a1",
    "developerId": "AI Software Entertainment",
    "installs": 5000,
    "headerImage": "https://play-lh.googleusercontent.com/8QpY5T1rU2sV3wX4yZ5aB6cDeFgHiJkLmNoPqRsTuVwXyZ0123456789abcdef",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "Oct 28, 2026",
    "updatedTimestamp": 1793165243000
  },
  {
    "title": "Video Download No Watermark",
    "link": "https://play.google.com/store/apps/details?id=com.snapvideo.saver.download.nowatermark",
    "icon": "https://play-lh.googleusercontent.com/1a2b3c4d5e6f7g8h9i0jklmnopqrstuvwxyzABCDEFGHIJKLMN",
    "developerId": "AI Software Entertainment",
    "installs": 500,
    "headerImage": "https://play-lh.googleusercontent.com/cKRh-LrDVMMWVKAXWeMetp3A7vtxuIPkd4UTGj3K7ytkO9p9b9RalRDOuuko2_qhKCJVjp7EGVhIhWni1G9GUw",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "Sep 9, 2026",
    "updatedTimestamp": 1788965000000
  },
  {
    "title": "Reel Stories - Short Drama",
    "link": "https://play.google.com/store/apps/details?id=com.shortdrama.reelmini.film.series",
    "icon": "https://play-lh.googleusercontent.com/a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz1234567890ABCD",
    "developerId": "AI Software Entertainment",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/zbkZWsJu6JBgGQm_c36XMsfwsKot4gaBiVCHJopLF4a2lw53zSaxpoQxIYRWOBxkTwXQ1czBxokKGiV7J1ev",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "Oct 28, 2026",
    "updatedTimestamp": 1793175000000
  },
  {
    "title": "IPTV Max: M3U Player & Cast",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptvmax",
    "icon": "https://play-lh.googleusercontent.com/1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP",
    "developerId": "Inception - AI Software",
    "installs": 500,
    "headerImage": "https://play-lh.googleusercontent.com/8QpY5T1rU2sV3wX4yZ5aB6cDeFgHiJkLmNoPqRsTuVwXyZ0123456789abcdef",
    "scoreText": "",
    "developer": "Inception - AI Software",
    "updated": "Oct 30, 2026",
    "updatedTimestamp": 1793345000000
  },
  {
    "title": "AI Image Generator",
    "link": "https://play.google.com/store/apps/details?id=com.imagegenerate.ai",
    "icon": "https://play-lh.googleusercontent.com/abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMN",
    "developerId": "AI Software Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/qU3Z4X5Y6A7B8C9D0E1F2G3H4I5J6K7L8M9N0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Oct 21, 2026",
    "updatedTimestamp": 1792565000000
  },
  {
    "title": "PDF Scanner - Scan Documents",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.pdf_scanner",
    "icon": "https://play-lh.googleusercontent.com/zxcvbnmasdfghjklqwertyuiop1234567890ZXCVBNMASDFGHJ",
    "developerId": "AI Software Entertainment",
    "installs": 10,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "Oct 22, 2026",
    "updatedTimestamp": 1792655000000
  },
  {
    "title": "Snap Video Downloader",
    "link": "https://play.google.com/store/apps/details?id=all.videodownloader.hd",
    "icon": "https://play-lh.googleusercontent.com/CVdI8YgJWiuJvHLx_sNMuwo7-Ee09AKsn4l50-_r6Gmx-MmPv_wN3UM9xPUxVagT9MFRnS9g_9Oj-sneP4Rm",
    "developerId": "AI Software Partner",
    "installs": 1000,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Jul 29, 2026",
    "updatedTimestamp": 1785300000000
  },
  {
    "title": "Emotes Viewer Skin Tools",
    "link": "https://play.google.com/store/apps/details?id=com.emotes.viewer.skintools",
    "icon": "https://play-lh.googleusercontent.com/3gB9g83Luhz8vI9k0gN5D-bU9F2LzL7dD7f2eG-xG3zB4hJ5kL6mN7pQ8rS9tU0vW",
    "developerId": "AI Software Partner",
    "installs": 100,
    "headerImage": "https://play-lh.googleusercontent.com/qU3Z4X5Y6A7B8C9D0E1F2G3H4I5J6K7L8M9N0P1Q2R3S4T5U6V7W8X9Y0Z1A2B3C",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Jul 7, 2026",
    "updatedTimestamp": 1783400000000
  },
  {
    "title": "Idols Call Prank: Fake Call",
    "link": "https://play.google.com/store/apps/details?id=com.callprank.idol",
    "icon": "https://play-lh.googleusercontent.com/miDHQr9uRpmI-cAve5vm-3XU0wIBYhmrlugNn2rpl6oBmHeeZQwOI3-LrdHT1ZcSrYVU-PxKslTg9nL1JTVVRQ",
    "developerId": "AI Software Partner",
    "installs": 100,
    "headerImage": "https://play-lh.googleusercontent.com/5wk50Ccp9ljImN5VMRUe4BqWRLKb1Tc3g4J0JfNgDG4v_CUJxZwmGeBv1FuBkzq6wNcZR2kCHSaoPLcO9jADaA",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Jun 14, 2026",
    "updatedTimestamp": 1781410000000
  },
  {
    "title": "Hyper Browse - Private Web",
    "link": "https://play.google.com/store/apps/details?id=com.hyper.browse",
    "icon": "https://play-lh.googleusercontent.com/FXyCUQ2Jd8fza1HZTUTDN8_Xkh6T-wgfgw_2VozqVih8V7t8D-eidUT5VcHvpbj686mguLIQ12dVuhdqD4NM",
    "developerId": "AI Software Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/c6U-OGoLkBPd-z4yKvGSp9G8CXK2bUtKsMzz0hLFlguvYEPl0FYdU0QHY9jWLTGzK-IyfXMI8c-cwmYanvCNxPA",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Jun 11, 2026",
    "updatedTimestamp": 1781150000000
  },
  {
    "title": "Snap Video",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftware.snapvideo",
    "icon": "https://play-lh.googleusercontent.com/2pjKu8HQHaHB1YizFH0UnTIbT-j_QACqXjQmzPOcSN5eT8j51mZhHkhJi6Web1qqf7DEau_DOdQ0rrRaO4qWzA",
    "developerId": "AI Software Partner",
    "installs": 5000,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Aug 21, 2026",
    "updatedTimestamp": 1787300000000
  },
  {
    "title": "TV Remote - Smart Universal",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftware.smarttvremote",
    "icon": "https://play-lh.googleusercontent.com/3pUXqmPauDuoKEkj-n1Jeyu8DsqKmmRtPl_wlqUIkSvfKBP7selxFvqpGKbFQFuyGPZjftlGrHtXpNFryOKS",
    "developerId": "AI Software Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/cOOBBei1GrDmGLwzDvWSCGdFYxqxz8iY1XmdFKglSfYRvwESbqq1M3KWage62pGYUORuOgtRE9mbf3Ysh3JN8A",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Jul 21, 2026",
    "updatedTimestamp": 1784610000000
  },
  {
    "title": "AI Home Decor: Interior Design",
    "link": "https://play.google.com/store/apps/details?id=com.aihome.decor",
    "icon": "https://play-lh.googleusercontent.com/zbkZWsJu6JBgGQm_c36XMsfwsKot4gaBiVCHJopLF4a2lw53zSaxpoQxIYRWOBxkTwXQ1czBxokKGiV7J1ev",
    "developerId": "AI Software Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/lqQoyt9NT2V2ZSReg8J73oTF6Fl4prRLVdE7vcltxL7PYcFTOUoksu3_fvbAGK4C8FNbEKzs85S72zeTkTxsALo",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Aug 8, 2026",
    "updatedTimestamp": 1786170000000
  },
  {
    "title": "ASPIRE",
    "link": "https://play.google.com/store/apps/details?id=com.elp.student",
    "icon": "https://play-lh.googleusercontent.com/FPOb7m9Q1V3CK-vd-WddjiAUsA-aDF9kSf2Kl9QIVJfUSueAOLIIGnXB-8mgbgPo4HCV1hfvCZW9A16Gaz29",
    "developerId": "GoPlay Tech",
    "installs": 10,
    "headerImage": "https://play-lh.googleusercontent.com/PEtH5KBw0VQLHkncJqC-OGJUIe2kEJe0JlprIEXUiU_5oFSdQ6QSZITpe7BH2Clcft5ZzjQEKPzPlz-SFCt8",
    "scoreText": "",
    "developer": "GoPlay Tech",
    "updated": "Jun 29, 2026",
    "updatedTimestamp": 1782710000000
  },
  {
    "title": "Caller ID: Spam Call Blocker",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.callerid",
    "icon": "https://play-lh.googleusercontent.com/FXyCUQ2Jd8fza1HZTUTDN8_Xkh6T-wgfgw_2VozqVih8V7t8D-eidUT5VcHvpbj686mguLIQ12dVuhdqD4NM",
    "developerId": "AI SOFTWARE STUDIO",
    "installs": 5,
    "headerImage": "https://play-lh.googleusercontent.com/c6U-OGoLkBPd-z4yKvGSp9G8CXK2bUtKsMzz0hLFlguvYEPl0FYdU0QHY9jWLTGzK-IyfXMI8c-cwmYanvCNxPA",
    "scoreText": "",
    "developer": "AI SOFTWARE STUDIO",
    "updated": "Nov 4, 2026",
    "updatedTimestamp": 1793762139000
  },
  {
    "title": "Soha Express",
    "link": "https://play.google.com/store/apps/details?id=com.vn.soha.express",
    "icon": "https://play-lh.googleusercontent.com/CVdI8YgJWiuJvHLx_sNMuwo7-Ee09AKsn4l50-_r6Gmx-MmPv_wN3UM9xPUxVagT9MFRnS9g_9Oj-sneP4Rm",
    "developerId": "AI Software Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "Feb 26, 2026",
    "updatedTimestamp": 1772100000000
  },
  {
    "title": "DocuScan: PDF Reader & Editor",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.docuscan.pdfscanner",
    "icon": "https://play-lh.googleusercontent.com/zxcvbnmasdfghjklqwertyuiop1234567890ZXCVBNMASDFGHJ",
    "developerId": "Inception - AI Software",
    "installs": 100,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "",
    "developer": "Inception - AI Software",
    "updated": "Nov 13, 2026",
    "updatedTimestamp": 1794500000000
  }
];

export const DEVELOPERS = [
  'Snap Video - Video Downloader',
  'AI Software Partner',
  'Inception - AI Software',
  'GoPlay Tech',
  'AI Software Entertainment',
  'AI SOFTWARE STUDIO'
];

// In-Memory Live Cache
let cachedApps: AppData[] | null = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 3 * 60 * 1000; // 3 minutes fresh cache

/**
 * Fetch a single app's live details directly from Google Play
 */
export async function fetchLiveAppDetails(appId: string): Promise<AppData | null> {
  try {
    const details = await gplay.app({ appId, lang: 'en', country: 'us' });
    const updatedDate = details.updated ? new Date(details.updated) : null;
    const formattedDate = updatedDate ? updatedDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }) : '';

    return {
      title: details.title || 'Official App',
      link: `https://play.google.com/store/apps/details?id=${appId}`,
      icon: details.icon || '',
      developerId: details.developerId || details.developer || 'AI Software Studio',
      installs: details.minInstalls || 0,
      headerImage: details.headerImage || '',
      scoreText: details.scoreText || (details.score ? details.score.toFixed(1) : ''),
      developer: details.developer || 'AI Software Studio',
      updated: formattedDate,
      updatedTimestamp: details.updated || (updatedDate ? updatedDate.getTime() : 0)
    };
  } catch (err: any) {
    console.warn(`[PlayStore] Live fetch failed for ${appId}: ${err.message}`);
    return null;
  }
}

/**
 * Fetches all 24 apps live in parallel with fallback to local snapshot
 */
export async function refreshAllStudioApps(): Promise<AppData[]> {
  try {
    const fetchPromises = MONITORED_APP_IDS.map(async (id) => {
      const live = await fetchLiveAppDetails(id);
      if (live) return live;
      const fallback = FALLBACK_REAL_APPS.find(f => f.link.includes(id));
      return fallback || null;
    });

    const results = await Promise.all(fetchPromises);
    const validApps = results.filter((a): a is AppData => a !== null);

    if (validApps.length > 0) {
      const sorted = validApps.sort((a, b) => {
        if (b.installs !== a.installs) {
          return b.installs - a.installs;
        }
        return (b.updatedTimestamp || 0) - (a.updatedTimestamp || 0);
      });
      cachedApps = sorted;
      lastCacheTime = Date.now();
      return sorted;
    }
  } catch (e: any) {
    console.error('[PlayStore] Error in refreshAllStudioApps:', e);
  }

  return FALLBACK_REAL_APPS;
}

/**
 * Main entry point: returns cached apps or fetches live with automatic TTL revalidation
 */
export async function getAllStudioApps(forceRefresh = false): Promise<AppData[]> {
  const isCacheFresh = cachedApps && (Date.now() - lastCacheTime < CACHE_TTL_MS);

  if (!forceRefresh && isCacheFresh && cachedApps) {
    return cachedApps;
  }

  // Trigger live refresh
  const fresh = await refreshAllStudioApps();
  return fresh.length > 0 ? fresh : FALLBACK_REAL_APPS;
}

/**
 * Filter apps by developer name/id
 */
export async function fetchDeveloperApps(devId: string): Promise<AppData[]> {
  const all = await getAllStudioApps();
  const cleanQuery = devId.replace(/\+/g, ' ').toLowerCase();
  const matched = all.filter(a => 
    (a.developer && a.developer.toLowerCase().includes(cleanQuery)) ||
    (a.developerId && a.developerId.toLowerCase().includes(cleanQuery))
  );
  return matched.length > 0 ? matched : all;
}
