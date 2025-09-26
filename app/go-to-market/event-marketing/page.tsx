"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Sparkles, Mic2 } from "lucide-react";

export default function EventMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(59,130,246,0.12),transparent)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300">
              Event Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Event Marketing Services
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-prose">
              Pack your pipeline with event-driven demand. From pre-event buzz
              to post-event follow-up, we orchestrate attendance and conversion.
            </p>
            <div className="mt-6 flex gap-3">
              <Button size="lg">Plan my event</Button>
              <Button size="lg" variant="outline">
                See packages
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl border bg-muted overflow-hidden">
            <Image
              src="/event-marketing-hero.png"
              alt="Event Marketing"
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Awareness",
              price: "$",
              perks: ["Landing page", "Paid + organic", "Influencer kit"],
            },
            {
              title: "Attendance",
              price: "$$",
              perks: ["ABM invites", "VIP nurture", "RSVP concierge"],
            },
            {
              title: "Afterglow",
              price: "$$$",
              perks: ["Content recap", "Follow-up cadences", "SQL push"],
            },
          ].map((pkg, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{pkg.title}</span>
                  <span className="text-blue-600">{pkg.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm text-slate-700">
                  {pkg.perks.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" /> {p}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Select</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            A flawless event flow
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              [Calendar, "Pre-event", "Promotion, invites, nurture"],
              [MapPin, "On-site", "Booth ops, demos, scanning"],
              [Mic2, "Programming", "Keynotes, panels, workshops"],
              [Users, "Post-event", "Lead routing, follow-up plays"],
            ].map(([Icon, t, d], i) => (
              <div key={i} className="rounded-xl border bg-white p-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-slate-900">
                  {t as string}
                </div>
                <div className="text-sm text-slate-600">{d as string}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 rounded-2xl border bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Fill the room and the pipeline
            </h3>
            <p className="mt-2 text-slate-600">
              We’ll handle demand, logistics, and follow-through.
            </p>
          </div>
          <div className="flex gap-3">
            <Button>Plan my event</Button>
            <Button variant="outline">Get sample plan</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
