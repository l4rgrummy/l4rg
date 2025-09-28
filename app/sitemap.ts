import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog/posts";
import { getAllTags, slugifyTag } from "@/lib/blog/tags";

const siteUrl = "https://www.l4rgdigitalplus.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static top-level routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/privacy",
    "/terms",
    "/real-estate-leads",
    "/resources",
    "/resources/blog",
    "/resources/case-studies",
    "/resources/ciencepedia",
    "/resources/ebooks",
    "/resources/news-updates",
    "/resources/podcast",
    "/resources/press-releases",
    "/resources/product-videos",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  // Header-linked services from (services)/[slug]
  const serviceSlugs = [
    "tech-support-services",
    "linkedin-marketing-services-in-usa",
    "facebook-marketing-services-in-usa",
    "instagram-marketing-services-in-usa",
    "tiktok-marketing-services-in-usa",
    "snapchat-marketing-services-in-usa",
    "twitter-marketing-services-in-usa",
    "google-ppc-services-in-usa",
    "bing-ads-services-in-usa",
    "pinterest-marketing-services-in-usa",
    "reddit-marketing-services-in-usa",
    "web-development-services-in-usa",
    "app-development-services-in-usa",
  ];
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Sales Development section and children
  const salesDevSlugs = [
    "b2b-lead-generation",
    "account-based-marketing",
    "outbound-lead-generation",
    "linkedin-lead-generation",
    "outsourced-sdr",
    "inbound-sdr",
    "local-sdr",
    "b2b-appointment-setting",
    "cold-emailing",
    "cold-calling",
    "ai-sales-platform",
    "b2b-sales-training",
  ];
  const salesDevelopmentRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/sales-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8 as number | undefined,
    },
    ...salesDevSlugs.map((slug) => ({
      url: `${siteUrl}/sales-development/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as
        | "weekly"
        | "always"
        | "hourly"
        | "daily"
        | "monthly"
        | "yearly"
        | "never"
        | undefined,
      priority: 0.8 as number | undefined,
    })),
  ];

  // Go-To-Market
  const gtmSlugs = [
    "gtm-setup",
    "scaled-outbound",
    "enterprise-teams",
    "event-marketing",
    "webinar-marketing",
    "cross-border-marketing",
    "additional-channels",
    "sales-outsourcing",
  ];
  const gtmRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/go-to-market`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6 as number | undefined,
    },
    ...gtmSlugs.map((slug) => ({
      url: `${siteUrl}/go-to-market/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as
        | "weekly"
        | "always"
        | "hourly"
        | "daily"
        | "monthly"
        | "yearly"
        | "never"
        | undefined,
      priority: 0.6 as number | undefined,
    })),
  ];

  // Data Solutions
  const dataSolutionSlugs = [
    "b2b-data",
    "local-data",
    "audience-data",
    "data-enrichment",
    "business-development",
    "inbound-lead-generation",
  ];
  const dataSolutionRoutes: MetadataRoute.Sitemap = dataSolutionSlugs.map(
    (slug) => ({
      url: `${siteUrl}/data-solutions/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  // Industries
  const industrySlugs = [
    "information-technology",
    "software",
    "saas",
    "cybersecurity",
    "ai-technology",
    "cloud-services",
    "fintech",
    "crm-software",
    "erp",
    "hr-tech",
    "consulting",
    "msp",
    "manufacturing",
    "healthcare",
    "logistics",
    "energy-solar",
    "telecom",
    "data-centers",
  ];
  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${siteUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Blog posts
  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.id}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // Blog listing and tags
  const tagRoutes: MetadataRoute.Sitemap = getAllTags(posts).map((t) => ({
    url: `${siteUrl}/category/${slugifyTag(t)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  const blogIndexRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...salesDevelopmentRoutes,
    ...gtmRoutes,
    ...dataSolutionRoutes,
    ...industryRoutes,
    ...blogIndexRoute,
    ...blogRoutes,
    ...tagRoutes,
  ];
}
