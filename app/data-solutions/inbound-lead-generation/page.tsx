"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Search, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(13,148,136,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Inbound Lead Generation
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Capture and nurture inbound prospects
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Forms, routing, enrichment, and scoring to convert interest into
            pipeline.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="outline">
              <Link href="#contact">Request Audit</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#contact">Talk to Growth Lead</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
          <Image
            src={"/saas-hero.png"}
            alt="Inbound lead generation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function Highlights() {
  const items = [
    {
      title: "Form Optimization",
      desc: "Reduce friction with UX and progressive profiling",
      icon: Mail,
    },
    {
      title: "Attribution & Scoring",
      desc: "Multi-touch attribution and behavior scoring",
      icon: Search,
    },
    {
      title: "Compliance & Quality",
      desc: "Validation, dedupe, and consent capture",
      icon: CheckCircle,
    },
  ];
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            What You Get
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            More inbound, less leakage
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <it.icon className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{it.title}</h3>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
      id="contact"
    >
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Turn inbound traffic into revenue
        </h2>
        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
          We fix capture, routing, and nurture to maximize conversion.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Request an Audit</Link>
        </Button>
      </Container>
    </section>
  );
}

export default function InboundLeadGenerationPage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <CTA />
    </main>
  );
}
