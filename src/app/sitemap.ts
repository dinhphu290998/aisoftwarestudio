import type { MetadataRoute } from "next";
import { AMAZON_PRODUCTS } from "@/data/amazonProducts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aisoftwarestudio.co";
  const now = new Date();

  // Core high-value pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/affiliate-disclosure`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // All 102 individual product sales reviews & buyer guide articles
  const productPages: MetadataRoute.Sitemap = AMAZON_PRODUCTS.map((product) => ({
    url: `${baseUrl}/reviews/${product.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
