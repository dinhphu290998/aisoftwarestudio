import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Storefront } from "@/components/Storefront";

export const metadata = {
  title: "Tech Deals & Electronics Store | AI Software Studio (Amazon Associates)",
  description: "Browse top-rated 4K streaming sticks, fast GaN chargers, portable SSDs, noise-cancelling headphones, and smart home gadgets recommended by AI Software Studio engineers.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans relative overflow-hidden">
      {/* Cinematic Background Glows */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-amber-600/10 blur-[180px] pointer-events-none" />

      <Header />

      <Storefront />

      <Footer />
    </main>
  );
}
