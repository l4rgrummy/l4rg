"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Map, Target, Layers, Calendar, Sparkles } from "lucide-react";

export default function GTMSetupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-4 bg-sky-100 text-sky-700 border-sky-300">
              Go-To-Market
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              GTM Set Up
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Launch with confidence. We design data-driven GTM plans that align
              positioning, packaging, pricing, and channels—then orchestrate a
              flawless rollout.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Start your GTM</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#process">See the process</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-2xl border bg-gradient-to-br from-sky-50 to-cyan-50">
            <Image
              src="/crm-software-hero.png"
              alt="Go-To-Market Setup"
              fill
              className="object-cover p-10"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Strategic Positioning",
                desc: "Clarify ICP, value propositions, and messaging pillars that resonate.",
                Icon: Target,
              },
              {
                title: "Channel Architecture",
                desc: "Select and prioritize channels spanning outbound, events, and partner-led.",
                Icon: Layers,
              },
              {
                title: "Launch Orchestration",
                desc: "Create a repeatable motion with timelines, playbooks, and measurement.",
                Icon: Calendar,
              },
            ].map(({ title, desc, Icon }, i) => (
              <Card key={i} className="border-sky-100">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our GTM Blueprint
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              A pragmatic, data-informed approach from discovery to lift-off.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Market, ICP, and competitive scan.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Positioning, packaging, pricing model.",
              },
              {
                step: "03",
                title: "Channels",
                desc: "Outbound, demand gen, events, partners.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Enablement, timelines, dashboards.",
              },
            ].map((s, i) => (
              <div key={i} className="relative rounded-2xl border bg-white p-6">
                <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md">
                  <span className="font-semibold">{s.step}</span>
                </div>
                <h3 className="mt-6 font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              What you get
            </h2>
            <ul className="mt-4 grid gap-3 text-slate-700">
              {[
                "ICP + messaging matrix",
                "Pricing and packaging recommendations",
                "Channel plan with SLAs and budgets",
                "Enablement assets and launch calendar",
                "KPI framework and reporting dashboard",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-sky-600 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild>
                <Link href="/contact">Request a sample plan</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl border bg-gradient-to-br from-white to-sky-50">
            <div className="absolute inset-6 rounded-xl border-2 border-dashed border-sky-200"></div>
            <div className="absolute bottom-6 right-6 bg-sky-600 text-white rounded-full p-4 shadow-lg">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="absolute top-6 left-6 bg-white/70 backdrop-blur rounded-lg px-3 py-2 shadow">
              <div className="flex items-center gap-2 text-slate-700 text-sm">
                <Map className="w-4 h-4 text-sky-600" /> Go-To-Market Map
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to launch right?
          </h2>
          <p className="mt-3 text-sky-100">
            We’ll build the plan, equip the team, and coordinate a high-velocity
            launch.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50">
              Talk to sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Get proposal
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
