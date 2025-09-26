"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Users, BarChart3 } from "lucide-react";

export default function SaaSIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(6,182,212,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(8,145,178,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-cyan-600 via-sky-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              SaaS
            </h1>
            <p className="mt-4 text-lg md:text-xl text-cyan-100 max-w-3xl">
              Acquire, activate, and expand across self-serve and sales-led
              motions.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-cyan-700 hover:bg-cyan-50"
              >
                Launch program
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#plays">See plays</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-white/10">
            <Image
              src="/saas-hero.png"
              alt="SaaS industry"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="plays" className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Free-to-Paid Funnels",
              desc: "Optimize activation and PQL flows.",
              Icon: Cloud,
            },
            {
              title: "Mid-Market Sales",
              desc: "SQL gen for AE/SDR teams.",
              Icon: Users,
            },
            {
              title: "Expansion & CS",
              desc: "Drive expansion and reduce churn.",
              Icon: BarChart3,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-cyan-600 flex items-center justify-center shadow-md mb-2">
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

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-cyan-50 to-sky-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Grow MRR efficiently
            </h2>
            <p className="mt-2 text-slate-600">
              Playbooks for different ACVs and sales cycles.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-cyan-600 hover:bg-cyan-700">
              Get GTM plan
            </Button>
            <Button variant="outline" className="border-cyan-300 text-cyan-700">
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
