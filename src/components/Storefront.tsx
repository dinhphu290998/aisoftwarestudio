"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  Search, 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  Truck, 
  ShieldCheck, 
  Percent, 
  Tv, 
  Smartphone, 
  Headphones, 
  SlidersHorizontal,
  Flame,
  CheckCircle2,
  ChevronRight,
  Info,
  Clock,
  Zap,
  Tag
} from "lucide-react";

export interface StoreProduct {
  id: string;
  name: string;
  brand: string;
  category: "streaming" | "mobile" | "audio" | "studio";
  categoryLabel: string;
  badge: "Best Seller" | "Amazon's Choice" | "Editor's Choice" | "Limited Deal";
  image: string;
  rating: number;
  reviewsCount: string;
  boughtPastMonth: string;
  originalPrice: number;
  dealPrice: number;
  prime: boolean;
  inStock: boolean;
  asin: string;
  amazonUrl: string;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
}

export const PRODUCTS: StoreProduct[] = [
  // 1. Fire TV Stick 4K Max
  {
    id: "fire-tv-4k-max",
    name: "Amazon Fire TV Stick 4K Max Streaming Device (2nd Gen)",
    brand: "Amazon",
    category: "streaming",
    categoryLabel: "Streaming & Smart TV",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_SL1000_.jpg",
    rating: 4.8,
    reviewsCount: "128,450",
    boughtPastMonth: "10K+ bought in past month",
    originalPrice: 59.99,
    dealPrice: 44.99,
    prime: true,
    inStock: true,
    asin: "B0BP9SN37B",
    amazonUrl: "https://www.amazon.com/dp/B0BP9SN37B?tag=aisoftware-20",
    shortDesc: "Supports Wi-Fi 6E, 4K Ultra HD, Dolby Vision, HDR10+, and Dolby Atmos audio with 16GB storage.",
    fullDesc: "The most powerful streaming stick from Amazon. Featuring an upgraded 2.0 GHz quad-core processor and Wi-Fi 6E support, it eliminates buffering on high-bitrate live video and IPTV feeds. With double the storage (16GB), you have ample room for all your streaming applications.",
    specs: [
      { label: "Resolution", value: "4K Ultra HD, Dolby Vision, HDR10+" },
      { label: "Processor", value: "Quad-Core 2.0 GHz" },
      { label: "Storage", value: "16 GB" },
      { label: "Wireless", value: "Wi-Fi 6E Tri-Band + Bluetooth 5.2" },
      { label: "Audio", value: "Dolby Atmos pass-through" }
    ],
    pros: [
      "Wi-Fi 6E provides ultra-low latency streaming",
      "16GB storage holds large app caches and playlists",
      "Hardware AV1 decoding saves power and prevents stutter",
      "Enhanced Alexa remote with TV power and volume controls"
    ],
    cons: [
      "Fire OS home screen features sponsored content",
      "Power input remains micro-USB rather than USB-C"
    ]
  },

  // 2. Apple TV 4K 128GB
  {
    id: "apple-tv-4k-128gb",
    name: "Apple TV 4K (3rd Generation) Wi-Fi + Ethernet with 128GB Storage",
    brand: "Apple",
    category: "streaming",
    categoryLabel: "Streaming & Smart TV",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/51y-W+3G7+L._AC_SL1500_.jpg",
    rating: 4.9,
    reviewsCount: "32,900",
    boughtPastMonth: "5K+ bought in past month",
    originalPrice: 149.00,
    dealPrice: 139.99,
    prime: true,
    inStock: true,
    asin: "B0BJLBZ9D7",
    amazonUrl: "https://www.amazon.com/dp/B0BJLBZ9D7?tag=aisoftware-20",
    shortDesc: "A15 Bionic chip delivers unmatched speed. Gigabit Ethernet, Thread networking, and Dolby Vision.",
    fullDesc: "Apple TV 4K brings the best of TV together with your favorite Apple devices and services. With the blazing A15 Bionic chip, Gigabit Ethernet, and 128GB storage, apps launch instantaneously and 4K HDR video plays with zero lag.",
    specs: [
      { label: "Chip", value: "A15 Bionic chip with 64-bit architecture" },
      { label: "Storage", value: "128 GB" },
      { label: "Ports", value: "HDMI 2.1, Gigabit Ethernet, Built-in power" },
      { label: "Video", value: "4K Dolby Vision and HDR10+ at 60fps" },
      { label: "Remote", value: "Siri Remote with USB-C rechargeable port" }
    ],
    pros: [
      "Zero interface lag or stutter thanks to A15 Bionic",
      "No invasive ads or sponsored tiles on home screen",
      "Full Gigabit Ethernet port for guaranteed speeds",
      "Doubles as a Thread and Apple HomeKit smart hub"
    ],
    cons: [
      "Higher price point than streaming dongles",
      "HDMI cable is not included in the box"
    ]
  },

  // 3. Roku Streaming Stick 4K
  {
    id: "roku-streaming-stick-4k",
    name: "Roku Streaming Stick 4K Portable 4K/HDR/Dolby Vision Player",
    brand: "Roku",
    category: "streaming",
    categoryLabel: "Streaming & Smart TV",
    badge: "Amazon's Choice",
    image: "https://m.media-amazon.com/images/I/71wglxJt2YL._AC_SL1500_.jpg",
    rating: 4.7,
    reviewsCount: "94,120",
    boughtPastMonth: "8K+ bought in past month",
    originalPrice: 49.99,
    dealPrice: 38.99,
    prime: true,
    inStock: true,
    asin: "B09BKCDXZC",
    amazonUrl: "https://www.amazon.com/dp/B09BKCDXZC?tag=aisoftware-20",
    shortDesc: "Long-range Wi-Fi receiver, voice remote with TV controls, Dolby Vision, and AirPlay support.",
    fullDesc: "Roku Streaming Stick 4K is faster and more powerful than ever. The redesigned long-range Wi-Fi receiver is supercharged with up to 2x the speed—exactly what you need for smooth streaming in spectacular 4K, Dolby Vision, and HDR10+.",
    specs: [
      { label: "Resolution", value: "4K Ultra HD at 60fps, Dolby Vision, HDR10+" },
      { label: "Wireless", value: "Dual-band 802.11ac MIMO Wi-Fi" },
      { label: "Audio", value: "DTS Digital Surround, Dolby Atmos passthrough" },
      { label: "Casting", value: "Apple AirPlay & HomeKit, Google Cast" },
      { label: "Remote", value: "Voice remote with TV power and volume" }
    ],
    pros: [
      "Simplest, most intuitive app grid interface available",
      "External receiver antenna improves signal in distant rooms",
      "Universal search checks prices across dozens of platforms",
      "AirPlay support built-in for iOS devices"
    ],
    cons: [
      "Fewer sideloading options compared to Android TV",
      "Internal storage is non-expandable"
    ]
  },

  // 4. NVIDIA Shield TV Pro
  {
    id: "nvidia-shield-tv-pro",
    name: "NVIDIA Shield Android TV Pro 4K HDR Streaming Media Player",
    brand: "NVIDIA",
    category: "streaming",
    categoryLabel: "Streaming & Smart TV",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/61d3Z8C16dL._AC_SL1200_.jpg",
    rating: 4.8,
    reviewsCount: "29,480",
    boughtPastMonth: "3K+ bought in past month",
    originalPrice: 199.99,
    dealPrice: 189.99,
    prime: true,
    inStock: true,
    asin: "B07YP94PBJ",
    amazonUrl: "https://www.amazon.com/dp/B07YP94PBJ?tag=aisoftware-20",
    shortDesc: "Tegra X1+ CPU, real-time AI 4K Upscaling, 3GB RAM, Gigabit Ethernet, 2x USB 3.0 ports.",
    fullDesc: "The undisputed champion for video enthusiasts and power users. NVIDIA's Tegra X1+ processor and groundbreaking AI upscaling upscale standard definition video to crisp 4K. Includes dual USB 3.0 ports for hard drives, Plex Media Server support, and GeForce NOW cloud gaming.",
    specs: [
      { label: "Processor", value: "NVIDIA Tegra X1+ with 256-core GPU" },
      { label: "Memory / Storage", value: "3 GB RAM / 16 GB internal" },
      { label: "Upscaling", value: "AI-enhanced 4K upscaling from 720p/1080p" },
      { label: "Connectivity", value: "Gigabit Ethernet, HDMI 2.0b, 2x USB 3.0" },
      { label: "Audio", value: "Dolby Atmos & DTS-X audio passthrough" }
    ],
    pros: [
      "Industry-leading AI upscaling makes low-res IPTV look 4K",
      "Dual USB 3.0 ports for local hard drives and tuners",
      "Doubles as a standalone Plex Media Server",
      "Full Gigabit Ethernet port for maximum bitrates"
    ],
    cons: [
      "Premium price point",
      "Standalone box requires shelf space next to TV"
    ]
  },

  // 5. Anker Prime 100W GaN Charger
  {
    id: "anker-prime-100w",
    name: "Anker Prime 100W GaN Wall Fast Charger (3-Port Multi-Device)",
    brand: "Anker",
    category: "mobile",
    categoryLabel: "Mobile & Power",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/61k92e8n01L._AC_SL1500_.jpg",
    rating: 4.9,
    reviewsCount: "16,840",
    boughtPastMonth: "8K+ bought in past month",
    originalPrice: 84.99,
    dealPrice: 59.99,
    prime: true,
    inStock: true,
    asin: "B0C479M4R4",
    amazonUrl: "https://www.amazon.com/dp/B0C479M4R4?tag=aisoftware-20",
    shortDesc: "GaNPrime 100W output with 2 USB-C and 1 USB-A port. Fast charges laptops and phones.",
    fullDesc: "Charge 3 devices at once with Anker's most compact 100W multi-port charger. Capable of powering a 16-inch MacBook Pro, iPad, and smartphone at full speed while remaining 43% smaller than conventional 96W Apple single-port bricks.",
    specs: [
      { label: "Output", value: "100W Max total output" },
      { label: "Ports", value: "2x USB-C (100W max each), 1x USB-A (22.5W)" },
      { label: "Tech", value: "GaNPrime with PowerIQ 4.0" },
      { label: "Protection", value: "ActiveShield 2.0 temperature monitoring" },
      { label: "Prongs", value: "Foldable US plug pins" }
    ],
    pros: [
      "Powers laptop, phone, and tablet from a single wall outlet",
      "43% smaller than standard manufacturer chargers",
      "Active temperature sensors keep it safe and cool",
      "Foldable design prevents scratching bags in transit"
    ],
    cons: [
      "Noticeably heavier than single-port 30W phone plugs",
      "Cables sold separately"
    ]
  },

  // 6. SanDisk 1TB Extreme Portable SSD
  {
    id: "sandisk-extreme-1tb-ssd",
    name: "SanDisk 1TB Extreme Portable NVMe External SSD (1050MB/s)",
    brand: "SanDisk",
    category: "mobile",
    categoryLabel: "Mobile & Power",
    badge: "Amazon's Choice",
    image: "https://m.media-amazon.com/images/I/712+J5v9oPL._AC_SL1500_.jpg",
    rating: 4.8,
    reviewsCount: "98,300",
    boughtPastMonth: "10K+ bought in past month",
    originalPrice: 139.99,
    dealPrice: 104.99,
    prime: true,
    inStock: true,
    asin: "B08GTYFC37",
    amazonUrl: "https://www.amazon.com/dp/B08GTYFC37?tag=aisoftware-20",
    shortDesc: "Blazing 1050MB/s read speeds, IP65 water/dust resistance, and 2-meter drop protection.",
    fullDesc: "Tough storage that is ready for life. Get fast NVMe solid state performance featuring 1050MB/s read and 1000MB/s write speeds in a portable, high-capacity drive that’s perfect for creating content or capturing incredible footage with OTG mobile support.",
    specs: [
      { label: "Read Speed", value: "Up to 1050 MB/s" },
      { label: "Write Speed", value: "Up to 1000 MB/s" },
      { label: "Capacity", value: "1 TB NVMe Storage" },
      { label: "Durability", value: "IP65 water/dust resistance, 2m drop rating" },
      { label: "Connector", value: "USB-C with USB-A adapter included" }
    ],
    pros: [
      "Transfer large 50GB video and app backups in seconds",
      "Rugged carabiner loop clips securely to bags",
      "Works natively with Android, iOS, Windows, and macOS",
      "Hardware 256-bit AES encryption keeps confidential data safe"
    ],
    cons: [
      "Can warm up during massive hundreds-of-gigabytes writes",
      "Short supplied cable"
    ]
  },

  // 7. Anker MagGo 10,000mAh Qi2 Power Bank
  {
    id: "anker-maggo-qi2",
    name: "Anker MagGo 10,000mAh Wireless Power Bank with Smart Display",
    brand: "Anker",
    category: "mobile",
    categoryLabel: "Mobile & Power",
    badge: "Limited Deal",
    image: "https://m.media-amazon.com/images/I/61A63V52fVL._AC_SL1500_.jpg",
    rating: 4.7,
    reviewsCount: "13,920",
    boughtPastMonth: "7K+ bought in past month",
    originalPrice: 89.99,
    dealPrice: 69.99,
    prime: true,
    inStock: true,
    asin: "B0CF5628Q2",
    amazonUrl: "https://www.amazon.com/dp/B0CF5628Q2?tag=aisoftware-20",
    shortDesc: "Certified Qi2 15W wireless charging with real-time digital LCD and built-in kickstand.",
    fullDesc: "Equipped with official Qi2 certification, this magnetic battery charges compatible phones twice as fast as older 7.5W Qi chargers. Its built-in LCD screen provides exact battery percentage and remaining recharge time, while the kickstand props your phone upright for watching video hands-free.",
    specs: [
      { label: "Capacity", value: "10,000 mAh (approx 1.8-2 phone charges)" },
      { label: "Wireless Output", value: "Qi2 15W Ultra-Fast Magnetic Wireless" },
      { label: "Wired Output", value: "27W Bi-directional USB-C" },
      { label: "Screen", value: "Smart LCD showing % and recharge minutes" },
      { label: "Kickstand", value: "Integrated zinc alloy kickstand" }
    ],
    pros: [
      "True 15W fast magnetic wireless charging",
      "Clear smart display takes the guesswork out of remaining battery",
      "Foldable stand is ideal for video watching and video calls",
      "Strong magnetic grip holds through cases"
    ],
    cons: [
      "Weighs 250 grams, noticeably thicker on compact phones",
      "Requires magnetic phone case for maximum adhesion"
    ]
  },

  // 8. Sony WH-1000XM5 ANC Headphones
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise-Canceling Overhead Headphones",
    brand: "Sony",
    category: "audio",
    categoryLabel: "Audio & Sound",
    badge: "Editor's Choice",
    image: "https://m.media-amazon.com/images/I/61+el6UrISL._AC_SL1500_.jpg",
    rating: 4.9,
    reviewsCount: "38,500",
    boughtPastMonth: "4K+ bought in past month",
    originalPrice: 399.99,
    dealPrice: 328.00,
    prime: true,
    inStock: true,
    asin: "B09XS7JWHH",
    amazonUrl: "https://www.amazon.com/dp/B09XS7JWHH?tag=aisoftware-20",
    shortDesc: "Industry-leading active noise cancellation with 2 processors, 8 mics, and 30-hour battery life.",
    fullDesc: "The pinnacle of active noise cancellation. With two processors controlling eight microphones, the WH-1000XM5 silences airplane rumble, office chatter, and street noise completely. Features crystal-clear hands-free calling, multipoint Bluetooth connection, and ultra-plush soft fit leather.",
    specs: [
      { label: "ANC", value: "Dual Processor V1 + HD Noise Cancelling QN1" },
      { label: "Microphones", value: "8 microphones for noise cancellation & calls" },
      { label: "Battery", value: "Up to 30 hours (ANC on) / 40 hours (ANC off)" },
      { label: "Quick Charge", value: "3 min charge gives 3 hours playback" },
      { label: "Connectivity", value: "Bluetooth 5.2 Multipoint (2 devices)" }
    ],
    pros: [
      "Industry best active noise cancellation creates absolute silence",
      "Ultra-comfortable lightweight headband for all-day coding",
      "Multipoint connects to both laptop and phone simultaneously",
      "Speak-to-Chat automatically pauses audio when you converse"
    ],
    cons: [
      "Earcups fold flat but do not collapse into a compact ball",
      "Carrying case is slightly bulkier than XM4"
    ]
  },

  // 9. Apple AirPods Pro (2nd Gen) USB-C
  {
    id: "apple-airpods-pro-2-usbc",
    name: "Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)",
    brand: "Apple",
    category: "audio",
    categoryLabel: "Audio & Sound",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
    rating: 4.8,
    reviewsCount: "42,100",
    boughtPastMonth: "10K+ bought in past month",
    originalPrice: 249.00,
    dealPrice: 189.99,
    prime: true,
    inStock: true,
    asin: "B0CHWRXH8B",
    amazonUrl: "https://www.amazon.com/dp/B0CHWRXH8B?tag=aisoftware-20",
    shortDesc: "Up to 2x more Active Noise Cancelling, Transparency mode, Adaptive Audio, and USB-C case.",
    fullDesc: "Powered by the Apple H2 chip, AirPods Pro take acoustic performance and noise cancellation to new heights. Adaptive Audio dynamically blends Transparency mode and Active Noise Cancellation to tailor sound to your surroundings automatically.",
    specs: [
      { label: "Processor", value: "Apple H2 headphone chip + U1 case chip" },
      { label: "Audio", value: "Personalized Spatial Audio with dynamic head tracking" },
      { label: "Charging", value: "USB-C, MagSafe, Apple Watch charger, Qi" },
      { label: "Battery Life", value: "Up to 6 hours listening (30 hours with case)" },
      { label: "Resistance", value: "IP54 dust, sweat, and water resistance" }
    ],
    pros: [
      "Outstanding active noise cancellation for compact earbuds",
      "Adaptive Audio balances noise control and situational awareness",
      "Convenient universal USB-C charging port",
      "Find My case with built-in speaker prevents lost earphones"
    ],
    cons: [
      "Advanced features require iOS ecosystem",
      "Ear tip fit varies per individual ear canal"
    ]
  },

  // 10. Amazon Echo Dot (5th Gen)
  {
    id: "echo-dot-5th-gen",
    name: "Amazon Echo Dot (5th Gen) Smart Speaker with Alexa (Deep Bass)",
    brand: "Amazon",
    category: "audio",
    categoryLabel: "Audio & Sound",
    badge: "Limited Deal",
    image: "https://m.media-amazon.com/images/I/71C3VIfsdlL._AC_SL1000_.jpg",
    rating: 4.7,
    reviewsCount: "145,200",
    boughtPastMonth: "10K+ bought in past month",
    originalPrice: 49.99,
    dealPrice: 29.99,
    prime: true,
    inStock: true,
    asin: "B09B8V1LZ3",
    amazonUrl: "https://www.amazon.com/dp/B09B8V1LZ3?tag=aisoftware-20",
    shortDesc: "Enhanced vocal clarity, deeper bass, motion & temperature sensors, eero Wi-Fi built-in.",
    fullDesc: "Our best-sounding Echo Dot yet. Enjoy an improved audio experience compared to any previous generation for clearer vocals, deeper bass, and vibrant sound in any room. Use voice to control music, smart lights, and timers, or extend your eero Wi-Fi mesh coverage.",
    specs: [
      { label: "Speaker", value: "1.73-inch front-firing speaker" },
      { label: "Sensors", value: "Ultrasound motion detection & indoor temperature" },
      { label: "Mesh Support", value: "eero built-in (adds up to 1,000 sq ft Wi-Fi)" },
      { label: "Connectivity", value: "Dual-band Wi-Fi + Bluetooth Low Energy" },
      { label: "Privacy", value: "Built-in microphone disconnect hardware button" }
    ],
    pros: [
      "Astonishingly full sound and punchy bass for an ultra-compact speaker",
      "Built-in sensors automate smart bulbs and fans automatically",
      "Can act as an eero Wi-Fi range extender",
      "Huge discount under $30 makes it an unbeatable bargain"
    ],
    cons: [
      "Lacks 3.5mm line-out jack",
      "Wall adapter uses proprietary barrel plug"
    ]
  },

  // 11. Elgato Stream Deck MK.2
  {
    id: "elgato-stream-deck-mk2",
    name: "Elgato Stream Deck MK.2 Studio Macro Controller (15 LCD Keys)",
    brand: "Elgato",
    category: "studio",
    categoryLabel: "Studio & Productivity",
    badge: "Amazon's Choice",
    image: "https://m.media-amazon.com/images/I/61aW8w1QjRL._AC_SL1500_.jpg",
    rating: 4.8,
    reviewsCount: "24,800",
    boughtPastMonth: "3K+ bought in past month",
    originalPrice: 149.99,
    dealPrice: 129.99,
    prime: true,
    inStock: true,
    asin: "B09738CV2G",
    amazonUrl: "https://www.amazon.com/dp/B09738CV2G?tag=aisoftware-20",
    shortDesc: "15 customizable LCD keys to trigger shortcuts, automate developer workflows, and control studio gear.",
    fullDesc: "Stream Deck gives you 15 tactile LCD keys to control apps and platforms. Switch scenes, launch media, adjust audio, toggle lights, or trigger complex terminal & development scripts with visual confirmation on every key.",
    specs: [
      { label: "Keys", value: "15 customizable tactile LCD keys" },
      { label: "Connection", value: "Detachable USB-C to USB-A cable (1.5m)" },
      { label: "Stand", value: "Fixed 45-degree angle non-slip desktop stand" },
      { label: "Faceplate", value: "Removable magnetic faceplate for custom skins" },
      { label: "Compatibility", value: "macOS 10.15+, Windows 10/11" }
    ],
    pros: [
      "Drastically speeds up developer and creator daily workflows",
      "Huge plugin marketplace: Spotify, OBS, Discord, Philips Hue, Git",
      "Detachable USB-C connector makes desk wire management easy",
      "Nested folders provide essentially unlimited key shortcuts"
    ],
    cons: [
      "Requires Elgato software suite running in background",
      "Plastic membrane feel rather than mechanical clicks"
    ]
  },

  // 12. Logitech MX Master 3S
  {
    id: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S Wireless Performance Ergonomic Mouse",
    brand: "Logitech",
    category: "studio",
    categoryLabel: "Studio & Productivity",
    badge: "Best Seller",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    rating: 4.8,
    reviewsCount: "31,200",
    boughtPastMonth: "6K+ bought in past month",
    originalPrice: 99.99,
    dealPrice: 89.99,
    prime: true,
    inStock: true,
    asin: "B09HM94VDS",
    amazonUrl: "https://www.amazon.com/dp/B09HM94VDS?tag=aisoftware-20",
    shortDesc: "8K DPI any-surface glass tracking, Quiet Clicks, MagSpeed electromagnetic scrolling, USB-C.",
    fullDesc: "Meet MX Master 3S – an iconic mouse remastered. Feel every moment of your workflow with Quiet Clicks, and track anywhere—even on glass—with an 8,000 DPI sensor. Electromagnetic MagSpeed scrolling zips through 1,000 lines of code or spreadsheet in a second.",
    specs: [
      { label: "Sensor", value: "Darkfield high precision 8,000 DPI (tracks on glass)" },
      { label: "Clicks", value: "Quiet Clicks with 90% noise reduction" },
      { label: "Scroll Wheel", value: "MagSpeed electromagnetic scroll wheel" },
      { label: "Battery", value: "Up to 70 days on full charge (USB-C quick charge)" },
      { label: "Multi-OS", value: "Pairs with up to 3 computers (Logi Flow supported)" }
    ],
    pros: [
      "MagSpeed scroll wheel is unrivaled for long codebases & documents",
      "Whisper-quiet clicks keep office and late-night working peaceful",
      "Ergonomic thumb cradle prevents wrist fatigue",
      "Seamlessly copy-paste text and files across 3 distinct computers"
    ],
    cons: [
      "Right-handed ergonomic shape only",
      "Slightly heavier than minimalist travel mice"
    ]
  }
];

