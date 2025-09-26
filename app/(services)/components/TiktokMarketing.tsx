import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "TikTok Marketing Company in USA | L4RG DIGI PLUS",
  description:
    "L4RG DIGI PLUS makes TikTok marketing simpler than you ever imagined. Let us Viral Your Brand. Contact Our Team For Further Query.",
  keywords:
    "TikTok Marketing Company in USA, TikTok Marketing Agency in USA, Best TIkTok Marketing Company in USA, Top TikTok Marketing Agency in USA, TIkTok Marketing Firm in USA, Top TikTok Marketing Agency in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "TikTok Marketing Company in USA | L4RG DIGI PLUS",
    description:
      "L4RG DIGI PLUS makes TikTok marketing simpler than you ever imagined. Let us Viral Your Brand. Contact Our Team For Further Query.",
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

export default function TikTokMarketingPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section - TikTok Dark Theme with Neon Accents */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tiktok-mobile-video-feed-dark-theme.png')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#FF0050] rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#25F4EE] rounded-full blur-3xl opacity-20"></div>
        <Container className="relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF0050] to-[#25F4EE] rounded-full text-sm font-bold text-white">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white">Viral Content Marketing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-balance leading-tight text-white">
                Go Viral on
                <span
                  className="inline-block ml-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF0050 0%, #25F4EE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "#FF0050", // Added fallback color for better contrast
                  }}
                >
                  TikTok
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Create trend-aware content that captures Gen Z attention and
                drives explosive growth through native TikTok strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF0050] to-[#25F4EE] text-black hover:opacity-90 font-bold"
                >
                  Start Creating
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  See Our Viral Hits
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800">
                <img
                  src="/tiktok-mobile-app-interface-vertical-videos.png"
                  alt="TikTok Marketing Interface"
                  className="w-full rounded-2xl"
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              TikTok Marketing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Native content strategies that speak TikTok's language and drive
              real results
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Viral Content Creation",
                description:
                  "Trend-aware videos that capture attention and drive organic reach",
                icon: "🎬",
                accent: "from-[#FF0050] to-[#FF4081]",
              },
              {
                title: "TikTok Ads Management",
                description:
                  "Spark Ads and In-Feed campaigns optimized for maximum engagement",
                icon: "🚀",
                accent: "from-[#25F4EE] to-[#00D4FF]",
              },
              {
                title: "Creator Partnerships",
                description:
                  "Authentic influencer collaborations that build trust and drive sales",
                icon: "🤳",
                accent: "from-[#FF6B35] to-[#F7931E]",
              },
              {
                title: "Trend Analysis",
                description:
                  "Real-time trend monitoring to keep your content ahead of the curve",
                icon: "📈",
                accent: "from-[#9C27B0] to-[#E91E63]",
              },
              {
                title: "UGC Campaigns",
                description:
                  "User-generated content strategies that create community engagement",
                icon: "👥",
                accent: "from-[#4CAF50] to-[#8BC34A]",
              },
              {
                title: "Performance Analytics",
                description:
                  "Deep-dive metrics and insights to optimize your TikTok strategy",
                icon: "📊",
                accent: "from-[#FF9800] to-[#FFC107]",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-0 bg-black hover:bg-gray-800 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.accent} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
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

      {/* Hook Library */}
      <section className="py-16 bg-white text-black">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Hook Library
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-performing opening hooks categorized by goal and industry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Direct Response",
                color: "from-[#FF0050] to-[#FF6B6B]",
                hooks: [
                  "Stop scrolling. You need to see this...",
                  "I spent $0 and got 10k views. Here’s how",
                ],
              },
              {
                title: "Educational",
                color: "from-[#25F4EE] to-[#00D4FF]",
                hooks: [
                  "3 mistakes ruining your [niche]",
                  "If I started again, I’d do this first",
                ],
              },
              {
                title: "Story/Lifestyle",
                color: "from-[#9C27B0] to-[#E91E63]",
                hooks: [
                  "POV: You’re [ideal persona] and this happens",
                  "What nobody tells you about [topic]",
                ],
              },
            ].map((col, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${col.color}`}
                    ></span>
                    {col.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {col.hooks.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Content Cadence Planner */}
      <section className="py-16 bg-gray-50 text-black">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                Content Cadence
              </h3>
              <p className="text-gray-600 mb-6">
                A balanced weekly plan across value pillars.
              </p>
              <div className="grid grid-cols-3 text-xs font-semibold text-gray-500 mb-2">
                <span>Day</span>
                <span>Pillar</span>
                <span>Format</span>
              </div>
              {[
                { day: "Mon", pillar: "Education", format: "How-to" },
                { day: "Tue", pillar: "Credibility", format: "Case study" },
                { day: "Wed", pillar: "Community", format: "Duet/Reply" },
                { day: "Thu", pillar: "Product", format: "Demo" },
                { day: "Fri", pillar: "Lifestyle", format: "POV/Story" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-sm py-2 px-3 rounded-md mb-2 bg-white border"
                >
                  <span className="font-medium">{row.day}</span>
                  <span>{row.pillar}</span>
                  <span>{row.format}</span>
                </div>
              ))}
            </div>
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Idea Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Industry (e.g., skincare)"
                  />
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Goal (e.g., awareness)"
                  />
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Suggest 5 Hooks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF0050] to-[#25F4EE] text-black">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              TikTok Marketing Results
            </h2>
            <p className="text-xl opacity-80">
              Viral campaigns that deliver measurable business impact
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { metric: "15M+", label: "Total video views generated" },
              { metric: "450%", label: "Increase in brand awareness" },
              { metric: "3.2x", label: "Higher conversion rates" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Go Viral on TikTok?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's create TikTok content that captures attention, builds
              community, and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF0050] to-[#25F4EE] text-black hover:opacity-90 font-bold"
              >
                Start Your Campaign
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
