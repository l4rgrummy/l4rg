"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Users, Clock, Sparkles } from "lucide-react";

export default function WebinarMarketingPage() {
  return (
    <main className="min-h-screen bg-[conic-gradient(at_top_right,_#ecfeff,_#f5f3ff_35%,_#ffffff_70%)]">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-300">
              Webinar Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Webinar Marketing
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-prose">
              Grow demand with high-converting webinars—end-to-end planning,
              promotion, delivery, and follow-up.
            </p>
            <div className="mt-6 flex gap-3">
              <Button size="lg">Plan a webinar</Button>
              <Button size="lg" variant="outline">
                Get a promo kit
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border bg-white/60 backdrop-blur">
            <Image
              src="/webinar-marketing-hero.png"
              alt="Webinar marketing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Promotion",
              desc: "Email, social, and partner promos.",
              Icon: Users,
            },
            {
              title: "Production",
              desc: "Run of show and technical delivery.",
              Icon: Monitor,
            },
            {
              title: "Follow-up",
              desc: "Automations that convert interest to pipeline.",
              Icon: Clock,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-white/60 backdrop-blur p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Launch your next high-impact webinar
          </h2>
          <p className="mt-2 text-slate-600">
            We’ll handle the details—from topic to turnouts to follow-ups.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg">Start planning</Button>
            <Button size="lg" variant="outline">
              See sample timeline
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
