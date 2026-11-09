"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  Flame, 
  Tv, 
  Smartphone, 
  HardDrive, 
  Headphones, 
  Video, 
  Zap, 
  Star, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Percent
} from "lucide-react";
import { AMAZON_PRODUCTS, StoreProduct } from "@/data/amazonProducts";
import { generateSalesArticle } from "@/lib/salesArticles";
import { ComparisonShowdown } from "./ComparisonShowdown";
import { BuyingGuides } from "./BuyingGuides";

const CATEGORY_TABS = [
  { id: "all", label: "All Tech Guides (102)", icon: Flame },
  { id: "streaming", label: "Streaming & 4K TV (18)", icon: Tv },
  { id: "mobile", label: "Mobile Power & GaN (17)", icon: Smartphone },
  { id: "storage", label: "Fast SSDs & Storage (16)", icon: HardDrive },
  { id: "audio", label: "Audio & Headphones (17)", icon: Headphones },
  { id: "creator", label: "Creator & Video Studio (17)", icon: Video },
  { id: "studio", label: "Smart Desk & Hubs (17)", icon: Zap },
];

export function GuidesHub() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredArticles = useMemo(() => {
    return AMAZON_PRODUCTS.filter((prod) => {
      const matchCat = selectedCat === "all" || prod.category === selectedCat;
      const matchSearch =
        query === "" ||
        prod.name.toLowerCase().includes(query.toLowerCase()) ||
        prod.brand.toLowerCase().includes(query.toLowerCase()) ||
        prod.categoryLabel.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCat, query]);

  const displayed = filteredArticles.slice(0, visibleCount);

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white py-2.5 px-4 text-xs md:text-sm font-semibold text-center shadow-lg relative z-20 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
        <span>
          <strong>2026 Tech Buyer&apos;s Guides:</strong> Hands-on lab benchmarks, head-to-head showdowns, and verified discount deals for 100+ top-selling Amazon tech products.
        </span>
      </div>

      {/* Main Hero Header */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-12 z-10 relative">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AI Sales Insights & In-Depth Buyer Guides</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Tech Buyer&apos;s Guides & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-emerald-400">
              Hardware Comparison Showdowns
            </span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Every article is engineered by AI Software Studio: Real problems solved, side-by-side rival benchmark comparisons, target buyer persona analysis, and verified Amazon Prime pricing.
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="mt-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(24);
                }}
                placeholder="Search buying guides by product name, brand, or category..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div className="text-xs text-slate-400">
              Showing <span className="text-white font-bold">{displayed.length}</span> of <span className="text-white font-bold">{filteredArticles.length}</span> buying guide articles
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedCat === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedCat(tab.id);
                    setVisibleCount(24);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30"
                      : "bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((prod) => {
            const article = generateSalesArticle(prod);
            const discountPercent = article.discountPercent;

            return (
              <div
                key={prod.id}
                className="rounded-3xl bg-[#0c0c0f] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] relative"
              >
                {/* Image & Badges */}
                <div className="relative w-full aspect-[4/3] bg-[#141418] flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-slate-950">
                      {prod.badge}
                    </span>
                    {discountPercent > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black">
                        -{discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  <img
                    src={prod.image}
                    alt={prod.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Article Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                      <span>{prod.brand} • {prod.categoryLabel}</span>
                      <div className="flex items-center text-amber-400 gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-white font-bold">{prod.rating}</span>
                      </div>
                    </div>

                    <Link
                      href={`/reviews/${prod.id}`}
                      className="font-bold text-white text-base line-clamp-2 hover:text-blue-400 transition-colors leading-snug block"
                    >
                      {article.salesHeadline}
                    </Link>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {article.inDepthPitch}
                    </p>
                  </div>

                  {/* Highlights / Versus preview */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 space-y-1">
                    <div className="text-[10px] font-bold uppercase text-slate-400">Head-to-Head Benchmark:</div>
                    <div className="text-[11px] text-amber-300 font-semibold truncate">
                      vs {article.comparison.rivalName}
                    </div>
                  </div>

                  {/* Topic Cluster Mini Links */}
                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                      Explore Topic Cluster Guides:
                    </div>
                    <div className="flex flex-wrap gap-1 text-[11px]">
                      <Link href={`/reviews/${prod.id}/vs-competitors`} className="px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors">
                        ⚔️ Showdown
                      </Link>
                      <Link href={`/reviews/${prod.id}/buyers-guide`} className="px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors">
                        📘 Buyer&apos;s Guide
                      </Link>
                      <Link href={`/reviews/${prod.id}/setup-guide`} className="px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors">
                        ⚙️ Setup Guide
                      </Link>
                      <Link href={`/reviews/${prod.id}/mistakes-to-avoid`} className="px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors">
                        ⚠️ 5 Mistakes
                      </Link>
                      <Link href={`/reviews/${prod.id}/long-term-verdict`} className="px-2 py-0.5 rounded-md bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors">
                        ⏳ Long-Term
                      </Link>
                    </div>
                  </div>

                  {/* Pricing & CTA Actions */}
                  <div className="pt-3 border-t border-white/5 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-white">${prod.dealPrice}</span>
                        {prod.originalPrice > prod.dealPrice && (
                          <span className="text-xs text-slate-500 line-through ml-2">${prod.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold">Amazon Prime</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/reviews/${prod.id}`}
                        className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs text-center flex items-center justify-center gap-1 transition-all"
                      >
                        <span>Read Review</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={prod.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1 transition-all shadow-md shadow-amber-500/20"
                      >
                        <span>Buy on Amazon</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {filteredArticles.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all"
            >
              Load More Buying Guides ({filteredArticles.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>

      {/* Embedded Showdowns & Buyer Guides */}
      <section className="w-full border-t border-white/5 py-16">
        <ComparisonShowdown />
      </section>

      <section className="w-full border-t border-white/5 py-16">
        <BuyingGuides />
      </section>
    </div>
  );
}
