"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ComparisonShowdown } from "./ComparisonShowdown";
import { BuyingGuides } from "./BuyingGuides";
import { 
  ShoppingBag, 
  Search, 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  Truck, 
  ShieldCheck, 
  Percent, 
  Tv, 
  Smartphone, 
  Headphones, 
  SlidersHorizontal,
  Flame,
  ChevronRight,
  Info,
  Zap,
  HardDrive,
  Video,
  Scale,
  BookOpen,
  DollarSign,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { AMAZON_PRODUCTS, PRODUCT_CATEGORIES, type StoreProduct } from "@/data/amazonProducts";

export { type StoreProduct };

// Fallback visual category icons
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  streaming: <Tv className="w-8 h-8 text-amber-400" />,
  mobile: <Smartphone className="w-8 h-8 text-amber-400" />,
  storage: <HardDrive className="w-8 h-8 text-amber-400" />,
  audio: <Headphones className="w-8 h-8 text-amber-400" />,
  creator: <Video className="w-8 h-8 text-amber-400" />,
  studio: <Zap className="w-8 h-8 text-amber-400" />,
};

export function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [activeModalProduct, setActiveModalProduct] = useState<StoreProduct | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = AMAZON_PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.dealPrice - b.dealPrice);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.dealPrice - a.dealPrice);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "discount") {
      result.sort((a, b) => {
        const discA = (a.originalPrice - a.dealPrice) / a.originalPrice;
        const discB = (b.originalPrice - b.dealPrice) / b.originalPrice;
        return discB - discA;
      });
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Reset pagination when category or search changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(24);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(24);
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="w-full flex flex-col">
      
      {/* Top Amazon Deals Hub Banner */}
      <div className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white py-2.5 px-4 text-xs md:text-sm font-medium text-center shadow-lg relative z-20 flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-yellow-200 animate-pulse shrink-0" />
        <span>
          <strong>Amazon Tech Hub:</strong> Over 100+ Verified Deals on Streaming Boxes, Fast GaN Chargers, NVMe SSDs & Noise-Cancelling Audio • Prime 1-Day Delivery
        </span>
      </div>

      {/* Main Store Header & Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-8 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Official Amazon Associates Tech Showcase • 100+ Curated Products</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Shop Top Tech & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Electronics</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Lab-tested and engineer-approved hardware for 4K IPTV streaming, high-speed mobile charging, content creators, and developer desk setups. Direct links to official Amazon listings with Prime shipping.
            </p>
          </div>

          {/* Amazon Associates Legal Disclosure Alert */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 max-w-md text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Amazon Associates Program Participant</span>
            </div>
            <p className="text-[12px] text-slate-300 leading-snug">
              <strong className="text-white">&quot;As an Amazon Associate I earn from qualifying purchases.&quot;</strong> Prices and availability subject to change on Amazon.com.
            </p>
            <Link href="/affiliate-disclosure" className="text-amber-400 underline hover:text-amber-300 text-[11px] inline-block pt-1">
              Read our full Affiliate Disclosure Policy →
            </Link>
          </div>
        </div>

        {/* Store Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Fast Prime 1-Day Delivery</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Genuine Certified Gear</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Star className="w-4 h-4 text-yellow-400 shrink-0 fill-yellow-400" />
            <span>Top-Rated Customer Picks</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Percent className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Verified Discount Deals</span>
          </div>
        </div>

        {/* Section Quick Jump Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 w-fit">
          <a
            href="#products"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 flex items-center gap-2 transition-all shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Product Catalog (100+)</span>
          </a>
          <a
            href="#comparisons"
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2 transition-all"
          >
            <Scale className="w-3.5 h-3.5 text-blue-400" />
            <span>Head-to-Head Comparisons</span>
          </a>
          <a
            href="#guides"
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2 transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>SEO Buyer&apos;s Guides</span>
          </a>
          <a
            href="#faq"
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2 transition-all"
          >
            <Info className="w-3.5 h-3.5 text-purple-400" />
            <span>Shopping FAQ</span>
          </a>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between pb-6 border-b border-white/10">
          
          {/* Categories Pill Switcher (6 Core Categories) */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "all"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>All Products ({AMAZON_PRODUCTS.length})</span>
            </button>

            <button
              onClick={() => handleCategoryChange("streaming")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "streaming"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Streaming & TV (18)</span>
            </button>

            <button
              onClick={() => handleCategoryChange("mobile")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "mobile"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile & Power (17)</span>
            </button>

            <button
              onClick={() => handleCategoryChange("storage")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "storage"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <HardDrive className="w-3.5 h-3.5" />
              <span>SSDs & Storage (16)</span>
            </button>

            <button
              onClick={() => handleCategoryChange("audio")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "audio"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Audio & Sound (17)</span>
            </button>

            <button
              onClick={() => handleCategoryChange("creator")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "creator"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Creator & Video (17)</span>
            </button>

            <button
              onClick={() => handleCategoryChange("studio")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "studio"
                  ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Desk & Studio (17)</span>
            </button>
          </div>

          {/* Search Box & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 100+ tech deals..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="featured" className="bg-[#111] text-white">Sort: Featured Deals</option>
                <option value="price-low" className="bg-[#111] text-white">Price: Low to High</option>
                <option value="price-high" className="bg-[#111] text-white">Price: High to Low</option>
                <option value="rating" className="bg-[#111] text-white">Highest Customer Rating</option>
                <option value="discount" className="bg-[#111] text-white">Biggest Discount %</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* Product Catalog Grid */}
      <section id="products" className="w-full max-w-7xl mx-auto px-6 py-10 z-10 relative">
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <div>
            Showing <span className="text-white font-bold">{displayedProducts.length}</span> of <span className="text-white font-bold">{filteredProducts.length}</span> products
          </div>
          {filteredProducts.length > visibleCount && (
            <button
              onClick={() => setVisibleCount(filteredProducts.length)}
              className="text-amber-400 hover:underline font-semibold"
            >
              View all ({filteredProducts.length}) →
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">No products found</h3>
            <p className="text-slate-400 text-sm">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => {
              const discountPercent = Math.round(((product.originalPrice - product.dealPrice) / product.originalPrice) * 100);
              const hasImgFailed = failedImages[product.id];

              return (
                <div 
                  key={product.id}
                  className="rounded-3xl bg-[#0d0d0d] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] relative"
                >
                  {/* Top Image Container */}
                  <div className="relative w-full aspect-square bg-[#141414] flex items-center justify-center p-6 border-b border-white/5 overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                        product.badge === "Best Seller" 
                          ? "bg-amber-500 text-slate-950" 
                          : product.badge === "Limited Deal"
                          ? "bg-red-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}>
                        {product.badge}
                      </span>
                      {discountPercent > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black">
                          -{discountPercent}% OFF
                        </span>
                      )}
                    </div>

                    {/* Stock Status */}
                    {product.inStock && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>In Stock</span>
                      </div>
                    )}

                    {/* Product Image with Graceful Fallback */}
                    {!hasImgFailed && product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={() => setFailedImages(prev => ({ ...prev, [product.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center rounded-2xl bg-gradient-to-br from-amber-500/5 via-white/[0.02] to-transparent border border-white/5 space-y-2 group-hover:border-amber-500/30 transition-colors">
                        <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-inner">
                          {CATEGORY_ICONS[product.category] || <ShoppingBag className="w-8 h-8 text-amber-400" />}
                        </div>
                        <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">{product.brand}</span>
                        <span className="text-xs text-slate-300 font-semibold line-clamp-2 px-2">{product.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase font-bold text-amber-400 tracking-wider flex items-center justify-between">
                        <span>{product.brand} • {product.categoryLabel}</span>
                      </div>

                      <a 
                        href={product.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer nofollow"
                        className="font-bold text-white text-sm line-clamp-2 hover:text-amber-400 transition-colors leading-snug"
                        title={product.name}
                      >
                        {product.name}
                      </a>

                      {/* Stars & Social Proof */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}`} 
                            />
                          ))}
                        </div>
                        <span className="text-white font-bold text-xs">{product.rating}</span>
                        <span className="text-slate-500 text-[11px]">({product.reviewsCount})</span>
                      </div>

                      <div className="text-[11px] text-slate-400">
                        {product.boughtPastMonth}
                      </div>
                    </div>

                    {/* Pricing Display */}
                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white">
                          ${product.dealPrice.toFixed(2)}
                        </span>
                        {product.originalPrice > product.dealPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {product.prime && (
                        <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                          <span className="text-[11px] px-1.5 py-0.2 bg-blue-500/20 rounded font-bold">prime</span>
                          <span className="text-[11px] text-slate-300">FREE One-Day Delivery</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Buttons */}
                  <div className="p-5 pt-0 space-y-2">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
                      <span>Buy on Amazon</span>
                      <ExternalLink className="w-3 h-3 text-slate-950" />
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/reviews/${product.id}`}
                        className="w-full py-2 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Bài Viết Review</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => setActiveModalProduct(product)}
                        className="w-full py-2 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5 text-slate-400" />
                        <span>Thông Số</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Load More Pagination Button */}
        {filteredProducts.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 24, filteredProducts.length))}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-bold transition-all hover:scale-105 shadow-lg"
            >
              <span>Load More Tech Products ({filteredProducts.length - visibleCount} remaining)</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}
      </section>

      {/* Quick View / Full Specs Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 aspect-square bg-[#181818] rounded-2xl p-4 flex items-center justify-center shrink-0">
                {activeModalProduct.image && !failedImages[activeModalProduct.id] ? (
                  <img 
                    src={activeModalProduct.image} 
                    alt={activeModalProduct.name}
                    className="max-h-full max-w-full object-contain" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  CATEGORY_ICONS[activeModalProduct.category] || <ShoppingBag className="w-12 h-12 text-amber-400" />
                )}
              </div>

              <div className="space-y-3 flex-1">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  {activeModalProduct.badge} • {activeModalProduct.categoryLabel}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {activeModalProduct.name}
                </h3>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(activeModalProduct.rating) ? "fill-amber-400" : "text-slate-600"}`} />
                    ))}
                  </div>
                  <span className="font-bold text-white">{activeModalProduct.rating}</span>
                  <span className="text-slate-400">({activeModalProduct.reviewsCount} customer reviews)</span>
                </div>
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-3xl font-black text-white">${activeModalProduct.dealPrice.toFixed(2)}</span>
                  {activeModalProduct.originalPrice > activeModalProduct.dealPrice && (
                    <span className="text-sm text-slate-500 line-through">${activeModalProduct.originalPrice.toFixed(2)}</span>
                  )}
                  {activeModalProduct.commissionProfit && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                      Est. Commission: {activeModalProduct.commissionProfit}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
              <h4 className="font-bold text-white text-sm">Product Overview</h4>
              <p>{activeModalProduct.fullDesc || activeModalProduct.shortDesc}</p>
            </div>

            {/* Technical Specifications */}
            {activeModalProduct.specs && activeModalProduct.specs.length > 0 && (
              <div className="space-y-3 border-t border-white/5 pt-4">
                <h4 className="font-bold text-white text-sm">Key Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModalProduct.specs.map((spec, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex justify-between gap-2">
                      <span className="text-slate-400">{spec.label}:</span>
                      <span className="font-semibold text-white text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4">
              {activeModalProduct.pros && activeModalProduct.pros.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Lab Tested Pros</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeModalProduct.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeModalProduct.cons && activeModalProduct.cons.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" />
                    <span>Considerations</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeModalProduct.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Bottom Buy Button */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="text-xs text-slate-400">
                Official Amazon Listing (ASIN: <span className="font-mono text-slate-200">{activeModalProduct.asin}</span>)
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/reviews/${activeModalProduct.id}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Đọc Toàn Bộ Bài Viết & So Sánh →</span>
                </Link>
                <a
                  href={activeModalProduct.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-amber-500/25"
                >
                  <span>Mua Trên Amazon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Comparisons Section */}
      <section id="comparisons" className="w-full border-t border-white/5 py-16">
        <ComparisonShowdown />
      </section>

      {/* Buying Guides Section */}
      <section id="guides" className="w-full border-t border-white/5 py-16">
        <BuyingGuides />
      </section>

      {/* Shopping FAQ Section */}
      <section id="faq" className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-white/5 z-10 relative">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Info className="w-3.5 h-3.5" />
            <span>Buyer Assurance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Amazon Affiliate & Ordering FAQ
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Everything you need to know about purchasing gear through our curated Amazon links.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-base">How does ordering through AI Software Studio work?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              When you click &quot;Buy on Amazon&quot;, you are redirected directly to the official Amazon.com product listing with your Amazon login, Prime shipping, and standard Amazon return policies. You checkout directly on Amazon safely.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-base">Does buying through these links cost me extra?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No, absolutely not. The price on Amazon is identical whether you use our link or visit Amazon directly. Amazon pays us a small marketing commission out of their advertising budget at zero additional cost to you.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="font-bold text-white text-base">Why do you recommend these specific products?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our engineering team tests streaming devices, GaN chargers, and creator hardware to ensure they deliver top performance with our mobile apps (IPTV players, video tools, short drama apps) and developer workflows.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
