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
  Mail,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  MessageSquare,
  Zap,
  BookOpen,
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

function ColdEmailHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(239,68,68,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Personalized email campaigns
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Personalized email campaigns that convert
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Break through the noise with personalized cold email campaigns that
            capture attention and drive responses. Our proven email strategies
            deliver high open rates, engagement, and conversions.
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
            src={"/saas-hero.png"}
            alt="Cold Emailing Strategy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function EmailServices() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Email Services
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Complete cold email solutions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We handle every aspect of your cold email campaigns, from strategy
            development to execution and optimization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Develop personalized email strategies tailored to your target
                audience and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Content Creation</h3>
              <p className="text-sm text-muted-foreground">
                Create compelling email content that resonates with your
                prospects and drives action.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Campaign Execution</h3>
              <p className="text-sm text-muted-foreground">
                Execute multi-touch email sequences with proper timing and
                personalization.
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
                Monitor and optimize campaign performance with detailed
                analytics and reporting.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function EmailBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Cold Email Works
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Cost-effective lead generation at scale
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cold email remains one of the most effective and cost-efficient
              ways to reach prospects, build relationships, and generate
              qualified leads at scale.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Low cost per lead compared to other channels",
                "Highly scalable and automated",
                "Personalized messaging at scale",
                "Easy to track and measure performance",
                "Works across all industries and markets",
                "Builds long-term relationships",
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
                    <h3 className="font-semibold">Open Rate</h3>
                    <p className="text-2xl font-bold text-red-600">25-35%</p>
                    <p className="text-xs text-muted-foreground">
                      Industry average: 15-20%
                    </p>
                  </div>
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Response Rate</h3>
                    <p className="text-2xl font-bold text-blue-600">8-12%</p>
                    <p className="text-xs text-muted-foreground">
                      Industry average: 3-5%
                    </p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Cost per Lead</h3>
                    <p className="text-2xl font-bold text-purple-600">$15-25</p>
                    <p className="text-xs text-muted-foreground">
                      vs $50-100 other channels
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

function EmailProcess() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Proven email campaign methodology
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures consistent, high-quality email
            campaigns that deliver results and build meaningful relationships
            with prospects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Audience Research",
              description:
                "Research and segment your target audience for personalized messaging",
            },
            {
              step: "02",
              title: "Email Strategy",
              description:
                "Develop email sequences and messaging strategy for each segment",
            },
            {
              step: "03",
              title: "Content Creation",
              description:
                "Create compelling, personalized email content that resonates",
            },
            {
              step: "04",
              title: "Campaign Setup",
              description:
                "Set up email campaigns with proper deliverability and tracking",
            },
            {
              step: "05",
              title: "Execution & Monitoring",
              description:
                "Execute campaigns and monitor performance in real-time",
            },
            {
              step: "06",
              title: "Optimization",
              description:
                "Continuously optimize based on performance data and feedback",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-sm font-bold">
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

function EmailTypes() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Email Campaign Types
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Different email strategies for different goals
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We create various types of email campaigns tailored to your specific
            objectives and target audience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Cold Outreach",
              description:
                "Initial contact with prospects who haven't heard of you",
            },
            {
              title: "Follow-up Sequences",
              description: "Nurture leads through multi-touch email sequences",
            },
            {
              title: "Re-engagement",
              description: "Reconnect with dormant leads and past prospects",
            },
            {
              title: "Event Invitations",
              description: "Invite prospects to webinars, demos, and events",
            },
            {
              title: "Content Sharing",
              description: "Share valuable content to build thought leadership",
            },
            {
              title: "Referral Requests",
              description:
                "Ask satisfied customers for referrals and introductions",
            },
          ].map((type, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
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
    <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to launch your cold email campaigns?
        </h2>
        <p className="text-red-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our cold email services can help you reach more
          prospects, build relationships, and generate qualified leads at scale.
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
            className="text-white border-white hover:bg-white hover:text-red-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function ColdEmailing() {
  return (
    <main>
      <ColdEmailHero />
      <EmailServices />
      <EmailBenefits />
      <EmailProcess />
      <EmailTypes />
      <CTASection />
    </main>
  );
}
