import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Smartphone, Sparkles, Code2, Rocket, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform applications built for scale, performance, and exceptional user experiences.",
    icon: Smartphone,
  },
  {
    title: "AI Integration",
    description: "Leveraging cutting-edge artificial intelligence to create smart, predictive, and personalized app features.",
    icon: Sparkles,
  },
  {
    title: "Custom Software Engineering",
    description: "Robust backend systems and scalable architectures designed to support your growing user base.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description: "Award-winning interfaces that captivate users and drive engagement through intuitive design.",
    icon: Zap,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous automated and manual testing to ensure zero-defect deployments.",
    icon: ShieldCheck,
  },
  {
    title: "Growth & Optimization",
    description: "Data-driven strategies and A/B testing to maximize app store visibility and user retention.",
    icon: Rocket,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-48 pb-20 z-10 relative text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
          We provide end-to-end software development solutions, transforming bold ideas into market-leading digital products.
        </p>
      </section>

      {/* Grid */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-6 pb-32 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
