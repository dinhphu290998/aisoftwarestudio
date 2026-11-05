"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ShieldAlert, 
  ExternalLink, 
  ShoppingBag, 
  Tv, 
  Smartphone, 
  Cpu, 
  Wifi, 
  HardDrive,
  Award
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Do the streaming sticks and TV boxes listed here support third-party media and IPTV applications?",
    answer: "Yes. Devices running Fire OS (such as the Amazon Fire TV Stick 4K Max) and Android TV (such as the NVIDIA Shield TV Pro and Chromecast with Google TV) allow easy installation of third-party video players, IPTV applications, and media centers like Kodi and Plex. The Fire TV 4K Max and NVIDIA Shield are particularly renowned for their outstanding hardware codec decoding and reliable network throughput."
  },
  {
    question: "Why is hardware AV1 decoding important for streaming in 2026?",
    answer: "AV1 is the modern open-source video compression standard adopted by YouTube, Netflix, and top live broadcast providers. It provides up to 30% higher compression efficiency than HEVC (H.265), meaning you get superior 4K image sharpness while consuming significantly less network bandwidth. The Amazon Fire TV Stick 4K Max features built-in hardware AV1 decoding, preventing device overheating and stuttering."
  },
  {
    question: "Can the Anker Prime 100W GaN charger safely charge my laptop and phone simultaneously?",
    answer: "Absolutely. The Anker Prime 100W features intelligent PowerIQ 4.0 dynamic power distribution. When you connect a MacBook or Windows USB-C laptop alongside a smartphone, the charger automatically allocates 65W to the laptop and 30W to the phone. Anker's ActiveShield 2.0 monitors internal temperatures over 3 million times per day to prevent overcharging or battery stress."
  },
  {
    question: "Is the NVIDIA Shield TV Pro still worth buying in 2026?",
    answer: "Yes, without question. If you own a high-end 4K OLED or home theater audio receiver, the NVIDIA Shield TV Pro remains unmatched thanks to its real-time AI upscaling engine, full Gigabit Ethernet port, dual USB 3.0 ports, and native passthrough for lossless audio formats like Dolby TrueHD Atmos and DTS-X."
  },
  {
    question: "Are prices and Prime shipping guaranteed when clicking your Amazon links?",
    answer: "All purchase links direct you securely to the official Amazon.com product listings. If you are an active Amazon Prime member, you automatically receive free fast Prime shipping and Amazon's 30-day hassle-free return protection. Prices and deals on Amazon fluctuate, so we recommend verifying the final checkout total on Amazon.com."
  },
  {
    question: "How does AI Software Studio earn commission from Amazon?",
    answer: "As an Amazon Associate, AI Software Studio earns from qualifying purchases. When you click one of our product links and make a purchase on Amazon, Amazon pays us a small advertising fee at zero additional cost to you. This helps fund our independent software testing lab, editorial guides, and free mobile applications."
  }
];

