import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press Releases",
  description: "Official statements and company updates.",
};

export default function PressReleasesPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Press Releases</h1>
          <p className="text-slate-600 max-w-2xl">
            Browse our official news releases for media and stakeholders.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/press-releases-hero.png"
            alt="Press releases"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">
          Coming soon: press release archive.
        </p>
      </div>
    </section>
  );
}
