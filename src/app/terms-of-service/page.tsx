import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      <section className="flex-1 w-full max-w-4xl mx-auto px-6 pt-48 pb-32 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Terms of Service
        </h1>
        <div className="text-sm text-slate-500 mb-12">Last Updated: August 2026</div>
        
        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-blue-400">
          <p className="text-slate-300 leading-relaxed text-lg mb-8">
            Please read these Terms of Service ("Terms") carefully before using the applications and services operated by AI Software Studio. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">1. Acceptance of Terms</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            By accessing and using our mobile applications or website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">2. Intellectual Property Rights</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            The applications, services, and their original content, features, and functionality are and will remain the exclusive property of AI Software Studio and its licensors. Our intellectual property must not be used in connection with any product or service without the prior written consent of AI Software Studio.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">3. User Obligations</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            You agree not to use our services in any way that violates any applicable local, national, or international law or regulation. You further agree not to attempt to interfere with the proper working of our applications or to compromise our security protocols.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">4. Limitation of Liability</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            In no event shall AI Software Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">5. Changes to Terms</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of significant changes, but it is your responsibility to review these Terms periodically.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
