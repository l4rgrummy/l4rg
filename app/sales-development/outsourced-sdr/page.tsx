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
  UserCheck,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  BarChart3,
  Phone,
  Mail,
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

function SDRHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(20,184,166,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Drive more pipeline, less overhead
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Drive more pipeline, less overhead
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Scale your sales development without the overhead of hiring,
            training, and managing an in-house SDR team. Our outsourced SDR
            services deliver qualified leads and appointments at a fraction of
            the cost.
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
            src={"/cybersecurity-hero.png"}
            alt="Outsourced SDR Services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function SDRServices() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our SDR Services
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Complete sales development solutions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive SDR services that handle every aspect of
            your sales development process, from lead research to appointment
            setting.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Lead Research</h3>
              <p className="text-sm text-muted-foreground">
                Identify and research your ideal prospects using advanced data
                sources and tools.
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
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Outreach</h3>
              <p className="text-sm text-muted-foreground">
                Personalized email sequences that capture attention and drive
                responses from prospects.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Appointment Setting</h3>
              <p className="text-sm text-muted-foreground">
                Qualified meetings with decision-makers that are ready to buy
                your solution.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function SDRBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Outsource SDR
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Cost-effective sales development that scales
            </h2>
            <p className="mt-3 text-muted-foreground">
              Outsourcing your SDR function eliminates the overhead of hiring,
              training, and managing an in-house team while providing access to
              experienced professionals and proven processes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "60-70% cost savings compared to in-house SDRs",
                "No recruitment, training, or management overhead",
                "Access to experienced, trained professionals",
                "Scalable team that grows with your needs",
                "Proven processes and best practices",
                "Faster time to market and results",
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
                    <h3 className="font-semibold">Cost Savings</h3>
                    <p className="text-2xl font-bold text-teal-600">65%</p>
                    <p className="text-xs text-muted-foreground">
                      vs in-house SDRs
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-teal-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Time to Results</h3>
                    <p className="text-2xl font-bold text-blue-600">
                      2-3 weeks
                    </p>
                    <p className="text-xs text-muted-foreground">
                      vs 3-6 months hiring
                    </p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Appointment Rate</h3>
                    <p className="text-2xl font-bold text-purple-600">12-18%</p>
                    <p className="text-xs text-muted-foreground">
                      Qualified meetings
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

function SDRProcess() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Proven SDR methodology that delivers results
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures consistent, high-quality lead
            generation and appointment setting that builds your sales pipeline.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Strategy Development",
              description:
                "Define your ideal customer profile, messaging, and campaign strategy",
            },
            {
              step: "02",
              title: "Team Assignment",
              description:
                "Assign dedicated SDRs with relevant industry experience",
            },
            {
              step: "03",
              title: "Lead Research",
              description:
                "Identify and research prospects using advanced data sources",
            },
            {
              step: "04",
              title: "Multi-Channel Outreach",
              description:
                "Execute coordinated campaigns across phone, email, and social channels",
            },
            {
              step: "05",
              title: "Lead Qualification",
              description:
                "Qualify prospects based on budget, authority, need, and timeline",
            },
            {
              step: "06",
              title: "Appointment Setting",
              description: "Schedule qualified meetings with decision-makers",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-sm font-bold">
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

function SDRIndustries() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Industries We Serve
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            SDR services across industries
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our SDRs have experience across multiple industries and understand
            the unique challenges and decision-making processes of each sector.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Technology & SaaS",
              description: "Target IT decision-makers and software buyers",
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
    <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to scale your sales development?
        </h2>
        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our outsourced SDR services can help you generate
          more qualified leads and appointments without the overhead of an
          in-house team.
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
            className="text-white border-white hover:bg-white hover:text-teal-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function OutsourcedSDR() {
  return (
    <main>
      <SDRHero />
      <SDRServices />
      <SDRBenefits />
      <SDRProcess />
      <SDRIndustries />
      <CTASection />
    </main>
  );
}
