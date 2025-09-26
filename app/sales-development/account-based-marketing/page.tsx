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
  Building2,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
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

function ABMHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(59,130,246,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Account-Based Marketing Services
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Targeted enterprise client acquisition that converts
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Focus your marketing efforts on high-value enterprise accounts with
            our strategic account-based marketing approach. We help you
            identify, engage, and convert your most important prospects into
            long-term customers.
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
            alt="Account-Based Marketing Strategy"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function ABMProcess() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Our ABM Process
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            Strategic account-based marketing that delivers results
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our proven ABM methodology ensures you're targeting the right
            accounts with the right message at the right time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Account Identification</h3>
              <p className="text-sm text-muted-foreground">
                Identify and prioritize high-value target accounts based on your
                ideal customer profile.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Stakeholder Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Map decision-makers and influencers within each target account
                for personalized outreach.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Custom Campaigns</h3>
              <p className="text-sm text-muted-foreground">
                Develop tailored marketing campaigns for each account with
                personalized messaging and content.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Measure & Optimize</h3>
              <p className="text-sm text-muted-foreground">
                Track engagement, measure ROI, and continuously optimize
                campaigns for better results.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function ABMBenefits() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Why Choose ABM
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
              Higher conversion rates with targeted enterprise outreach
            </h2>
            <p className="mt-3 text-muted-foreground">
              Account-based marketing focuses your resources on the accounts
              most likely to convert, resulting in higher ROI and more
              meaningful business relationships.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Higher conversion rates and deal sizes",
                "Better alignment between sales and marketing",
                "Improved customer lifetime value",
                "More efficient use of marketing resources",
                "Stronger relationships with key accounts",
                "Faster sales cycles with enterprise clients",
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
                    <h3 className="font-semibold">Average Deal Size</h3>
                    <p className="text-2xl font-bold text-blue-600">+87%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Sales Cycle</h3>
                    <p className="text-2xl font-bold text-green-600">-45%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Conversion Rate</h3>
                    <p className="text-2xl font-bold text-purple-600">+156%</p>
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

function ABMIndustries() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Industries We Serve
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
            ABM solutions across key industries
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our account-based marketing strategies are tailored to the unique
            needs and buying processes of different industries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Technology & SaaS",
              description:
                "Target enterprise software buyers and IT decision-makers",
            },
            {
              title: "Financial Services",
              description: "Reach C-suite executives and compliance officers",
            },
            {
              title: "Healthcare",
              description:
                "Engage healthcare administrators and clinical decision-makers",
            },
            {
              title: "Manufacturing",
              description: "Connect with operations and procurement leaders",
            },
            {
              title: "Professional Services",
              description: "Target partners and practice leaders",
            },
            {
              title: "Education",
              description: "Reach administrators and academic decision-makers",
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
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <Container className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to accelerate your enterprise sales?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's discuss how our account-based marketing services can help you
          target and convert your most valuable prospects.
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
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function AccountBasedMarketing() {
  return (
    <main>
      <ABMHero />
      <ABMProcess />
      <ABMBenefits />
      <ABMIndustries />
      <CTASection />
    </main>
  );
}
