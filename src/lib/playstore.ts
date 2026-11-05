import * as cheerio from "cheerio";

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
  category?: string;
  tagline?: string;
  features?: string[];
}

function makeSvgIcon(title: string, color1: string, color2: string, emoji: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <rect width="128" height="128" rx="28" fill="url(#g)"/>
    <text x="64" y="74" font-size="52" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function makeSvgBanner(title: string, subtitle: string, color1: string, color2: string, badge: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
      <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bg)"/>
    <circle cx="700" cy="80" r="240" fill="url(#glow)"/>
    <circle cx="100" cy="380" r="180" fill="url(#glow)"/>
    
    <!-- Top Badge -->
    <rect x="48" y="44" width="160" height="34" rx="17" fill="rgba(255,255,255,0.15)"/>
    <text x="128" y="66" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">${badge}</text>
    
    <!-- Main Title -->
    <text x="48" y="240" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-1">${title}</text>
    <text x="48" y="295" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="22" font-weight="500" fill="rgba(255,255,255,0.85)">${subtitle}</text>
    
    <!-- Bottom Bar -->
    <text x="48" y="400" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-size="15" font-weight="600" fill="rgba(255,255,255,0.6)">AI Software Studio • Official Production App</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const STUDIO_APPS: AppData[] = [
  {
    title: "IPTV Stream Player - Live M3U TV",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptv",
    icon: makeSvgIcon("IPTV", "#1e3a8a", "#3b82f6", "📺"),
    headerImage: makeSvgBanner("IPTV Stream Player", "Ultra 4K Live Broadcast & M3U Channels", "#0f172a", "#1e3a8a", "★ 4.8 RATED"),
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 1500000,
    scoreText: "4.8",
    category: "streaming",
    tagline: "High-performance M3U & Xtream player with hardware AV1/HEVC 4K decoding.",
    updated: "Nov 2026",
    updatedTimestamp: 1793800000000,
    features: ["4K HDR & AV1 Playback", "Xtream Codes API", "Multi-Screen EPG", "Dolby Atmos Audio"]
  },
  {
    title: "Snap Video Downloader - HD Saver",
    link: "https://play.google.com/store/apps/details?id=com.snapvideo.saver.download.nowatermark",
    icon: makeSvgIcon("SnapVideo", "#064e3b", "#10b981", "⚡"),
    headerImage: makeSvgBanner("Snap Video Downloader", "Ultra Fast HD Video Saver • Zero Watermark", "#022c22", "#065f46", "5M+ DOWNLOADS"),
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 5200000,
    scoreText: "4.9",
    category: "video",
    tagline: "One-tap video downloader supporting HD, 2K & 4K resolutions with multi-threaded acceleration.",
    updated: "Nov 2026",
    updatedTimestamp: 1793850000000,
    features: ["No Watermark", "Background Batch Downloads", "Built-in 4K Player", "Private Vault"]
  },
  {
    title: "QuickDrama - Short Movie Series",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.quickdrama.shortmovieseries",
    icon: makeSvgIcon("QuickDrama", "#831843", "#ec4899", "🎬"),
    headerImage: makeSvgBanner("QuickDrama Series", "Trending Short Dramas & Mini Stories", "#500724", "#9d174d", "TRENDING #1"),
    developerId: "AI+Software+Entertainment",
    developer: "AI Software Entertainment",
    installs: 2400000,
    scoreText: "4.7",
    category: "drama",
    tagline: "Exclusive high-definition 1-minute episodic mini-series with daily releases and multi-language subs.",
    updated: "Nov 2026",
    updatedTimestamp: 1793750000000,
    features: ["Binge-worthy 1-Min Reels", "Daily Fresh Episodes", "Multi-Audio Tracks", "Offline Viewing"]
  },
  {
    title: "Caller ID & Spam Call Shield",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.callerid",
    icon: makeSvgIcon("CallerID", "#14532d", "#22c55e", "📞"),
    headerImage: makeSvgBanner("Caller ID & Shield", "Real-time Reverse Lookup & Spam Blocker", "#052e16", "#15803d", "3M+ USERS"),
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 3100000,
    scoreText: "4.7",
    category: "utilities",
    tagline: "Advanced AI-powered caller identification with proactive robocall and spam screening.",
    updated: "Nov 2026",
    updatedTimestamp: 1793600000000,
    features: ["Real-time Caller ID", "Spam Auto-Reject", "Offline Database", "Smart Dial Pad"]
  },
  {
    title: "PDF Scanner & Document Expert",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.pdf_scanner",
    icon: makeSvgIcon("PDFScanner", "#7c2d12", "#f97316", "📄"),
    headerImage: makeSvgBanner("PDF Scanner Expert", "AI Smart OCR & High-Res Document Scanner", "#431407", "#9a3412", "PRODUCTIVITY"),
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 1900000,
    scoreText: "4.8",
    category: "utilities",
    tagline: "Convert physical documents to pristine searchable PDFs with automatic edge-detection and OCR.",
    updated: "Oct 2026",
    updatedTimestamp: 1793500000000,
    features: ["Multilingual OCR", "E-Signature Ready", "Cloud Drive Sync", "Batch Scanning"]
  },
  {
    title: "Phone Cleaner & RAM Booster",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.cleaner",
    icon: makeSvgIcon("Cleaner", "#1e1b4b", "#6366f1", "🧹"),
    headerImage: makeSvgBanner("Smart Phone Cleaner", "Deep Junk Cache Cleaner & Battery Optimizer", "#0f0e2a", "#3730a3", "4M+ DOWNLOADS"),
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 4000000,
    scoreText: "4.6",
    category: "utilities",
    tagline: "Free up gigabytes of storage, clear residual app caches, and optimize device battery lifespan.",
    updated: "Nov 2026",
    updatedTimestamp: 1793700000000,
    features: ["Deep Cache Cleaning", "Duplicate Photo Purge", "Battery Health Monitor", "CPU Cool Down"]
  },
  {
    title: "ChatAI - Generative Assistant",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.chatai",
    icon: makeSvgIcon("ChatAI", "#581c87", "#a855f7", "🤖"),
    headerImage: makeSvgBanner("ChatAI Pro Assistant", "Next-Gen Generative Intelligence & Coding", "#3b0764", "#7e22ce", "AI TOP PICK"),
    developerId: "Inception+-+AI+Software",
    developer: "Inception - AI Software",
    installs: 850000,
    scoreText: "4.8",
    category: "ai",
    tagline: "Your 24/7 personal intelligence partner for writing, coding, math solutions, and translation.",
    updated: "Nov 2026",
    updatedTimestamp: 1793820000000,
    features: ["Multi-Model Engine", "Voice Interaction", "Code Analysis", "Creative Writing"]
  },
  {
    title: "AI Image Generator & Art Studio",
    link: "https://play.google.com/store/apps/details?id=com.imagegenerate.ai",
    icon: makeSvgIcon("AIArt", "#701a75", "#d946ef", "🎨"),
    headerImage: makeSvgBanner("AI Art Studio 8K", "Prompt-to-Image Generation & Anime Styles", "#4a044e", "#a21caf", "CREATIVE CHOICE"),
    developerId: "AI+Software+Partner",
    developer: "AI Software Partner",
    installs: 620000,
    scoreText: "4.9",
    category: "ai",
    tagline: "Transform text descriptions into breathtaking 8K digital art, logos, and hyper-realistic portraits.",
    updated: "Oct 2026",
    updatedTimestamp: 1793400000000,
    features: ["8K Ultra Resolution", "50+ Art Styles", "Face Restoration", "Commercial License"]
  },
  {
    title: "IPTV Max Player - Home Cinema",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptvmax",
    icon: makeSvgIcon("IPTVMax", "#0f172a", "#38bdf8", "📺"),
    headerImage: makeSvgBanner("IPTV Max Cinema", "Smart TV Box Edition • Dolby Surround Sound", "#020617", "#0369a1", "TV BOX READY"),
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 920000,
    scoreText: "4.8",
    category: "streaming",
    tagline: "Specially tailored for Android TV, Fire TV, and set-top boxes with remote-control navigation.",
    updated: "Nov 2026",
    updatedTimestamp: 1793780000000,
    features: ["Leanback TV Remote UI", "Parental Controls", "Subtitles Passthrough", "Favorites Manager"]
  },
  {
    title: "Reel Mini Short Drama Series",
    link: "https://play.google.com/store/apps/details?id=com.dramashort.reel.film.series",
    icon: makeSvgIcon("ReelMini", "#4c0519", "#f43f5e", "🍿"),
    headerImage: makeSvgBanner("Reel Mini Dramas", "Fast-Paced Mini Thrillers & Love Stories", "#380312", "#be123c", "NEW EPISODES"),
    developerId: "AI+Software+Entertainment",
    developer: "AI Software Entertainment",
    installs: 1800000,
    scoreText: "4.7",
    category: "drama",
    tagline: "Hundreds of viral bite-sized drama serials designed specifically for vertical mobile viewing.",
    updated: "Nov 2026",
    updatedTimestamp: 1793740000000,
    features: ["Vertical Cinema Mode", "Custom Watchlists", "Offline Cache", "HD Audio Mastering"]
  }
];

export async function fetchDeveloperApps(devIdEncoded: string): Promise<AppData[]> {
  // Try live fetch with quick 2s timeout so the site never hangs
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const url = `https://play.google.com/store/apps/developer?id=${devIdEncoded}&hl=vi`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      signal: controller.signal,
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    
    clearTimeout(timeoutId);

    if (!response.ok) {
      return [];
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const basicApps: AppData[] = [];
    const seenLinks = new Set<string>();

    $('a[href^="/store/apps/details"]').each((_, el) => {
      const link = $(el).attr("href");
      if (!link || seenLinks.has(link)) return;
      
      const parent = $(el).parent();
      const textNodes = parent.find("span").map((_, node) => $(node).text().trim()).get();
      const validTexts = textNodes.filter(t => t.length > 0 && !t.includes("★") && t !== "star");
      
      const title = validTexts[0];
      const imgs = parent.find("img").map((_, img) => $(img).attr("src") || $(img).attr("srcset")).get();
      
      let icon = "";
      if (imgs.length > 1) {
         icon = imgs.find(src => src && src.includes("=s")) || imgs[imgs.length - 1];
      } else if (imgs.length === 1) {
         icon = imgs[0];
      }
      
      if (icon) {
         icon = icon.split(" ")[0];
         if (icon.startsWith("//")) icon = "https:" + icon;
      }

      if (title && icon) {
        seenLinks.add(link);
        basicApps.push({
          title,
          link: `https://play.google.com${link}`,
          icon,
          developerId: devIdEncoded,
          installs: 100000,
          scoreText: "4.8",
          developer: "AI Software Studio"
        });
      }
    });

    return basicApps;
  } catch {
    // Return empty so caller falls back seamlessly to high-speed STUDIO_APPS
    return [];
  }
}
