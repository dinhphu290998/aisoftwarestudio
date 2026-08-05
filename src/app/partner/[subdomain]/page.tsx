import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// We use async params to get the [subdomain] from the URL
interface PageProps {
  params: Promise<{ subdomain: string }>;
}

export default async function PartnerPage({ params }: PageProps) {
  const { subdomain } = await params;

  // Capitalize the subdomain for display
  const partnerName = subdomain.charAt(0).toUpperCase() + subdomain.slice(1);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      <section className="flex-1 w-full max-w-5xl mx-auto px-6 pt-48 pb-32 z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
          Partner Portal
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{partnerName}</span>!
        </h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400 leading-relaxed text-xl mb-6">
            This is a dedicated space for {partnerName} developed in partnership with AI Software Studio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Dedicated Applications</h3>
              <p className="text-slate-400 text-sm">
                View all custom applications and analytics associated with your partner account. (Features coming soon)
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4">Premium Support</h3>
              <p className="text-slate-400 text-sm mb-4">
                As a verified partner, you receive priority support from our engineering team.
              </p>
              <a href="mailto:aisoftwaresupport@gmail.com" className="text-blue-400 text-sm hover:underline">
                Contact Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
