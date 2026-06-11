const BASE = process.env.SITE_URL || "https://yourdomain.com";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
