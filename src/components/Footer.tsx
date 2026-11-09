import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Phone, ShieldCheck, Sparkles, ShoppingBag, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-32 z-10 relative bg-[#050505]">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Pioneering the next generation of mobile applications and smart technology. We blend high-performance engineering with intuitive design to build software that matters.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Amazon Associates Participant</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                As an Amazon Associate, AI Software Studio earns from qualifying purchases made via our product recommendation links.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide text-xs uppercase text-slate-400">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/#portfolio" className="hover:text-blue-400 transition-colors">
                  Mobile Apps Portfolio
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tech Hardware Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-blue-400 transition-colors text-slate-300">
                  <span>Buying Guides & Sales Articles</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About the Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide text-xs uppercase text-slate-400">Direct Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a 
                  href="mailto:aisoftwaresupport@gmail.com" 
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate group-hover:underline">aisoftwaresupport@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:0397460055" 
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>039 746 0055</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for custom projects</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="w-full mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} AI Software Studio. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/affiliate-disclosure" className="hover:text-amber-400 transition-colors">
              Affiliate Disclosure
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
