"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, HeadphonesIcon, BarChart3 } from "lucide-react";

export default function ConsultingIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(99,102,241,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(79,70,229,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Consulting
            </h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-100 max-w-3xl">
              Source decision-makers and project owners across strategy and
              operations.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-indigo-50"
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
              src="/consulting-hero.png"
              alt="Consulting industry"
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
              title: "Strategy & Transformation",
              desc: "C-suite and change leaders.",
              Icon: Briefcase,
            },
            {
              title: "Professional Services",
              desc: "Sales and delivery motions.",
              Icon: HeadphonesIcon,
            },
            {
              title: "Analytics & Ops",
              desc: "Data-led efficiency programs.",
              Icon: BarChart3,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-md mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-indigo-50 to-blue-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Fill your services pipeline
            </h2>
            <p className="mt-2 text-slate-600">
              Positioning aligned to outcomes and reference stories.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Get GTM plan
            </Button>
            <Button
              variant="outline"
              className="border-indigo-300 text-indigo-700"
            >
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
