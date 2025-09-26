import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real success stories and results from client engagements.",
};

export default function CaseStudiesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
          <p className="text-slate-600 max-w-2xl">
            Explore measurable outcomes from our campaigns across industries and
            channels.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/case-studies-hero.png"
            alt="Case studies"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">
          Coming soon: case study library.
        </p>
      </div>
    </section>
  );
}
