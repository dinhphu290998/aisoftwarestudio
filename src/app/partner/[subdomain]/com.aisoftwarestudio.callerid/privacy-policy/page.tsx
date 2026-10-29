import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function PrivacyPolicy({ params }: { params: Promise<{ subdomain: string }> }) {
  const { subdomain: rawSubdomain } = await params;
  const subdomain = rawSubdomain?.toLowerCase();

  let partnerName = "Inception - AI Software";
  if (subdomain === "inception") {
    partnerName = "Inception - AI Software";
  } else if (subdomain === "affica") {
    partnerName = "Affica";
  } else if (subdomain === "unisoft") {
    partnerName = "Unisoft";
  } else if (subdomain === "1tabb") {
    partnerName = "1TABB";
  } else if (subdomain === "amobear") {
    partnerName = "Amobear";
  } else if (subdomain === "mindx") {
    partnerName = "MindX";
  } else {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 flex flex-col font-sans relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      
      <Header />

      <div className="flex-1 w-full max-w-4xl mx-auto px-6 pt-32 pb-32 relative z-10 flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
          <span className="text-purple-400">❖</span>
          <span>Legal Documentation</span>
        </div>

        <div className="w-full bg-[#0a0a0a]/80 p-8 md:p-14 rounded-[2rem] border border-white/5 backdrop-blur-2xl shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              Privacy Policy
            </span>
          </h1>
          
          <div className="space-y-8 leading-relaxed text-slate-400 text-lg">
            <p className="text-slate-300 font-medium">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200">
              <strong>The short version:</strong> Caller ID is designed to help you identify incoming calls and block spam numbers. Your privacy is our utmost priority: <strong>we NEVER sell, share, or upload your private contact list or personal phonebook to third parties, data brokers, or public directories</strong>. All core call-handling and contact-lookup processes happen locally on your device.
            </div>

            <p>
              This Privacy Policy explains how the <strong className="text-white">Caller ID</strong> application ("Caller ID", "the app") collects, uses, and protects your information. Caller ID is published by <strong className="text-white">{partnerName}</strong> ("we", "us", or "our").
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">1. Information We Do Not Collect</h2>
              <p className="mb-3">We respect user privacy and adhere strictly to Google Play Developer Policies. Specifically, our application does <strong className="text-white">NOT</strong>:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Require personal account registration, logins, or social profile linkage</li>
                <li>Upload, sell, or monetize your personal phonebook or address book contacts</li>
                <li>Collect sensitive personal information such as SMS message contents, financial data, or passwords</li>
                <li>Track your precise GPS location</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">2. Permissions & Data Usage</h2>
              <p className="mb-3">
                To provide caller identification, dialer, and spam-blocking capabilities, Caller ID requests certain sensitive device permissions with your explicit consent:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                <li>
                  <strong className="text-white">Phone & Call State (READ_PHONE_STATE, ANSWER_PHONE_CALLS):</strong> Allows the app to detect incoming and outgoing call states in real time, display caller details, and handle call actions as requested by the user.
                </li>
                <li>
                  <strong className="text-white">Contacts (READ_CONTACTS):</strong> Used locally to match incoming phone numbers against your address book so you can immediately see when a saved contact is calling. Your contacts remain securely on your device and are never transmitted to external servers.
                </li>
                <li>
                  <strong className="text-white">Call Log (READ_CALL_LOG, WRITE_CALL_LOG):</strong> Required if you use the app as your default dialer or call management tool, allowing you to view and manage your recent call history and identify unidentified numbers from missed calls.
                </li>
                <li>
                  <strong className="text-white">Call Screening & Spam Blocker:</strong> Enables the app to compare incoming phone numbers against local spam criteria or known spam patterns to filter unwanted telemarketing, fraud, and robocalls.
                </li>
                <li>
                  <strong className="text-white">Display Over Other Apps (SYSTEM_ALERT_WINDOW):</strong> Needed to render the floating Caller ID dialog and caller identification information directly on your screen when an incoming call is received.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">3. Local Data Storage and Security</h2>
              <p>
                All user configurations—including custom blacklists, call preferences, and cached caller tags—are stored in your device's private application sandbox. We implement industry-standard security practices to ensure your local preferences remain protected. When you clear the app cache, clear app data, or uninstall the application, all locally saved preferences and logs are permanently removed from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">4. Third-Party Services & Advertising</h2>
              <p className="mb-3">
                To keep Caller ID free for all users, we may display third-party advertisements served by Google AdMob. These advertising partners may collect and process non-personally identifiable technical information (such as Google Advertising ID, operating system version, and anonymous interaction metrics) in compliance with privacy regulations.
              </p>
              <p>
                Google handles this data independently under its own terms. For further details on how Google processes ad data, please review the <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">Google Privacy Policy & Partner Sites Terms</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">5. Analytics & Diagnostics</h2>
              <p>
                We may receive anonymous, aggregated crash analytics and performance logs (such as via Google Play Console) to diagnose application crashes and improve stability across different Android phone models. This diagnostic data contains no personal identifiers, contact numbers, or call contents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">6. Children's Privacy</h2>
              <p>
                Caller ID is not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe that a minor has provided us with personal data, please contact us and we will promptly ensure appropriate steps are taken.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">7. Your Rights & Choices (GDPR & CCPA)</h2>
              <p className="mb-3">
                Under global privacy regulations including GDPR and CCPA, you retain full sovereignty over your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>You can grant, modify, or revoke phone, contact, and call log permissions at any time via your device's Android Settings &gt; Apps &gt; Caller ID &gt; Permissions.</li>
                <li>Because we do not maintain a cloud database of personal records, there is no remote profile to delete. Uninstalling the app permanently purges all local app data.</li>
                <li>You can opt out of personalized advertisements via your device's Google Ads settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may periodically update this Privacy Policy to reflect app updates, new Android OS requirements, or changes in legal regulations. Any revisions will be published immediately on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">9. Contact Us</h2>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy or the data practices of Caller ID, please contact <strong>{partnerName}</strong> at: <a href="mailto:aisoftwaresupport@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">aisoftwaresupport@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
