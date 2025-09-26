import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const svc = {
  title: "Reddit Marketing",
  description:
    "Earn trust and traction in niche communities with the right message and placements.",
  bullets: [
    "Subreddit research and playbooks",
    "Promoted posts and takeover formats",
    "Comment ops and moderation",
    "Brand safety and sentiment tracking",
  ],
};

export const metadata: Metadata = {
  title: "Expert Reddit Marketing Services in USA | L4RG DIGI PLUS",
  description:
    "We are a team of Reddit marketing experts who provide services such as Reddit management, Our team has experience in multiple fields of marketing.",
  keywords:
    "Reddit Marketing Services in USA , Best Reddit Marketing Services in USA , Top Reddit Marketing Services in USA, Reddit Marketing Agency in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Expert Reddit Marketing Services in USA | L4RG DIGI PLUS",
    description:
      "We are a team of Reddit marketing experts who provide services such as Reddit management, Our team has experience in multiple fields of marketing.",
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
    <div className={cn("mx-auto w-full max-w-5xl px-4 md:px-6", className)}>
      {children}
    </div>
  );
}

export default function RedditMarketingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #FF4500 0%, #FF6B35 50%, #FF8C42 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative z-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                🤖 Reddit Marketing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Build Trust in
                <span className="block text-orange-200">
                  Reddit Communities
                </span>
              </h1>
              <p className="text-lg md:text-xl text-orange-100 text-balance">
                {svc.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  Join the Conversation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/reddit-community-discussion-interface.png"
                alt="Reddit Community Interface"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reddit Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate Reddit's unique culture to build authentic community
              engagement
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Community Research",
                description: "Find the right subreddits for your brand",
                icon: "🔍",
              },
              {
                title: "Content Strategy",
                description: "Authentic posts that add value",
                icon: "📝",
              },
              {
                title: "Promoted Posts",
                description: "Native advertising that converts",
                icon: "📈",
              },
              {
                title: "AMA Management",
                description: "Ask Me Anything sessions",
                icon: "💬",
              },
              {
                title: "Community Building",
                description: "Grow your own subreddit",
                icon: "👥",
              },
              {
                title: "Reputation Management",
                description: "Monitor and respond to mentions",
                icon: "🛡️",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-2 border-orange-200 hover:border-orange-400 transition-colors bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-lg text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Subreddit Fit Map */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subreddit Fit Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visualize where your audience lives across communities and
              formats.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Opportunity Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: "r/technology", score: 92 },
                    { name: "r/startups", score: 88 },
                    { name: "r/marketing", score: 84 },
                    { name: "r/Entrepreneur", score: 79 },
                    { name: "r/SaaS", score: 76 },
                    { name: "r/ecommerce", score: 73 },
                    { name: "r/ProductManagement", score: 71 },
                    { name: "r/dataisbeautiful", score: 69 },
                    { name: "r/gadgets", score: 65 },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4 text-sm font-medium text-gray-900"
                      style={{
                        background: `linear-gradient(180deg, rgba(255,69,0,${
                          0.12 + (s.score / 100) * 0.3
                        }) 0%, rgba(255,107,53,0.06) 100%)`,
                        border: "1px solid rgba(255,69,0,0.25)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{s.name}</span>
                        <span className="text-orange-600">{s.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Format Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {[
                    { label: "Text Posts", fit: "High" },
                    { label: "Image Carousels", fit: "Medium" },
                    { label: "Short Video", fit: "Medium" },
                    { label: "AMAs", fit: "High" },
                    { label: "Promoted Posts", fit: "High" },
                  ].map((f, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{f.label}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                        {f.fit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* AMA Scheduler */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Plan Your Next AMA
              </h3>
              <p className="text-gray-600 mb-6">
                We handle topic ideation, moderator alignment, promo assets, and
                live responses.
              </p>
              <div className="grid gap-3 text-sm">
                {[
                  "Topic & host selection",
                  "Subreddit outreach & approvals",
                  "Promo timeline & assets",
                  "Live moderation playbook",
                  "Post-AMA highlights & repurposing",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-orange-500">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg">Quick AMA Request</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Preferred subreddit"
                  />
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Proposed topic"
                  />
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Target date"
                  />
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Request AMA Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { stat: "430M+", label: "Monthly Active Users" },
              { stat: "100K+", label: "Active Communities" },
              { stat: "52M", label: "Daily Active Users" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-orange-200">
                  {item.stat}
                </div>
                <div className="text-orange-100">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Deliver */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-orange-500">🤖</span>
                  What we deliver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-orange-500">⭐</span>
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Reddit culture experts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Authentic engagement strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Community-first approach
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    Brand safety protocols
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reddit Right?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's build authentic relationships in Reddit communities that drive
            real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              Start Engaging
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
