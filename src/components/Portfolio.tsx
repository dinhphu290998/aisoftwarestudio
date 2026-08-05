"use client";

import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import type { AppData } from "@/lib/playstore";
import Image from "next/image";

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

  // Group apps by developer
  const groupedApps = apps.reduce((acc, app) => {
    if (!acc[app.developerId]) {
      acc[app.developerId] = [];
    }
    acc[app.developerId].push(app);
    return acc;
  }, {} as Record<string, AppData[]>);

  // Helper to decode developer names for display
  const getDevName = (id: string) => {
    try {
      return decodeURIComponent(id);
    } catch {
      return id;
    }
  };

  return (
    <div className="w-full space-y-24">
      {Object.entries(groupedApps).map(([devId, devApps], groupIdx) => (
        <div key={devId} className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10" />
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white/80">
              Developer: <span className="text-white">{getDevName(devId)}</span>
            </h3>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devApps.map((app, index) => (
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
      ))}
    </div>
  );
}
