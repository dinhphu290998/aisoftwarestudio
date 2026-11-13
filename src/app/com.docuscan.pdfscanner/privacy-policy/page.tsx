import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText, Camera, HardDrive, CheckCircle2, Lock, EyeOff } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - DocuScan: PDF Reader & Editor | AI Software Studio",
  description: "Official Privacy Policy for DocuScan: PDF Reader & Editor (com.docuscan.pdfscanner) developed by Inception and AI Software Studio. 100% on-device document processing.",
  alternates: {
    canonical: "https://aisoftwarestudio.co/com.docuscan.pdfscanner/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 flex flex-col font-sans relative overflow-hidden">
      {/* Cinematic Ambient Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      
      <Header />

      <div className="flex-1 w-full max-w-4xl mx-auto px-6 pt-36 pb-32 relative z-10 flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
          <span className="text-purple-400">❖</span>
          <span>Official Legal Documentation</span>
        </div>

        <div className="w-full bg-[#0a0a0a]/85 p-8 md:p-14 rounded-[2rem] border border-white/10 backdrop-blur-2xl shadow-2xl">
          <div className="border-b border-white/10 pb-8 mb-8">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              Package ID: com.docuscan.pdfscanner
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-lg">
              Application: <strong className="text-white">DocuScan: PDF Reader &amp; Editor</strong>
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Published by <strong className="text-slate-200">Inception</strong> in partnership with <strong className="text-slate-200">AI Software Studio</strong>
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-500 font-mono">
              <span>Last Updated: {lastUpdated}</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Google Play Policy Compliant
              </span>
            </div>
          </div>
          
          <div className="space-y-8 leading-relaxed text-slate-400 text-base">
            {/* Quick Summary Callout */}
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-200 space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" /> Executive Privacy Guarantee:
              </div>
              <p className="text-sm leading-relaxed text-blue-100">
                <strong>DocuScan: PDF Reader &amp; Editor</strong> does not require an account, registration, or login. All document scanning, optical character recognition (OCR), and PDF rendering take place <strong>100% locally on your device</strong>. We NEVER upload, view, transmit, sell, or store your private documents, camera captures, or personal data on remote servers.
              </p>
            </div>

            <p>
              This Privacy Policy explains how <strong className="text-white">DocuScan: PDF Reader &amp; Editor</strong> ("DocuScan", "the application", "we", "us", or "our") handles user information and device permissions. DocuScan is developed and operated by our partner <strong className="text-white">Inception</strong> in collaboration with <strong className="text-white">AI Software Studio</strong>.
            </p>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">1. Information We Do Not Collect</h2>
              <p>We believe in absolute data minimization. Our application does <strong className="text-white">NOT</strong> collect, harvest, or request:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Personal Identifiable Information (PII) such as full names, email addresses, phone numbers, or home addresses</li>
                <li>User credentials, passwords, or authentication profiles (no registration required)</li>
                <li>Device contacts, address book entries, or call records</li>
                <li>GPS coordinates, cellular tower triangulations, or precise geographical locations</li>
                <li>Financial details, bank account credentials, or credit card numbers</li>
                <li>The contents, text, metadata, or images of documents you scan, view, or convert</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">2. Device Permissions &amp; Document Processing</h2>
              <p>
                To provide document scanning and PDF management capabilities, DocuScan requests specific runtime Android permissions. Each permission is used solely for its intended on-device utility:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Camera className="w-4 h-4 text-purple-400" />
                    <span>Camera Permission</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Required strictly when you press the scan button to capture photos of physical paper documents, receipts, or notes. The camera is never accessed in the background, and images stay strictly on your local device.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <HardDrive className="w-4 h-4 text-emerald-400" />
                    <span>Storage / Files Permission</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Required to open existing PDF files selected by you, and to save scanned or edited PDFs directly to your device storage. We cannot access unrelated files on your storage.
                  </p>
                </div>
              </div>

              <p className="text-sm">
                <strong>On-Device Architecture:</strong> All image enhancement algorithms (perspective correction, thresholding, contrast adjustments) and text conversions occur directly on your device's processor. No scanned material is transmitted across the internet to our servers.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">3. In-App Purchases &amp; Subscriptions</h2>
              <p>
                DocuScan may offer optional premium features (such as ad removal or advanced export features). All transactions are processed directly and securely through <strong>Google Play In-App Billing</strong>.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>We do not receive, store, or process your credit card numbers or banking credentials.</li>
                <li>Google handles transaction processing under the <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</li>
                <li>Subscriptions can be cancelled at any time through your Google Play Store account settings.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">4. Advertising Partners</h2>
              <p>
                To support free functionality, the application may display advertisements served by Google-certified ad networks, including <strong>Google AdMob</strong>. These networks may collect non-personal, technical identifiers (such as the Google Advertising ID / AAID, device type, OS version, and coarse language preferences) to deliver and measure ad performance.
              </p>
              <p className="text-sm">
                You can reset or opt out of personalized ads at any time via your Android device settings under <em>Settings &gt; Google &gt; Ads &gt; Delete advertising ID</em>. For more information, please review <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">How Google uses information from apps</a>.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">5. Diagnostics &amp; Anonymous Analytics</h2>
              <p>
                DocuScan may utilize standard diagnostic frameworks (such as Google Firebase Crashlytics) to collect anonymous diagnostic logs and stack traces when an unexpected error or crash occurs. This information contains no personal identifiers or document content and is utilized strictly to fix bugs and improve app stability.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">6. Children's Privacy (COPPA Compliance)</h2>
              <p>
                DocuScan: PDF Reader &amp; Editor is intended for a general audience and is not directed at children under the age of 13. We do not knowingly solicit or collect personal information from children. If you believe that a child has provided us with personal information, please contact us immediately, and we will take appropriate measures.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">7. Data Retention &amp; User Control (GDPR / CCPA)</h2>
              <p>
                Under privacy regulations including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), individuals have rights to access, rectify, or delete their personal data.
              </p>
              <p>
                Because <strong>DocuScan stores no personal data or document content on external servers</strong>, your data remains entirely in your own custody. You can delete individual documents within the app at any time, or permanently erase all app data by clearing the app cache or uninstalling the application from your device.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">8. Security Safeguards</h2>
              <p>
                We leverage Android's native sandbox architecture and standard operating system encryption to protect your documents from unauthorized access by other applications installed on your device.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect modifications in our features or changes in applicable regulatory policies. Any updates will be published directly on this page with a revised "Last Updated" date.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white">10. Contact &amp; Support</h2>
              <p>
                If you have questions, feedback, or inquiries regarding this Privacy Policy or data protection in DocuScan, please reach out to our dedicated team:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-sm text-slate-300 space-y-1">
                <div>Application: DocuScan: PDF Reader &amp; Editor</div>
                <div>Package ID: com.docuscan.pdfscanner</div>
                <div>Partner: Inception - AI Software</div>
                <div>Developer Email: <a href="mailto:support@aisoftwarestudio.co" className="text-blue-400 hover:underline">support@aisoftwarestudio.co</a></div>
                <div>Alternative Email: <a href="mailto:aisoftwaresupport@gmail.com" className="text-blue-400 hover:underline">aisoftwaresupport@gmail.com</a></div>
                <div>Portal: <a href="https://aisoftwarestudio.co" className="text-blue-400 hover:underline">https://aisoftwarestudio.co</a></div>
              </div>
            </section>
          </div>

          {/* Footer Back link */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              ← Return to AI Software Studio Home
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
