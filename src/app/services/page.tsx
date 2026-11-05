import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { 
  Smartphone, 
  Sparkles, 
  Code2, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers 
} from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description: "High-performance native iOS, Android, and cross-platform applications built for scale, 60fps responsiveness, and multi-million user loads.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    features: ["Swift & Kotlin Native", "React Native & Flutter", "Low-latency streaming architecture", "Offline data synchronization"]
  },
  {
    title: "AI Integration & Generative Workflows",
    description: "Embedding state-of-the-art LLMs, generative image pipelines, and on-device machine learning to build intelligent and personalized mobile apps.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    features: ["LLM & Agent orchestration", "On-device CoreML / TF Lite", "Multimodal computer vision", "Voice AI & TTS integration"]
  },
  {
    title: "Custom High-Load Backend Engineering",
    description: "Ultra-resilient microservices, GraphQL APIs, and serverless backends engineered to sustain sudden viral traffic spikes with sub-50ms latency.",
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
    features: ["Next.js & Node.js architecture", "Distributed Redis caching", "Edge CDN streaming routes", "Automated horizontal auto-scaling"]
  },
  {
    title: "UI/UX & Design Systems",
    description: "Award-winning interfaces designed for conversion, retention, and tactile micro-interactions that captivate modern mobile users.",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    features: ["Linear & Apple aesthetic", "Accessible WCAG AAA compliance", "Design tokens & component libraries", "Interactive Figma prototypes"]
  },
  {
    title: "Quality Assurance & Security Audits",
    description: "End-to-end automated testing, device farm compatibility testing, and penetration security checks for zero-defect production rollouts.",
    icon: ShieldCheck,
    color: "from-rose-500 to-red-500",
    features: ["Automated CI/CD pipelines", "Real-device test matrix", "OWASP mobile security standards", "Crashlytics real-time monitoring"]
  },
  {
    title: "App Store Growth & SEO Optimization",
    description: "Data-driven ASO (App Store Optimization), metadata keyword tuning, and conversion funnel optimization to maximize organic installs.",
    icon: Rocket,
    color: "from-indigo-500 to-blue-500",
    features: ["Keyword rank tracking", "App Store & Play Store A/B tests", "Viral onboarding funnels", "Retention & engagement analytics"]
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-50 flex flex-col font-sans overflow-x-hidden">
      <InteractiveBackground />
      <Header />
      
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-36 pb-16 z-10 relative text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs md:text-sm font-semibold mb-6 backdrop-blur-xl">
          <Layers className="w-4 h-4 text-blue-400" />
          <span>Full-Cycle Product Development</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Engineering Solutions for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            Market-Leading Digital Products
          </span>
        </h1>
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From early-stage conceptual architecture to viral mobile apps serving millions of active users, we deliver end-to-end engineering excellence.
        </p>
      </section>

      {/* Services Grid */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-6 pb-28 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-[#0c0c0e]/80 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg flex items-center justify-center`}>
                    <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-white/5">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Discuss this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-black border border-white/10 text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Ready to Build Your Next Scalable Mobile Product?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Our engineering team is ready to consult on your mobile architecture, AI integration, and store rollout.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
