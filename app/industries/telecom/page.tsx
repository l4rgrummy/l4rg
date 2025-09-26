"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Antenna, Network } from "lucide-react";

export default function TelecomIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(59,130,246,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(37,99,235,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Telecom
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-3xl">
              Programs for carriers, ISPs, and network equipment providers.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
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
              src="/telecom-hero.png"
              alt="Telecom industry"
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
              title: "Enterprise Connectivity",
              desc: "Fiber, SD-WAN, and edge.",
              Icon: Network,
            },
            {
              title: "Wireless & 5G",
              desc: "Private networks and devices.",
              Icon: Antenna,
            },
            {
              title: "Unified Comms",
              desc: "UCaaS and collaboration buyers.",
              Icon: Smartphone,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-md mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Ring up more opportunities
            </h2>
            <p className="mt-2 text-slate-600">
              Target industries with complex connectivity needs.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get GTM plan
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700">
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
