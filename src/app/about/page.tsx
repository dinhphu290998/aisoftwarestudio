import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Globe2, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      <section className="w-full max-w-7xl mx-auto px-6 pt-48 pb-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              About <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">AI Software Studio</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light mb-8">
              Founded with a singular vision: to revolutionize the mobile ecosystem through the intelligent application of artificial intelligence and impeccable design.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              We are a collective of world-class engineers, visionary designers, and AI researchers. We don't just build apps; we build scalable digital businesses that reach millions of users globally. Our proprietary AI-driven workflows allow us to iterate faster and deliver unparalleled quality.
            </p>
            
            <div className="flex gap-4">
              <div className="px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-3xl font-black text-white mb-1">50+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Apps Launched</div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-3xl font-black text-white mb-1">10M+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Global Users</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="p-8 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-center">
                <Users className="w-10 h-10 mx-auto text-blue-400 mb-4" />
                <h4 className="font-bold text-white">User-Centric</h4>
              </div>
              <div className="p-8 rounded-3xl bg-purple-500/10 border border-purple-500/20 text-center">
                <Target className="w-10 h-10 mx-auto text-purple-400 mb-4" />
                <h4 className="font-bold text-white">Result-Driven</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <Globe2 className="w-10 h-10 mx-auto text-emerald-400 mb-4" />
                <h4 className="font-bold text-white">Global Reach</h4>
              </div>
              <div className="p-8 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-center">
                <Award className="w-10 h-10 mx-auto text-rose-400 mb-4" />
                <h4 className="font-bold text-white">Award Winning</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
