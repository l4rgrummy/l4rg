import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-To-Market Services | L4RG",
  description:
    "Strategic go-to-market services including GTM setup, scaled outbound, enterprise solutions, event and webinar marketing, cross-border marketing, additional channels, and sales outsourcing.",
  keywords: [
    "go-to-market",
    "GTM setup",
    "scaled outbound",
    "enterprise sales",
    "event marketing",
    "webinar marketing",
    "cross-border marketing",
    "sales outsourcing",
  ],
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  creator: "L4RG Digital Plus LLC",
  publisher: "L4RG Digital Plus LLC",
  alternates: {
    canonical: "/go-to-market",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://l4rgdigitalplus.com/go-to-market",
    siteName: "L4RG Digital Plus LLC",
    title: "Go-To-Market Services | L4RG",
    description:
      "Strategic go-to-market services from GTM planning to scaled execution.",
    images: [
      {
        url: "/professional-business-network-pattern.png",
        width: 1200,
        height: 630,
        alt: "Go-To-Market Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go-To-Market Services | L4RG",
    description:
      "Strategic go-to-market services from GTM planning to scaled execution.",
    creator: "@sureshdas1978",
    images: ["/professional-business-network-pattern.png"],
  },
  other: {
    "theme-color": "#0ea5e9",
  },
};

export default function GoToMarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
