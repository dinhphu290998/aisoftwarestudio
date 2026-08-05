import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-50 flex flex-col font-sans">
      <Header />
      
      <section className="flex-1 w-full max-w-4xl mx-auto px-6 pt-48 pb-32 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="text-sm text-slate-500 mb-12">Last Updated: August 2026</div>
        
        <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-blue-400">
          <p className="text-slate-300 leading-relaxed text-lg mb-8">
            At AI Software Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our mobile applications and services.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">1. Information We Collect</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            We may collect information that you provide directly to us, such as when you create an account, request support, or communicate with us. This may include your name, email address, and device information required for application functionality.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">2. How We Use Your Information</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            We use the information we collect to provide, maintain, and improve our services, develop new features, and protect AI Software Studio and our users. We may also use the information to communicate with you about updates, security alerts, and support messages.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">3. Data Security</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            We implement industry-standard security measures designed to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no internet transmission or electronic storage is 100% secure.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">4. Third-Party Services</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            Our applications may integrate with third-party services (e.g., analytics providers, advertising networks). These third parties may collect information about you in accordance with their own privacy policies.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">5. Contact Us</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:aisoftwaresupport@gmail.com">aisoftwaresupport@gmail.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
