"use client";

import { motion } from "framer-motion";
import { Download, Star, ExternalLink } from "lucide-react";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {uniqueApps.map((app, index) => (
          <motion.a
            href={app.link}
            target="_blank"
            rel="noreferrer"
            key={app.link + index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            {/* Cover Image Container */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg ring-1 ring-white/5 group-hover:ring-blue-500/40 transition-all duration-300">
              {app.headerImage ? (
                <img 
                  src={app.headerImage} 
                  alt={app.title + " cover"}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/30 text-sm">
                  No Cover Available
                </div>
              )}
              
              {app.installs >= 1000 && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-md shadow-[0_4px_12px_rgba(16,185,129,0.3)] border border-emerald-400/50 text-[12px] font-bold text-white tracking-wide z-10">
                  <Download className="w-4 h-4" />
                  <span>{formatInstalls(app.installs)}</span>
                </div>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 bg-blue-600 text-white p-3.5 rounded-full shadow-xl">
                    <ExternalLink className="w-5 h-5" />
                 </div>
              </div>
            </div>

            {/* App Info row (Icon + Details) */}
            <div className="flex items-start gap-4 px-1">
              <div className="relative shrink-0 w-16 h-16 rounded-[22.5%] overflow-hidden border border-white/10 shadow-md group-hover:shadow-blue-500/20 transition-all">
                <img 
                  src={app.icon} 
                  alt={app.title + " icon"} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col min-w-0 flex-grow justify-center min-h-[64px]">
                <h4 className="text-base font-semibold text-slate-100 truncate group-hover:text-blue-400 transition-colors" title={app.title}>
                  {app.title}
                </h4>
                <p className="text-[13px] text-slate-400 truncate mt-0.5">
                  AI Software Studio
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
