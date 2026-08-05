import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      <section className="flex-1 w-full max-w-4xl mx-auto px-6 pt-48 pb-32 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          About Us
        </h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            Welcome to the About Us page of AI Software Studio. 
            This section is currently being updated with our latest information.
          </p>
          <div className="h-64 w-full rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center">
            <span className="text-white/20 font-medium uppercase tracking-widest text-sm">Content Coming Soon</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
