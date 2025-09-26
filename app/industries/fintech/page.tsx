"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Wallet, BarChart3 } from "lucide-react";

export default function FintechIndustryPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(800px_400px_at_10%_10%,rgba(34,197,94,0.06),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(21,128,61,0.06),transparent)]">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-600 via-emerald-600 to-lime-600 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white border-white/30">
              Industry
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Financial Technology
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-100 max-w-3xl">
              Acquire banks, lenders, and fintechs with compliance-ready
              messaging.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50"
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
              src="/fintech-hero.png"
              alt="Fintech industry"
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
              title: "Payments & Issuing",
              desc: "Cards, wallets, and acquiring.",
              Icon: CreditCard,
            },
            {
              title: "Lending & Risk",
              desc: "Underwriting and fraud solutions.",
              Icon: BarChart3,
            },
            {
              title: "Core Banking",
              desc: "APIs, ledgers, and operations.",
              Icon: Wallet,
            },
          ].map(({ title, desc, Icon }, i) => (
            <Card key={i} className="border-emerald-100">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-md mb-2">
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
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-emerald-50 to-lime-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Unlock regulated buyers
            </h2>
            <p className="mt-2 text-slate-600">
              Positioning that satisfies risk and compliance while selling
              value.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Get GTM plan
            </Button>
            <Button
              variant="outline"
              className="border-emerald-300 text-emerald-700"
            >
              Request samples
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
