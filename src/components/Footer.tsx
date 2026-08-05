import { Logo } from "./Logo";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/10 mt-32 z-10 relative bg-[#050505]">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Pioneering the next generation of mobile applications. We blend cutting-edge AI with exceptional user experiences to build software that matters.
            </p>
          </div>

          {/* Col 2: Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="/#portfolio" className="hover:text-blue-400 transition-colors">Our Portfolio</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:aisoftwaresupport@gmail.com" className="hover:text-white transition-colors">
                  aisoftwaresupport@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:0397460055" className="hover:text-white transition-colors">
                  0397460055
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 mt-0.5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
                <span>Available for new projects globally.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} AI Software Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
