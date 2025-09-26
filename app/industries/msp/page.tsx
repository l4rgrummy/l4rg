"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, ServerCog, PhoneCall } from "lucide-react";

export default function MSPIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(100,116,139,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(51,65,85,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              MSP
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl">
              Grow managed services with SMB and mid-market IT buyers.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-100"
              >
                Start outreach
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
              src="/msp-hero.png"
              alt="MSP industry"
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
              title: "Managed IT",
              desc: "Helpdesk, endpoints, and vCIO.",
              Icon: Settings,
            },
            {
              title: "Cloud & Backup",
              desc: "Servers, M365, and DRaaS.",
              Icon: ServerCog,
            },
            {
              title: "Voice & Security",
              desc: "UCaaS, SOC, and MDR.",
              Icon: PhoneCall,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-slate-200/60">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-slate-700 flex items-center justify-center shadow-md mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-slate-50 to-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Add MRR reliably
            </h2>
            <p className="mt-2 text-slate-600">
              Neighborhood and industry targeting that converts.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-slate-700 hover:bg-slate-800">
              Get GTM plan
            </Button>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700"
            >
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
