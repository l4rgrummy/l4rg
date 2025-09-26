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
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  BarChart3,
  Phone,
  Mail,
  MessageSquare,
  TrendingUp,
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

function AppointmentHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(6,182,212,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Qualified meetings with prospects
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Qualified meetings with prospects
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Fill your calendar with qualified appointments from decision-makers
            who are ready to buy. Our B2B appointment setting services deliver
            high-quality meetings that convert into sales.
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
            src={"/enterprise-teams-hero.png"}
            alt="B2B Appointment Setting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function AppointmentServices() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Appointment Setting Services
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Complete appointment setting solutions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We handle every aspect of your appointment setting process, from
            prospect research to meeting confirmation and follow-up.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prospect Research</h3>
              <p className="text-sm text-muted-foreground">
                Identify and research decision-makers who match your ideal
                customer profile.
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
                Professional phone outreach to break through gatekeepers and
                reach decision-makers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Outreach</h3>
              <p className="text-sm text-muted-foreground">
                Personalized email sequences that capture attention and drive
                meeting requests.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Meeting Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Coordinate schedules and confirm meetings with qualified
                prospects.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function AppointmentBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Appointment Setting Works
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Fill your calendar with qualified prospects
            </h2>
            <p className="mt-3 text-muted-foreground">
              Appointment setting ensures your sales team spends time with
              qualified prospects who are ready to buy, maximizing your sales
              efficiency and conversion rates.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Higher conversion rates than cold outreach",
                "Qualified prospects ready to buy",
                "Time-efficient for your sales team",
                "Consistent pipeline of meetings",
                "Better preparation and context",
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
                    <h3 className="font-semibold">Appointment Rate</h3>
                    <p className="text-2xl font-bold text-cyan-600">12-18%</p>
                    <p className="text-xs text-muted-foreground">
                      Of contacted prospects
                    </p>
                  </div>
                  <Calendar className="h-8 w-8 text-cyan-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Show Rate</h3>
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-xs text-muted-foreground">
                      Of scheduled meetings
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
                    <p className="text-2xl font-bold text-purple-600">25-35%</p>
                    <p className="text-xs text-muted-foreground">
                      Meeting to opportunity
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

function AppointmentProcess() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Systematic appointment setting that delivers
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures consistent, high-quality appointment
            setting that fills your calendar with qualified prospects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Prospect Identification",
              description:
                "Identify decision-makers who match your ideal customer profile",
            },
            {
              step: "02",
              title: "Contact Research",
              description:
                "Research contact information and preferred communication methods",
            },
            {
              step: "03",
              title: "Outreach Campaigns",
              description:
                "Execute multi-channel outreach campaigns to engage prospects",
            },
            {
              step: "04",
              title: "Qualification Calls",
              description:
                "Qualify prospects to ensure they meet your criteria",
            },
            {
              step: "05",
              title: "Meeting Scheduling",
              description: "Coordinate schedules and confirm meeting details",
            },
            {
              step: "06",
              title: "Handoff & Follow-up",
              description:
                "Provide context and follow up to ensure meeting attendance",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white text-sm font-bold">
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

function AppointmentIndustries() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Industries We Serve
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Appointment setting across industries
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our appointment setting services are tailored to the unique
            characteristics and decision-making processes of different
            industries.
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
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to fill your calendar with qualified prospects?
        </h2>
        <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our B2B appointment setting services can help you
          generate more qualified meetings and accelerate your sales process.
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
            className="text-white border-white hover:bg-white hover:text-cyan-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function B2BAppointmentSetting() {
  return (
    <main>
      <AppointmentHero />
      <AppointmentServices />
      <AppointmentBenefits />
      <AppointmentProcess />
      <AppointmentIndustries />
      <CTASection />
    </main>
  );
}
