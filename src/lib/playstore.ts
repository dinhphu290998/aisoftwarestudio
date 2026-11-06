import * as cheerio from 'cheerio';
// Using require to avoid TS import issues with commonjs packages
const gplay = require('google-play-scraper').default || require('google-play-scraper');

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

// Complete real snapshot of all 24 apps from Google Play
export const FALLBACK_REAL_APPS: AppData[] = [
  {
    "title": "Mini Reel - Film Series",
    "link": "https://play.google.com/store/apps/details?id=com.shortdrama.minireel.film.series&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/miDHQr9uRpmI-cAve5vm-3XU0wIBYhmrlugNn2rpl6oBmHeeZQwOI3-LrdHT1ZcSrYVU-PxKslTg9nL1JTVVRQ",
    "developerId": "AI+Software+Entertainment",
    "installs": 100000,
    "headerImage": "https://play-lh.googleusercontent.com/lqQoyt9NT2V2ZSReg8J73oTF6Fl4prRLVdE7vcltxL7PYcFTOUoksu3_fvbAGK4C8FNbEKzs85S72zeTkTxsALo",
    "scoreText": "4,6",
    "developer": "AI Software Entertainment",
    "updated": "4 thg 11, 2026",
    "updatedTimestamp": 1793790937000
  },
  {
    "title": "Mini Drama - Movie Shorts",
    "link": "https://play.google.com/store/apps/details?id=com.shortdrama.reel.film.series&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/CVdI8YgJWiuJvHLx_sNMuwo7-Ee09AKsn4l50-_r6Gmx-MmPv_wN3UM9xPUxVagT9MFRnS9g_9Oj-sneP4Rm",
    "developerId": "AI+Software+Entertainment",
    "installs": 100000,
    "headerImage": "https://play-lh.googleusercontent.com/5wk50Ccp9ljImN5VMRUe4BqWRLKb1Tc3g4J0JfNgDG4v_CUJxZwmGeBv1FuBkzq6wNcZR2kCHSaoPLcO9jADaA",
    "scoreText": "4,7",
    "developer": "AI Software Entertainment",
    "updated": "22 thg 10, 2026",
    "updatedTimestamp": 1792646865000
  },
  {
    "title": "Short Drama - Movie Story",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.shortdrama.moviestoryseries&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/FXyCUQ2Jd8fza1HZTUTDN8_Xkh6T-wgfgw_2VozqVih8V7t8D-eidUT5VcHvpbj686mguLIQ12dVuhdqD4NM",
    "developerId": "AI+Software+Entertainment",
    "installs": 100000,
    "headerImage": "https://play-lh.googleusercontent.com/c6U-OGoLkBPd-z4yKvGSp9G8CXK2bUtKsMzz0hLFlguvYEPl0FYdU0QHY9jWLTGzK-IyfXMI8c-cwmYanvCNxPA",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "23 thg 9, 2026",
    "updatedTimestamp": 1790178708000
  },
  {
    "title": "DramaVault: Shorts & Reels",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftware.shortdrama&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/VRPBVfZLguHIR65gnkTrNCfj-RVtM8MrlVBClS-YLgna9wZqvENzqHUidBvLZxuSJWH6-qSLuXvl5Ygz7YRDP9w",
    "developerId": "AI+Software+Entertainment",
    "installs": 50000,
    "headerImage": "https://play-lh.googleusercontent.com/cKRh-LrDVMMWVKAXWeMetp3A7vtxuIPkd4UTGj3K7ytkO9p9b9RalRDOuuko2_qhKCJVjp7EGVhIhWni1G9GUw",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "16 thg 10, 2026",
    "updatedTimestamp": 1792136741000
  },
  {
    "title": "Snap Video No Watermark",
    "link": "https://play.google.com/store/apps/details?id=com.ndp.snapvideo&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/2pjKu8HQHaHB1YizFH0UnTIbT-j_QACqXjQmzPOcSN5eT8j51mZhHkhJi6Web1qqf7DEau_DOdQ0rrRaO4qWzA",
    "developerId": "AI+Software+Partner",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/Hv7nPSilW77XLxn7R1xRhB27r01en73b2cW3iU2aMzXARMhopLNzGLEuT2xz3mHoxhS-tdHgjgAYW6WqYjgQ9Q",
    "scoreText": "4,7",
    "developer": "AI Software Partner",
    "updated": "20 thg 10, 2026",
    "updatedTimestamp": 1792507922000
  },
  {
    "title": "Drama Mini - Shorts Movie",
    "link": "https://play.google.com/store/apps/details?id=com.dramashort.reel.film.series&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/FPOb7m9Q1V3CK-vd-WddjiAUsA-aDF9kSf2Kl9QIVJfUSueAOLIIGnXB-8mgbgPo4HCV1hfvCZW9A16Gaz29",
    "developerId": "AI+Software+Partner",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/PEtH5KBw0VQLHkncJqC-OGJUIe2kEJe0JlprIEXUiU_5oFSdQ6QSZITpe7BH2Clcft5ZzjQEKPzPlz-SFCt8",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "3 thg 10, 2026",
    "updatedTimestamp": 1791006681000
  },
  {
    "title": "Quick Drama - Short Movie",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.quickdrama.shortmovieseries&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/3pUXqmPauDuoKEkj-n1Jeyu8DsqKmmRtPl_wlqUIkSvfKBP7selxFvqpGKbFQFuyGPZjftlGrHtXpNFryOKS",
    "developerId": "AI+Software+Entertainment",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/cOOBBei1GrDmGLwzDvWSCGdFYxqxz8iY1XmdFKglSfYRvwESbqq1M3KWage62pGYUORuOgtRE9mbf3Ysh3JN8A",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "1 thg 10, 2026",
    "updatedTimestamp": 1790839233000
  },
  {
    "title": "Emotes Viewer Skin",
    "link": "https://play.google.com/store/apps/details?id=com.ndp.emotes&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/4jCq3S-Y_Nz0Q6oXJWeeVVziBI51TasIguxMrNT6Et5LJ0hzwq521OnXQ1WISJMD7jL28JAVdQCRRgv-ZfWJtg",
    "developerId": "AI+Software+Partner",
    "installs": 10000,
    "headerImage": "https://play-lh.googleusercontent.com/BMJznzuc5nNn_dmhCYOOarR5SNyOayuxQWWi2OK-IRLWpvzV1zb3YwL6jI0AaWdgTebfnMOvgOJI1815w046pw",
    "scoreText": "3,8",
    "developer": "AI Software Partner",
    "updated": "14 thg 9, 2026",
    "updatedTimestamp": 1789386734000
  },
  {
    "title": "Smart IPTV Player: M3U & Cast",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptv&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/kk3X3a_gjF_XcW2he687aLp1nezv2kGk6AA9Wt_lX9n3j5kYFAxhFLyUEET_9G4PNBOcdYotJNx63Imrkij5ioE",
    "developerId": "AI+Software+Entertainment",
    "installs": 5000,
    "headerImage": "https://play-lh.googleusercontent.com/nHQ6cMV4ZFRNwTsSdgMTzLLyPyAkQypte4qZLT1CdhtgYKQroXrkgFoSFzzWNYrPIKtSZJoW1x79KtqDQfmmGw",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "28 thg 10, 2026",
    "updatedTimestamp": 1793186657000
  },
  {
    "title": "Reel Stories - Short Drama",
    "link": "https://play.google.com/store/apps/details?id=com.shortdrama.reelmini.film.series&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/6P8qoc4u_kCp13gA_3VziI-0BV-K2W5jUlRT7Rm3FdF9A_TWaDLkjkKOpa_oZejItCo75grZ3Ym2VaXUfsyff74",
    "developerId": "AI+Software+Entertainment",
    "installs": 5000,
    "headerImage": "https://play-lh.googleusercontent.com/35KnKK9g2Vhwl5VwQCGGF5HFIN9HPJkw895hJafwqbvl42oXJEMlntZ15qPgIeSv1M_clFn_SbniqNJPJNSIew",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "28 thg 10, 2026",
    "updatedTimestamp": 1793153822000
  },
  {
    "title": "Snap Video",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftware.snapvideo&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/x6uZXJNKANlzsQDLawt4dZ-rP6oZdaDnjEF30dIcTWnHVduYsOEqzc1NLf9vzRIftX5HAmpIAnHIEndAUzsNVw",
    "developerId": "AI+Software+Partner",
    "installs": 5000,
    "headerImage": "https://play-lh.googleusercontent.com/AZgKsXC7K6_5JVI3DPkL1qxLsXNQ8dNt5HNpup1u_L4rUG6Mb4-v-4UrnElgnmR4h7oRduD_okuHemJMa-Xjzw",
    "scoreText": "4,9",
    "developer": "AI Software Partner",
    "updated": "21 thg 8, 2026",
    "updatedTimestamp": 1787255281000
  },
  {
    "title": "Snap Video Downloader",
    "link": "https://play.google.com/store/apps/details?id=all.videodownloader.hd&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/XNK2UjKFcbVfhUKXg22uFGwwMmMRuxcWhnxnBhQIjGBzhMPVcYNDIppbxbqk8RUBXcJlqW_E5NDDCJ4jua3jGQ",
    "developerId": "AI+Software+Partner",
    "installs": 1000,
    "headerImage": "https://play-lh.googleusercontent.com/qL4C-CwmkBtk9XP8S6cvNDQJvXMtOirca__dUNLsD2CiRR2Q6NwMsjkpflnj-7eLq2cljMenowZgoqjjTkKWUQ",
    "scoreText": "4,8",
    "developer": "AI Software Partner",
    "updated": "29 thg 7, 2026",
    "updatedTimestamp": 1785307058000
  },
  {
    "title": "IPTV Max: M3U Player & Cast",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptvmax&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/LSw1N87rfsU2rOI_QQkjCouTsB3PQ-KC7KJMTSrhmRcsI1hEXoIZXDj-K4si63VGEK9u9zsHPGTUqa4QqPMnsA",
    "developerId": "Inception+-+AI+Software",
    "installs": 500,
    "headerImage": "https://play-lh.googleusercontent.com/shRHDnXvW9ljQj5J1IHkG1AER4c-Tlp9aO9xpRlAI8zMh9cRDuswRnoWF9ndwjfq5pomql9dshZRBM8FrCPyDA",
    "scoreText": "",
    "developer": "Inception - AI Software",
    "updated": "30 thg 10, 2026",
    "updatedTimestamp": 1793336024000
  },
  {
    "title": "Video Download No Watermark",
    "link": "https://play.google.com/store/apps/details?id=com.snapvideo.saver.download.nowatermark&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/yxxIZ5iOmdscSd0JPr_FqnyMWt6HlPWKkGfoEURmzKlOFUANvs5Q9gR1bG-K83YBLoD2Sy6QhhXnumt4XLhA7A",
    "developerId": "AI+Software+Entertainment",
    "installs": 500,
    "headerImage": "https://play-lh.googleusercontent.com/T0zSTIHRxUiY7KmR8uwv1laB-7pZQx75M3EbjpzhhUVd8PiZjhs7d4gV4fRS6LWg9KjCgLJvIh96c89rkcxx",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "9 thg 9, 2026",
    "updatedTimestamp": 1788973022000
  },
  {
    "title": "Emotes Viewer Skin Tools",
    "link": "https://play.google.com/store/apps/details?id=com.emotes.viewer.skintools&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/H-aaSJn86pEC8rSzSyLS7q13zmwtHH_PEj0bRkkHdvXFh7Tw8h5Rdc0IlZYqUgGhZdVrX_T0jFK9r7wrR3m8",
    "developerId": "AI+Software+Partner",
    "installs": 100,
    "headerImage": "https://play-lh.googleusercontent.com/Kv-YYsaSLDHqQ46fWc_H4_z7BkpzAvceWfqUS11O2VHU0JcO5yiWwknDCHWoTv-W4MmnsfZJipUmbs1_8qosdA",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "7 thg 7, 2026",
    "updatedTimestamp": 1783409624000
  },
  {
    "title": "Idols Call Prank: Fake Call",
    "link": "https://play.google.com/store/apps/details?id=com.callprank.idol&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/62373ptmbvmXZzy6WrVLZJsYF_1f7y9pqb-973WfQG4a6xcklK6cEftjCx5124AOvcDaOCZcFH1CSwdBs9MnyQ",
    "developerId": "AI+Software+Partner",
    "installs": 100,
    "headerImage": "https://play-lh.googleusercontent.com/tkD-qtngw_g6Yvv99YOlm8ikBI_bx9ExJ4eJeibHQsB62BXpfaT0sIMalhr-8OFYzGbWOwcEsiZWQg35893_Bw",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "14 thg 6, 2026",
    "updatedTimestamp": 1781448053000
  },
  {
    "title": "AI Image Generator",
    "link": "https://play.google.com/store/apps/details?id=com.imagegenerate.ai&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/5AKtJtYFGWYFUCowChigqJeeX7jHBGoIUCuTvedvOFofNW7erWSQF1RmAsAk4vyzKNUFKSQFgzTmuLVCPqYJgA",
    "developerId": "AI+Software+Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/xy27kAycDhy2FABXKj23ZjrICpHTPFdHf0jwcWjc-xSu2lqrdRhQEsAwWyXVZIOZqsE_1fSRSqJpKGSx70Fngw",
    "scoreText": "5,0",
    "developer": "AI Software Partner",
    "updated": "21 thg 10, 2026",
    "updatedTimestamp": 1792516270000
  },
  {
    "title": "AI Home Decor: Interior Design",
    "link": "https://play.google.com/store/apps/details?id=com.aihome.decor&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/MqEP9AUPN5KnKhrjMEecf2UsP9s9KSaGvw_LlUKgE88U0E0OkBJrrSPC5VU79Zj7I29RvdYaxXaJmPGRt06E8w",
    "developerId": "AI+Software+Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/BTjwCez7hPLEV7P_-yRhp-VXmkQR3Yw2mb2Y6n7c9rNgjqu4jWB7GlmVhfU-gtFOkLq4546eQd2klCGSdK7vkg",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "8 thg 8, 2026",
    "updatedTimestamp": 1786176359000
  },
  {
    "title": "TV Remote - Smart Universal",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftware.smarttvremote&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/FtnkMnEC6bF6Wrq9f5GiWixbgf8SXpC-RAnLrH131XoT6vZatrUs5kSPVHtDfDstL7CKlFR0mt5GvRNY-xTz",
    "developerId": "AI+Software+Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/_ldxknpA97P-lFS2s_La5tMBWOCNvnUhRfTYzuR1KbOA_beJhKvDtXnFU_qeUgP5uri2zTH3Ybb-pyf3g13U",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "21 thg 7, 2026",
    "updatedTimestamp": 1784607871000
  },
  {
    "title": "Hyper Browse - Private Web",
    "link": "https://play.google.com/store/apps/details?id=com.hyper.browse&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/baCedH3laQy6ec5G9nJKFTRsF-HL77HHTOvSPDeZidkMQfNg9ykuFYbgmsiFs04ErKAsWI6a17kapdm-Ze9PaQ",
    "developerId": "AI+Software+Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/ZCVtj0qMaMNyCzpqN8u8o0KROFLMJoHte4AYXsjN0EUPJGEkd-B2HCXeUt7aGPGGUq7jZySE4_IqOZnEIewcyVo",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "11 thg 6, 2026",
    "updatedTimestamp": 1781167820000
  },
  {
    "title": "Soha Express",
    "link": "https://play.google.com/store/apps/details?id=com.vn.soha.express&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/CjHaj4L-xgP5Li-RLPXs7JpfwmmUDaLc1vaU4qhvQ2FZH2LFbh7i8r23jGT4D__UVC5HSVRT-Jvvg4-d0Bv7LA",
    "developerId": "AI+Software+Partner",
    "installs": 50,
    "headerImage": "https://play-lh.googleusercontent.com/XE7C2-FpV0EDm7vXRHtn2q2ePqWOErMHxk1KjmjG_7zKwMhi9x2SRQW_ELbjfOZaxJhGPzVqeiY5DnSyBF8OuQ",
    "scoreText": "",
    "developer": "AI Software Partner",
    "updated": "26 thg 2, 2026",
    "updatedTimestamp": 1772080282000
  },
  {
    "title": "PDF Scanner - Scan Documents",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.pdf_scanner&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/AIG2zJn0BAIwQ3zcqtAhDHBzXD_yv_ECxdEqaLnKnb0PhxJd6JCKBPNcON8Hf4XDPsApEbOy0mnXtzgl1pHQvQ",
    "developerId": "AI+Software+Entertainment",
    "installs": 10,
    "headerImage": "https://play-lh.googleusercontent.com/hAFwoG7tXurPCItOcWWH6RSHD-x7e81PNuzaZqpbPnIghNmywLyCGLdpPiK08J0zqAP8GpUi2WVmukPVceLzBw",
    "scoreText": "",
    "developer": "AI Software Entertainment",
    "updated": "22 thg 10, 2026",
    "updatedTimestamp": 1792602265000
  },
  {
    "title": "ASPIRE",
    "link": "https://play.google.com/store/apps/details?id=com.elp.student&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/2t0b22w7du9S4JH2Tjo7WNu_KEH94KIbQDmqmGk7b9jjB0UatDbY9WWp3--JWzlADEGlbESxOcufLCTydG1Rzw",
    "developerId": "GoPlay+Tech",
    "installs": 10,
    "headerImage": "https://play-lh.googleusercontent.com/j3u7C-PzkFL3D8rlSuO48FT-nH9AI5uMkBgVfUTFpO6visFXz7DNzS8EB-I5SGcWHljRtkmYzLlVXdZP_k9poQ",
    "scoreText": "",
    "developer": "GoPlay Tech",
    "updated": "29 thg 6, 2026",
    "updatedTimestamp": 1782726640000
  },
  {
    "title": "Caller ID: Spam Call Blocker",
    "link": "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.callerid&hl=vi&gl=vn",
    "icon": "https://play-lh.googleusercontent.com/s0ERe9ZWy0RTXZb15jdBNIeOMTUsyNi3l1jq-f0WZoWW7aBNc065_aQo8IdDIOiHCSOlV_-3AMUBKwHvGjSXPA",
    "developerId": "AI+SOFTWARE+STUDIO",
    "installs": 0,
    "headerImage": "https://play-lh.googleusercontent.com/zbkZWsJu6JBgGQm_c36XMsfwsKot4gaBiVCHJopLF4a2lw53zSaxpoQxIYRWOBxkTwXQ1czBxokKGiV7J1ev",
    "scoreText": "",
    "developer": "AI SOFTWARE STUDIO",
    "updated": "4 thg 11, 2026",
    "updatedTimestamp": 1793762139000
  }
];

