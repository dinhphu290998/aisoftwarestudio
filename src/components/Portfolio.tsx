"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { AppData } from "@/lib/playstore";

interface PortfolioProps {
  apps: AppData[];
}

export function Portfolio({ apps }: PortfolioProps) {
  if (!apps || apps.length === 0) {
    return (
      <div className="w-full text-center py-20 text-slate-500">
        Loading or no apps found...
      </div>
    );
  }

  // Ensure unique apps in case of overlap between developers
  let uniqueApps = apps.filter((app, index, self) =>
    index === self.findIndex((t) => t.link === app.link)
  );

  // Hardcoded priority list based on most downloads
  const downloadPriority = [
    "Snap Video Downloader",
    "Snap Video",
    "Snap Video No Watermark",
    "AI Image Generator",
    "Idols Call Prank: Fake Call",
    "Emotes Viewer Skin",
    "Hyper Browse - Private Web",
    "Emotes Viewer Skin Tools",
    "TV Remote - Smart Universal"
  ];

  // Sort uniqueApps based on the priority list
  uniqueApps = uniqueApps.sort((a, b) => {
    const aIndex = downloadPriority.findIndex(p => a.title.includes(p));
    const bIndex = downloadPriority.findIndex(p => b.title.includes(p));
    
    // If both are found in the priority list, sort by their index
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    // If only 'a' is found, 'a' comes first
    if (aIndex !== -1) return -1;
    // If only 'b' is found, 'b' comes first
    if (bIndex !== -1) return 1;
    // If neither is found, sort alphabetically or keep original order
    return 0;
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {uniqueApps.map((app, index) => (
          <motion.a
            href={app.link}
            target="_blank"
            rel="noreferrer"
            key={app.link + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/20 backdrop-blur-md overflow-hidden transition-all duration-300"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-2xl ring-1 ring-white/10 bg-black/50">
                <img 
                  src={app.icon} 
                  alt={app.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white/90 group-hover:text-white line-clamp-2 leading-snug">
                {app.title}
              </h4>
              <div className="mt-auto pt-4 flex items-center text-sm font-medium text-white/40 group-hover:text-blue-400 transition-colors">
                <span>View on Play Store</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
