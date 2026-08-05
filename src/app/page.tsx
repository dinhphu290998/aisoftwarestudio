"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Image as ImageIcon, Video, Code2, Sparkles, ChevronRight, Play } from "lucide-react";
import Link from "next/link";

const apps = [
  {
    name: "Snap Video Downloader",
    description: "Fast, reliable, and high-quality video downloading across platforms.",
    icon: <Download className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-blue-900/20",
    border: "border-blue-500/30",
    link: "https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader",
  },
  {
    name: "Snap Video No Watermark",
    description: "Download your favorite short videos cleanly without any watermarks.",
    icon: <Video className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-purple-900/20",
    border: "border-purple-500/30",
    link: "https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader",
  },
  {
    name: "Snap Video",
    description: "The ultimate media companion for offline viewing and sharing.",
    icon: <Play className="w-6 h-6 text-rose-400" />,
    color: "from-rose-500/20 to-rose-900/20",
    border: "border-rose-500/30",
    link: "https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader",
  },
  {
    name: "AI Image Generator",
    description: "Turn your imagination into reality with our powerful AI image engine.",
    icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-900/20",
    border: "border-emerald-500/30",
    link: "https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-50 selection:bg-blue-500/30 flex flex-col items-center overflow-hidden">
      
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full max-w-7xl px-6 py-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">AI Software Studio</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <Link href="#products" className="hover:text-white transition-colors">Products</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <a 
          href="mailto:contact@aisoftwarestudio.co"
          className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all backdrop-blur-md"
        >
          Get in Touch
        </a>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-32 pb-40 flex flex-col items-center text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Next-generation mobile applications</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Building the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
        >
          At AI Software Studio, we craft premium, high-performance mobile applications designed to empower users and simplify everyday tasks.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#products" className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
            Explore Our Apps <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://play.google.com/store/apps/developer?id=Snap+Video+-+Video+Downloader" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            View on Google Play
          </a>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full max-w-7xl px-6 py-32 z-10 relative">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Featured Products</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Discover our suite of applications trusted by millions of users worldwide. From seamless video downloading to AI-powered creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app, index) => (
            <motion.a
              href={app.link}
              target="_blank"
              rel="noreferrer"
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${app.color} border ${app.border} backdrop-blur-sm group cursor-pointer flex flex-col`}
            >
              <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center mb-6 border border-white/5">
                {app.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{app.name}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{app.description}</p>
              <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                <span>View App</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full border-t border-white/10 mt-20 z-10 relative bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">AI Software Studio</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AI Software Studio. All rights reserved.
          </div>
          
          <div className="flex gap-4">
             <a href="https://aisoftwarestudio.co" className="text-sm text-slate-400 hover:text-white transition-colors">aisoftwarestudio.co</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
