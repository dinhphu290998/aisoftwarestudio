import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aisoftwarestudio.co"),
  title: {
    default: "AI Software Studio | Premium Mobile App Development",
    template: "%s | AI Software Studio",
  },
  description: "Pioneering the next generation of mobile applications. We blend cutting-edge AI with exceptional user experiences to build software that matters. Award-winning app development studio.",
  keywords: [
    "AI Software Studio",
    "Mobile App Development",
    "App Studio",
    "AI Integration",
    "React Native",
    "iOS Development",
    "Android Development",
    "Premium Software",
    "Custom App Development"
  ],
  authors: [{ name: "AI Software Studio", url: "https://aisoftwarestudio.co" }],
  creator: "AI Software Studio",
  publisher: "AI Software Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AI Software Studio | Premium Mobile App Development",
    description: "Pioneering the next generation of mobile applications. We blend cutting-edge AI with exceptional user experiences to build software that matters.",
    url: "https://aisoftwarestudio.co",
    siteName: "AI Software Studio",
    images: [
      {
        url: "/icon.svg", // Fallback to our SVG icon
        width: 800,
        height: 600,
        alt: "AI Software Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Studio",
    description: "Pioneering the next generation of mobile applications.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
