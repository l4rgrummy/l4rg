"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Mail,
  Phone,
  Mailbox,
  Newspaper,
  Handshake,
} from "lucide-react";

export default function AdditionalChannelsPage() {
  const channels = [
    {
      title: "Direct Mail",
      desc: "Dimensional mailers that earn attention.",
      Icon: Mailbox,
    },
    {
      title: "Syndicated Content",
      desc: "Lead gen via trusted media networks.",
      Icon: Newspaper,
    },
    {
      title: "Co-marketing",
      desc: "Joint webinars and content swaps.",
      Icon: Handshake,
    },
    {
      title: "SMS Nurtures",
      desc: "Compliance-first mobile touchpoints.",
      Icon: Phone,
    },
    {
      title: "Executive Letters",
      desc: "Personalized outreach from leadership.",
      Icon: Mail,
    },
    {
      title: "Community",
      desc: "Forums, Slack groups, and user councils.",
      Icon: MessageSquare,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-300">
              Additional Channels
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Additional Channels
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-3xl">
              Expand reach with creative, high-impact channels that complement
              your digital mix.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border bg-rose-50">
            <Image
              src="/additional-channels-hero.png"
              alt="Additional channels"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {channels.map(({ title, desc, Icon }, i) => (
            <Card
              key={i}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{desc}</p>
                <Button variant="outline" className="mt-4">
                  Add to plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
