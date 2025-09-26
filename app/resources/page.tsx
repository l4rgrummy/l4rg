import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resources",
  description: "Podcasts, blogs, guides, videos, and updates to help you grow.",
};

const resources = [
  {
    href: "/resources/podcast",
    title: "Podcast",
    description: "Sales Development podcast with experts",
  },
  {
    href: "/resources/blog",
    title: "Blog",
    description: "All content produced by our team",
  },
  {
    href: "/resources/ciencepedia",
    title: "CIENCEpedia",
    description: "Dictionary of sales terms and acronyms",
  },
  {
    href: "/resources/case-studies",
    title: "Case Studies",
    description: "Real success stories and results",
  },
  {
    href: "/resources/ebooks",
    title: "Ebooks",
    description: "Free lead gen guides",
  },
  {
    href: "/resources/product-videos",
    title: "Product Videos",
    description: "Our solutions in action",
  },
  {
    href: "/resources/news-updates",
    title: "News & Updates",
    description: "Latest developments",
  },
  {
    href: "/resources/press-releases",
    title: "Press Releases",
    description: "Press releases and company updates",
  },
];

export default function ResourcesIndexPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-6">Resources</h1>
          <p className="text-slate-600 max-w-2xl">
            Explore our library of educational content, practical guides, and
            company news.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/resources-hero.png"
            alt="Resources overview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg border border-slate-200 p-5 hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
            <p className="text-sm text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
