import type { Metadata } from "next";
import { notFound } from "next/navigation";

import InstagramMarketing from "@/app/(services)/components/InstagramMarketing";
import AppDevelopment from "../components/AppDevelopment";
import BingAds from "../components/BingAds";
import FacebookMarketing from "../components/FacebookMarketing";
import GooglePPC from "../components/GooglePPC";
import LinkedInMarketing from "../components/LinkedInMarketing";
import PinterestMarketing from "../components/PinterestMarketing";
import RedditMarketing from "../components/RedditMarketing";
import SnapchatMarketing from "../components/SnapchatMarketing";
import TiktokMarketing from "../components/TiktokMarketing";
import TwitterMarketing from "../components/TwitterMarketing";
import WebDevelopment from "../components/WebDevelopment";
import TechSupportServices from "../components/TechSupportServices";

type Params = { slug: string };

const slugs: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  }
> = {
  "tech-support-services": {
    title:
      "Tech Support Services | Managed IT Solutions for Businesses in the USA",
    description:
      "Reliable Tech Support 24/7 Services in US, IT Hardware,Software Maintenance, Networking Support, Printer Support, Cloud Support Troubleshooting Support Services",
    keywords: [
      "Best Tech Support Service in USA",
      "Top Tech Support Services in USA",
      "Cheap Tech Support Services in USA",
      "Tech Support Strategy Services",
      "Viruses",
      "Wireless",
      "Email",
      "Data Backups",
      "Crashes",
      "Printers Support",
    ],
    ogImage: "/tech-support-dashboard-interface.png",
  },
  "linkedin-marketing-services-in-usa": {
    title: "Linkedin Marketing Services | L4RG DIGI PLUS",
    description:
      "Looking to create leads on LinkedIn for your B2B company? Visit L4RG DIGI PLUS, the top LinkedIn marketing business in the USA.",
    keywords: [
      "Best Linkedin Marketing Service in USA",
      "Top Linkedin Marketing Services in USA",
      "Cheap Linkedin Marketing Services in USA",
      "Linkedin Marketing Strategy Services",
      "Linkedin Marketing Services",
      "Linkedin Ads",
      "Linkedin Growth Agency",
      "Linkedin marketing strategy for B2B",
    ],
    ogImage: "/linkedin-professional-dashboard-interface.png",
  },
  "facebook-marketing-services-in-usa": {
    title: "Award-Winning Best Facebook Advertising Agency in USA",
    description:
      "With L4RG DIGI Plus Advertise, Optimize, and Enhance Your Sales Through Facebook. Let's have a Discussion about using Facebook Ads to Enhance Your Sales.",
    keywords: [
      "Best Award-Winning Best Facebook Advertising Agency in USA | l4rgdigiplus.com",
      "Facebook Marketing Company in USA",
      "Facebook Marketing",
      "Facebook Marketing Agency in USA",
      "Top Facebook Marketing Agency in USA",
      "Facebook Ads",
      "Cheap Facebook Marketing Agency in USA",
    ],
    ogImage: "/facebook-ads-manager-dashboard-interface.png",
  },
  "instagram-marketing-services-in-usa": {
    title: "Leading Instagram Marketing Agency in USA | L4RG",
    description:
      "Top Instagram Marketing Company in USA. Our marketing services help our clients significantly grow on Instagram. Call us right now.",
    keywords: [
      "Best Instagram Marketing Agency in USA",
      "Instagram Marketing Agency in USA",
      "Top Instagram Marketing Services in USA",
      "Instagram Marketing",
      "Cheap Instagram Marketing Services in USA",
      "Instagram Ads",
      "Instagram Marketing Firms",
      "Top Instagram Marketing Firms in USA",
    ],
    ogImage: "/professional-business-network-pattern.png",
  },
  "tiktok-marketing-services-in-usa": {
    title: "TikTok Marketing Company in USA | L4RG DIGI PLUS",
    description:
      "L4RG DIGI PLUS makes TikTok marketing simpler than you ever imagined. Let us Viral Your Brand. Contact Our Team For Further Query.",
    keywords: [
      "TikTok Marketing Company in USA",
      "TikTok Marketing Agency in USA",
      "Best TIkTok Marketing Company in USA",
      "Top TikTok Marketing Agency in USA",
      "TIkTok Marketing Firm in USA",
      "Top TikTok Marketing Agency in USA",
    ],
    ogImage: "/tiktok-mobile-app-interface-vertical-videos.png",
  },
  "snapchat-marketing-services-in-usa": {
    title: "Snapchat Marketing Agency in USA - L4RG DIGI PLUS",
    description:
      "We are an agency that knows how to utilise the Power of Advertising on Snapchat to Enhance Your Sales. Let's Discuss to Work Together Today",
    keywords: [
      "Snapchat Marketing Services in USA",
      "Best Snapchat Marketing agency in USA",
      "Snapchat Marketing Services in USA",
      "Snapchat Marketing",
      "Top Snapchat Marketing Services in USA",
      "Snapchat Marketing Firm in USA",
    ],
    ogImage: "/snapchat-ar-lens-interface.png",
  },
  "twitter-marketing-services-in-usa": {
    title: "Twitter Marketing Agency in USA  - L4RG DIGI PLUS",
    description:
      "Enhance your business with Experienced Twitter Marketing Services. Our Twitter Professionals will Increase your awareness and Retweets.",
    keywords: [
      "Twitter Marketing Company in USA",
      "Twitter Marketing Agency in USA",
      "Best Twitter Marketing Agency in USA",
      "Twitter Marketing",
    ],
    ogImage: "/twitter-x-interface-dark-mode-timeline.png",
  },
  "google-ppc-services-in-usa": {
    title: "PPC Services in USA | Drive Sales With PPC Services | L4RG",
    description:
      "Need PPC management services? Trust L4RG DIGI PLUS to provide PPC services that Increase your sales and lead generation efforts. Get a free quote now!",
    keywords: [
      "SPPC Services in USA",
      "Best PPC Services in USA",
      "Top PPC Services in USA",
      "PPC Services",
      "Pay Per Click",
    ],
    ogImage: "/google-ads-dashboard-interface.png",
  },
  "bing-ads-services-in-usa": {
    title: "Bing Ads Services in USA | Microsoft Advertising PPC",
    description:
      "We are a team of Reddit marketing experts who provide services such as Reddit management, Our team has experience in multiple fields of marketing.",
    keywords: [
      "Best Bing Ads Service in USA",
      "Top Bing Ads Service in USA",
      "Bing Ads Services in USA",
    ],
    ogImage: "/microsoft-ads-dashboard-interface.png",
  },
  "pinterest-marketing-services-in-usa": {
    title: "Pinterest Marketing Services in USA | L4RG DIGI PLUS",
    description:
      "With Pinterest marketing services in USA, you will be able to reach new people and increase your exposure on the platform",
    keywords: [
      "interest Marketing Services in USA",
      "Best Pinterest Marketing Services in USA",
      "Top Pinterest Marketing Services in USA",
      "Cheap Pinterest Marketing Services in USA",
    ],
    ogImage: "/pinterest-board-layout-creative-pins.png",
  },
  "reddit-marketing-services-in-usa": {
    title: "Expert Reddit Marketing Services in USA | L4RG DIGI PLUS",
    description:
      "We are a team of Reddit marketing experts who provide services such as Reddit management, Our team has experience in multiple fields of marketing.",
    keywords: [
      "Reddit Marketing Services in USA",
      "Best Reddit Marketing Services in USA",
      "Top Reddit Marketing Services in USA",
      "Reddit Marketing Agency in USA",
    ],
    ogImage: "/reddit-community-discussion-interface.png",
  },
  "web-development-services-in-usa": {
    title: "Web Development Services in USA | L4RG DIGI PLUS",
    description:
      "As a top web development company in the USA we provide custom web development and web design for all of our clients business needs",
    keywords: [
      "Top Web Development Company in USA",
      "Web Development Service in Dubai",
      "Web Design Agency in USA",
    ],
    ogImage: "/globe.svg",
  },
  "app-development-services-in-usa": {
    title: "App Development Service in USA | L4RG DIGI PLUS",
    description:
      "We provide organizations with end-to-end services for developing mobile apps. Leading US company for the production of mobile apps.",
    keywords: [
      "Mobile app development services in USA",
      "iOS app development in USA",
      "Android app development in USA",
      "App development company in USA",
      "App development agency in USA",
    ],
    ogImage: "/window.svg",
  },
};

