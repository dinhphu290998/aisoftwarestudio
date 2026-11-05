"use client";

import React, { useState, useMemo } from "react";
import { 
  Download, 
  Star, 
  Search, 
  Tv, 
  Sparkles, 
  Film, 
  Wrench, 
  Check, 
  Flame,
  ArrowUpRight,
  PhoneCall,
  FileText,
  Bot,
  Palette,
  MonitorPlay,
  Clapperboard,
  ShieldCheck
} from "lucide-react";
import type { AppData } from "@/lib/playstore";

interface PortfolioProps {
  apps: AppData[];
}

function formatInstalls(installs: number) {
  if (!installs) return "New";
  if (installs >= 1000000000) return (installs / 1000000000).toFixed(1).replace(".0", "") + "B+";
  if (installs >= 1000000) return (installs / 1000000).toFixed(1).replace(".0", "") + "M+";
  if (installs >= 1000) return (installs / 1000).toFixed(0) + "K+";
  return installs.toString() + "+";
}

const APP_ICONS: Record<string, React.ReactNode> = {
  tv: <Tv className="w-6 h-6 text-white" />,
  download: <Download className="w-6 h-6 text-white" />,
  drama: <Film className="w-6 h-6 text-white" />,
  caller: <PhoneCall className="w-6 h-6 text-white" />,
  pdf: <FileText className="w-6 h-6 text-white" />,
  cleaner: <Sparkles className="w-6 h-6 text-white" />,
  ai: <Bot className="w-6 h-6 text-white" />,
  image: <Palette className="w-6 h-6 text-white" />,
  cinema: <MonitorPlay className="w-6 h-6 text-white" />,
  reel: <Clapperboard className="w-6 h-6 text-white" />
};

export function Portfolio({ apps }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Deduplicate apps by link
  const uniqueApps = useMemo(() => {
    if (!apps || apps.length === 0) return [];
    return apps.filter((app, index, self) =>
      index === self.findIndex((t) => t.link === app.link)
    );
  }, [apps]);

  // Filtered by category and search
  const filteredApps = useMemo(() => {
    return uniqueApps.filter((app) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "streaming" && (app.category === "streaming" || app.title.toLowerCase().includes("iptv"))) ||
        (selectedCategory === "drama" && (app.category === "drama" || app.title.toLowerCase().includes("drama"))) ||
        (selectedCategory === "video" && (app.category === "video" || app.title.toLowerCase().includes("video"))) ||
        (selectedCategory === "utilities" && (app.category === "utilities" || app.category === "ai" || app.title.toLowerCase().includes("cleaner") || app.title.toLowerCase().includes("caller") || app.title.toLowerCase().includes("pdf") || app.title.toLowerCase().includes("ai")));

      const matchesSearch =
        searchQuery === "" ||
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (app.tagline && app.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (app.categoryLabel && app.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [uniqueApps, selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-8">
      
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>All Apps ({uniqueApps.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("streaming")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === "streaming"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Tv className="w-3.5 h-3.5 text-blue-400" />
            <span>IPTV & Smart TV</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("video")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === "video"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Video & Media</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("drama")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === "drama"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Film className="w-3.5 h-3.5 text-pink-400" />
            <span>Short Drama Reels</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("utilities")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === "utilities"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-purple-400" />
            <span>AI & Utilities</span>
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* App Grid */}
      {filteredApps.length === 0 ? (
        <div className="w-full text-center py-20 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
          <p className="text-slate-400 text-sm">No applications found matching your query.</p>
          <button
            type="button"
            onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
            className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app, index) => {
            const iconNode = APP_ICONS[app.iconKey] || <Sparkles className="w-6 h-6 text-white" />;

            return (
              <div
                key={app.link + index}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#0c0c0e]/90 border border-white/10 hover:border-blue-500/40 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                {/* Top Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-colors" />

                {/* Top Row: Icon + Installs & Rating Badges */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg shadow-black/50 group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                    {iconNode}
                  </div>

                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    {/* Installs */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <Download className="w-3.5 h-3.5" />
                      <span>{formatInstalls(app.installs)}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{app.scoreText || "4.8"}</span>
                    </div>
                  </div>
                </div>

                {/* Content Row */}
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="inline-block text-[11px] uppercase tracking-wider font-bold text-slate-400">
                      {app.categoryLabel}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {app.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {app.tagline}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  {app.features && app.features.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 py-3 border-t border-white/5">
                      {app.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Link Button */}
                  <div className="pt-2">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all duration-300 group/btn shadow-sm"
                    >
                      <span>Get on Google Play</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
