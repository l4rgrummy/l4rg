"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Bug } from "lucide-react";

export default function CybersecurityIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(239,68,68,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(220,38,38,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Cybersecurity
            </h1>
            <p className="mt-4 text-lg md:text-xl text-rose-100 max-w-3xl">
              Break into security buying groups across CISO, SecOps, and
              compliance.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-rose-700 hover:bg-rose-50"
              >
                Book strategy call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#plays">See programs</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-white/10">
            <Image
              src="/cybersecurity-hero.png"
              alt="Cybersecurity industry"
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
              title: "CISO Outreach",
              desc: "Executive-level narrative and risk framing.",
              Icon: Shield,
            },
            {
              title: "Threat-Led Demand",
              desc: "Timely triggers and breach-related campaigns.",
              Icon: Bug,
            },
            {
              title: "Zero Trust & IAM",
              desc: "Buyer journeys for identity and access.",
              Icon: Lock,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-rose-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-rose-600 flex items-center justify-center shadow-md mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-rose-50 to-amber-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Turn security priorities into pipeline
            </h2>
            <p className="mt-2 text-slate-600">
              Programs mapped to security frameworks and budget cycles.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-rose-600 hover:bg-rose-700">
              Get GTM plan
            </Button>
            <Button variant="outline" className="border-rose-300 text-rose-700">
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
