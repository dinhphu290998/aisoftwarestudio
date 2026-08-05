import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { fetchDeveloperApps } from "@/lib/playstore";
import { Portfolio } from "@/components/Portfolio";

// We fetch data on the server during build (or dynamically depending on Vercel config)
export const revalidate = 3600; // revalidate at most every hour

const DEVELOPERS = [
  "Snap Video - Video Downloader",
  "La%CC%83+Ti%C3%AA%CC%81n+Tu%CC%80ng", // Lã Tiến Tùng (url encoded)
  "T%E1%BA%A0+NG%E1%BB%8CC+QU%E1%BB%90C+B%E1%BA%A2O" // TẠ NGỌC QUỐC BẢO
];

export default async function Home() {
  // Fetch apps from all developers in parallel
  const allAppsPromises = DEVELOPERS.map(dev => fetchDeveloperApps(dev));
  const allAppsResults = await Promise.all(allAppsPromises);
  const allApps = allAppsResults.flat();

  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 selection:bg-blue-500/30 flex flex-col items-center overflow-hidden font-sans">
      
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-600/5 blur-[150px] pointer-events-none" />

      {/* Glass Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 p-[1px]">
              <div className="w-full h-full bg-black/50 backdrop-blur-md rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              AI Software Studio
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <a 
            href="mailto:contact@aisoftwarestudio.co"
            className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Work With Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-48 pb-32 flex flex-col items-center text-center z-10 relative">
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

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-light">
          We are a premier app development studio building high-performance, beautiful, and scalable mobile experiences trusted by millions.
        </p>
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

      {/* Footer */}
      <footer id="contact" className="w-full border-t border-white/10 mt-20 z-10 relative bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-[1px]">
               <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                 <Code2 className="w-4 h-4 text-white" />
               </div>
            </div>
            <span className="font-bold text-xl tracking-tight">AI Software Studio</span>
          </div>
          
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} AI Software Studio. All rights reserved.
          </div>
          
          <div className="flex gap-6">
             <a href="https://aisoftwarestudio.co" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">aisoftwarestudio.co</a>
             <a href="mailto:contact@aisoftwarestudio.co" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">contact@aisoftwarestudio.co</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
