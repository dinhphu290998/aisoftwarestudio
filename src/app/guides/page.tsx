import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GuidesHub } from "@/components/GuidesHub";
import { AMAZON_PRODUCTS } from "@/data/amazonProducts";

export const metadata: Metadata = {
  title: "Tech Buyer's Guides & In-Depth Comparison Articles (2026) | AI Software Studio",
  description: "Curated sales reviews, head-to-head hardware benchmarks, and comprehensive buying guides across 100+ top-rated Amazon tech electronics.",
  alternates: {
    canonical: "https://aisoftwarestudio.co/guides",
  },
  openGraph: {
    title: "Tech Buyer's Guides & In-Depth Comparison Articles (2026) | AI Software Studio",
    description: "Curated sales reviews, head-to-head hardware benchmarks, and comprehensive buying guides across 100+ top-rated Amazon tech electronics.",
    url: "https://aisoftwarestudio.co/guides",
    siteName: "AI Software Studio",
    type: "website",
  },
};

export default function GuidesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tech Buyer's Guides & In-Depth Product Reviews (2026)",
    "description": "Curated editorial sales reviews, hands-on lab benchmarks, and head-to-head comparisons for top Amazon tech hardware.",
    "url": "https://aisoftwarestudio.co/guides",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": AMAZON_PRODUCTS.length,
      "itemListElement": AMAZON_PRODUCTS.slice(0, 30).map((prod, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": `${prod.name} In-Depth Review & Showdown`,
        "url": `https://aisoftwarestudio.co/reviews/${prod.id}`
      }))
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800e_1px,transparent_1px),linear-gradient(to_bottom,#8080800e_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />

      <Header />

      <GuidesHub />

      <Footer />
    </main>
  );
}
