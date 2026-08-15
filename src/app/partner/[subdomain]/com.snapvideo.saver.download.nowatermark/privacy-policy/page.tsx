import React from 'react';
import { notFound } from 'next/navigation';

export default async function PrivacyPolicy({ params }: { params: Promise<{ subdomain: string }> }) {
  const { subdomain: rawSubdomain } = await params;
  const subdomain = rawSubdomain?.toLowerCase();

  // Ensure this page is only accessible for the inception partner
  if (subdomain !== "inception") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 py-24 px-6 font-sans relative overflow-hidden flex flex-col items-center">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      
      {/* Header Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
        <span className="text-purple-400">❖</span>
        <span>Legal Documentation</span>
      </div>

      <div className="relative z-10 w-full max-w-4xl bg-[#0a0a0a]/80 p-8 md:p-14 rounded-[2rem] border border-white/5 backdrop-blur-2xl shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
            Privacy Policy
          </span>
        </h1>
        
        <div className="space-y-8 leading-relaxed text-slate-400 text-lg">
          <p className="text-slate-300 font-medium">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Welcome to <strong className="text-white">Video Download No Watermark</strong>. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">1. Information We Collect</h2>
            <p className="mb-3">
              <strong className="text-slate-300">Personal Data:</strong> We do not collect or store any personal data (such as your name, email address, or phone number) unless you voluntarily provide it to us through customer support inquiries.
            </p>
            <p>
              <strong className="text-slate-300">Usage Data & Device Information:</strong> We automatically collect certain information when you use the App. This may include your device type, operating system, unique device identifiers, IP address, and interaction data within the App. This data is collected anonymously to help us improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">2. Storage and Permissions</h2>
            <p>
              To function properly, the App requires permissions to access your device's storage. This allows the App to save downloaded videos directly to your gallery. We do not access, view, or upload any of your personal photos or files.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">3. Third-Party Services</h2>
            <p>
              We use third-party advertising networks (such as Google AdMob, Facebook Audience Network) to serve ads in the App. These third-party services may use cookies and similar technologies to collect data about your interactions to serve relevant advertisements. They operate under their own Privacy Policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">4. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect the information we collect. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">5. Children's Privacy</h2>
            <p>
              Our App does not knowingly collect or solicit personal information from children under the age of 13. If we discover that a child under 13 has provided us with personal information, we will delete such information from our systems immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">6. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white/90 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:aisoftwaresupport@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">aisoftwaresupport@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