export function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [activeModalProduct, setActiveModalProduct] = useState<StoreProduct | null>(null);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.dealPrice - b.dealPrice);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.dealPrice - a.dealPrice);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "discount") {
      result.sort((a, b) => {
        const discA = ((a.originalPrice - a.dealPrice) / a.originalPrice);
        const discB = ((b.originalPrice - b.dealPrice) / b.originalPrice);
        return discB - discA;
      });
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="w-full flex flex-col">
      
      {/* Top Amazon Deals Banner */}
      <div className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white py-2.5 px-4 text-xs md:text-sm font-medium text-center shadow-lg relative z-20 flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-yellow-200 animate-pulse shrink-0" />
        <span>
          <strong>Amazon Deals Hub:</strong> Up to 40% OFF on Top Tech Hardware, TV Sticks & Mobile Gear • Prime Fast Delivery
        </span>
      </div>

      {/* Main Store Header & Search Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-8 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Curated Amazon Partner Storefront</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Shop Top Tech & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Electronics</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Tested and approved hardware for IPTV streaming, fast charging, and studio productivity. Direct links to official Amazon listings with Prime shipping.
            </p>
          </div>

          {/* Amazon Associates Legal Disclosure Alert */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 max-w-md text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Amazon Associates Program Participant</span>
            </div>
            <p className="text-[12px] text-slate-300 leading-snug">
              <strong className="text-white">"As an Amazon Associate I earn from qualifying purchases."</strong> Prices and availability subject to change on Amazon.com.
            </p>
            <Link href="/affiliate-disclosure" className="text-amber-400 underline hover:text-amber-300 text-[11px] inline-block pt-1">
              Read our full Affiliate Disclosure Policy →
            </Link>
          </div>
        </div>

        {/* Store Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Fast Prime Delivery</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Genuine Products</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Star className="w-4 h-4 text-yellow-400 shrink-0 fill-yellow-400" />
            <span>Top-Rated Customer Picks</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Percent className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Verified Discount Deals</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between pb-6 border-b border-white/10">
          
          {/* Categories Pill Switcher */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory("streaming")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "streaming"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Streaming & TV</span>
            </button>
            <button
              onClick={() => setSelectedCategory("mobile")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "mobile"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile & Power</span>
            </button>
            <button
              onClick={() => setSelectedCategory("audio")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "audio"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Audio & Sound</span>
            </button>
            <button
              onClick={() => setSelectedCategory("studio")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "studio"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Studio & Desk</span>
            </button>
          </div>

          {/* Search Box & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="featured" className="bg-[#111] text-white">Sort: Featured Picks</option>
                <option value="price-low" className="bg-[#111] text-white">Price: Low to High</option>
                <option value="price-high" className="bg-[#111] text-white">Price: High to Low</option>
                <option value="rating" className="bg-[#111] text-white">Highest Customer Rating</option>
                <option value="discount" className="bg-[#111] text-white">Biggest Discount %</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-10 z-10 relative">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">No products found</h3>
            <p className="text-slate-400 text-sm">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discountPercent = Math.round(((product.originalPrice - product.dealPrice) / product.originalPrice) * 100);

              return (
                <div 
                  key={product.id}
                  className="rounded-3xl bg-[#0d0d0d] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] relative"
                >
                  {/* Top Image Container */}
                  <div className="relative w-full aspect-square bg-[#141414] flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                        product.badge === "Best Seller" 
                          ? "bg-amber-500 text-slate-950" 
                          : product.badge === "Limited Deal"
                          ? "bg-red-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}>
                        {product.badge}
                      </span>
                      {discountPercent > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black">
                          -{discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Stock Status */}
                    {product.inStock && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>In Stock</span>
                      </div>
                    )}

                    {/* Product Image */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                      loading="lazy"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase font-bold text-amber-400 tracking-wider">
                        {product.brand} • {product.categoryLabel}
                      </div>

                      <a 
                        href={product.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer nofollow"
                        className="font-bold text-white text-sm line-clamp-2 hover:text-amber-400 transition-colors leading-snug"
                        title={product.name}
                      >
                        {product.name}
                      </a>

                      {/* Stars & Social Proof */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} 
                            />
                          ))}
                        </div>
                        <span className="text-white font-bold text-xs">{product.rating}</span>
                        <span className="text-slate-500 text-[11px]">({product.reviewsCount})</span>
                      </div>

                      <div className="text-[11px] text-slate-400">
                        {product.boughtPastMonth}
                      </div>
                    </div>

                    {/* Pricing Display */}
                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white">
                          ${product.dealPrice.toFixed(2)}
                        </span>
                        {product.originalPrice > product.dealPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {product.prime && (
                        <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                          <span className="text-[11px] px-1.5 py-0.2 bg-blue-500/20 rounded font-bold">prime</span>
                          <span className="text-[11px] text-slate-300">FREE One-Day Delivery</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Buttons */}
                  <div className="p-5 pt-0 space-y-2">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
                      <span>Buy on Amazon</span>
                      <ExternalLink className="w-3 h-3 text-slate-950" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="w-full py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                      <span>Specs & Review Notes</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Quick View / Full Specs Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 aspect-square bg-[#181818] rounded-2xl p-4 flex items-center justify-center shrink-0">
                <img 
                  src={activeModalProduct.image} 
                  alt={activeModalProduct.name}
                  className="max-h-full max-w-full object-contain" 
                />
              </div>

              <div className="space-y-3 flex-1">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  {activeModalProduct.badge} • {activeModalProduct.categoryLabel}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {activeModalProduct.name}
                </h3>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(activeModalProduct.rating) ? "fill-amber-400" : "text-slate-600"}`} />
                    ))}
                  </div>
                  <span className="font-bold text-white">{activeModalProduct.rating}</span>
                  <span className="text-slate-400">({activeModalProduct.reviewsCount} customer reviews)</span>
                </div>
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-3xl font-black text-white">${activeModalProduct.dealPrice.toFixed(2)}</span>
                  {activeModalProduct.originalPrice > activeModalProduct.dealPrice && (
                    <span className="text-sm text-slate-500 line-through">${activeModalProduct.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-xs text-emerald-400 font-bold">In Stock • Amazon Prime</span>
                </div>
              </div>
            </div>

            {/* In-depth Overview */}
            <div className="space-y-2 border-t border-white/5 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Product Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProduct.fullDesc}
              </p>
            </div>

            {/* Specs Table */}
            <div className="space-y-2 border-t border-white/5 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalProduct.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400">{spec.label}</span>
                    <span className="text-white font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase text-[11px]">
                  <Check className="w-4 h-4" /> Why We Recommend It
                </span>
                <ul className="space-y-1 text-slate-300">
                  {activeModalProduct.pros.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                <span className="font-bold text-rose-400 flex items-center gap-1.5 uppercase text-[11px]">
                  <X className="w-4 h-4" /> Things to Consider
                </span>
                <ul className="space-y-1 text-slate-400">
                  {activeModalProduct.cons.map((c, idx) => (
                    <li key={idx}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Free Returns & Customer Protection fulfilled directly by Amazon.
              </div>
              <a
                href={activeModalProduct.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Product on Amazon</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Footer Storefront Notice */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24 z-10 relative">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 text-xs text-slate-400 leading-relaxed">
          <h4 className="text-slate-200 font-bold text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Amazon Associates Operating Disclosure</span>
          </h4>
          <p>
            AI Software Studio is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
          </p>
          <p>
            Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com at the time of purchase will apply to the purchase of this product. Certain content that appears on this site comes from Amazon Services LLC. This content is provided &apos;as is&apos; and is subject to change or removal at any time.
          </p>
        </div>
      </section>

    </div>
  );
}
