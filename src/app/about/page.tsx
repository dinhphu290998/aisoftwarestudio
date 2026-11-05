import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Users, Globe2, Target, Award, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-50 flex flex-col font-sans overflow-x-hidden">
      <InteractiveBackground />
      <Header />
      
      <section className="w-full max-w-7xl mx-auto px-6 pt-36 pb-24 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Studio & Mission</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Pioneering Software & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Independent Hardware Insights
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal mb-6">
              Founded with a singular commitment: to elevate the modern digital ecosystem through high-performance mobile software engineering and authentic, benchmark-driven technology hardware reviews.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              We operate as a tight-knit collective of software architects, mobile engineers, and media streaming specialists. From building top-rated 4K IPTV streaming players, video downloaders, and generative AI suites to rigorous lab testing of consumer electronics, our products serve more than 10 million users worldwide.
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-2xl md:text-3xl font-black text-white mb-0.5">10M+</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Active Users</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-2xl md:text-3xl font-black text-amber-300 mb-0.5">4.8★</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Avg App Rating</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <div className="text-2xl md:text-3xl font-black text-emerald-400 mb-0.5">12+</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Deployed Apps</div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#portfolio"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-lg shadow-blue-500/20"
              >
                View Applications
              </Link>
              <Link
                href="/reviews"
                className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-bold text-xs transition-colors"
              >
                Explore Hardware Reviews
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-10">
              <div className="p-6 md:p-8 rounded-3xl bg-[#0c0c0e]/90 border border-blue-500/20 backdrop-blur-xl space-y-3">
                <Users className="w-8 h-8 text-blue-400" />
                <h4 className="font-bold text-white text-base">User-Obsessed</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We engineer lightweight interfaces and sub-50ms responsiveness so apps launch effortlessly on all devices.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-[#0c0c0e]/90 border border-purple-500/20 backdrop-blur-xl space-y-3">
                <Target className="w-8 h-8 text-purple-400" />
                <h4 className="font-bold text-white text-base">Benchmark Driven</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every tech recommendation in our store is backed by thermal, latency, and real-world durability testing.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 md:p-8 rounded-3xl bg-[#0c0c0e]/90 border border-emerald-500/20 backdrop-blur-xl space-y-3">
                <Globe2 className="w-8 h-8 text-emerald-400" />
                <h4 className="font-bold text-white text-base">Global Distribution</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Supporting global multi-lingual audiences with optimized multi-region edge caching.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-[#0c0c0e]/90 border border-amber-500/20 backdrop-blur-xl space-y-3">
                <Award className="w-8 h-8 text-amber-400" />
                <h4 className="font-bold text-white text-base">Amazon Associate</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Official partner delivering verified links to genuine tech gear and guaranteed Prime shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
