import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Award-Winning Best Facebook Advertising Agency in USA",
  description:
    "With L4RG DIGI Plus Advertise, Optimize, and Enhance Your Sales Through Facebook. Let's have a Discussion about using Facebook Ads to Enhance Your Sales.",
  keywords:
    "Best Award-Winning Best Facebook Advertising Agency in USA | l4rgdigiplus.com, Facebook Marketing Company in USA, Facebook Marketing, Facebook Marketing Agency in USA, Top Facebook Marketing Agency in USA, Facebook Ads, Cheap Facebook Marketing Agency in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Award-Winning Best Facebook Advertising Agency in USA",
    description:
      "With L4RG DIGI Plus Advertise, Optimize, and Enhance Your Sales Through Facebook. Let's have a Discussion about using Facebook Ads to Enhance Your Sales.",
  },
};

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

export default function FacebookMarketingPage() {
  console.log("[v0] Facebook marketing page rendering");

  return (
    <main className="bg-white">
      {/* Hero Section - Facebook Blue Theme */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1877F2 0%, #0D47A1 100%)",
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/facebook-social-media-network-connections.png')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Social Media Advertising
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold text-balance leading-tight"
                style={{ color: "white" }}
              >
                Scale with
                <span style={{ color: "#87CEEB" }}> Facebook</span> Ads
              </h1>
              <p
                className="text-xl max-w-lg"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                Drive conversions and build communities with data-driven
                Facebook and Instagram advertising campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="font-semibold"
                  style={{
                    backgroundColor: "white",
                    color: "#1877F2",
                  }}
                >
                  Launch Campaign
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent backdrop-blur-sm"
                  style={{
                    borderColor: "white",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <img
                  src="/facebook-ads-manager-dashboard-interface.png"
                  alt="Facebook Ads Dashboard"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Facebook Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Facebook and Instagram advertising solutions for
              maximum ROI
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Creative Strategy & Production",
                description:
                  "High-converting ad creatives with A/B testing and optimization",
                icon: "🎨",
              },
              {
                title: "Audience Research",
                description:
                  "Advanced targeting and custom audience development for precision",
                icon: "🎯",
              },
              {
                title: "Pixel & Conversion Setup",
                description:
                  "Complete tracking implementation with Conversions API integration",
                icon: "📊",
              },
              {
                title: "Campaign Management",
                description:
                  "Full-funnel campaigns from awareness to conversion optimization",
                icon: "⚡",
              },
              {
                title: "Creative Testing",
                description:
                  "Systematic creative experimentation for continuous improvement",
                icon: "🧪",
              },
              {
                title: "Performance Reporting",
                description:
                  "Detailed analytics and insights with actionable recommendations",
                icon: "📈",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-[#1877F2] rounded-lg flex items-center justify-center text-2xl mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Creative Testing Lab */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Creative Testing Lab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured experiments across angles, formats, and hooks to find
              winners fast.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Angles",
                items: ["Problem → Solution", "Before → After", "Social Proof"],
              },
              {
                title: "Formats",
                items: ["UGC", "Animation", "Carousel", "Long-form"],
              },
              {
                title: "Hooks",
                items: [
                  "Stop scrolling...",
                  "We tested this so you don't",
                  "The 3-step playbook",
                ],
              },
            ].map((b, i) => (
              <Card key={i} className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-gray-900">
                    {b.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {b.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] mt-2"></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-[#1877F2] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Facebook Advertising Results
            </h2>
            <p className="text-xl text-blue-100">
              Proven performance across industries and campaign objectives
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { metric: "4.2x", label: "Average return on ad spend" },
              { metric: "68%", label: "Reduction in cost per acquisition" },
              { metric: "250%", label: "Increase in qualified leads" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#42A5F5] mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your Facebook Advertising?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create Facebook campaigns that drive real business growth
              and maximize your advertising ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#1877F2] hover:bg-[#0D47A1] text-white"
              >
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white bg-transparent"
              >
                Free Strategy Session
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
