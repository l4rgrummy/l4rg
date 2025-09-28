import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://l4rgdigitalplus.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
