import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Lead Generation & Appointment Setting Services | L4RG",
  description:
    "Professional B2B lead generation and appointment setting services. Generate qualified leads, build sales pipeline, and grow revenue with our expert team. Multi-channel outreach and proven results.",
  keywords: [
    "B2B lead generation",
    "appointment setting",
    "sales leads",
    "lead generation services",
    "B2B marketing",
    "sales pipeline",
    "qualified leads",
    "business development",
    "lead gen",
    "appointment setting services",
  ],
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  creator: "L4RG Digital Plus LLC",
  publisher: "L4RG Digital Plus LLC",
  alternates: {
    canonical: "https://l4rgdigitalplus.com/b2b-lead-generation",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://l4rgdigitalplus.com/b2b-lead-generation",
    siteName: "L4RG Digital Plus LLC",
    title: "B2B Lead Generation & Appointment Setting Services | L4RG",
    description:
      "Professional B2B lead generation and appointment setting services. Generate qualified leads, build sales pipeline, and grow revenue with our expert team. Multi-channel outreach and proven results.",
    images: [
      {
        url: "/professional-business-network-pattern.png",
        width: 1200,
        height: 630,
        alt: "B2B Lead Generation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation & Appointment Setting Services | L4RG",
    description:
      "Professional B2B lead generation and appointment setting services. Generate qualified leads, build sales pipeline, and grow revenue with our expert team.",
    creator: "@sureshdas1978",
    images: ["/professional-business-network-pattern.png"],
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    copyright: "© 2024 L4RG Digital Plus LLC",
  },
};

export default function B2BLeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
