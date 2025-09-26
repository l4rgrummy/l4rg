"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, BarChart3 } from "lucide-react";

export default function CRMSoftwareIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(249,115,22,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(234,88,12,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              CRM Software
            </h1>
            <p className="mt-4 text-lg md:text-xl text-amber-100 max-w-3xl">
              Engage sales, revops, and marketing ops buyers with clear ROI
              narratives.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-orange-50"
              >
                Start program
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
              src="/crm-software-hero.png"
              alt="CRM software industry"
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
              title: "RevOps Enablement",
              desc: "Process and data value stories.",
              Icon: Settings,
            },
            {
              title: "Sales Productivity",
              desc: "AE/SDR buyer journeys.",
              Icon: Users,
            },
            {
              title: "Pipeline Health",
              desc: "Forecasting and analytics use cases.",
              Icon: BarChart3,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-amber-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center shadow-md mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-orange-50 to-yellow-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Drive adoption and expansion
            </h2>
            <p className="mt-2 text-slate-600">
              Win new logos and grow existing accounts with targeted plays.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-orange-600 hover:bg-orange-700">
              Get GTM plan
            </Button>
            <Button
              variant="outline"
              className="border-orange-300 text-orange-700"
            >
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
