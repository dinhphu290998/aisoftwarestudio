"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, Sparkles, BookOpen } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <Link 
            href="/#portfolio" 
            className="px-5 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            Portfolio
          </Link>

          <Link 
            href="/services" 
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/services" ? "bg-white/15 text-white" : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            Services
          </Link>

          <Link 
            href="/reviews" 
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              pathname === "/reviews" || pathname === "/affiliate" ? "bg-amber-500/20 text-amber-300" : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tech Reviews</span>
          </Link>

          <Link 
            href="/guides" 
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              pathname === "/guides" ? "bg-blue-600/20 text-blue-300 font-bold" : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Buying Guides</span>
          </Link>

          <Link 
            href="/about" 
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${
              pathname === "/about" ? "bg-white/15 text-white" : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            About Us
          </Link>
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#0a0a0c]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/[0.02] text-slate-200 text-sm font-semibold hover:bg-white/[0.06] transition-colors"
            >
              Apps Portfolio
            </Link>
            <Link 
              href="/reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-amber-500/10 text-amber-300 text-sm font-semibold flex items-center gap-2 hover:bg-amber-500/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Tech Hardware Reviews</span>
            </Link>
            <Link 
              href="/guides" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-blue-500/10 text-blue-300 text-sm font-semibold flex items-center gap-2 hover:bg-blue-500/20 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Buying Guides & Sales Articles</span>
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/[0.02] text-slate-200 text-sm font-semibold hover:bg-white/[0.06] transition-colors"
            >
              Development Services
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-white/[0.02] text-slate-200 text-sm font-semibold hover:bg-white/[0.06] transition-colors"
            >
              About AI Software Studio
            </Link>
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <span>Contact Us / Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
