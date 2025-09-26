"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ShieldCheck, Users2, Layers } from "lucide-react";

export default function EnterpriseTeamsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/10 text-white border-white/20">
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Enterprise Teams
            </h1>
            <p className="mt-4 text-lg text-slate-200 max-w-3xl">
              Custom GTM and revenue programs built for complex orgs—governance,
              security, and scale baked in.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                Talk to an architect
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                See capabilities
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src="/enterprise-teams-hero.png"
              alt="Enterprise teams"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Multi-region Ops",
              desc: "Programs spanning GEOs, segments, and product lines.",
              Icon: Building2,
            },
            {
              title: "Security & Compliance",
              desc: "SOC2-ready processes and enterprise-grade controls.",
              Icon: ShieldCheck,
            },
            {
              title: "Change Management",
              desc: "Enablement, PMO cadence, and executive reporting.",
              Icon: Layers,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-slate-900/5 text-slate-900 flex items-center justify-center mb-2">
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

      {/* Programs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-2">
          {[
            "ABM for Enterprise",
            "Field + Partner Plays",
            "Analyst & PR Motion",
            "Demand, Outbound, and Expansion",
          ].map((p, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-white">
              <div className="flex items-center gap-3">
                <Users2 className="w-5 h-5 text-slate-700" />
                <h3 className="font-semibold text-slate-900">{p}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Scalable frameworks tailored to your sales model.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-slate-50 to-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Partner with an enterprise GTM squad
            </h2>
            <p className="mt-2 text-slate-600">
              Architecture, execution, and governance—end to end.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-slate-900 hover:bg-slate-800">
              Request enterprise deck
            </Button>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-800"
            >
              Meet solutions lead
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