export function BuyingGuides() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-24 py-8">
      
      {/* Section Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>In-Depth SEO Buyer&apos;s Guides</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">Buying Guides & Analysis</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Written by software engineers and media systems specialists. Read our detailed architectural analysis on choosing the right streaming gear, portable backup drives, and workspace hardware.
        </p>
      </div>

      {/* GUIDE 1: Complete IPTV & Streaming Hardware Architecture */}
      <article className="rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 p-6 md:p-14 space-y-8 backdrop-blur-xl relative overflow-hidden">
        
        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 font-semibold">
            Streaming & Media Systems
          </span>
          <span>By AI Software Studio Engineering</span>
          <span>•</span>
          <span>Updated for 2026</span>
          <span>•</span>
          <span>10 Min Read</span>
        </div>

        <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
          The 2026 Ultimate Guide to Choosing Streaming Hardware for IPTV, 4K HDR & Live Sports
        </h3>

        <div className="prose prose-invert prose-slate max-w-none text-slate-300 space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            When streaming ultra-high-definition live broadcasts, 4K sports events, or running demanding IPTV applications with thousands of channels, your playback experience is only as good as the underlying hardware silicon. Many consumers make the mistake of buying unbranded generic Android TV boxes, only to experience severe stuttering, overheating, and app crashes within weeks.
          </p>

          <h4 className="text-xl font-bold text-white pt-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" />
            <span>1. What Hardware Specifications Actually Matter?</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/5 space-y-2">
              <strong className="text-white block font-bold">Hardware AV1 & HEVC Decoding</strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Software-based CPU decoding burns battery and overheats TV sticks. A modern streaming device must include dedicated silicon hardware decoders for HEVC (H.265) and AV1.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/5 space-y-2">
              <strong className="text-white block font-bold">Wi-Fi 6E Tri-Band vs Ethernet</strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live 4K video streams require consistent latency rather than just raw speed. Wi-Fi 6E (6 GHz band) avoids congested 2.4/5GHz airwaves, while Gigabit Ethernet provides zero wireless packet drops.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/5 space-y-2">
              <strong className="text-white block font-bold">16GB+ Internal Storage</strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Older 8GB sticks frequently encounter &apos;Out of Storage&apos; errors as IPTV electronic program guides (EPG) and media thumbnails consume local cache. Always prioritize 16GB or higher.
              </p>
            </div>
          </div>

          <h4 className="text-xl font-bold text-white pt-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>2. Top 3 Tested Streaming Hardware Picks for 2026</span>
          </h4>

          {/* Pick 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shrink-0">1</span>
                <span className="text-lg font-bold text-white">Amazon Fire TV Stick 4K Max (2nd Gen)</span>
              </div>
              <span className="text-amber-400 font-extrabold text-lg">$44.99 (Limited Deal)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why it wins:</strong> At its $44.99 sale price, the Fire TV Stick 4K Max is virtually impossible to beat on price-to-performance. With full Wi-Fi 6E support, a 2.0 GHz quad-core CPU, 16GB storage, and native AV1 support, it handles 4K IPTV streams with silky smoothness. Sideloading your favorite APKs takes under 3 minutes via the Downloader app.
            </p>
            <a
              href="https://www.amazon.com/dp/B0BP9SN37B?tag=aisoftware-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy Fire TV Stick 4K Max on Amazon</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Pick 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/20 text-white font-black text-sm flex items-center justify-center shrink-0">2</span>
                <span className="text-lg font-bold text-white">NVIDIA Shield Android TV Pro 4K</span>
              </div>
              <span className="text-white font-extrabold text-lg">$189.99</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why it wins:</strong> The definitive home theater box. The Tegra X1+ chip provides real-time AI upscaling that sharpens lower-quality 720p or 1080p IPTV channel streams into near-native 4K on big screens. Built-in Gigabit Ethernet and twin USB 3.0 ports make it a dream setup for running local Plex servers or external recording hard drives.
            </p>
            <a
              href="https://www.amazon.com/dp/B07YP94PBJ?tag=aisoftware-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy NVIDIA Shield Pro on Amazon</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Pick 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/20 text-white font-black text-sm flex items-center justify-center shrink-0">3</span>
                <span className="text-lg font-bold text-white">Apple TV 4K (3rd Gen) with 128GB Storage</span>
              </div>
              <span className="text-white font-extrabold text-lg">$139.99</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Why it wins:</strong> Powered by the A15 Bionic chip, Apple TV 4K is by far the fastest and most ad-free user interface on the market. If you prioritize sleek design, zero promotional banners, seamless AirPlay 2 screen mirroring from your iPhone, and Gigabit Ethernet, this is the premium benchmark.
            </p>
            <a
              href="https://www.amazon.com/dp/B0BJLBZ9D7?tag=aisoftware-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy Apple TV 4K on Amazon</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </article>

      {/* GUIDE 2: Mobile Developer & Remote Work Essentials */}
      <article className="rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 p-6 md:p-14 space-y-8 backdrop-blur-xl relative overflow-hidden">
        
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 font-semibold">
            Productivity & Mobile Workspaces
          </span>
          <span>By AI Software Studio Hardware Team</span>
          <span>•</span>
          <span>Updated for 2026</span>
          <span>•</span>
          <span>8 Min Read</span>
        </div>

        <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">
          The Minimalist Tech Kit: 4 Hardware Upgrades That Transform Remote Productivity
        </h3>

        <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed">
          <p>
            As a software studio developing mobile applications used by millions, our engineers frequently work remotely across international time zones. Minimizing bag weight while maximizing power efficiency and ergonomic comfort is paramount. Here are four hardware investments that pay for themselves immediately:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Item 1: GaN 100W */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">Anker Prime 100W GaN Wall Charger</span>
                <span className="text-amber-400 font-extrabold text-sm">$59.99</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ditch the heavy brick chargers. A single Anker Prime 100W wall plug replaces your laptop charger, phone plug, and tablet adapter in a package 43% smaller than Apple&apos;s standard 96W brick.
              </p>
              <a 
                href="https://www.amazon.com/dp/B0C479M4R4?tag=aisoftware-20"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View on Amazon</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Item 2: SanDisk Extreme SSD */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">SanDisk 1TB Extreme Portable SSD</span>
                <span className="text-amber-400 font-extrabold text-sm">$104.99</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cloud sync has latency limits. For heavy video editing, document scanning backups, or large code repositories, this pocket-sized NVMe drive delivers 1050MB/s speeds with IP65 weatherproofing.
              </p>
              <a 
                href="https://www.amazon.com/dp/B08GTYFC37?tag=aisoftware-20"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View on Amazon</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Item 3: Logitech MX Master 3S */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">Logitech MX Master 3S Ergonomic Mouse</span>
                <span className="text-amber-400 font-extrabold text-sm">$89.99</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered for developers and power users. MagSpeed electromagnetic scrolling flies through 1,000 lines of code per second, while Quiet Clicks prevent office or coffee shop noise complaints.
              </p>
              <a 
                href="https://www.amazon.com/dp/B09HM94VDS?tag=aisoftware-20"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View on Amazon</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Item 4: Elgato Stream Deck MK.2 */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">Elgato Stream Deck MK.2 (15 Keys)</span>
                <span className="text-amber-400 font-extrabold text-sm">$129.99</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automate your most repetitive daily actions: launching local testing servers, muting microphone feeds, switching audio outputs, and executing complex terminal command chains with one tactile tap.
              </p>
              <a 
                href="https://www.amazon.com/dp/B09738CV2G?tag=aisoftware-20"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View on Amazon</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      </article>

      {/* SEO FAQ SECTION (Structured Data format) */}
      <section id="faq" className="rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 p-6 md:p-14 space-y-8 backdrop-blur-xl">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white">
            Tech Hardware & Amazon Shopping FAQ
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
            Clear, transparent answers regarding hardware compatibility, pricing changes on Amazon, and our editorial affiliate disclosure policy.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl bg-[#121212] border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm md:text-base hover:text-amber-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
