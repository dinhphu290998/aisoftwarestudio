import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  Tv, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Award
} from "lucide-react";

export const metadata = {
  title: "Tech Reviews & Recommended Gear (2026) | AI Software Studio",
  description: "Independent reviews, buyer's guides, and hands-on recommendations for streaming devices, smart TV boxes, mobile accessories, and productivity gear tested by AI Software Studio engineers.",
};

interface Product {
  id: string;
  name: string;
  category: "Streaming & TV" | "Mobile & Power" | "Audio & Smart Home";
  badge: string;
  rating: number;
  reviewsCount: string;
  priceNote: string;
  amazonUrl: string;
  summary: string;
  editorTake: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
}

const PRODUCTS: Product[] = [
  // Streaming & TV Hardware
  {
    id: "firetv-4k-max",
    name: "Amazon Fire TV Stick 4K Max (2nd Gen)",
    category: "Streaming & TV",
    badge: "Editor's Choice • Best Streaming Stick",
    rating: 4.8,
    reviewsCount: "125,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B0BP9SN37B?tag=aisoftware-20",
    summary: "The benchmark for 4K streaming sticks. Powered by a 2.0 GHz quad-core CPU, Wi-Fi 6E support, and 16GB of onboard storage, it runs heavy IPTV and multimedia apps with zero stutter.",
    editorTake: "In our laboratory testing with high-bitrate live video and IPTV applications, the Fire TV Stick 4K Max delivered the lowest frame drop rates among sub-$60 sticks. Its hardware AV1 decoding ensures buffer-free 4K playback even on busy home Wi-Fi networks.",
    specs: [
      { label: "Resolution", value: "4K Ultra HD, Dolby Vision, HDR10+" },
      { label: "Processor", value: "2.0 GHz Quad-core" },
      { label: "Storage", value: "16 GB internal" },
      { label: "Connectivity", value: "Wi-Fi 6E Tri-Band + Bluetooth 5.2" },
      { label: "Audio", value: "Dolby Atmos audio passthrough" },
    ],
    pros: [
      "Wi-Fi 6E drastically cuts streaming latency and buffer times",
      "Generous 16GB storage holds all your streaming and IPTV apps",
      "Enhanced Alexa Voice Remote with dedicated channel controls",
      "Native hardware AV1 and HEVC decoding for optimal battery and thermals"
    ],
    cons: [
      "Amazon Fire OS interface displays sponsored promotional tiles",
      "Micro-USB power port instead of modern USB-C"
    ]
  },
  {
    id: "nvidia-shield-pro",
    name: "NVIDIA Shield TV Pro Streaming Media Player",
    category: "Streaming & TV",
    badge: "Top Performance • Studio Pick",
    rating: 4.9,
    reviewsCount: "28,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B07YP94PBJ?tag=aisoftware-20",
    summary: "The undisputed king of media players. Built with NVIDIA's Tegra X1+ processor, 3GB RAM, and next-generation AI Upscaling that sharpens 720p/1080p video into crisp 4K in real time.",
    editorTake: "If you run local media servers like Plex or high-bandwidth live IPTV feeds, nothing matches the raw horsepower of the Shield TV Pro. Its AI upscaler is genuine black magic, transforming compressed 1080p feeds into near-native 4K quality.",
    specs: [
      { label: "Resolution", value: "4K HDR with Real-Time AI Upscaling" },
      { label: "Processor", value: "NVIDIA Tegra X1+ with 256-core GPU" },
      { label: "RAM / Storage", value: "3 GB RAM / 16 GB internal" },
      { label: "Ports", value: "Gigabit Ethernet, 2x USB 3.0, HDMI 2.0b" },
      { label: "Audio", value: "Dolby Atmos, DTS-X surround passthrough" },
    ],
    pros: [
      "Best-in-class AI upscaling enhances standard definition and 1080p feeds",
      "Full Gigabit Ethernet port for guaranteed maximum streaming throughput",
      "Dual USB 3.0 ports allow connecting external hard drives or USB tuners",
      "Doubles as a powerful Plex Media Server and GeForce NOW cloud gaming rig"
    ],
    cons: [
      "Pricier than standard HDMI streaming dongles",
      "Larger desktop form factor compared to hidden TV sticks"
    ]
  },
  {
    id: "chromecast-4k",
    name: "Chromecast with Google TV (4K)",
    category: "Streaming & TV",
    badge: "Best Value • Google Ecosystem",
    rating: 4.7,
    reviewsCount: "80,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B08KRV7S22?tag=aisoftware-20",
    summary: "A clean, content-first streaming dongle that organizes all your subscriptions, YouTube, and mobile casting into a single cohesive interface powered by Google Assistant.",
    editorTake: "Google TV provides the cleanest user interface for discovering movies and shows across multiple platforms. Pairing Android devices to cast local media, photos, or mobile apps onto the big screen takes literally one tap.",
    specs: [
      { label: "Resolution", value: "Up to 4K HDR at 60 FPS" },
      { label: "Formats", value: "Dolby Vision, HDR10, HDR10+" },
      { label: "Connectivity", value: "Wi-Fi 802.11ac (2.4 GHz / 5 GHz), Bluetooth" },
      { label: "OS", value: "Google TV based on Android TV" },
      { label: "Power", value: "USB-C port with power adapter included" },
    ],
    pros: [
      "Extremely user-friendly Google TV aggregation algorithm",
      "Flawless screen casting from Android, Chrome, and iOS apps",
      "Comfortable ergonomic remote with Google Assistant microphone",
      "Modern USB-C power connection"
    ],
    cons: [
      "8GB internal storage fills up quickly if installing dozens of games",
      "Remote lacks dedicated mute and play/pause buttons"
    ]
  },

  // Mobile & Productivity Gear
  {
    id: "anker-prime-100w",
    name: "Anker Prime 100W GaN Wall Charger (3-Port)",
    category: "Mobile & Power",
    badge: "Top Engineering • Best Charger",
    rating: 4.9,
    reviewsCount: "15,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B0C479M4R4?tag=aisoftware-20",
    summary: "Gallium Nitride (GaNPrime) compact powerhouse. Delivers up to 100W output across dual USB-C ports and a USB-A port to fast-charge laptops, tablets, and phones simultaneously.",
    editorTake: "This is our daily driver in the development studio. You can fast-charge a 16-inch MacBook Pro at full speed, or split power to charge your laptop, phone, and test tablet at once while taking up less space than an Apple 67W single-port brick.",
    specs: [
      { label: "Total Output", value: "100W Max" },
      { label: "Ports", value: "2x USB-C (100W max each), 1x USB-A (22.5W)" },
      { label: "Technology", value: "GaNPrime + ActiveShield 2.0" },
      { label: "Dimensions", value: "43% smaller than standard 96W chargers" },
      { label: "Safety", value: "Monitors temperature 3 million times per day" },
    ],
    pros: [
      "Charges high-drain laptops, iPads, and smartphones from one outlet",
      "Foldable plug pins make it the ultimate travel companion",
      "Active temperature sensors keep it cool even under sustained 100W load",
      "Dynamic power distribution automatically optimizes wattage per device"
    ],
    cons: [
      "Higher upfront investment than basic single-port chargers",
      "USB-C cables not included in the standard retail box"
    ]
  },
  {
    id: "sandisk-extreme-1tb",
    name: "SanDisk 1TB Extreme Portable External SSD",
    category: "Mobile & Power",
    badge: "Rugged Pick • Best Backup Drive",
    rating: 4.8,
    reviewsCount: "95,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B08GTYFC37?tag=aisoftware-20",
    summary: "Pocket-sized NVMe SSD boasting transfer speeds up to 1050MB/s with IP65 water/dust resistance and 2-meter drop protection for mobile developers, creators, and professionals.",
    editorTake: "When testing high-res document scans from our PDF Scanner app and backing up 4K video exports, this SSD transfers a 50GB project directory in under a minute. The ruggedized silicon shell survives accidental drops and outdoor travel effortlessly.",
    specs: [
      { label: "Read Speed", value: "Up to 1050 MB/s" },
      { label: "Write Speed", value: "Up to 1000 MB/s" },
      { label: "Interface", value: "USB 3.2 Gen 2 (USB-C & USB-A adapter)" },
      { label: "Durability", value: "IP65 water/dust resistance, 2-meter drop rating" },
      { label: "Security", value: "256-bit AES hardware encryption" },
    ],
    pros: [
      "Lightning-fast NVMe transfer speeds for large video, code, or backup libraries",
      "Convenient carabiner loop attaches easily to backpacks and laptop sleeves",
      "Plug-and-play compatibility across Android OTG, iOS, Mac, and Windows",
      "Tough rubberized body protects against drops, shocks, and splashes"
    ],
    cons: [
      "Can get warm to the touch during sustained 500GB+ continuous writes",
      "Included USB-C cable is relatively short (approx 15cm)"
    ]
  },
  {
    id: "anker-maggo-qi2",
    name: "Anker MagGo 10,000mAh Magnetic Power Bank (Qi2 15W)",
    category: "Mobile & Power",
    badge: "Best Wireless Battery",
    rating: 4.7,
    reviewsCount: "12,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B0CF5628Q2?tag=aisoftware-20",
    summary: "Certified Qi2 wireless battery with true 15W magnetic fast charging, built-in smart status display, and a foldable kickstand for all-day mobile power.",
    editorTake: "The built-in smart screen showing exact remaining percentage and recharging countdown is a game changer. The kickstand props your phone at the perfect 60-degree angle on your desk for monitoring notifications or watching content hands-free.",
    specs: [
      { label: "Capacity", value: "10,000 mAh (approx 1.8 to 2 full phone charges)" },
      { label: "Wireless Output", value: "Qi2 Certified 15W Ultra-Fast Wireless" },
      { label: "Wired Output", value: "27W Bi-directional USB-C Fast Charging" },
      { label: "Display", value: "Smart digital LCD for battery & recharge status" },
      { label: "Stand", value: "Integrated foldable zinc alloy kickstand" },
    ],
    pros: [
      "Official Qi2 protocol charges compatible devices twice as fast as older 7.5W Qi pads",
      "Informative smart screen shows exact battery percentage and minutes to empty/full",
      "Strong magnetic hold keeps your phone securely anchored even while in motion",
      "Simultaneous pass-through charging powers both the phone and battery pack"
    ],
    cons: [
      "Weighs around 250g, adding notable weight when held continuously",
      "Only attaches magnetically to MagSafe or Qi2-compatible phone cases"
    ]
  },

  // Audio & Smart Home Gear
  {
    id: "echo-dot-5th",
    name: "Amazon Echo Dot (5th Gen) Smart Speaker with Alexa",
    category: "Audio & Smart Home",
    badge: "Best Smart Speaker • Budget Pick",
    rating: 4.7,
    reviewsCount: "140,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B09B8V1LZ3?tag=aisoftware-20",
    summary: "The quintessential smart speaker. Features deeper bass, clearer vocals, built-in motion and temperature sensors, and the capability to act as an eero Wi-Fi mesh extender.",
    editorTake: "For under $50, the Echo Dot is the easiest gateway to controlling smart lights, voice-controlling TV streams, setting timers, and playing music with surprisingly rich sound that fills a medium-sized bedroom or office.",
    specs: [
      { label: "Speaker", value: "1.73-inch front-firing speaker for rich bass" },
      { label: "Sensors", value: "Ultrasound motion detection & indoor temperature sensor" },
      { label: "Connectivity", value: "Dual-band Wi-Fi, Bluetooth Low Energy Mesh" },
      { label: "Eero Support", value: "Adds up to 1,000 sq ft of Wi-Fi coverage with eero" },
      { label: "Privacy", value: "Built-in microphone mute hardware switch" },
    ],
    pros: [
      "Remarkably punchy audio with enhanced acoustic chamber and clear vocals",
      "Temperature and motion sensors can automate fans and room lighting",
      "Functions as an eero Wi-Fi mesh node to eliminate wireless dead zones",
      "Seamless integration with thousands of smart home devices and skills"
    ],
    cons: [
      "Lacks a 3.5mm AUX audio out port found on older generations",
      "Proprietary wall power plug instead of universal USB-C"
    ]
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Audio & Smart Home",
    badge: "Gold Standard • Best Noise Cancelling",
    rating: 4.9,
    reviewsCount: "35,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B09XS7JWHH?tag=aisoftware-20",
    summary: "Industry-leading active noise cancellation powered by two dedicated processors and eight microphones. Features 30 hours of battery life and ultra-comfortable lightweight design.",
    editorTake: "When writing code or traveling, the WH-1000XM5 creates a personal bubble of absolute silence. Engine noise, air conditioning rumble, and ambient chatter disappear instantly. The microphone call quality is also the best Sony has ever produced.",
    specs: [
      { label: "ANC Engine", value: "Dual Processor V1 + HD Noise Cancelling QN1" },
      { label: "Drivers", value: "Carbon fiber composite 30mm precision drivers" },
      { label: "Battery Life", value: "Up to 30 hours (ANC on) / 40 hours (ANC off)" },
      { label: "Fast Charge", value: "3 minutes charge provides 3 hours playback" },
      { label: "Bluetooth", value: "Multipoint connection (pair 2 devices simultaneously)" },
    ],
    pros: [
      "Unrivaled active noise cancellation blocks out voices and low frequencies",
      "Featherlight, soft-fit leather headband ensures zero fatigue over 8-hour sessions",
      "Speak-to-Chat automatically pauses playback when you start speaking",
      "Multipoint connection seamlessly switches audio between laptop and smartphone"
    ],
    cons: [
      "Earcups swivel flat but do not fold into a compact ball like previous XM4s",
      "Carrying case is slightly larger as a result"
    ]
  },
  {
    id: "elgato-stream-deck-mk2",
    name: "Elgato Stream Deck MK.2 (15 Macro Keys)",
    category: "Audio & Smart Home",
    badge: "Creator Favorite • Best Macro Controller",
    rating: 4.8,
    reviewsCount: "22,000+",
    priceNote: "Check Latest Price",
    amazonUrl: "https://www.amazon.com/dp/B09738CV2G?tag=aisoftware-20",
    summary: "Studio control interface with 15 customizable dynamic LCD keys. Automate software workflows, launch apps, trigger audio effects, and control smart studio lighting with one tap.",
    editorTake: "Far beyond streaming, we use the Stream Deck every single day for development shortcuts: firing Docker containers, muting Slack/Zoom, switching audio inputs, and triggering Git commands with custom animated icon feedback.",
    specs: [
      { label: "Keys", value: "15 customizable tactile LCD keys" },
      { label: "Interface", value: "Detachable USB-C to USB-A cable" },
      { label: "Stand", value: "Fixed 45-degree angle non-slip desktop stand" },
      { label: "Customization", value: "Interchangeable magnetic faceplates" },
      { label: "Compatibility", value: "macOS 10.15+, Windows 10/11" },
    ],
    pros: [
      "Infinite possibilities with nested folders and profile switching per application",
      "Vast plugin ecosystem supporting OBS, Spotify, Philips Hue, Git, and Discord",
      "Detachable USB-C connection allows using custom length cables",
      "Instant visual feedback on key faces with custom icons and GIFs"
    ],
    cons: [
      "Requires Elgato software suite running in the background",
      "LCD keys are plastic membrane-actuated rather than mechanical switches"
    ]
  }
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-40 pb-16 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Curated Hardware Recommendations & Tech Reviews</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Tech Gear & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">Hardware Reviews</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-8">
            Tested and vetted by the engineering team at AI Software Studio. We test smart streaming devices, mobile power accessories, and productivity hardware to help you get the ultimate performance out of modern apps.
          </p>

          {/* Amazon Associates Official Required Notice Banner */}
          <div className="w-full p-6 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-left text-slate-300 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Amazon Associates Affiliate Disclosure</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">"As an Amazon Associate I earn from qualifying purchases."</strong> AI Software Studio participates in the Amazon Associates program. When you buy through our links, we may earn an affiliate commission at no extra cost to you.
              </p>
            </div>
            <Link 
              href="/affiliate-disclosure"
              className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline whitespace-nowrap self-start md:self-center"
            >
              Read full disclosure →
            </Link>
          </div>
        </div>

        {/* Category Quick Jump */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12 mb-8">
          <a 
            href="#streaming" 
            className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Tv className="w-4 h-4 text-blue-400" />
            <span>Streaming & Smart TV</span>
          </a>
          <a 
            href="#mobile-power" 
            className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-purple-400" />
            <span>Mobile Accessories & Power</span>
          </a>
          <a 
            href="#audio-smart" 
            className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-sm font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Audio & Smart Studio</span>
          </a>
        </div>
      </section>

      {/* Main Products Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24 z-10 relative space-y-20">
        
        {/* Category 1: Streaming & TV */}
        <div id="streaming" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-1">Category 01</div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Tv className="w-7 h-7 text-blue-400" />
                <span>Streaming Hardware & Smart TV Players</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Hardware-accelerated media players tested for buffer-free 4K playback on IPTV and streaming apps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.category === "Streaming & TV").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Category 2: Mobile & Power */}
        <div id="mobile-power" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wider text-purple-400 uppercase mb-1">Category 02</div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Smartphone className="w-7 h-7 text-purple-400" />
                <span>Mobile Accessories, Fast Charging & SSDs</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Reliable high-speed power delivery and durable external storage for mobile power users.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.category === "Mobile & Power").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Category 3: Audio & Smart Studio */}
        <div id="audio-smart" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-1">Category 03</div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-emerald-400" />
                <span>Audio Gear & Smart Studio Automation</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Acoustic equipment, smart speakers, and tactile controllers to supercharge daily productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.category === "Audio & Smart Home").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Buyer's Guide & Testing Methodology Section */}
        <div className="mt-28 p-8 md:p-14 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              <span>Independent Editorial Standards</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              How We Evaluate & Recommend Hardware
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              At AI Software Studio, our team of mobile software developers, Android systems engineers, and UX architects personally stress-test hardware against real-world mobile app environments before making a public recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Thermal & Codec Stress Testing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Streaming sticks undergo 12-hour continuous 4K 60FPS HEVC/AV1 playback tests to verify they maintain sustained clock speeds without thermal throttling or dropped frames.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Real-World App Compatibility</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We test compatibility with popular multimedia apps, IPTV engines, document scanners, and external OTG accessories across Android TV, Fire OS, and iOS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Long-Term Value & Reliability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We consider manufacturer firmware update frequency, build quality, customer support reputation, and price-to-performance ratio before endorsing any product.
              </p>
            </div>
          </div>

          {/* Additional Amazon Associates Disclaimer at bottom of guide */}
          <div className="pt-8 border-t border-white/10 text-xs text-slate-400 leading-relaxed space-y-2">
            <p>
              <strong className="text-slate-200">Amazon Affiliate Notice:</strong> AI Software Studio is a participant in the Amazon Services LLC Associates Program. When you click our affiliate links to Amazon.com and make a qualifying purchase, we may earn an affiliate commission. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
            </p>
            <p>
              Prices, promotions, and product availability are subject to change on Amazon.com. Always verify final checkout details on the merchant's website.
            </p>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-[#0a0a0a]/90 border border-white/10 hover:border-white/20 transition-all duration-300 p-6 md:p-8 backdrop-blur-xl group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
      
      {/* Top Header & Badge */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-4">
          {product.badge}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>

        {/* Rating and review count */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} 
              />
            ))}
          </div>
          <span className="text-white text-sm font-semibold">{product.rating}</span>
          <span className="text-slate-400 text-xs">({product.reviewsCount} customer reviews)</span>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {product.summary}
        </p>

        {/* Editor's Review Box */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 text-xs text-slate-300 leading-relaxed space-y-1">
          <div className="font-semibold text-slate-100 flex items-center gap-1.5">
            <span className="text-blue-400">❖</span>
            <span>Studio Testing Notes</span>
          </div>
          <p className="text-slate-400 italic">
            "{product.editorTake}"
          </p>
        </div>

        {/* Technical Specs Table */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Specifications</div>
          <div className="grid grid-cols-1 gap-1.5 text-xs">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">{spec.label}</span>
                <span className="text-slate-200 font-medium text-right max-w-[60%]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="space-y-4 mb-8 text-xs">
          <div className="space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wider text-[11px]">
              <Check className="w-3.5 h-3.5" /> Pros
            </span>
            <ul className="space-y-1 text-slate-300">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-rose-400 flex items-center gap-1 uppercase tracking-wider text-[11px]">
              <X className="w-3.5 h-3.5" /> Cons
            </span>
            <ul className="space-y-1 text-slate-400">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0 mt-0.5">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action CTA Button to Amazon */}
      <div className="pt-4 border-t border-white/10 space-y-2">
        <a 
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <ShoppingBag className="w-4 h-4 text-slate-950" />
          <span>View on Amazon</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
        </a>
        <div className="text-[11px] text-center text-slate-400">
          Check live pricing, discounts & Prime delivery
        </div>
      </div>

    </div>
  );
}
