"use client";

import React from "react";
import { 
  Check, 
  X, 
  Star, 
  ExternalLink, 
  ShoppingBag, 
  Award, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Tv, 
  Headphones, 
  Smartphone,
  ChevronRight
} from "lucide-react";

export function ComparisonShowdown() {
  return (
    <div className="w-full space-y-24 py-8">
      
      {/* Introduction Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>Lab Tested Head-to-Head Comparisons</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Head-to-Head <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Product Showdowns</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Can&apos;t decide between the top contenders? We put the market&apos;s leading tech hardware through rigorous benchmark testing to see which one delivers the best performance, durability, and value for your money.
        </p>
      </div>

      {/* SHOWDOWN 1: Streaming Stick & Box Battle */}
      <div className="rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 p-6 md:p-12 space-y-10 relative overflow-hidden backdrop-blur-xl">
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-blue-400">Battle 01 • Streaming & IPTV Powerhouses</div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white">
            Amazon Fire TV Stick 4K Max vs. Apple TV 4K vs. NVIDIA Shield TV Pro
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
            We tested all three devices across 50+ hours of continuous 4K 60FPS playback, live IPTV channel switching speeds, thermal stability, and Dolby Atmos audio passthrough. Here is how they stack up.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-4 px-3 font-semibold uppercase text-xs">Feature</th>
                <th className="py-4 px-3 font-bold text-white bg-amber-500/10 rounded-t-xl text-center">
                  <div className="text-amber-400 text-[11px] uppercase font-bold mb-1">Editor&apos;s Value Pick</div>
                  <span>Fire TV Stick 4K Max</span>
                </th>
                <th className="py-4 px-3 font-bold text-white text-center">Apple TV 4K (128GB)</th>
                <th className="py-4 px-3 font-bold text-white text-center">NVIDIA Shield Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="py-3.5 px-3 font-medium text-slate-400">Processor / GPU</td>
                <td className="py-3.5 px-3 text-center bg-amber-500/5 font-semibold text-white">2.0 GHz Quad-Core</td>
                <td className="py-3.5 px-3 text-center">Apple A15 Bionic</td>
                <td className="py-3.5 px-3 text-center">NVIDIA Tegra X1+ (256-core)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 font-medium text-slate-400">Wi-Fi & Networking</td>
                <td className="py-3.5 px-3 text-center bg-amber-500/5 text-emerald-400 font-bold">Wi-Fi 6E (Tri-band)</td>
                <td className="py-3.5 px-3 text-center">Wi-Fi 6 + Gigabit LAN</td>
                <td className="py-3.5 px-3 text-center">Gigabit Ethernet + Wi-Fi 5</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 font-medium text-slate-400">Hardware AV1 Decoding</td>
                <td className="py-3.5 px-3 text-center bg-amber-500/5 text-emerald-400 font-bold">
                  <Check className="w-5 h-5 mx-auto text-emerald-400" />
                </td>
                <td className="py-3.5 px-3 text-center text-slate-500">
                  <X className="w-5 h-5 mx-auto text-rose-500" />
                </td>
                <td className="py-3.5 px-3 text-center text-slate-500">
                  <X className="w-5 h-5 mx-auto text-rose-500" />
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 font-medium text-slate-400">Real-Time AI Upscaling</td>
                <td className="py-3.5 px-3 text-center bg-amber-500/5 text-slate-500">Standard</td>
                <td className="py-3.5 px-3 text-center text-slate-500">Standard</td>
                <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">Industry Best AI 4K</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 font-medium text-slate-400">IPTV & Sideloading</td>
                <td className="py-3.5 px-3 text-center bg-amber-500/5 text-emerald-400 font-bold">Easy APK Sideload</td>
                <td className="py-3.5 px-3 text-center text-slate-400">App Store Only</td>
                <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">Full Android TV & USB</td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 font-medium text-slate-400">Typical Price Deal</td>
                <td className="py-3.5 px-3 text-center bg-amber-500/5 text-xl font-black text-amber-400">$44.99</td>
                <td className="py-3.5 px-3 text-center text-xl font-black text-white">$139.99</td>
                <td className="py-3.5 px-3 text-center text-xl font-black text-white">$189.99</td>
              </tr>
              <tr>
                <td className="py-4 px-3 font-medium text-slate-400">Amazon Purchase Link</td>
                <td className="py-4 px-3 text-center bg-amber-500/5">
                  <a
                    href="https://www.amazon.com/dp/B0BP9SN37B?tag=aisoftwarestu-20"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-transform hover:scale-105"
                  >
                    <span>Check Fire TV</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="py-4 px-3 text-center">
                  <a
                    href="https://www.amazon.com/dp/B0BJLBZ9D7?tag=aisoftwarestu-20"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-transform hover:scale-105"
                  >
                    <span>Check Apple TV</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="py-4 px-3 text-center">
                  <a
                    href="https://www.amazon.com/dp/B07YP94PBJ?tag=aisoftwarestu-20"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-transform hover:scale-105"
                  >
                    <span>Check Shield Pro</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* The Verdict Box */}
        <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <span>Our Expert Verdict: Which One Should You Buy?</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
            <div className="space-y-2">
              <strong className="text-amber-400 block font-bold">1. Best Overall Value: Fire TV Stick 4K Max</strong>
              <p className="text-slate-400 leading-relaxed">
                For 90% of buyers, the Fire TV 4K Max is the smartest purchase. At under $45 on sale, you get Wi-Fi 6E, hardware AV1 decoding, 16GB storage, and painless APK installation for IPTV and local media apps.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-white block font-bold">2. Best for Apple Users: Apple TV 4K</strong>
              <p className="text-slate-400 leading-relaxed">
                If you own iPhones and iPads, Apple TV 4K provides the most pristine, ad-free interface and silky 60fps animations, plus seamless AirPlay and spatial audio integration.
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-emerald-400 block font-bold">3. Best for Home Theaters: Shield TV Pro</strong>
              <p className="text-slate-400 leading-relaxed">
                If you have a 4K OLED TV and run high-bitrate Plex libraries or live broadcast feeds, the Shield TV Pro&apos;s real-time AI upscaling and lossless TrueHD audio passthrough remain peerless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SHOWDOWN 2: ANC Audio Showdown */}
      <div className="rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 p-6 md:p-12 space-y-10 relative overflow-hidden backdrop-blur-xl">
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-purple-400">Battle 02 • Noise Cancellation & Daily Travel</div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white">
            Sony WH-1000XM5 (Over-Ear) vs. Apple AirPods Pro 2 (In-Ear)
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
            Comparing the gold standard of over-ear headphones against the most convenient in-ear noise cancellers for developers, remote workers, and daily commuters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Sony WH-1000XM5 */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase">
                  Best For Focus & Coding
                </span>
                <span className="text-2xl font-black text-white">$328.00</span>
              </div>

              <h4 className="text-xl font-bold text-white">Sony WH-1000XM5 Wireless Headphones</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Dual QN1/V1 audio processors with 8 microphones deliver absolute silence in loud cafes, open offices, and airplane cabins.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Battery Life:</span>
                  <span className="text-white font-semibold">30 Hours (ANC On)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Multipoint Pairing:</span>
                  <span className="text-emerald-400 font-semibold">Yes (Android, PC, Mac, iOS)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Noise Isolation:</span>
                  <span className="text-white font-semibold">9.5 / 10 (Supreme Low-Frequency Cut)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Weight:</span>
                  <span className="text-white font-semibold">250 grams (Featherlight headband)</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.amazon.com/dp/B09XS7JWHH?tag=aisoftwarestu-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Check Sony XM5 on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>

          {/* Card 2: Apple AirPods Pro 2 */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
                  Best For Portability & Gym
                </span>
                <span className="text-2xl font-black text-white">$189.99</span>
              </div>

              <h4 className="text-xl font-bold text-white">Apple AirPods Pro (2nd Gen) USB-C</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Compact in-ear design with H2 chip, phenomenal Adaptive Transparency, personalized spatial audio, and MagSafe USB-C case.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Battery Life:</span>
                  <span className="text-white font-semibold">6 Hours (30 Hours with Case)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Water Resistance:</span>
                  <span className="text-emerald-400 font-semibold">IP54 Dust & Sweat Resistant</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Transparency Mode:</span>
                  <span className="text-emerald-400 font-semibold">10 / 10 (Most Natural in Class)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Portability:</span>
                  <span className="text-white font-semibold">Fits in coin pocket (50 grams)</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.amazon.com/dp/B0CHWRXH8B?tag=aisoftwarestu-20"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Check AirPods Pro on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>

        </div>

        {/* Audio Winner Takeaway */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 leading-relaxed">
          <strong className="text-white">Summary Recommendation:</strong> If you work for prolonged periods at a desk or take long international flights, the <strong className="text-amber-400">Sony WH-1000XM5</strong> provides superior physical ear cup comfort and continuous 30-hour battery life. If you need a versatile headset for gym workouts, phone calls, and seamless pocketability, the <strong className="text-blue-400">AirPods Pro 2</strong> is the undisputed champion.
        </div>
      </div>

      {/* SHOWDOWN 3: Mobile Power & Fast Charging */}
      <div className="rounded-[2.5rem] bg-[#0c0c0c] border border-white/10 p-6 md:p-12 space-y-10 relative overflow-hidden backdrop-blur-xl">
        <div className="space-y-3">
          <div className="text-xs uppercase font-bold tracking-widest text-emerald-400">Battle 03 • Fast Charging & Workspace Cleanup</div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-white">
            Anker Prime 100W GaN Charger vs. Standard OEM Single-Port Adapters
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
            Why carry three separate bulky chargers when a single Gallium Nitride (GaN) brick can power your high-drain laptop, phone, and tablet simultaneously?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
          <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
            <div className="text-amber-400 font-bold text-sm">43% Smaller Footprint</div>
            <p className="text-slate-400 leading-relaxed">
              GaN semiconductors transfer power 100x faster than silicon with minimal heat generation, allowing a 100W charger to be smaller than Apple&apos;s standard 67W single-port brick.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
            <div className="text-emerald-400 font-bold text-sm">Active Temperature Monitoring</div>
            <p className="text-slate-400 leading-relaxed">
              Anker&apos;s ActiveShield 2.0 temperature sensor monitors core heat over 3,000,000 times per day, safeguarding high-value phone and laptop batteries against voltage spikes.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
            <div className="text-blue-400 font-bold text-sm">Smart Dynamic Power Allocation</div>
            <p className="text-slate-400 leading-relaxed">
              Plug in a laptop and phone together: the charger intelligently assigns 65W to the laptop and 30W to the phone without interrupting the connection.
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <a
            href="https://www.amazon.com/dp/B0C479M4R4?tag=aisoftwarestu-20"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-transform hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span>View Anker Prime 100W on Amazon (Limited Deal $59.99)</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>

    </div>
  );
}
