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
  Users,
  MessageSquare,
  UserPlus,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Target,
  BarChart3,
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

function LinkedInHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(37,99,235,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Social Selling and Networking
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Social selling and networking that converts
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Leverage LinkedIn's professional network to build meaningful
            relationships, establish thought leadership, and generate
            high-quality B2B leads through strategic social selling and
            networking.
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
            src={"/linkedin-professional-dashboard-interface.png"}
            alt="LinkedIn Lead Generation Strategy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function LinkedInStrategies() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our LinkedIn Strategies
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Comprehensive LinkedIn lead generation approach
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We use multiple LinkedIn strategies to maximize your reach,
            engagement, and lead generation potential on the world's largest
            professional network.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Connection Building</h3>
              <p className="text-sm text-muted-foreground">
                Strategic connection requests and relationship building with
                your target audience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Direct Messaging</h3>
              <p className="text-sm text-muted-foreground">
                Personalized outreach messages that build rapport and drive
                engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Content Marketing</h3>
              <p className="text-sm text-muted-foreground">
                Thought leadership content that positions you as an industry
                expert.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Targeted Outreach</h3>
              <p className="text-sm text-muted-foreground">
                Precise targeting based on industry, role, company size, and
                other criteria.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function LinkedInProcess() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Our Process
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Systematic LinkedIn lead generation that works
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our proven LinkedIn methodology combines relationship building,
              content strategy, and targeted outreach to generate high-quality
              B2B leads consistently.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  step: "01",
                  title: "Profile Optimization",
                  description:
                    "Optimize your LinkedIn profile for maximum credibility and visibility",
                },
                {
                  step: "02",
                  title: "Target Research",
                  description:
                    "Identify and research your ideal prospects on LinkedIn",
                },
                {
                  step: "03",
                  title: "Connection Strategy",
                  description:
                    "Build meaningful connections with decision-makers in your target market",
                },
                {
                  step: "04",
                  title: "Content Creation",
                  description:
                    "Develop valuable content that showcases your expertise and builds trust",
                },
                {
                  step: "05",
                  title: "Engagement Campaigns",
                  description:
                    "Engage with prospects through comments, likes, and direct messages",
                },
                {
                  step: "06",
                  title: "Lead Nurturing",
                  description:
                    "Nurture relationships and convert connections into qualified leads",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold">
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
                    <h3 className="font-semibold">Connection Rate</h3>
                    <p className="text-2xl font-bold text-blue-600">35-45%</p>
                    <p className="text-xs text-muted-foreground">
                      Average acceptance rate
                    </p>
                  </div>
                  <UserPlus className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Response Rate</h3>
                    <p className="text-2xl font-bold text-indigo-600">15-25%</p>
                    <p className="text-xs text-muted-foreground">
                      To direct messages
                    </p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-indigo-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Lead Quality</h3>
                    <p className="text-2xl font-bold text-purple-600">90%</p>
                    <p className="text-xs text-muted-foreground">
                      Qualified prospects
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

function LinkedInBenefits() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Why LinkedIn Works
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            The power of professional networking
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            LinkedIn provides unique opportunities for B2B lead generation
            through its professional focus, detailed targeting options, and
            relationship-building capabilities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Professional Focus",
              description:
                "Access to decision-makers and professionals in your target industries",
            },
            {
              title: "Detailed Targeting",
              description:
                "Precise targeting based on job title, company, industry, and more",
            },
            {
              title: "Relationship Building",
              description:
                "Build genuine relationships that lead to long-term business partnerships",
            },
            {
              title: "Thought Leadership",
              description:
                "Establish yourself as an industry expert through valuable content",
            },
            {
              title: "Warm Introductions",
              description:
                "Leverage mutual connections for warm introductions and referrals",
            },
            {
              title: "Cost Effective",
              description:
                "Generate high-quality leads at a fraction of traditional advertising costs",
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

function LinkedInIndustries() {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Industries We Serve
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            LinkedIn lead generation across industries
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our LinkedIn strategies are tailored to the unique characteristics
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
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to leverage LinkedIn for lead generation?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our LinkedIn lead generation services can help you
          build meaningful professional relationships and generate high-quality
          B2B leads.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              Start Your LinkedIn Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            <Link href="#contact">Get Free Strategy Session</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function LinkedInLeadGeneration() {
  return (
    <main>
      <LinkedInHero />
      <LinkedInStrategies />
      <LinkedInProcess />
      <LinkedInBenefits />
      <LinkedInIndustries />
      <CTASection />
    </main>
  );
}
