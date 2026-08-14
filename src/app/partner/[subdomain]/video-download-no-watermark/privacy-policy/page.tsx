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
    <div className="min-h-screen bg-[#050505] text-slate-300 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>
            <strong className="text-white">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong>
          </p>

          <p>
            Welcome to <strong>Video Download No Watermark</strong>. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            <strong>Personal Data:</strong> We do not collect or store any personal data (such as your name, email address, or phone number) unless you voluntarily provide it to us through customer support inquiries.
          </p>
          <p>
            <strong>Usage Data & Device Information:</strong> We automatically collect certain information when you use the App. This may include your device type, operating system, unique device identifiers, IP address, and interaction data within the App. This data is collected anonymously to help us improve the user experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Storage and Permissions</h2>
          <p>
            To function properly, the App requires permissions to access your device's storage. This allows the App to save downloaded videos directly to your gallery. We do not access, view, or upload any of your personal photos or files.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Third-Party Services</h2>
          <p>
            We use third-party advertising networks (such as Google AdMob, Facebook Audience Network, etc.) to serve ads in the App. These third-party services may use cookies and similar technologies to collect data about your interactions to serve relevant advertisements. They operate under their own Privacy Policies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect the information we collect. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Children's Privacy</h2>
          <p>
            Our App does not knowingly collect or solicit personal information from children under the age of 13. If we discover that a child under 13 has provided us with personal information, we will delete such information from our systems immediately.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>aisoftwaresupport@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
