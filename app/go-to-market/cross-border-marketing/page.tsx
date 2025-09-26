"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Languages, Shield, Ship } from "lucide-react";

export default function CrossBorderMarketingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[radial-gradient(900px_450px_at_50%_-10%,rgba(14,165,233,0.12),transparent)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-4 bg-sky-100 text-sky-700 border-sky-300">
              Global Expansion
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Cross-border Marketing
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-prose">
              Enter and scale in new markets with localized strategy, compliant
              operations, and multi-channel demand.
            </p>
            <div className="mt-6 flex gap-3">
              <Button size="lg">Assess new markets</Button>
              <Button size="lg" variant="outline">
                See localization kits
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl border bg-muted overflow-hidden">
            <Image
              src="/logistics-hero.png"
              alt="Cross-border Marketing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Market Fit",
              desc: "ICP + messaging per region.",
              Icon: Globe,
            },
            {
              title: "Localization",
              desc: "Languages, formats, and culture.",
              Icon: Languages,
            },
            {
              title: "Regulatory",
              desc: "Data, consent, tax and privacy.",
              Icon: Shield,
            },
            {
              title: "Routes",
              desc: "Direct, partner, marketplace.",
              Icon: Ship,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-sky-50 to-cyan-50 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Go global with confidence
          </h2>
          <p className="mt-2 text-slate-600">
            We’ll blueprint and execute your first 90 days in-market.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg">Get a market brief</Button>
            <Button size="lg" variant="outline">
              Review compliance checklist
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
