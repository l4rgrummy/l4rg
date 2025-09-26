import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Footer,
  Header,
  FirstVisitPromo,
  MobileCallBanner,
} from "./components";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
    template: "%s | L4RG",
  },
  description:
    "L4RG Digital Plus LLC provides comprehensive digital marketing services including social media marketing, PPC advertising, web development, app development, and tech support services across USA.",
  keywords: [
    "digital marketing",
    "social media marketing",
    "PPC advertising",
    "web development",
    "app development",
    "tech support",
    "Instagram marketing",
    "Facebook marketing",
    "LinkedIn marketing",
    "Google Ads",
    "Bing Ads",
    "Twitter marketing",
    "TikTok marketing",
    "Pinterest marketing",
    "Reddit marketing",
    "Snapchat marketing",
  ],
  authors: [{ name: "L4RG Digital Plus LLC" }],
  creator: "L4RG Digital Plus LLC",
  publisher: "L4RG Digital Plus LLC",
  robots: "index, follow",
  metadataBase: new URL("https://l4rgdigitalplus.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://l4rgdigitalplus.com",
    siteName:
      "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
    title:
      "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
    description:
      "L4RG Digital Plus LLC provides comprehensive digital marketing services including social media marketing, PPC advertising, web development, app development, and tech support services across USA.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L4RG Digital Plus LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "L4RG Digital Plus LLC - Leading Digital Marketing & Tech Support Services",
    description:
      "L4RG Digital Plus LLC provides comprehensive digital marketing services including social media marketing, PPC advertising, web development, app development, and tech support services across USA.",
    creator: "@sureshdas1978",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    copyright: "© 2024 L4RG Digital Plus LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <FirstVisitPromo />
        {children}
        <div className="pb-16 md:pb-0">
          <Footer />
        </div>
        <MobileCallBanner />
        <StructuredData />
      </body>
    </html>
  );
}
