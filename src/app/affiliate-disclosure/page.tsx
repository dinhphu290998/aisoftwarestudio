import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldAlert, ExternalLink, Mail, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Affiliate Disclosure | AI Software Studio",
  description: "Transparency and compliance disclosure for affiliate links and the Amazon Associates Program at AI Software Studio.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <Header />

      <section className="flex-1 w-full max-w-4xl mx-auto px-6 pt-40 pb-32 z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8 backdrop-blur-md">
          <ShieldAlert className="w-4 h-4" />
          <span>Editorial Transparency & FTC Compliance</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Affiliate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">Disclosure</span>
        </h1>
        
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Amazon Associates Official Required Notice Box */}
        <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-slate-200 mb-12 shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <span>Amazon Associates Program Statement</span>
          </h2>
          <p className="text-xl font-semibold text-amber-300 leading-relaxed mb-4">
            "As an Amazon Associate I earn from qualifying purchases."
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            AI Software Studio (aisoftwarestudio.co) is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by advertising and linking to Amazon.com, Amazon.co.uk, Amazon.de, and affiliated international Amazon websites.
          </p>
        </div>

        <div className="space-y-10 text-slate-300 leading-relaxed text-base md:text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. What Are Affiliate Links?</h2>
            <p className="text-slate-400">
              Some of the links on our website (particularly in our Hardware & Tech Reviews, buyer's guides, and recommended gear sections) are affiliate links. This means that if you click on a product link and make a purchase on the merchant’s website (such as Amazon), we may receive a small commission from that purchase at <strong className="text-white">absolutely no extra cost to you</strong>.
            </p>
            <p className="text-slate-400">
              The price you pay for any product remains identical whether you use our link or navigate directly to the retailer. In some cases, our special affiliate partnerships may even grant you access to discounts or limited-time promotional offers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Our Editorial Independence & Standards</h2>
            <p className="text-slate-400">
              Our editorial recommendations, software reviews, and hardware rankings are completely independent. We only recommend hardware, streaming devices, mobile accessories, and tech tools that:
            </p>
            <ul className="space-y-2.5 text-slate-300 pl-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Have been thoroughly tested and vetted by our engineering and product teams.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Demonstrate outstanding reliability, build quality, and real-world performance.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Directly complement and enhance user experiences with modern mobile and multimedia software.</span>
              </li>
            </ul>
            <p className="text-slate-400">
              No merchant or brand pays us for positive reviews. If a product fails to meet our standards, we will either not recommend it or explicitly point out its drawbacks in our pros and cons evaluation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Pricing & Product Availability</h2>
            <p className="text-slate-400">
              Prices, product availability, shipping terms, and inventory on third-party sites such as Amazon.com are subject to change without notice. While we strive to maintain up-to-date links, the current price and availability displayed on Amazon at the time of purchase will apply to the purchase of that product.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Trademarks & Brand Ownership</h2>
            <p className="text-slate-400">
              Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. All other brand names, trademarks, and logos appearing on this site belong to their respective owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Contact & Questions</h2>
            <p className="text-slate-400">
              If you have any questions regarding our affiliate relationships, product reviews, or compliance with FTC / Amazon guidelines, please do not hesitate to reach out to our team at:
            </p>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400 shrink-0" />
              <div>
                <div className="font-semibold text-white">Editorial & Compliance Team</div>
                <a href="mailto:aisoftwaresupport@gmail.com" className="text-blue-400 hover:underline">
                  aisoftwaresupport@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
