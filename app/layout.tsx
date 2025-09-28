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
import Script from "next/script";

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
  icons: {
    apple: [
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-57x57.webp",
        sizes: "57x57",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-60x60.webp",
        sizes: "60x60",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-72x72.webp",
        sizes: "72x72",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-76x76.webp",
        sizes: "76x76",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-114x114.webp",
        sizes: "114x114",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-120x120.webp",
        sizes: "120x120",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-144x144.webp",
        sizes: "144x144",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-152x152.webp",
        sizes: "152x152",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-apple-icon-180x180.webp",
        sizes: "180x180",
      },
    ],
    icon: [
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-android-icon-192x192.webp",
        type: "image/webp",
        sizes: "192x192",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-favicon-32x32.webp",
        type: "image/webp",
        sizes: "32x32",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-favicon-96x96.webp",
        type: "image/webp",
        sizes: "96x96",
      },
      {
        url: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-favicon-16x16.webp",
        type: "image/webp",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/manifest.json",
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
    "msapplication-TileImage":
      "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-ms-icon-144x144.webp",
    copyright: "© 2024 L4RG Digital Plus LLC",
    "yandex-verification": "9a34e9c6b80df7f9",
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
      <Script id="tawk-to" strategy="afterInteractive">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68d0dc2979251e1928fac1ce/1j5nto18h';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SKPNZNVJZQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SKPNZNVJZQ');
          `}
      </Script>
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "thpl9blm7g");
          `}
      </Script>
    </html>
  );
}