export function generateStaticParams() {
  return Object.keys(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = slugs[slug];
  if (!svc) return {};

  const canonicalUrl = `https://l4rgdigitalplus.com/${slug}`;

  return {
    title: svc.title,
    description: svc.description,
    keywords: svc.keywords,
    robots: "index, follow",
    authors: [{ name: "L4RG Digital Plus LLC" }],
    creator: "L4RG Digital Plus LLC",
    publisher: "L4RG Digital Plus LLC",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: "L4RG Digital Plus LLC",
      title: svc.title,
      description: svc.description,
      images: [
        {
          url: svc.ogImage,
          width: 1200,
          height: 630,
          alt: svc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: svc.title,
      description: svc.description,
      creator: "@sureshdas1978",
      images: [svc.ogImage],
    },
    other: {
      "theme-color": "#ffffff",
      "msapplication-TileColor": "#ffffff",
      copyright: "© 2024 L4RG Digital Plus LLC",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const svc = slugs[slug];
  if (!svc) return notFound();

  return (
    <main>
      {slug === "tech-support-services" && <TechSupportServices />}
      {slug === "instagram-marketing-services-in-usa" && <InstagramMarketing />}
      {slug === "facebook-marketing-services-in-usa" && <FacebookMarketing />}
      {slug === "linkedin-marketing-services-in-usa" && <LinkedInMarketing />}
      {slug === "tiktok-marketing-services-in-usa" && <TiktokMarketing />}
      {slug === "snapchat-marketing-services-in-usa" && <SnapchatMarketing />}
      {slug === "twitter-marketing-services-in-usa" && <TwitterMarketing />}
      {slug === "google-ppc-services-in-usa" && <GooglePPC />}
      {slug === "pinterest-marketing-services-in-usa" && <PinterestMarketing />}
      {slug === "reddit-marketing-services-in-usa" && <RedditMarketing />}
      {slug === "web-development-services-in-usa" && <WebDevelopment />}
      {slug === "app-development-services-in-usa" && <AppDevelopment />}
      {slug === "bing-ads-services-in-usa" && <BingAds />}
    </main>
  );
}
