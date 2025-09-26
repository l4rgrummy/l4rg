import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Twitter Marketing Agency in USA  - L4RG DIGI PLUS",
  description:
    "Enhance your business with Experienced Twitter Marketing Services. Our Twitter Professionals will Increase your awareness and Retweets.",
  keywords:
    "Twitter Marketing Company in USA, Twitter Marketing Agency in USA, Best Twitter Marketing Agency in USA, Twitter Marketing",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Twitter Marketing Agency in USA  - L4RG DIGI PLUS",
    description:
      "Enhance your business with Experienced Twitter Marketing Services. Our Twitter Professionals will Increase your awareness and Retweets.",
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

export default function TwitterMarketingPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section - Twitter/X Dark Theme */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/twitter-x-social-media-feed-dark-mode.png')] opacity-15"></div>
        <Container className="relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Real-Time Marketing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Dominate
                <span className="text-white"> Twitter/X</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Build thought leadership and drive engagement through strategic
                Twitter/X content and advertising campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold"
                >
                  Start Tweeting
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  See Our Threads
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <img
                  src="/twitter-x-interface-dark-mode-timeline.png"
                  alt="Twitter/X Marketing Interface"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Twitter/X Marketing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic Twitter/X marketing that builds communities and drives
              conversations
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Thought Leadership",
                description:
                  "Build authority through strategic content and community engagement",
                icon: "💭",
              },
              {
                title: "X Ads Management",
                description:
                  "Targeted advertising campaigns optimized for engagement and conversions",
                icon: "📢",
              },
              {
                title: "Community Building",
                description:
                  "Foster engaged communities around your brand and industry topics",
                icon: "👥",
              },
              {
                title: "Trend Monitoring",
                description:
                  "Real-time trend analysis and content optimization strategies",
                icon: "📈",
              },
              {
                title: "Crisis Management",
                description:
                  "Proactive reputation management and crisis communication strategies",
                icon: "🛡️",
              },
              {
                title: "Analytics & Insights",
                description:
                  "Comprehensive performance tracking and audience analysis",
                icon: "📊",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-0 bg-black hover:bg-gray-800 transition-colors border-gray-800"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Live Trends Ticker */}
      <section className="py-12 bg-black text-white border-t border-b border-white/10">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <h2 className="text-xl md:text-2xl font-bold">
              Live Trends Ticker
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="grid md:grid-cols-3">
              {[
                { tag: "#AIinMarketing", change: "+42%", tone: "bullish" },
                { tag: "#OpenSource", change: "+18%", tone: "neutral" },
                { tag: "#SaaS", change: "-6%", tone: "bearish" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="p-4 flex items-center justify-between bg-white/5"
                >
                  <span className="text-sm">{t.tag}</span>
                  <span
                    className={
                      t.tone === "bullish"
                        ? "text-emerald-400"
                        : t.tone === "bearish"
                        ? "text-red-400"
                        : "text-gray-300"
                    }
                  >
                    {t.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Thread Builder */}
      <section className="py-16 bg-gray-900 text-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Thread Builder
              </h3>
              <p className="text-gray-400 mb-6">
                Outline compelling multi-tweet narratives with hook, value, and
                CTA.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-black border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Hook</div>
                  <div>
                    Stop scrolling. Here’s how we grew 10x in 90 days...
                  </div>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Value</div>
                  <div>1) System 2) Process 3) Templates 4) Metrics</div>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">CTA</div>
                  <div>Reply "PLAYBOOK" and we’ll DM the deck.</div>
                </div>
              </div>
            </div>
            <Card className="bg-black border border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Thread Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <input
                    className="bg-black border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500"
                    placeholder="Topic (e.g., onboarding)"
                  />
                  <input
                    className="bg-black border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500"
                    placeholder="Audience (e.g., founders)"
                  />
                  <Button className="bg-white text-black hover:bg-gray-200 font-semibold">
                    Generate Outline
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white text-black">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Twitter/X Marketing Results
            </h2>
            <p className="text-xl text-gray-600">
              Real-time engagement that drives business outcomes
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { metric: "500%", label: "Increase in follower growth" },
              { metric: "12x", label: "Higher engagement rates" },
              { metric: "180%", label: "Boost in website traffic" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Twitter/X Presence?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's create a Twitter/X strategy that builds authority, engages
              communities, and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold"
              >
                Start Your Campaign
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
