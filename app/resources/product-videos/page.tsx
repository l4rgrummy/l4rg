import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Product Videos",
  description: "See our solutions in action.",
};

export default function ProductVideosPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Product Videos</h1>
          <p className="text-slate-600 max-w-2xl">
            Watch walkthroughs, demos, and tutorials that highlight key
            capabilities.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/product-videos-hero.png"
            alt="Product videos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">Coming soon: video gallery.</p>
      </div>
    </section>
  );
}
