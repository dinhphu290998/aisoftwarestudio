import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AMAZON_PRODUCTS } from "@/data/amazonProducts";
import { 
  getProductClusterArticle, 
  CLUSTER_TYPES, 
  type ClusterSlug 
} from "@/lib/clusterArticles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Award, 
  Star, 
  HelpCircle, 
  BookOpen, 
  Clock, 
  Layers, 
  ArrowRight,
  Flame,
  Check,
  Sparkles,
  Calendar,
  UserCheck
} from "lucide-react";

interface Props {
  params: Promise<{ id: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { id: string; slug: string }[] = [];
  for (const product of AMAZON_PRODUCTS) {
    for (const type of CLUSTER_TYPES) {
      params.push({
        id: product.id,
        slug: type.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, slug } = await params;
  const data = getProductClusterArticle(id, slug as ClusterSlug);

  if (!data) {
    return {
      title: "Article Not Found | AI Software Studio",
    };
  }

  const { product, article } = data;
  const canonicalUrl = `https://aisoftwarestudio.co/reviews/${product.id}/${article.slug}`;

  return {
    title: `${article.seoTitle} | AI Software Studio`,
    description: article.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
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
      title: article.seoTitle,
      description: article.metaDescription,
      images: [product.image],
    },
  };
}

export default async function ClusterArticlePage({ params }: Props) {
  const { id, slug } = await params;
  const data = getProductClusterArticle(id, slug as ClusterSlug);

  if (!data) {
    notFound();
  }

  const { product, article } = data;
  const discountPercent = Math.round(((product.originalPrice - product.dealPrice) / product.originalPrice) * 100);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://aisoftwarestudio.co/reviews/${product.id}/${article.slug}#article`,
        "headline": article.h1,
        "description": article.metaDescription,
        "image": `https://aisoftwarestudio.co${product.image}`,
        "datePublished": "2026-11-01T08:00:00+00:00",
        "dateModified": "2026-11-09T08:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "AI Software Studio Hardware Testing Lab",
          "url": "https://aisoftwarestudio.co"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AI Software Studio",
          "logo": {
            "@type": "ImageObject",
            "url": "https://aisoftwarestudio.co/icon.svg"
          }
        },
        "mainEntityOfPage": `https://aisoftwarestudio.co/reviews/${product.id}/${article.slug}`
      },
      {
        "@type": "Product",
        "@id": `https://aisoftwarestudio.co/reviews/${product.id}#product`,
        "name": product.name,
        "image": `https://aisoftwarestudio.co${product.image}`,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "sku": product.asin,
        "offers": {
          "@type": "Offer",
          "price": product.dealPrice,
          "priceCurrency": "USD",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": product.amazonUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aisoftwarestudio.co"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tech Reviews",
            "item": "https://aisoftwarestudio.co/reviews"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://aisoftwarestudio.co/reviews/${product.id}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": article.typeLabel,
            "item": `https://aisoftwarestudio.co/reviews/${product.id}/${article.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": article.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800e_1px,transparent_1px),linear-gradient(to_bottom,#8080800e_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />

      <Header />

      <div className="w-full max-w-5xl mx-auto px-6 pt-32 pb-24 z-10 relative space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/reviews" className="hover:text-white transition-colors">Tech Reviews</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href={`/reviews/${product.id}`} className="text-slate-300 hover:text-white">{product.name}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-400 truncate max-w-xs">{article.typeLabel}</span>
        </nav>

        {/* TOPIC CLUSTER NAVIGATION SWITCHER */}
        <div className="p-4 rounded-3xl bg-[#0c0c10] border border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>{product.name} Topic Cluster</span>
            </span>
            <span>Explore 6 In-Depth Articles</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Link back to Main Pillar Review */}
            <Link
              href={`/reviews/${product.id}`}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>Full Benchmark Review</span>
            </Link>

            {/* Sibling Cluster Links */}
            {CLUSTER_TYPES.map((type) => {
              const isCurrent = type.slug === article.slug;
              return (
                <Link
                  key={type.slug}
                  href={`/reviews/${product.id}/${type.slug}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                    isCurrent
                      ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30"
                      : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <span>{type.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Editorial Byline & Fact Check Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Researched & Written by <strong>AI Software Studio Editorial Team</strong></span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" /> November 2026
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Lab-Verified Data
            </span>
          </div>
        </div>

        {/* Article Main Header Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{article.badge} • Topic Cluster Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {article.h1}
          </h1>

          {/* Target Keyword Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-500">Target Keywords:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-blue-300 font-mono">
              {article.primaryKeyword}
            </span>
            {article.secondaryKeywords.map((kw, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/[0.02] text-slate-400 font-mono">
                {kw}
              </span>
            ))}
          </div>
        </header>

        {/* Mini Product Showcase Card */}
        <div className="p-6 rounded-3xl bg-[#0d0d12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-[#141418] p-2 flex items-center justify-center shrink-0 border border-white/5">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">{product.brand} • {product.categoryLabel}</div>
              <h3 className="text-base font-bold text-white line-clamp-1">{product.name}</h3>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-emerald-400 font-bold">${product.dealPrice}</span>
                {product.originalPrice > product.dealPrice && (
                  <span className="text-slate-500 line-through">${product.originalPrice}</span>
                )}
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                  Save {discountPercent}%
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={`/reviews/${product.id}`}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-bold text-center transition-all"
            >
              Full Specs
            </Link>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
            >
              <span>Buy on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Opening Intro Paragraph (80-150 words) */}
        <section className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal p-6 rounded-3xl bg-white/[0.015] border border-white/5">
          {article.intro}
        </section>

        {/* Structured Content Sections (H2s & H3s) */}
        <div className="space-y-12">
          {article.sections.map((sec, idx) => (
            <article key={idx} className="space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {sec.h2}
                </h2>
                {sec.lead && (
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {sec.lead}
                  </p>
                )}
              </div>

              {/* Table if present */}
              {sec.table && (
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0c10]">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400">
                        {sec.table.headers.map((h, i) => (
                          <th key={i} className="py-3 px-4 font-bold text-white text-xs uppercase">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02]">
                          {row.map((cell, cIdx) => (
                            <td 
                              key={cIdx} 
                              className={`py-3 px-4 ${cIdx === 1 ? "font-bold text-amber-300 bg-amber-500/[0.03]" : ""}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Subsections (H3s) */}
              {sec.subsections && (
                <div className="grid grid-cols-1 gap-4">
                  {sec.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="p-6 rounded-3xl bg-[#0c0c10] border border-white/5 space-y-2.5">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{sub.h3}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {sub.content}
                      </p>
                      {sub.bullets && (
                        <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                          {sub.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* FAQ Section */}
        {article.faqs.length > 0 && (
          <section className="p-8 rounded-3xl bg-[#0c0c10] border border-white/10 space-y-6">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions (FAQ)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Questions & Answers About the {product.name}
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <h4 className="font-bold text-white text-sm sm:text-base">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Conclusion + High-Converting Call to Action Box */}
        <section className="p-10 rounded-3xl bg-gradient-to-r from-blue-700/20 via-indigo-700/20 to-purple-700/20 border border-blue-500/30 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            {article.conclusion.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {article.conclusion.summary}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-base flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-amber-500/30"
            >
              <span>{article.conclusion.actionText} (${product.dealPrice})</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-slate-400">
            * Official Amazon product listing. Backed by free Prime 1-day delivery and 30-day money-back guarantee.
          </p>
        </section>

        {/* Read More in this Product's Topic Cluster */}
        <section className="pt-8 border-t border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            <span>More Guides in the {product.name} Topic Cluster</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href={`/reviews/${product.id}`}
              className="p-5 rounded-2xl bg-[#0c0c10] border border-white/5 hover:border-amber-500/30 transition-all space-y-2 group"
            >
              <div className="text-[10px] font-bold text-amber-400 uppercase">Pillar Article</div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                Definitive Hands-On Benchmark Review
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2">Complete lab test breakdown, pros & cons, and overall verdict.</p>
            </Link>

            {CLUSTER_TYPES.filter(t => t.slug !== article.slug).slice(0, 5).map((other) => (
              <Link
                key={other.slug}
                href={`/reviews/${product.id}/${other.slug}`}
                className="p-5 rounded-2xl bg-[#0c0c10] border border-white/5 hover:border-blue-500/30 transition-all space-y-2 group"
              >
                <div className="text-[10px] font-bold text-blue-400 uppercase">{other.badge}</div>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {other.label}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{other.description}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
