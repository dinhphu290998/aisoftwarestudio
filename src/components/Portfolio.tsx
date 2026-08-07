"use client";

import { motion } from "framer-motion";
import { ExternalLink, Download, Star } from "lucide-react";
import type { AppData } from "@/lib/playstore";

interface PortfolioProps {
  apps: AppData[];
}

function formatInstalls(installs: number) {
  if (!installs) return "New";
  if (installs >= 1000000000) return (installs / 1000000000).toFixed(1).replace('.0', '') + "B+";
  if (installs >= 1000000) return (installs / 1000000).toFixed(1).replace('.0', '') + "M+";
  if (installs >= 1000) return (installs / 1000).toFixed(0) + "K+";
  return installs.toString() + "+";
}

export function Portfolio({ apps }: PortfolioProps) {
  if (!apps || apps.length === 0) {
    return (
      <div className="w-full text-center py-20 text-slate-500">
        Loading or no apps found...
      </div>
    );
  }

  // Ensure unique apps in case of overlap between developers
  let uniqueApps = apps.filter((app, index, self) =>
    index === self.findIndex((t) => t.link === app.link)
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {uniqueApps.map((app, index) => (
          <motion.a
            href={app.link}
            target="_blank"
            rel="noreferrer"
            key={app.link + index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/0 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500"
          >
            {/* Inner Card Container for Gradient Border Effect */}
            <div className="relative flex flex-col h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[1.8rem] p-6 overflow-hidden border border-white/5 group-hover:border-transparent transition-colors">
              
              {/* Dynamic Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-emerald-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-emerald-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              
              {/* Top Section: Icon & Badge */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-400/40 transition-colors duration-500" />
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-black/50 group-hover:ring-white/40 transition-all duration-500 transform group-hover:scale-105">
                    <img 
                      src={app.icon} 
                      alt={app.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* Installs Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 backdrop-blur-md group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  <span>{formatInstalls(app.installs)}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-3 text-white/90 group-hover:text-white line-clamp-2 leading-snug tracking-tight">
                  {app.title}
                </h4>
                
                <div className="mt-auto pt-6 flex items-center justify-between text-sm font-medium">
                  <span className="text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    View on Play Store
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:text-white text-white/40 transition-all duration-300 transform group-hover:translate-x-1">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
