import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Download, 
  Users, 
  Activity, 
  ShoppingBag,
  ExternalLink,
  Flame,
  CheckCircle2
} from "lucide-react";
import { getAllStudioApps, type AppData } from "@/lib/playstore";
import { Portfolio } from "@/components/Portfolio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { InteractiveBackground } from "@/components/InteractiveBackground";

// Cache for 60 seconds to ensure fresh data
export const revalidate = 60;

export const metadata = {
  title: "AI Software Studio | Premium Mobile Apps & Tech Reviews",
  description: "Pioneering high-performance mobile applications with 10M+ global users and benchmark-tested consumer tech hardware reviews.",
  alternates: {
    canonical: "https://aisoftwarestudio.co",
  },
};

export default async function Home() {
  const allApps: AppData[] = await getAllStudioApps();

  return (
    <main className="min-h-screen bg-transparent text-slate-50 selection:bg-blue-500/30 flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* High-Performance Lightweight Ambient Background */}
      <InteractiveBackground />

      {/* Floating Modern Glassmorphism Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-36 pb-20 min-h-[85vh] flex flex-col items-center justify-center text-center z-10 relative">
        
        {/* Modern Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs md:text-sm font-semibold mb-8 backdrop-blur-xl shadow-lg shadow-black/50 hover:border-blue-500/30 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
            AI Software Studio
          </span>
          <span className="text-slate-500">•</span>
          <span>10M+ Global Downloads & Hardware Reviews</span>
        </div>
        
        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-8 leading-[1.08] max-w-5xl">
          Engineering the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-emerald-400">
            Digital Frontier
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-normal">
          We build high-performance mobile applications and publish independent, benchmark-tested reviews of the best streaming and developer hardware.
        </p>
        
        {/* Hero Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Explore App Portfolio</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <Link
            href="/reviews"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Tech Hardware Reviews</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Studio Metrics Stats Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 p-4 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
          <div className="p-4 rounded-2xl bg-white/[0.02] text-center space-y-1">
            <div className="text-2xl md:text-3xl font-black text-white">10M+</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Total Installs</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] text-center space-y-1">
            <div className="text-2xl md:text-3xl font-black text-amber-300 flex items-center justify-center gap-1">
              <span>4.8</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Average Rating</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] text-center space-y-1">
            <div className="text-2xl md:text-3xl font-black text-emerald-400">12+</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Active Apps</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] text-center space-y-1">
            <div className="text-2xl md:text-3xl font-black text-blue-400">99.9%</div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Uptime SLA</div>
          </div>
        </div>

      </section>

      {/* Live Apps Portfolio Showcase */}
      <section id="portfolio" className="w-full max-w-7xl px-6 py-24 z-10 relative border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Download className="w-3.5 h-3.5" />
              <span>Production Google Play Releases</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Our Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Portfolio</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Explore our fleet of mobile apps across streaming, video tools, short drama entertainment, and daily utilities.
            </p>
          </div>
        </div>

        <Portfolio apps={allApps} />
      </section>

      {/* Featured Hardware Reviews & Amazon Gear Section */}
      <section className="w-full max-w-7xl px-6 py-24 z-10 relative border-t border-white/5">
        <div className="p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 backdrop-blur-2xl relative overflow-hidden space-y-10">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Lab-Tested Tech Hardware</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Curated Electronics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Hardware Reviews</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Tested and verified gear for 4K IPTV streaming, mobile fast-charging, and developer desk setups. Direct links to official Amazon listings with Prime shipping.
              </p>
            </div>

            <Link 
              href="/reviews" 
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm transition-all duration-300 shadow-lg shadow-amber-500/25 hover:scale-105 shrink-0"
            >
              <span>Explore All Reviews & Store</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Featured Products Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pick 1 */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-full aspect-[4/3] rounded-xl bg-white/[0.02] p-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/products/fire-tv-4k-max.jpg" 
                    alt="Amazon Fire TV Stick 4K Max" 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold">Best Seller</span>
                  <span className="text-emerald-400 font-semibold">Prime</span>
                </div>
                <h4 className="font-bold text-white text-sm line-clamp-2">Amazon Fire TV Stick 4K Max</h4>
                <p className="text-xs text-slate-400 line-clamp-2">Wi-Fi 6E, 4K Dolby Vision, hardware AV1 decoding for zero IPTV buffering.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-lg font-black text-white">$44.99</span>
                <a 
                  href="https://www.amazon.com/dp/B0BP9SN37B?tag=aisoftwarestu-20" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Pick 2 */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-full aspect-[4/3] rounded-xl bg-white/[0.02] p-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/products/anker-prime-100w-gan.jpg" 
                    alt="Anker Prime 100W GaN Charger" 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-bold">Fast Charging</span>
                  <span className="text-emerald-400 font-semibold">Prime</span>
                </div>
                <h4 className="font-bold text-white text-sm line-clamp-2">Anker Prime 100W GaN Charger</h4>
                <p className="text-xs text-slate-400 line-clamp-2">3-Port compact wall charger with ActiveShield 2.0 temperature protection.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-lg font-black text-white">$59.99</span>
                <a 
                  href="https://www.amazon.com/dp/B0C47FB9M6?tag=aisoftwarestu-20" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Pick 3 */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-full aspect-[4/3] rounded-xl bg-white/[0.02] p-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/products/sony-wh1000xm5.jpg" 
                    alt="Sony WH-1000XM5 Headphones" 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-bold">Premium ANC</span>
                  <span className="text-emerald-400 font-semibold">Prime</span>
                </div>
                <h4 className="font-bold text-white text-sm line-clamp-2">Sony WH-1000XM5 Headphones</h4>
                <p className="text-xs text-slate-400 line-clamp-2">Industry-leading noise cancellation, 30-hour battery, LDAC Hi-Res sound.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-lg font-black text-white">$328.00</span>
                <a 
                  href="https://www.amazon.com/dp/B09XS7JWHH?tag=aisoftwarestu-20" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Pick 4 */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-full aspect-[4/3] rounded-xl bg-white/[0.02] p-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/products/nvidia-shield-tv-pro.jpg" 
                    alt="NVIDIA Shield TV Pro" 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold">Pro Cinema</span>
                  <span className="text-emerald-400 font-semibold">Prime</span>
                </div>
                <h4 className="font-bold text-white text-sm line-clamp-2">NVIDIA Shield TV Pro</h4>
                <p className="text-xs text-slate-400 line-clamp-2">AI 4K upscaling, Gigabit Ethernet, Dolby Atmos, lossless audio passthrough.</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-lg font-black text-white">$199.99</span>
                <a 
                  href="https://www.amazon.com/dp/B07YP94PBJ?tag=aisoftwarestu-20" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Amazon Associates Disclosure Bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-400 gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>"As an Amazon Associate I earn from qualifying purchases."</strong></span>
            </div>
            <Link href="/affiliate-disclosure" className="text-amber-400 hover:underline">
              Read our full Affiliate Disclosure Policy →
            </Link>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Global Footer */}
      <Footer />

    </main>
  );
}
