import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText, CheckCircle2, Mail, ExternalLink, Globe, Scale } from "lucide-react";

export const metadata = {
  title: "Terms of Service | AI Software Studio",
  description: "Official Terms of Service for mobile applications published by AI Software Studio on the Google Play Store. Compliant with Google Play Developer Policies and EU Digital Services Act (DSA).",
  alternates: {
    canonical: "https://aisoftwarestudio.co/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "November 2026";

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-sans relative overflow-hidden">
      {/* Cinematic Ambient Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <Header />

      <div className="flex-1 w-full max-w-4xl mx-auto px-6 pt-36 pb-28 relative z-10 flex flex-col items-center">
        
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md">
          <Scale className="w-3.5 h-3.5" />
          <span>Official Google Play Terms of Service</span>
        </div>

        {/* Main Document Container */}
        <div className="w-full bg-[#0a0a0a]/90 p-8 sm:p-12 md:p-16 rounded-[2rem] border border-white/10 backdrop-blur-2xl shadow-2xl">
          
          <div className="border-b border-white/10 pb-8 mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-base">
              Applies to all official mobile applications published by <strong className="text-white">AI Software Studio</strong> and affiliated developer accounts on the Google Play Store.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-500 font-mono">
              <span>Last Updated: {lastUpdated}</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active & Google Play Verified
              </span>
            </div>
          </div>

          {/* Quick Summary Callout */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-10 text-sm leading-relaxed text-slate-300 space-y-2">
            <div className="text-white font-semibold flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" /> Key Information at a Glance:
            </div>
            <p>
              By downloading, installing, or using any mobile application created or published by <strong>AI Software Studio</strong>, you agree to these Terms of Service. All payments and subscriptions are processed securely through <strong>Google Play In-App Billing</strong>. We grant you a personal, non-exclusive license to use our apps in compliance with Google Play Developer Policies.
            </p>
          </div>

          {/* Document Content */}
          <div className="space-y-10 text-slate-300 leading-relaxed text-[15px]">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">1.</span> Trader Identification & Contact
              </h2>
              <p>
                In accordance with Google Play Console Trader requirements and the European Union Digital Services Act (DSA):
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
                <li><strong>Developer / Publisher:</strong> AI Software Studio</li>
                <li><strong>Associated Accounts:</strong> AI Software Entertainment, AI Software Partner, Inception - AI Software</li>
                <li><strong>Official Website:</strong> <a href="https://aisoftwarestudio.co" className="text-blue-400 underline hover:text-blue-300">https://aisoftwarestudio.co</a></li>
                <li><strong>Support & Legal Inquiries:</strong> <a href="mailto:support@aisoftwarestudio.co" className="text-blue-400 underline hover:text-blue-300">support@aisoftwarestudio.co</a></li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">2.</span> Acceptance of Terms
              </h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of mobile applications, content, and related services ("Services") provided by AI Software Studio. By downloading, accessing, or using our Services, you represent that you are at least 13 years of age (or the minimum legal age required in your country) and have the legal capacity to enter into these Terms. If you do not agree to these Terms, you must immediately uninstall and discontinue using our applications.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">3.</span> License Grant & Permitted Use
              </h2>
              <p>
                Subject to your compliance with these Terms, AI Software Studio grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and execute a single copy of the application on an Android mobile device that you own or control, strictly for personal, non-commercial use.
              </p>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
                <li>Decompile, reverse-engineer, disassemble, or attempt to derive the source code of the applications.</li>
                <li>Modify, adapt, translate, or create derivative works from our applications or underlying algorithms.</li>
                <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices.</li>
                <li>Use the applications for any unlawful purpose, fraud, or infringement of third-party rights.</li>
                <li>Redistribute, sell, lease, or commercially exploit the applications without written authorization.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">4.</span> In-App Purchases & Subscriptions
              </h2>
              <p>
                Certain applications may offer premium features, virtual items, or auto-renewing subscriptions ("Paid Services"):
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
                <li><strong>Payment Processing:</strong> All in-app purchases and subscriptions are handled strictly via <strong>Google Play In-App Billing</strong>. AI Software Studio never collects, stores, or processes your credit card numbers or banking credentials.</li>
                <li><strong>Subscription Renewal:</strong> Subscriptions automatically renew at the end of each billing cycle (e.g., weekly, monthly, or annually) unless canceled at least 24 hours before the end of the current period.</li>
                <li><strong>Managing & Canceling Subscriptions:</strong> You can manage or cancel your subscriptions at any time through your <strong>Google Play Account Settings</strong> &gt; <em>Payments &amp; Subscriptions</em> &gt; <em>Subscriptions</em>.</li>
                <li><strong>Refunds:</strong> Refund requests are governed by the official <strong>Google Play Refund Policy</strong>. To request a refund, please follow Google Play's standard refund procedure or contact Google Play Support.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">5.</span> Intellectual Property Rights
              </h2>
              <p>
                All rights, title, and interest in and to our applications—including but not limited to software code, UI design, graphics, visual assets, audio clips, text, logos, trademarks, and documentation—are and will remain the exclusive property of AI Software Studio and its licensors. All rights not expressly granted to you are reserved by AI Software Studio.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">6.</span> Third-Party Services & Advertising
              </h2>
              <p>
                Our applications may integrate third-party services, such as Google Play Services, Firebase Analytics, and certified advertising networks (e.g., Google AdMob). These third-party services operate under their respective privacy policies and terms of service. AI Software Studio is not responsible for the availability, content, or practices of third-party platforms.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">7.</span> Privacy Policy Integration
              </h2>
              <p>
                Your privacy is paramount to us. Our data handling, analytics, and permissions practices are described in detail in our <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">Privacy Policy</Link>. By using our applications, you acknowledge and agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">8.</span> Disclaimer of Warranties ("AS IS")
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE APPLICATIONS AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">9.</span> Limitation of Liability
              </h2>
              <p>
                TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL AI SOFTWARE STUDIO, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING DAMAGES FOR LOSS OF PROFITS, DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES) ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APPLICATIONS.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">10.</span> Termination
              </h2>
              <p>
                These Terms are effective until terminated by either you or AI Software Studio. You may terminate your agreement at any time by uninstalling and deleting all copies of the application from your devices. We may terminate or suspend your access immediately, without prior notice, if you breach any provision of these Terms.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">11.</span> Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Any changes will be posted directly on this page with an updated "Last Updated" timestamp. Your continued use of the application following the posting of revised Terms constitutes your acceptance of the changes.
              </p>
            </section>

            {/* Section 12 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">12.</span> Contact Information
              </h2>
              <p>
                If you have any questions, feedback, or legal concerns regarding these Terms of Service or our applications, please contact our support team at:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-sm text-slate-300">
                <div>AI Software Studio</div>
                <div>Email: <a href="mailto:support@aisoftwarestudio.co" className="text-blue-400 hover:underline">support@aisoftwarestudio.co</a></div>
                <div>Website: <a href="https://aisoftwarestudio.co" className="text-blue-400 hover:underline">https://aisoftwarestudio.co</a></div>
              </div>
            </section>

          </div>

          {/* Footer Back link */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              ← Return to AI Software Studio Home
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              View Privacy Policy →
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
