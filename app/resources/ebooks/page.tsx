import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ebooks",
  description: "Free lead generation guides and playbooks.",
};

export default function EbooksPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Ebooks</h1>
          <p className="text-slate-600 max-w-2xl">
            Download practical guides on outbound, inbound, and sales
            development best practices.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-50">
          <Image
            src="/ebooks-hero.png"
            alt="Ebooks"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 p-6">
        <p className="text-sm text-slate-600">
          Coming soon: downloadable resources.
        </p>
      </div>
    </section>
  );
}
