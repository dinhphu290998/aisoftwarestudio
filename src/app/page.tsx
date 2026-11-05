import { Sparkles, ArrowDown } from "lucide-react";
import { fetchDeveloperApps } from "@/lib/playstore";
import { Portfolio } from "@/components/Portfolio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { InteractiveBackground } from "@/components/InteractiveBackground";

// We fetch data on the server. Cache is set to 60 seconds to ensure fresh data while avoiding rate-limiting.
export const revalidate = 60; 

const DEVELOPERS = [
  "Snap Video - Video Downloader",
  "AI+Software+Partner",
  "Inception+-+AI+Software",
  "GoPlay+Tech",
  "AI+Software+Entertainment",
  "AI+SOFTWARE+STUDIO"
];

export default async function Home() {
  // Fetch apps from all developers in parallel
  const allAppsPromises = DEVELOPERS.map(dev => fetchDeveloperApps(dev));
  const allAppsResults = await Promise.all(allAppsPromises);
  const allApps = allAppsResults.flat();
  
  // Sort globally across all developers by real installs, then by updated date
  allApps.sort((a, b) => {
    if (b.installs !== a.installs) {
      return b.installs - a.installs;
    }
    return (b.updatedTimestamp || 0) - (a.updatedTimestamp || 0);
  });

  return (
    <main className="min-h-screen bg-transparent text-slate-50 selection:bg-blue-500/30 flex flex-col items-center overflow-hidden font-sans">
      
      <InteractiveBackground />

      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-32 pb-16 min-h-[90vh] flex flex-col items-center justify-center text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Award-winning mobile applications</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          Crafting the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x">
             Digital Future
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-14 leading-relaxed font-light">
          We are a premier app development studio building high-performance, beautiful, and scalable mobile experiences trusted by millions.
        </p>
        
        <a 
          href="#portfolio"
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-500" />
          
          {/* Solid background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-emerald-600/90 backdrop-blur-md border border-white/20 group-hover:border-white/40 transition-colors duration-500 rounded-full" />
          
          {/* Animated shine effect */}
          <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

          <span className="relative z-10 text-white tracking-wide">Explore Our Work</span>
          <ArrowDown className="relative z-10 w-5 h-5 text-white group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </section>

      {/* Live Portfolio Section */}
      <section id="portfolio" className="w-full max-w-7xl px-6 py-32 z-10 relative border-t border-white/5">
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Portfolio</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A live showcase of our applications currently available on the Google Play Store, fetched directly in real-time.
          </p>
        </div>

        <Portfolio apps={allApps} />
      </section>

      {/* Featured Hardware Reviews & Tech Gear Section */}
      <section className="w-full max-w-7xl px-6 py-24 z-10 relative border-t border-white/5">
        <div className="p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 backdrop-blur-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                <span>Tested by Studio Engineers</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Curated Tech Gear & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Hardware Reviews</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                We independently test and review streaming sticks, external NVMe SSDs, fast GaN chargers, and smart studio hardware to help our users get the best performance from mobile and media apps.
              </p>
            </div>

            <a 
              href="https://aisoftwarestudio.co/reviews" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:scale-105 shrink-0"
            >
              <span>Explore All Reviews</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-amber-400 font-bold text-sm">4K Media & IPTV Players</div>
              <div className="text-white font-semibold">Amazon Fire TV 4K Max & NVIDIA Shield</div>
              <p className="text-slate-400 text-xs leading-relaxed">Tested for buffer-free AV1 and HEVC live streaming performance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-amber-400 font-bold text-sm">Mobile Power & GaN Tech</div>
              <div className="text-white font-semibold">Anker Prime 100W & MagGo Qi2</div>
              <p className="text-slate-400 text-xs leading-relaxed">Rapid multi-device charging and magnetic wireless power banks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-amber-400 font-bold text-sm">Audio & Smart Controllers</div>
              <div className="text-white font-semibold">Sony WH-1000XM5 & Stream Deck</div>
              <p className="text-slate-400 text-xs leading-relaxed">Industry standard active noise cancellation and macro workflow automation.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-400 gap-2">
            <span>"As an Amazon Associate I earn from qualifying purchases."</span>
            <a href="https://aisoftwarestudio.co/affiliate-disclosure" className="text-amber-400 hover:underline">
              View Affiliate Disclosure Policy →
            </a>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
