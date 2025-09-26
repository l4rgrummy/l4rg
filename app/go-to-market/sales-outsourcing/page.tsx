"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, ShieldCheck, Target, Users } from "lucide-react";

export default function SalesOutsourcingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Sales Outsourcing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Sales Outsourcing Service
            </h1>
            <p className="mt-3 text-lg text-emerald-100 max-w-prose">
              A complete revenue engine—people, process, and platforms—aligned
              to your goals and brand.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
              >
                Start engagement
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
              >
                See scope
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl border bg-muted overflow-hidden">
            <Image
              src="/cloud-services-hero.png"
              alt="Sales Outsourcing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Brand Safe",
              desc: "Enablement + QA to protect your reputation.",
              Icon: ShieldCheck,
            },
            {
              title: "Outcome Aligned",
              desc: "KPIs geared to pipeline, not activity.",
              Icon: Target,
            },
            {
              title: "Top Talent",
              desc: "Experienced SDR/AE pods led by managers.",
              Icon: Users,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-emerald-50 to-teal-50 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Your sales, fully managed
          </h2>
          <p className="mt-2 text-slate-600">
            We’ll operate the motion, you keep the brand and the wins.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg">Get a proposal</Button>
            <Button size="lg" variant="outline">
              Meet the team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
