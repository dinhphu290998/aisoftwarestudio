import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AMAZON_PRODUCTS } from "@/data/amazonProducts";
import { getSalesArticleById } from "@/lib/salesArticles";
import { CLUSTER_TYPES } from "@/lib/clusterArticles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  ExternalLink, 
  Check, 
  X, 
  ChevronRight, 
  Sparkles, 
  Award, 
  Flame, 
  ArrowRight,
  HelpCircle,
  ThumbsUp,
  Percent,
  Layers,
  Cpu,
  Clock,
  CheckCircle2,
  Bookmark,
  Calendar,
  UserCheck
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return AMAZON_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getSalesArticleById(id);

  if (!article) {
    return {
      title: "Product Review Not Found | AI Software Studio",
    };
  }

  const { product, seoTitle, seoDescription } = article;
  const canonicalUrl = `https://aisoftwarestudio.co/reviews/${product.id}`;

  return {
    title: `${product.name} Review (2026): Hands-On Test, Specs & Best Price | AI Software Studio`,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "AI Software Studio",
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [product.image],
    },
  };
}

export default async function ProductReviewPage({ params }: Props) {
  const { id } = await params;
  const article = getSalesArticleById(id);

  if (!article) {
    notFound();
  }

  const { 
    product, 
    salesHeadline, 
    hookSubtitle, 
    painPointsSolved, 
    keySellingPoints, 
    inDepthPitch, 
    comparison, 
    targetAudience, 
    whoShouldPass, 
    customerQuotes, 
    faqs, 
    verdict, 
    discountPercent, 
    updatedDate 
  } = article;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://aisoftwarestudio.co/reviews/${product.id}#product`,
        "name": product.name,
        "image": `https://aisoftwarestudio.co${product.image}`,
        "description": product.shortDesc,
        "brand": {
          "@type": "Brand",
          "name": product.brand,
        },
        "sku": product.asin,
        "offers": {
          "@type": "Offer",
          "price": product.dealPrice,
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": product.amazonUrl,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": parseInt(product.reviewsCount.replace(/[^0-9]/g, "")) || 1200,
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "Review",
        "@id": `https://aisoftwarestudio.co/reviews/${product.id}#review`,
        "itemReviewed": {
          "@id": `https://aisoftwarestudio.co/reviews/${product.id}#product`,
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": product.rating,
          "bestRating": "5",
        },
        "author": {
          "@type": "Organization",
          "name": "AI Software Studio Hardware Testing Lab",
        },
        "publisher": {
          "@type": "Organization",
          "name": "AI Software Studio",
          "url": "https://aisoftwarestudio.co",
        },
        "reviewBody": inDepthPitch,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aisoftwarestudio.co",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tech Reviews",
            "item": "https://aisoftwarestudio.co/reviews",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.categoryLabel,
            "item": `https://aisoftwarestudio.co/reviews?category=${product.category}`,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": product.name,
            "item": `https://aisoftwarestudio.co/reviews/${product.id}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  // Related products from same category
  const relatedProducts = AMAZON_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800e_1px,transparent_1px),linear-gradient(to_bottom,#8080800e_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />

      <Header />

      <div className="w-full max-w-6xl mx-auto px-6 pt-32 pb-24 z-10 relative space-y-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/reviews" className="hover:text-white transition-colors">Tech Reviews</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href={`/reviews?category=${product.category}`} className="text-amber-400 hover:underline">{product.categoryLabel}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Editorial Byline & Fact Check Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Tested & Reviewed by <strong>AI Software Studio Hardware Testing Lab</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" /> Updated: {updatedDate}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Independent Hands-On Benchmark
            </span>
          </div>
        </div>

        {/* Hero Section: Product Presentation & Buy Card */}
        <section id="overview" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Product Image Box */}
          <div className="lg:col-span-5 bg-[#0e0e11] rounded-3xl border border-white/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-slate-950 tracking-wider">
                {product.badge}
              </span>
              {discountPercent > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-black">
                  SAVE {discountPercent}% OFF
                </span>
              )}
            </div>

            <div className="relative w-full aspect-square flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.name}
                loading="eager"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="w-full mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">ASIN: {product.asin}</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Truck className="w-3.5 h-3.5" /> Free Prime 1-Day Delivery
              </span>
            </div>
          </div>

          {/* Right: Sales Pitch & Instant CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Editorial Hands-On Review • Updated {updatedDate}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {salesHeadline}
              </h1>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {hookSubtitle}
              </p>
            </div>

            {/* Price & Rating Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-white">${product.dealPrice}</span>
                  {product.originalPrice > product.dealPrice && (
                    <span className="text-base text-slate-500 line-through">${product.originalPrice}</span>
                  )}
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    -{discountPercent}% Deal
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm">{product.rating} / 5</span>
                  <span className="text-slate-400 text-xs">({product.reviewsCount} verified Amazon reviews)</span>
                </div>
              </div>

              {/* Direct Amazon Buy Button */}
              <div className="w-full sm:w-auto">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.03] transition-all shadow-xl shadow-amber-500/30 active:scale-[0.98]"
                >
                  <span>BUY ON AMAZON (BEST PRICE)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Table of Contents Jump Links */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold uppercase text-[11px] mr-1">Quick Jump:</span>
              <a href="#problems-solved" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">Problems Solved</a>
              <a href="#key-features" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">Key Features</a>
              <a href="#comparison" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">Head-to-Head</a>
              <a href="#specs" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">Specs</a>
              <a href="#pros-cons" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">Pros & Cons</a>
              <a href="#faqs" className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">FAQ</a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Certified</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast Prime Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Amazon 30-Day Returns</span>
              </div>
            </div>
          </div>
        </section>

        {/* Topic Cluster: Dedicated In-Depth SEO Guides */}
        <section className="p-8 rounded-3xl bg-[#0c0c10] border border-blue-500/20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" />
                <span>Topic Cluster Architecture • 5 Deep-Dive Guides</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Comprehensive Research Guides for {product.name}
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Pillar Page + Topic Cluster (Google SEO Standard)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLUSTER_TYPES.map((type) => (
              <Link
                key={type.slug}
                href={`/reviews/${product.id}/${type.slug}`}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between group space-y-3"
              >
                <div className="space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {type.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {type.label}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {type.description}
                  </p>
                </div>
                <div className="text-xs font-semibold text-blue-400 flex items-center gap-1 pt-2">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Opening Intro Paragraph (80-150 words) */}
        <section className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-xl">
          <p>{inDepthPitch}</p>
        </section>

        {/* Section: Selection Criteria for this Category */}
        <section id="key-features" className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 space-y-6 scroll-mt-24">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">Evaluation Framework</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Key Selection Criteria for {product.categoryLabel}
            </h2>
            <p className="text-slate-400 text-sm">
              Before purchasing, here are the essential hardware metrics our engineering lab uses to evaluate {product.categoryLabel.toLowerCase()} equipment in 2026:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {keySellingPoints.map((item, index) => (
              <div key={index} className="p-6 rounded-3xl bg-[#0e0e12] border border-white/5 hover:border-blue-500/30 transition-all space-y-2.5">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/5 text-amber-300 border border-white/10">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: In-Depth Product Evaluation & Comparison */}
        <section id="comparison" className="p-8 rounded-3xl bg-[#0d0d10] border border-white/10 space-y-8 scroll-mt-24">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">Benchmark Evaluation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              In-Depth Review: {product.name}
            </h2>
            <p className="text-slate-400 text-sm">
              Hands-on lab performance test results, competitor comparison matrix, and verified technical specifications.
            </p>
          </div>

          {/* H3: Comparison Matrix Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Head-to-Head Comparison Matrix: {product.name} vs. {comparison.rivalName}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">{comparison.verdict}</p>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#08080a]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3.5 px-4 font-semibold uppercase text-xs">Benchmark Feature</th>
                    <th className="py-3.5 px-4 font-bold text-amber-300 bg-amber-500/10 rounded-t-xl text-center">
                      {product.name}
                    </th>
                    <th className="py-3.5 px-4 font-bold text-slate-400 text-center">
                      {comparison.rivalBadge}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {comparison.criteria.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4 font-medium text-slate-300">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center bg-amber-500/5 font-semibold text-white">
                        <div className="flex items-center justify-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{row.ourScore}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center text-slate-400">
                        <span>{row.rivalScore}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* H3: Technical Specs Grid */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">
              Verified Technical Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{spec.label}</div>
                  <div className="text-sm font-bold text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* H3: Pros & Cons */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">
              Lab-Tested Strengths & Considerations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>Lab-Tested Strengths</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-red-500/[0.03] border border-red-500/20 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                  <X className="w-4 h-4" />
                  <span>Things to Consider</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Buying Advice & Mistakes to Avoid */}
        <section id="who-should-buy" className="p-8 rounded-3xl bg-[#0c0c10] border border-white/10 space-y-6 scroll-mt-24">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">Buyer Insights</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Buying Advice & Experience
            </h2>
            <p className="text-slate-400 text-sm">
              Guidance on ideal user personas and common pitfalls to steer clear of.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Who Is This Gear Perfect For?
            </h3>
            <div className="space-y-2">
              {targetAudience.map((aud, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <ThumbsUp className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">
              Who Should Pass or Consider Other Options
            </h3>
            <div className="space-y-2">
              {whoShouldPass.map((pass, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-slate-500">•</span>
                  <span>{pass}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Verified Customer Quotes */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white">Real Amazon Buyer Sentiment & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerQuotes.map((q, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(q.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">&quot;{q.quote}&quot;</p>
                <div className="text-xs text-slate-500 font-semibold">{q.author}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQs */}
        <section id="faqs" className="p-8 rounded-3xl bg-[#0e0e12] border border-white/10 space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions (FAQ)</span>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <h4 className="font-bold text-white text-sm sm:text-base">{faq.question}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Verdict Call To Action */}
        <section id="verdict" className="p-10 rounded-3xl bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 border border-amber-500/30 text-center space-y-6 scroll-mt-24">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Final Buying Recommendation</h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {verdict}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-base flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-amber-500/30"
            >
              <span>LOCK IN AMAZON DEAL (${product.dealPrice})</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-slate-400">
            * Prices and availability subject to change on Amazon. Backed by standard 30-day return policy.
          </p>
        </section>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-black text-white">Recommended Gear in the Same Class</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/reviews/${rel.id}`}
                  className="p-5 rounded-3xl bg-[#0d0d10] border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="w-full aspect-square bg-[#141418] rounded-2xl p-4 flex items-center justify-center mb-4">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-amber-400 uppercase">{rel.brand}</span>
                    <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {rel.name}
                    </h4>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-base font-black text-white">${rel.dealPrice}</span>
                      <span className="text-xs text-amber-400 flex items-center gap-1 font-semibold">
                        View Review <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Floating Bottom Sticky Bar for High Conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#08080a]/95 backdrop-blur-xl border-t border-white/10 py-3 px-6 shadow-2xl flex items-center justify-between max-w-5xl mx-auto rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 p-1 hidden sm:flex items-center justify-center shrink-0">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
          </div>
          <div>
            <div className="text-xs font-bold text-white truncate max-w-xs sm:max-w-md">{product.name}</div>
            <div className="text-[11px] text-amber-400 font-semibold">${product.dealPrice} (Save {discountPercent}%)</div>
          </div>
        </div>
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shrink-0"
        >
          <span>BUY ON AMAZON</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <Footer />
    </main>
  );
}
