import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FALLBACK_REAL_APPS, MONITORED_APP_IDS } from "@/lib/playstore";
import { Scale, CheckCircle2, FileText, ArrowLeft, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{
    package: string;
  }>;
}

export async function generateStaticParams() {
  return MONITORED_APP_IDS.map((pkg) => ({
    package: pkg,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { package: pkgId } = await params;
  const app = FALLBACK_REAL_APPS.find((a) => a.link.includes(pkgId));
  const appName = app ? app.title : pkgId;

  return {
    title: `Terms of Service - ${appName} | AI Software Studio`,
    description: `Official Terms of Service for ${appName} (${pkgId}) on Google Play Store. Compliant with Google Play Developer Policies and EU Digital Services Act.`,
    alternates: {
      canonical: `https://aisoftwarestudio.co/${pkgId}/terms-of-service`,
    },
  };
}

export default async function AppTermsOfServicePage({ params }: Props) {
  const { package: pkgId } = await params;
  const app = FALLBACK_REAL_APPS.find((a) => a.link.includes(pkgId));
  const appName = app ? app.title : pkgId;
  const developerName = app ? app.developer || app.developerId : "AI Software Studio";
  const lastUpdated = "November 2026";

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-sans relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />

      <Header />

      <div className="flex-1 w-full max-w-4xl mx-auto px-6 pt-36 pb-28 relative z-10 flex flex-col items-center">
        
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md">
          <Scale className="w-3.5 h-3.5" />
          <span>Application Terms of Service</span>
        </div>

        {/* Main Document Container */}
        <div className="w-full bg-[#0a0a0a]/90 p-8 sm:p-12 md:p-16 rounded-[2rem] border border-white/10 backdrop-blur-2xl shadow-2xl">
          
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              Package ID: {pkgId}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-300 text-lg">
              Application: <strong className="text-white">{appName}</strong>
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Published by <strong className="text-slate-200">{developerName}</strong> (AI Software Studio Partner Network)
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-500 font-mono">
              <span>Last Updated: {lastUpdated}</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Google Play Policy Compliant
              </span>
            </div>
          </div>

          {/* Quick Summary Callout */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-10 text-sm leading-relaxed text-slate-300 space-y-2">
            <div className="text-white font-semibold flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" /> Summary for Users &amp; Google Play Reviewers:
            </div>
            <p>
              These Terms of Service apply specifically to the mobile application <strong>{appName}</strong> ({pkgId}). All payments, in-app digital items, and subscriptions are managed exclusively through <strong>Google Play In-App Billing</strong>. The app is provided under a personal, revocable license strictly for end-user enjoyment in compliance with Google Play Developer Policies.
            </p>
          </div>

          {/* Document Content */}
          <div className="space-y-10 text-slate-300 leading-relaxed text-[15px]">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">1.</span> Trader Identification &amp; Developer Information
              </h2>
              <p>
                In compliance with Google Play Trader requirements and the European Union Digital Services Act (DSA):
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
                <li><strong>Application Name:</strong> {appName}</li>
                <li><strong>Android Package Name:</strong> <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-blue-300 font-mono">{pkgId}</code></li>
                <li><strong>Developer / Publisher:</strong> {developerName}</li>
                <li><strong>Studio Network:</strong> AI Software Studio</li>
                <li><strong>Support Contact:</strong> <a href="mailto:support@aisoftwarestudio.co" className="text-blue-400 underline hover:text-blue-300">support@aisoftwarestudio.co</a></li>
                <li><strong>Official Portal:</strong> <a href="https://aisoftwarestudio.co" className="text-blue-400 underline hover:text-blue-300">https://aisoftwarestudio.co</a></li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">2.</span> Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, accessing, or using {appName}, you agree to be legally bound by these Terms of Service. If you do not accept these Terms, do not install, access, or use the application. You affirm that you are of legal age in your jurisdiction to enter into this binding agreement.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">3.</span> Limited End-User License Grant
              </h2>
              <p>
                {developerName} grants you a personal, revocable, non-exclusive, non-transferable, non-sublicensable license to install and run {appName} on Android devices you own or control, solely for personal, non-commercial use.
              </p>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
                <li>Decompile, disassemble, reverse engineer, or attempt to extract source code from the APK.</li>
                <li>Bypass security controls, technical protections, or digital rights management mechanisms.</li>
                <li>Use the app for any illegal purposes or to distribute unsolicited communications.</li>
                <li>Rent, lease, sublicense, distribute, or commercially exploit any part of {appName}.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">4.</span> In-App Purchases, Subscriptions &amp; Billing
              </h2>
              <p>
                If {appName} offers paid features, premium content, virtual currency, or recurring subscriptions:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
                <li><strong>Google Play Billing:</strong> All financial transactions are processed securely through <strong>Google Play In-App Billing</strong>. The developer does not receive or store your financial payment details.</li>
                <li><strong>Auto-Renewal:</strong> Subscriptions renew automatically unless canceled at least 24 hours prior to the conclusion of the current billing cycle.</li>
                <li><strong>Cancellation:</strong> You may manage or cancel subscriptions at any time via <strong>Google Play Store &gt; Profile &gt; Payments &amp; Subscriptions &gt; Subscriptions</strong>.</li>
                <li><strong>Refunds:</strong> All refund requests must be submitted through the standard <strong>Google Play Refund Policy</strong> workflow.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">5.</span> Intellectual Property Rights
              </h2>
              <p>
                All rights, title, trademarks, logos, artwork, audio-visual elements, code, and content within {appName} remain the exclusive property of {developerName} and AI Software Studio. All rights not expressly granted herein are reserved.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">6.</span> Third-Party Services &amp; Advertising
              </h2>
              <p>
                {appName} may interface with third-party APIs and Google-certified ad networks (such as Google AdMob) to deliver content and advertising. These third-party services maintain their own terms and privacy practices.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">7.</span> Privacy Policy
              </h2>
              <p>
                Our collection and treatment of data for {appName} is outlined in our Privacy Policy. Please consult <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">our Privacy Policy</Link> for detailed disclosures regarding permissions and user privacy.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">8.</span> Disclaimer of Warranties &amp; Limitation of Liability
              </h2>
              <p>
                {appName.toUpperCase()} IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, {developerName.toUpperCase()} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED. UNDER NO CIRCUMSTANCES SHALL THE DEVELOPER OR STUDIO BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO USE THIS APPLICATION.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">9.</span> Termination
              </h2>
              <p>
                You may terminate these Terms at any time by permanently deleting {appName} from your device. We may terminate your license if you violate any of these Terms.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-blue-400">10.</span> Contact &amp; Support
              </h2>
              <p>
                For support, questions, or concerns regarding {appName} or these Terms:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-sm text-slate-300 space-y-1">
                <div>Application: {appName} ({pkgId})</div>
                <div>Developer: {developerName}</div>
                <div>Support Email: <a href="mailto:support@aisoftwarestudio.co" className="text-blue-400 hover:underline">support@aisoftwarestudio.co</a></div>
                <div>Website: <a href="https://aisoftwarestudio.co" className="text-blue-400 hover:underline">https://aisoftwarestudio.co</a></div>
              </div>
            </section>

          </div>

          {/* Footer Back link */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <Link href="/terms-of-service" className="hover:text-white transition-colors flex items-center gap-1">
              ← View General Terms of Service
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
