import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";

const SITE = "https://kostic-jovic.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/o-nama`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/oblasti`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE}/tim`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/politika-privatnosti`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/uslovi`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const posts = getAllPostsMeta().map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...posts];
}