export const DEVELOPERS = [
  'Snap Video - Video Downloader',
  'AI+Software+Partner',
  'Inception+-+AI+Software',
  'GoPlay+Tech',
  'AI+Software+Entertainment',
  'AI+SOFTWARE+STUDIO'
];

export async function fetchDeveloperApps(devIdEncoded: string): Promise<AppData[]> {
  try {
    const url = "https://play.google.com/store/apps/developer?id=" + devIdEncoded + "&hl=vi";
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      console.warn("Failed to fetch " + url + ": " + response.status + ", falling back to static snapshot");
      return FALLBACK_REAL_APPS.filter(a => a.developerId === devIdEncoded);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const basicApps: { title: string, link: string, icon: string, id: string }[] = [];
    const seenLinks = new Set<string>();

    $('a[href^="/store/apps/details"]').each((_, el) => {
      const link = $(el).attr('href');
      if (!link || seenLinks.has(link)) return;
      
      const parent = $(el).parent();
      const textNodes = parent.find('span').map((_, node) => $(node).text().trim()).get();
      const validTexts = textNodes.filter(t => t.length > 0 && !t.includes('★') && t !== 'star');
      
      let title = validTexts[0] || 'Unknown App';
      const imgs = parent.find('img').map((_, img) => $(img).attr('src') || $(img).attr('srcset')).get();
      
      let icon = '';
      if (imgs.length > 1) {
         icon = imgs.find(src => src && src.includes('=s')) || imgs[imgs.length - 1];
      } else if (imgs.length === 1) {
         icon = imgs[0];
      }
      
      if (icon) {
         icon = icon.split(' ')[0];
         if (icon.startsWith('//')) icon = 'https:' + icon;
      } else {
         icon = 'https://via.placeholder.com/150';
      }

      if (title && icon) {
        seenLinks.add(link);
        const appIdMatch = link.match(/id=([^&]+)/);
        const appId = appIdMatch ? appIdMatch[1] : '';
        if (appId) {
          basicApps.push({
            title,
            link: "https://play.google.com" + link,
            icon,
            id: appId
          });
        }
      }
    });

    if (basicApps.length === 0) {
      return FALLBACK_REAL_APPS.filter(a => a.developerId === devIdEncoded);
    }

    const appsWithInstalls: AppData[] = await Promise.all(
      basicApps.map(async (app) => {
        let installs = 0;
        let headerImage = '';
        let scoreText = '';
        let developer = '';
        let updated = '';
        let updatedTimestamp = 0;
        try {
          const details = await gplay.app({ appId: app.id, lang: 'vi', country: 'vn' });
          installs = details.minInstalls || 0;
          headerImage = details.headerImage || '';
          scoreText = details.scoreText || '';
          developer = details.developer || '';
          
          if (details.updated) {
             const d = new Date(details.updated);
             updatedTimestamp = d.getTime();
             updated = d.toLocaleDateString('vi-VN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
             });
          }
        } catch (e) {
          const fallback = FALLBACK_REAL_APPS.find(f => f.link.includes(app.id));
          if (fallback) {
            return fallback;
          }
        }
        return {
          title: app.title,
          link: app.link,
          icon: app.icon,
          developerId: devIdEncoded,
          installs,
          headerImage,
          scoreText,
          developer,
          updated,
          updatedTimestamp
        };
      })
    );

    return appsWithInstalls.sort((a, b) => b.installs - a.installs);

  } catch (error) {
    console.error("Error fetching apps for", devIdEncoded, error);
    return FALLBACK_REAL_APPS.filter(a => a.developerId === devIdEncoded);
  }
}

export async function getAllStudioApps(): Promise<AppData[]> {
  try {
    const allAppsPromises = DEVELOPERS.map(dev => fetchDeveloperApps(dev));
    const allAppsResults = await Promise.all(allAppsPromises);
    const flattened = allAppsResults.flat();

    const map = new Map<string, AppData>();
    
    // Seed with all fallback apps first
    FALLBACK_REAL_APPS.forEach(app => {
      const match = app.link.match(/id=([^&]+)/);
      const pkg = match ? match[1] : app.link;
      map.set(pkg, app);
    });

    // Overlay any live fetched apps
    flattened.forEach(app => {
      const match = app.link.match(/id=([^&]+)/);
      const pkg = match ? match[1] : app.link;
      map.set(pkg, app);
    });

    const combined = Array.from(map.values());
    combined.sort((a, b) => {
      if (b.installs !== a.installs) {
        return b.installs - a.installs;
      }
      return (b.updatedTimestamp || 0) - (a.updatedTimestamp || 0);
    });

    return combined;
  } catch (e) {
    console.error('Error in getAllStudioApps:', e);
    return FALLBACK_REAL_APPS;
  }
}
