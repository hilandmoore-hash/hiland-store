import { activeProducts } from "@/data/products";
import { posts } from "@/data/posts";

const BASE = process.env.SITE_URL || "https://yourdomain.com";

export default function sitemap() {
  const productUrls = activeProducts().map((p) => ({
    url: `${BASE}/product/${p.id}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const postUrls = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [
    { url: BASE, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...productUrls,
    ...postUrls,
  ];
}
