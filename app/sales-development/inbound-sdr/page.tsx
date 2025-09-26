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
  TrendingDown,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  BarChart3,
  MessageSquare,
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

function InboundSDRHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(236,72,153,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Trained staff for responsive lead management
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Trained staff for responsive lead management
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Convert your inbound leads into qualified opportunities with our
            trained inbound SDR team. We respond quickly, qualify effectively,
            and nurture prospects through your sales funnel.
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
            src={"/tech-support-dashboard-interface.png"}
            alt="Inbound SDR Services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function InboundSDRServices() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Inbound SDR Services
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Complete inbound lead management
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We handle every aspect of your inbound lead management process, from
            initial response to qualification and handoff to your sales team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Rapid Response</h3>
              <p className="text-sm text-muted-foreground">
                Respond to inbound leads within minutes to maximize conversion
                rates.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Phone Qualification</h3>
              <p className="text-sm text-muted-foreground">
                Professional phone calls to qualify leads and understand their
                needs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Follow-up</h3>
              <p className="text-sm text-muted-foreground">
                Personalized email sequences to nurture leads and maintain
                engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Lead Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Score and prioritize leads based on fit, interest, and buying
                intent.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function InboundSDRBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Inbound SDR Works
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Maximize your inbound lead conversion
            </h2>
            <p className="mt-3 text-muted-foreground">
              Inbound leads are already interested in your solution. Our trained
              SDRs ensure you capture and convert these high-intent prospects
              into qualified opportunities.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Higher conversion rates than outbound leads",
                "Faster response times increase conversion by 7x",
                "Qualified leads ready for your sales team",
                "Consistent follow-up and nurturing",
                "Better lead quality and fit",
                "Reduced sales cycle length",
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
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-2xl font-bold text-pink-600">
                      5 minutes
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Average response time
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-pink-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Conversion Rate</h3>
                    <p className="text-2xl font-bold text-blue-600">25-35%</p>
                    <p className="text-xs text-muted-foreground">
                      Lead to opportunity
                    </p>
                  </div>
                  <TrendingDown className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Qualification Rate</h3>
                    <p className="text-2xl font-bold text-purple-600">80%</p>
                    <p className="text-xs text-muted-foreground">
                      Of inbound leads
                    </p>
                  </div>
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InboundSDRProcess() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Systematic inbound lead management
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures every inbound lead is properly
            qualified, nurtured, and converted into a sales opportunity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Lead Capture",
              description:
                "Capture leads from forms, chat, phone calls, and other inbound channels",
            },
            {
              step: "02",
              title: "Immediate Response",
              description:
                "Respond to leads within 5 minutes to maximize conversion rates",
            },
            {
              step: "03",
              title: "Initial Qualification",
              description:
                "Assess lead quality, needs, budget, and timeline through phone calls",
            },
            {
              step: "04",
              title: "Lead Scoring",
              description:
                "Score leads based on fit, interest level, and buying intent",
            },
            {
              step: "05",
              title: "Nurturing Campaigns",
              description:
                "Engage leads with personalized email sequences and follow-up calls",
            },
            {
              step: "06",
              title: "Sales Handoff",
              description:
                "Transfer qualified opportunities to your sales team with full context",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white text-sm font-bold">
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

function InboundSDRChannels() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Lead Sources We Handle
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Comprehensive inbound lead management
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We manage leads from all your inbound channels, ensuring consistent
            qualification and follow-up regardless of the source.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Website Forms",
              description: "Contact forms, demo requests, and download forms",
            },
            {
              title: "Live Chat",
              description:
                "Real-time chat conversations and chatbot interactions",
            },
            {
              title: "Phone Calls",
              description: "Incoming calls and voicemail messages",
            },
            {
              title: "Email Inquiries",
              description: "Direct email inquiries and support requests",
            },
            {
              title: "Social Media",
              description:
                "LinkedIn messages, Facebook inquiries, and social comments",
            },
            {
              title: "Referrals",
              description:
                "Referral leads from partners, customers, and employees",
            },
          ].map((channel, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {channel.description}
                </p>
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
    <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to maximize your inbound leads?
        </h2>
        <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our inbound SDR services can help you convert more
          of your inbound leads into qualified sales opportunities.
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
            className="text-white border-white hover:bg-white hover:text-pink-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function InboundSDR() {
  return (
    <main>
      <InboundSDRHero />
      <InboundSDRServices />
      <InboundSDRBenefits />
      <InboundSDRProcess />
      <InboundSDRChannels />
      <CTASection />
    </main>
  );
}
