import type { Metadata } from "next";
import {
  ContactSection,
  FAQSection,
  HeroSection,
  IndustriesSection,
  PricingSection,
  ProcessSection,
  ResultsSection,
  ServicesSection,
  TrustSection,
} from "./components";

export const metadata: Metadata = {
  title:
    "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
  description:
    "L4RG Digital Plus LLC provides comprehensive digital marketing services including social media marketing, PPC advertising, web development, app development, and 24/7 tech support services across USA. Grow your business with our expert team.",
  keywords: [
    "digital marketing agency",
    "social media marketing",
    "PPC advertising",
    "web development",
    "app development",
    "tech support",
    "Instagram marketing",
    "Facebook marketing",
    "LinkedIn marketing",
    "Google Ads",
    "SEO services",
    "digital marketing USA",
  ],
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  creator: "L4RG Digital Plus LLC",
  publisher: "L4RG Digital Plus LLC",
  alternates: {
    canonical: "https://l4rgdigitalplus.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://l4rgdigitalplus.com",
    siteName: "L4RG Digital Plus LLC",
    title:
      "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
    description:
      "L4RG Digital Plus LLC provides comprehensive digital marketing services including social media marketing, PPC advertising, web development, app development, and 24/7 tech support services across USA. Grow your business with our expert team.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L4RG Digital Plus LLC - Digital Marketing & Tech Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
    description:
      "L4RG Digital Plus LLC provides comprehensive digital marketing services including social media marketing, PPC advertising, web development, app development, and 24/7 tech support services across USA.",
    creator: "@sureshdas1978",
    images: ["/twitter-image.jpg"],
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    copyright: "© 2024 L4RG Digital Plus LLC",
  },
};

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <IndustriesSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        {/* Hidden crawlable links for sitemap discovery */}
        <nav aria-hidden="true" className="sr-only">
          <ul>
            {/* Section indexes */}
            <li>
              <a href="/sales-development">Sales Development</a>
            </li>
            <li>
              <a href="/go-to-market">Go-To-Market</a>
            </li>
            <li>
              <a href="/data-solutions">Data Solutions</a>
            </li>
            <li>
              <a href="/industries">Industries</a>
            </li>
            <li>
              <a href="/resources/blog">Blog</a>
            </li>
            {/* Sales Development children */}
            {[
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
            ].map((slug) => (
              <li key={`sd-${slug}`}>
                <a href={`/sales-development/${slug}`}>{slug}</a>
              </li>
            ))}
            {/* Services slugs */}
            {[
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
            ].map((slug) => (
              <li key={`svc-${slug}`}>
                <a href={`/${slug}`}>{slug}</a>
              </li>
            ))}
            {/* Go-To-Market children */}
            {[
              "gtm-setup",
              "scaled-outbound",
              "enterprise-teams",
              "event-marketing",
              "webinar-marketing",
              "cross-border-marketing",
              "additional-channels",
              "sales-outsourcing",
            ].map((slug) => (
              <li key={`gtm-${slug}`}>
                <a href={`/go-to-market/${slug}`}>{slug}</a>
              </li>
            ))}
            {/* Data Solutions children */}
            {[
              "b2b-data",
              "local-data",
              "audience-data",
              "data-enrichment",
              "business-development",
              "inbound-lead-generation",
            ].map((slug) => (
              <li key={`ds-${slug}`}>
                <a href={`/data-solutions/${slug}`}>{slug}</a>
              </li>
            ))}
            {/* Industries children */}
            {[
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
            ].map((slug) => (
              <li key={`ind-${slug}`}>
                <a href={`/industries/${slug}`}>{slug}</a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
