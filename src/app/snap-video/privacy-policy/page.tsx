import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
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
              <strong>The short version:</strong> Snap Video does not ask you to create an account, and we do not collect or store your personal information on our servers. Everything you download stays on your device.
            </div>

            <p>
              This policy explains how the <strong className="text-white">Snap Video</strong> application ("Snap Video", "the app") handles information. Snap Video is published by <strong className="text-white">AI Software Studio</strong> ("we", "us").
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">1. Information we collect</h2>
              <p className="mb-3">We do not collect, sell, or share personal information. Specifically, the app does <strong className="text-white">not</strong> require or gather:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Your name, email address, phone number, or postal address</li>
                <li>Account credentials — there is no sign-up and no login</li>
                <li>Contacts, photos, location, or health data</li>
                <li>The content of the videos or audio files you save</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">2. Content you download</h2>
              <p>
                Links you paste into Snap Video are used only to retrieve the file you asked for. Downloaded videos and audio are written to local storage on your device. We do not upload, copy, index, host, or retain that content, and we cannot see what you have saved. Deleting a file in the app, or deleting the app itself, removes that content from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">3. Purchases and subscriptions</h2>
              <p>
                Snap Video offers optional in-app purchases. All payments are processed by Google Play through your Google account — we never receive or store your payment card details. Google provides us only with anonymous, aggregated sales and subscription reporting. Google's handling of your payment information is governed by the <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">4. Advertising</h2>
              <p className="mb-3">
                Snap Video may display advertisements supplied by Google AdMob. To serve and measure ads, AdMob may process technical information such as a device advertising identifier, coarse device and operating-system details, and general interaction data (for example, that an ad was shown or tapped). This is handled by Google as an independent service; we do not receive your personal information through it.
              </p>
              <p>
                For details on how Google uses information from apps that use its services, see <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">Google's policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">5. Analytics and crash reporting</h2>
              <p>
                If you have enabled sharing of analytics with developers in your device settings, Google may provide us with anonymous, aggregated crash and performance reports. These contain no information that identifies you, and the setting is under your control in your device's Privacy settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">6. Children's privacy</h2>
              <p>
                Snap Video is not directed at children under 13. We do not knowingly collect personal information from children. Because the app collects no personal information from any user, there is nothing for us to delete — but if you have a concern, contact us at the address below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">7. Your rights</h2>
              <p>
                Privacy laws including the GDPR and the CCPA give you rights to access, correct, or delete personal data a company holds about you. We hold no personal data about you, so there is nothing for us to retrieve or erase. We do not sell or share personal information, and we have no user database. If you would like written confirmation of this, contact us and we will provide it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">8. Changes to this policy</h2>
              <p>
                We may update this policy as the app changes. The revision date at the top of this page always reflects the current version, and material changes will be noted in the app's release notes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white/90 mb-4">9. Contact</h2>
              <p>
                Questions about this policy or about privacy in Snap Video: <a href="mailto:aisoftwaresupport@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">aisoftwaresupport@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
