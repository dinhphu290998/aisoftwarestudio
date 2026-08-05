import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Lead UI/UX Designer",
    department: "Design",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "React Native Developer",
    department: "Engineering",
    location: "Remote / Global",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote / Global",
    type: "Full-time",
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      <section className="w-full max-w-4xl mx-auto px-6 pt-48 pb-20 z-10 relative text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
          We're Hiring
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future</span> with Us
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
          Join a passionate team of innovators, creators, and engineers dedicated to pushing the boundaries of mobile technology.
        </p>
      </section>

      <section className="flex-1 w-full max-w-5xl mx-auto px-6 pb-32 z-10 relative">
        <h3 className="text-2xl font-bold mb-8">Open Positions</h3>
        <div className="flex flex-col gap-4">
          {positions.map((pos, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{pos.title}</h4>
                <div className="flex gap-4 text-sm text-slate-500">
                  <span>{pos.department}</span>
                  <span>•</span>
                  <span>{pos.location}</span>
                  <span>•</span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 text-center">
          <h4 className="text-xl font-bold mb-4">Don't see a fit?</h4>
          <p className="text-slate-400 mb-6">We're always looking for exceptional talent. Send us your resume and let's talk.</p>
          <a href="mailto:aisoftwaresupport@gmail.com" className="inline-flex px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
            Submit Spontaneous Application
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
