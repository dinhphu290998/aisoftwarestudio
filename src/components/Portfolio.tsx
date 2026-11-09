"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, Search } from "lucide-react";
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
  const [search, setSearch] = useState("");

  if (!apps || apps.length === 0) {
    return (
      <div className="w-full text-center py-20 text-slate-500">
        Loading or no apps found...
      </div>
    );
  }

  // Ensure unique apps in case of overlap between developers
  const uniqueApps = apps.filter((app, index, self) =>
    index === self.findIndex((t) => t.link === app.link)
  );

  const filteredApps = uniqueApps.filter(app => 
    !search || 
    app.title.toLowerCase().includes(search.toLowerCase()) || 
    (app.developer && app.developer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full space-y-8">
      {/* Filter / Counter row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          Showing <span className="text-white font-semibold">{filteredApps.length}</span> of <span className="text-white font-semibold">{uniqueApps.length}</span> official applications
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search applications..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredApps.map((app, index) => (
          <motion.a
            href={app.link}
            target="_blank"
            rel="noreferrer"
            key={app.link + index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.4), ease: "easeOut" }}
            className="group flex flex-col gap-4 cursor-pointer"
          >
            {/* Cover Image Container */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg ring-1 ring-white/5 group-hover:ring-blue-500/40 transition-all duration-300">
              {app.headerImage ? (
                <img 
                  src={app.headerImage} 
                  alt={app.title + " cover"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/30 text-sm font-medium">
                  AI Software Studio
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
              <div className="relative shrink-0 w-16 h-16 rounded-[22.5%] overflow-hidden border border-white/10 shadow-md group-hover:shadow-blue-500/20 transition-all bg-white/5">
                <img 
                  src={app.icon} 
                  alt={app.title + " icon"} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col min-w-0 flex-grow justify-center min-h-[64px]">
                <h4 className="text-base font-semibold text-slate-100 truncate group-hover:text-blue-400 transition-colors" title={app.title}>
                  {app.title}
                </h4>
                <p className="text-[13px] text-slate-400 truncate mt-0.5">
                  {app.developer || (app.developerId === "GoPlay+Tech" ? "AI Software Studio Partner" : "AI Software Studio")}
                </p>
                {app.updated && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-emerald-400">
                    <Calendar className="w-4 h-4" />
                    <p className="text-sm font-medium truncate">
                      Updated: {app.updated}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
