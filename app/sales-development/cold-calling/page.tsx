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
  Phone,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  MessageSquare,
  Zap,
  HeadphonesIcon,
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

function ColdCallHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Direct phone prospecting
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Direct phone prospecting that converts
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Break through gatekeepers and reach decision-makers with
            professional cold calling services. Our trained SDRs know how to
            engage prospects, build rapport, and generate qualified
            appointments.
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
            src={"/tech-support-hero-pattern.png"}
            alt="Cold Calling Strategy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function CallServices() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Cold Calling Services
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Professional phone outreach solutions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive cold calling services that handle every
            aspect of your phone outreach campaigns.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <HeadphonesIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Trained SDRs</h3>
              <p className="text-sm text-muted-foreground">
                Professional SDRs trained in objection handling and conversation
                techniques.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Script Development</h3>
              <p className="text-sm text-muted-foreground">
                Custom calling scripts tailored to your product, audience, and
                objectives.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Call Execution</h3>
              <p className="text-sm text-muted-foreground">
                High-volume calling campaigns with proper timing and follow-up
                sequences.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Performance Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Detailed reporting on call metrics, conversion rates, and ROI.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function CallBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Cold Calling Works
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Personal connection that drives results
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cold calling provides immediate, personal interaction with
              prospects, allowing for real-time objection handling, relationship
              building, and qualification.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Immediate personal connection with prospects",
                "Real-time objection handling and qualification",
                "Higher conversion rates than email alone",
                "Builds rapport and trust quickly",
                "Allows for immediate feedback and adjustment",
                "Works across all industries and markets",
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
                    <h3 className="font-semibold">Connect Rate</h3>
                    <p className="text-2xl font-bold text-emerald-600">
                      15-25%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Of dialed numbers
                    </p>
                  </div>
                  <Phone className="h-8 w-8 text-emerald-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Appointment Rate</h3>
                    <p className="text-2xl font-bold text-blue-600">8-15%</p>
                    <p className="text-xs text-muted-foreground">
                      Of connected calls
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
                    <h3 className="font-semibold">Conversion Rate</h3>
                    <p className="text-2xl font-bold text-purple-600">20-30%</p>
                    <p className="text-xs text-muted-foreground">
                      Appointment to opportunity
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

function CallProcess() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Systematic cold calling methodology
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our proven approach ensures consistent, high-quality cold calling
            that builds relationships and generates qualified appointments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Prospect Research",
              description:
                "Research prospects and prepare calling lists with contact information",
            },
            {
              step: "02",
              title: "Script Development",
              description:
                "Create personalized calling scripts and objection handling responses",
            },
            {
              step: "03",
              title: "Call Preparation",
              description:
                "Prepare SDRs with product knowledge and calling best practices",
            },
            {
              step: "04",
              title: "Call Execution",
              description:
                "Execute high-volume calling campaigns with proper timing",
            },
            {
              step: "05",
              title: "Lead Qualification",
              description:
                "Qualify prospects and identify decision-makers during calls",
            },
            {
              step: "06",
              title: "Appointment Setting",
              description:
                "Schedule qualified meetings and provide detailed handoff information",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-sm font-bold">
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

function CallIndustries() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Industries We Serve
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Cold calling across industries
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our cold calling services are tailored to the unique characteristics
            and decision-making processes of different industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Technology & SaaS",
              description:
                "Target CTOs, IT directors, and software decision-makers",
            },
            {
              title: "Financial Services",
              description:
                "Reach CFOs, compliance officers, and financial executives",
            },
            {
              title: "Healthcare",
              description:
                "Connect with healthcare administrators and clinical leaders",
            },
            {
              title: "Manufacturing",
              description:
                "Engage operations managers and procurement professionals",
            },
            {
              title: "Professional Services",
              description: "Target partners, directors, and practice leaders",
            },
            {
              title: "Real Estate",
              description:
                "Reach property managers, developers, and real estate professionals",
            },
          ].map((industry, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
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
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to start your cold calling campaigns?
        </h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our cold calling services can help you reach more
          prospects, build relationships, and generate qualified appointments.
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
            className="text-white border-white hover:bg-white hover:text-emerald-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function ColdCalling() {
  return (
    <main>
      <ColdCallHero />
      <CallServices />
      <CallBenefits />
      <CallProcess />
      <CallIndustries />
      <CTASection />
    </main>
  );
}
