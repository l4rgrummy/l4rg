import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CIENCEpedia",
  description: "Dictionary of sales terms and acronyms.",
};

export default function CiencepediaPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">CIENCEpedia</h1>
          <p className="text-slate-600 max-w-2xl">
            A curated glossary of sales, marketing, and go-to-market
            terminology.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/ciencepedia-hero.png"
            alt="CIENCEpedia"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">
          Coming soon: searchable glossary with categories and examples.
        </p>
      </div>
    </section>
  );
}
