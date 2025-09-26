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
  TrendingUp,
  Target,
  Mail,
  Phone,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
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

function OutboundHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(34,197,94,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Proactive Prospect Outreach
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Proactive prospect outreach that builds your pipeline
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Take control of your sales pipeline with our proactive outbound lead
            generation services. We identify, engage, and qualify prospects
            before your competition does, giving you the first-mover advantage.
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
            src={"/information-technology-hero.png"}
            alt="Outbound Lead Generation Strategy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function OutboundMethods() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Outbound Methods
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Multi-channel outreach that gets results
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We use a combination of proven outbound strategies to maximize your
            reach and engagement with potential customers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Cold Email Campaigns</h3>
              <p className="text-sm text-muted-foreground">
                Personalized email sequences that capture attention and drive
                responses from your target audience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Cold Calling</h3>
              <p className="text-sm text-muted-foreground">
                Professional phone outreach with trained SDRs who know how to
                break through gatekeepers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn Outreach</h3>
              <p className="text-sm text-muted-foreground">
                Strategic social selling and networking on LinkedIn to build
                relationships with prospects.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Channel Sequences</h3>
              <p className="text-sm text-muted-foreground">
                Coordinated campaigns across multiple channels for maximum
                impact and engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function OutboundProcess() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Our Process
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Systematic approach to outbound success
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our proven methodology ensures consistent, high-quality outbound
              lead generation that builds your sales pipeline systematically.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  step: "01",
                  title: "Target Research",
                  description:
                    "Identify and research your ideal customer profile and target companies",
                },
                {
                  step: "02",
                  title: "Contact Discovery",
                  description:
                    "Find decision-makers and their contact information across multiple channels",
                },
                {
                  step: "03",
                  title: "Campaign Development",
                  description:
                    "Create personalized messaging and outreach sequences for each prospect",
                },
                {
                  step: "04",
                  title: "Multi-Channel Execution",
                  description:
                    "Execute coordinated outreach across email, phone, and social channels",
                },
                {
                  step: "05",
                  title: "Lead Qualification",
                  description:
                    "Qualify and score leads based on engagement and fit criteria",
                },
                {
                  step: "06",
                  title: "Handoff & Follow-up",
                  description:
                    "Deliver qualified leads to your sales team with detailed context",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Response Rate</h3>
                    <p className="text-2xl font-bold text-green-600">12-18%</p>
                    <p className="text-xs text-muted-foreground">
                      Industry average: 3-5%
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Qualified Leads</h3>
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-xs text-muted-foreground">
                      Of generated leads
                    </p>
                  </div>
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Sales Cycle</h3>
                    <p className="text-2xl font-bold text-purple-600">-30%</p>
                    <p className="text-xs text-muted-foreground">
                      Faster than inbound
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function OutboundBenefits() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Why Outbound Works
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Take control of your sales pipeline
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Outbound lead generation puts you in the driver's seat, allowing you
            to target exactly who you want to reach and when.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Predictable Pipeline",
              description:
                "Generate a steady stream of qualified leads on a consistent schedule",
            },
            {
              title: "Target Control",
              description:
                "Choose exactly which companies and decision-makers to target",
            },
            {
              title: "Faster Results",
              description:
                "See results in weeks, not months, with immediate lead generation",
            },
            {
              title: "Scalable Growth",
              description:
                "Easily scale up or down based on your sales capacity and goals",
            },
            {
              title: "Competitive Advantage",
              description:
                "Reach prospects before your competition with proactive outreach",
            },
            {
              title: "Cost Effective",
              description:
                "Lower cost per lead compared to traditional advertising methods",
            },
          ].map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
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
    <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to build a predictable sales pipeline?
        </h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our outbound lead generation services can help you
          reach your ideal customers and accelerate growth.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              Start Your Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-green-600"
          >
            <Link href="#contact">Get Free Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function OutboundLeadGeneration() {
  return (
    <main>
      <OutboundHero />
      <OutboundMethods />
      <OutboundProcess />
      <OutboundBenefits />
      <CTASection />
    </main>
  );
}
