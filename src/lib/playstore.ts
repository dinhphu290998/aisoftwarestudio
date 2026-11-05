export interface AppData {
  title: string;
  link: string;
  developerId: string;
  developer: string;
  installs: number;
  scoreText: string;
  category: "streaming" | "video" | "drama" | "utilities" | "ai";
  categoryLabel: string;
  tagline: string;
  features: string[];
  iconKey: "tv" | "download" | "drama" | "caller" | "pdf" | "cleaner" | "ai" | "image" | "cinema" | "reel";
  gradient: string;
  icon?: string;
  headerImage?: string;
}

export const STUDIO_APPS: AppData[] = [
  {
    title: "IPTV Stream Player - Live M3U TV",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptv",
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 1500000,
    scoreText: "4.8",
    category: "streaming",
    categoryLabel: "Streaming & IPTV",
    tagline: "High-performance M3U & Xtream player with hardware AV1/HEVC 4K decoding.",
    features: ["4K HDR & AV1 Playback", "Xtream Codes API", "Multi-Screen EPG", "Dolby Atmos Audio"],
    iconKey: "tv",
    gradient: "from-blue-600 via-indigo-600 to-blue-500"
  },
  {
    title: "Snap Video Downloader - HD Saver",
    link: "https://play.google.com/store/apps/details?id=com.snapvideo.saver.download.nowatermark",
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 5200000,
    scoreText: "4.9",
    category: "video",
    categoryLabel: "Media & Video",
    tagline: "One-tap video downloader supporting HD, 2K & 4K resolutions with multi-threaded speed.",
    features: ["No Watermark", "Background Batch Downloads", "Built-in 4K Player", "Private Vault"],
    iconKey: "download",
    gradient: "from-emerald-600 via-teal-600 to-emerald-500"
  },
  {
    title: "QuickDrama - Short Movie Series",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.quickdrama.shortmovieseries",
    developerId: "AI+Software+Entertainment",
    developer: "AI Software Entertainment",
    installs: 2400000,
    scoreText: "4.7",
    category: "drama",
    categoryLabel: "Short Drama Reels",
    tagline: "Exclusive high-definition 1-minute episodic mini-series with daily fresh releases.",
    features: ["Binge-worthy 1-Min Reels", "Daily Fresh Episodes", "Multi-Audio Tracks", "Offline Viewing"],
    iconKey: "drama",
    gradient: "from-pink-600 via-rose-600 to-pink-500"
  },
  {
    title: "Caller ID & Spam Call Shield",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.callerid",
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 3100000,
    scoreText: "4.7",
    category: "utilities",
    categoryLabel: "Security & Phone",
    tagline: "Advanced AI-powered caller identification with proactive robocall and spam screening.",
    features: ["Real-time Caller ID", "Spam Auto-Reject", "Offline Database", "Smart Dial Pad"],
    iconKey: "caller",
    gradient: "from-green-600 via-emerald-600 to-teal-500"
  },
  {
    title: "PDF Scanner & Document Expert",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.pdf_scanner",
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 1900000,
    scoreText: "4.8",
    category: "utilities",
    categoryLabel: "Productivity & OCR",
    tagline: "Convert physical documents to pristine searchable PDFs with automatic edge-detection.",
    features: ["Multilingual OCR", "E-Signature Ready", "Cloud Drive Sync", "Batch Scanning"],
    iconKey: "pdf",
    gradient: "from-orange-600 via-amber-600 to-yellow-500"
  },
  {
    title: "Phone Cleaner & RAM Booster",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.cleaner",
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 4000000,
    scoreText: "4.6",
    category: "utilities",
    categoryLabel: "Device Optimizer",
    tagline: "Free up storage space, clear residual app caches, and optimize device battery lifespan.",
    features: ["Deep Cache Cleaning", "Duplicate Photo Purge", "Battery Health Monitor", "CPU Cool Down"],
    iconKey: "cleaner",
    gradient: "from-indigo-600 via-purple-600 to-violet-500"
  },
  {
    title: "ChatAI - Generative Assistant",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.chatai",
    developerId: "Inception+-+AI+Software",
    developer: "Inception - AI Software",
    installs: 850000,
    scoreText: "4.8",
    category: "ai",
    categoryLabel: "Generative AI",
    tagline: "Your 24/7 personal intelligence partner for creative writing, code generation, and math.",
    features: ["Multi-Model Engine", "Voice Interaction", "Code Analysis", "Creative Writing"],
    iconKey: "ai",
    gradient: "from-purple-600 via-fuchsia-600 to-pink-500"
  },
  {
    title: "AI Image Generator & Art Studio",
    link: "https://play.google.com/store/apps/details?id=com.imagegenerate.ai",
    developerId: "AI+Software+Partner",
    developer: "AI Software Partner",
    installs: 620000,
    scoreText: "4.9",
    category: "ai",
    categoryLabel: "Creative AI Art",
    tagline: "Transform text descriptions into breathtaking 8K digital art, anime, and portraits.",
    features: ["8K Ultra Resolution", "50+ Art Styles", "Face Restoration", "Commercial License"],
    iconKey: "image",
    gradient: "from-fuchsia-600 via-pink-600 to-rose-500"
  },
  {
    title: "IPTV Max Player - Home Cinema",
    link: "https://play.google.com/store/apps/details?id=com.aisoftwarestudio.iptvmax",
    developerId: "AI+SOFTWARE+STUDIO",
    developer: "AI Software Studio",
    installs: 920000,
    scoreText: "4.8",
    category: "streaming",
    categoryLabel: "Smart TV Edition",
    tagline: "Specially tailored for Android TV, Fire TV, and set-top boxes with remote-control navigation.",
    features: ["Leanback TV Remote UI", "Parental Controls", "Subtitles Passthrough", "Favorites Manager"],
    iconKey: "cinema",
    gradient: "from-cyan-600 via-blue-600 to-indigo-500"
  },
  {
    title: "Reel Mini Short Drama Series",
    link: "https://play.google.com/store/apps/details?id=com.dramashort.reel.film.series",
    developerId: "AI+Software+Entertainment",
    developer: "AI Software Entertainment",
    installs: 1800000,
    scoreText: "4.7",
    category: "drama",
    categoryLabel: "Vertical Reel Cinema",
    tagline: "Hundreds of viral bite-sized drama serials designed specifically for vertical mobile viewing.",
    features: ["Vertical Cinema Mode", "Custom Watchlists", "Offline Cache", "HD Audio Mastering"],
    iconKey: "reel",
    gradient: "from-rose-600 via-red-600 to-amber-500"
  }
];

export async function fetchDeveloperApps(devIdEncoded: string): Promise<AppData[]> {
  // Always return STUDIO_APPS for instantaneous sub-10ms response without network failure risk
  return STUDIO_APPS.filter(app => app.developerId === devIdEncoded);
}
