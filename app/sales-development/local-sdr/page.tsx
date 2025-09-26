"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Users,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  BarChart3,
  Globe,
  Building2,
} from "lucide-react";

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

function LocalSDRHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(249,115,22,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Custom research and data enrichment
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Custom research and data enrichment
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Get local market expertise with our dedicated local SDR team. We
            understand regional nuances, cultural differences, and local
            business practices to maximize your sales success in specific
            markets.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant={"outline"}>
              <Link href="#contact">Request Pricing</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
          <Image
            src={"/telecom-hero.png"}
            alt="Local SDR Services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function LocalSDRServices() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Local SDR Services
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Region-specific sales development
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our local SDR teams provide specialized knowledge and cultural
            understanding to help you succeed in specific geographic markets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Local Market Research</h3>
              <p className="text-sm text-muted-foreground">
                Deep understanding of local market dynamics, competitors, and
                opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Cultural Adaptation</h3>
              <p className="text-sm text-muted-foreground">
                Messaging and approach adapted to local cultural norms and
                business practices.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Local Business Networks</h3>
              <p className="text-sm text-muted-foreground">
                Access to local business networks, associations, and industry
                connections.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Regional Targeting</h3>
              <p className="text-sm text-muted-foreground">
                Precise targeting based on local market characteristics and
                buyer behavior.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function LocalSDRBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Local SDR Works
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Regional expertise that drives results
            </h2>
            <p className="mt-3 text-muted-foreground">
              Local SDRs understand the unique characteristics of their markets,
              including cultural nuances, business practices, and
              decision-making processes that vary by region.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Cultural understanding and local business practices",
                "Regional market knowledge and competitive landscape",
                "Local language proficiency and communication styles",
                "Access to regional business networks and connections",
                "Understanding of local regulations and compliance",
                "Time zone alignment for better response times",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Response Rate</h3>
                    <p className="text-2xl font-bold text-orange-600">40-50%</p>
                    <p className="text-xs text-muted-foreground">
                      Higher than generic outreach
                    </p>
                  </div>
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Cultural Fit</h3>
                    <p className="text-2xl font-bold text-blue-600">95%</p>
                    <p className="text-xs text-muted-foreground">
                      Message acceptance rate
                    </p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Local Knowledge</h3>
                    <p className="text-2xl font-bold text-purple-600">100%</p>
                    <p className="text-xs text-muted-foreground">
                      Native market understanding
                    </p>
                  </div>
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LocalSDRRegions() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Regions We Cover
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Local SDR teams across key markets
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our local SDR teams are strategically located in major business
            centers to provide regional expertise and cultural understanding.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "North America",
              description: "US, Canada, Mexico with local market expertise",
            },
            {
              title: "Europe",
              description:
                "UK, Germany, France, Netherlands, and Nordic countries",
            },
            {
              title: "Asia Pacific",
              description: "Australia, Singapore, Japan, and Southeast Asia",
            },
            {
              title: "Latin America",
              description: "Brazil, Argentina, Chile, and Central America",
            },
            {
              title: "Middle East",
              description: "UAE, Saudi Arabia, and other Gulf countries",
            },
            {
              title: "Africa",
              description:
                "South Africa, Nigeria, and other key African markets",
            },
          ].map((region, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{region.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {region.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LocalSDRProcess() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Localized approach to sales development
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our process combines global best practices with local market
            knowledge to deliver results that resonate with regional audiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Market Analysis",
              description:
                "Analyze local market characteristics, competitors, and opportunities",
            },
            {
              step: "02",
              title: "Cultural Adaptation",
              description:
                "Adapt messaging and approach to local cultural norms and preferences",
            },
            {
              step: "03",
              title: "Local Research",
              description:
                "Research prospects using local data sources and business networks",
            },
            {
              step: "04",
              title: "Regional Outreach",
              description:
                "Execute campaigns using local language and communication styles",
            },
            {
              step: "05",
              title: "Relationship Building",
              description:
                "Build relationships leveraging local business networks and connections",
            },
            {
              step: "06",
              title: "Local Handoff",
              description:
                "Transfer qualified leads to local sales teams or partners",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
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

function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to expand into new markets?
        </h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our local SDR services can help you succeed in
          specific geographic markets with regional expertise and cultural
          understanding.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-orange-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function LocalSDR() {
  return (
    <main>
      <LocalSDRHero />
      <LocalSDRServices />
      <LocalSDRBenefits />
      <LocalSDRRegions />
      <LocalSDRProcess />
      <CTASection />
    </main>
  );
}
