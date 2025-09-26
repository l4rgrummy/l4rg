import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest developments from L4RG.",
};

export default function NewsUpdatesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">News & Updates</h1>
          <p className="text-slate-600 max-w-2xl">
            Company announcements, releases, and noteworthy milestones.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/news-updates-hero.png"
            alt="News & Updates"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">Coming soon: newsroom feed.</p>
      </div>
    </section>
  );
}
