import { Sparkles, ArrowDown } from "lucide-react";
import { fetchDeveloperApps } from "@/lib/playstore";
import { Portfolio } from "@/components/Portfolio";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { InteractiveBackground } from "@/components/InteractiveBackground";

// We fetch data on the server during build (or dynamically depending on Vercel config)
export const revalidate = 600; // revalidate at most every 10 minutes

const DEVELOPERS = [
  "Snap Video - Video Downloader",
  "AI+Software+Partner",
  "Inception+-+AI+Software",
  "GoPlay+Tech"
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

      <Contact />

      <Footer />
    </main>
  );
}
