"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, Search, RefreshCw, CheckCircle2, Star } from "lucide-react";
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
  const [appsList, setAppsList] = useState<AppData[]>(apps || []);
  const [search, setSearch] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncStatus, setLastSyncStatus] = useState<string | null>(null);

  // Background auto-sync on component mount to ensure freshest data from Google Play
  useEffect(() => {
    let isMounted = true;
    const fetchLatest = async () => {
      try {
        const res = await fetch('/api/apps');
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data.apps && Array.isArray(data.apps) && data.apps.length > 0) {
          setAppsList(data.apps);
          setLastSyncStatus("Live Synced");
        }
      } catch (err) {
        // Silently keep static initial data
      }
    };

    fetchLatest();

    return () => {
      isMounted = false;
    };
  }, []);

  // Manual one-click sync handler
  const handleManualSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setLastSyncStatus("Updating from Play Store...");

    try {
      const res = await fetch('/api/apps?refresh=true');
      if (res.ok) {
        const data = await res.json();
        if (data.apps && Array.isArray(data.apps) && data.apps.length > 0) {
          setAppsList(data.apps);
          setLastSyncStatus("Updated just now");
          setTimeout(() => setLastSyncStatus("Live Synced"), 3000);
        }
      }
    } catch (e) {
      setLastSyncStatus("Sync failed");
    } finally {
      setIsSyncing(false);
    }
  };

  if (!appsList || appsList.length === 0) {
    return (
      <div className="w-full text-center py-20 text-slate-500">
        Loading official applications...
      </div>
    );
  }

  // Ensure unique apps in case of overlap between developers
  const uniqueApps = appsList.filter((app, index, self) =>
    index === self.findIndex((t) => t.link === app.link)
  );

  const filteredApps = uniqueApps.filter(app => 
    !search || 
    app.title.toLowerCase().includes(search.toLowerCase()) || 
    (app.developer && app.developer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full space-y-8">
      {/* Filter / Counter / Live Sync row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-slate-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredApps.length}</span> of <span className="text-white font-semibold">{uniqueApps.length}</span> official applications
          </div>
          {lastSyncStatus && (
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{lastSyncStatus}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
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

          <button
            onClick={handleManualSync}
            disabled={isSyncing}
            title="Sync latest metadata live from Google Play"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-medium transition-all shrink-0 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${isSyncing ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">{isSyncing ? "Syncing..." : "Sync Play Store"}</span>
          </button>
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
              
              <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                {app.scoreText && app.scoreText !== "0" && app.scoreText !== "0.0" && (
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md shadow-md border border-amber-400/50 text-[11px] font-bold text-white tracking-wide">
                    <Star className="w-3 h-3 fill-white" />
                    <span>{app.scoreText}</span>
                  </div>
                )}
                {app.installs >= 1000 && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-md shadow-[0_4px_12px_rgba(16,185,129,0.3)] border border-emerald-400/50 text-[12px] font-bold text-white tracking-wide">
                    <Download className="w-3.5 h-3.5" />
                    <span>{formatInstalls(app.installs)}</span>
                  </div>
                )}
              </div>

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
                  {app.developer || (app.developerId === "GoPlay Tech" ? "AI Software Studio Partner" : "AI Software Studio")}
                </p>
                {app.updated && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-emerald-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <p className="text-xs font-medium truncate">
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
