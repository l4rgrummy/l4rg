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
      </main>
    </>
  );
}
