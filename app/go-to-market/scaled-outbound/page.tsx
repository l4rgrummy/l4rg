"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Bot, Repeat, PipetteIcon } from "lucide-react";

export default function ScaledOutboundPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(236,72,153,0.08),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(99,102,241,0.08),transparent)]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-fuchsia-600 via-rose-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Scaled Outbound
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Outbound at Scale. Predictable Pipeline.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-fuchsia-100 max-w-prose">
              Multi-channel outbound engines combining people, process, and AI.
              High-volume, high-quality, high-velocity.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-rose-700 hover:bg-rose-50"
              >
                Build my engine
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#plays">See the plays</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl border bg-white/20 overflow-hidden">
            <Image
              src="/ai-technology-hero.png"
              alt="Scaled Outbound"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Plays */}
      <section id="plays" className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Persona Sequencing",
              desc: "ICP-precise sequences across roles and intents.",
              Icon: PipetteIcon,
            },
            {
              title: "AI-Assisted Outreach",
              desc: "Smart variants and reply handling at scale.",
              Icon: Bot,
            },
            {
              title: "Omni-channel Touching",
              desc: "Email, phone, LinkedIn, events + direct mail.",
              Icon: Repeat,
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

      {/* Metrics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["3-5%", "reply rates"],
            ["30%", "SQL lift"],
            ["<5m", "first-touch SLA"],
            ["90%", "data coverage"],
          ].map(([k, v], i) => (
            <div key={i} className="rounded-xl border bg-white p-6 text-center">
              <div className="text-3xl font-bold text-rose-600">{k}</div>
              <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-rose-50 to-indigo-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Spin up a scalable outbound motion
            </h2>
            <p className="mt-2 text-slate-600">
              We’ll design, staff, and operate a high-velocity program.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-rose-600 hover:bg-rose-700">
              Book strategy call
            </Button>
            <Button variant="outline" className="border-rose-300 text-rose-700">
              Get sequence audit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
