import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Sales Development podcast with experts.",
};

export default function PodcastPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">Podcast</h1>
          <p className="text-slate-600 max-w-2xl">
            Listen to conversations with industry leaders on pipeline
            generation, outbound, SDR management, and modern go-to-market
            strategies.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/podcast-hero.png"
            alt="Podcast"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">
          Embed your podcast player here (Spotify, Apple Podcasts, etc.).
        </p>
      </div>
    </section>
  );
}
