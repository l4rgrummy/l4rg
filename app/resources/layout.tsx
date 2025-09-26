import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore podcasts, articles, guides, videos, and company updates from L4RG.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
