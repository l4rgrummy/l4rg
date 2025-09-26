import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const svc = {
  title: "Google PPC",
  description:
    "High‑intent search, PMax, and remarketing with rigorous measurement.",
  bullets: [
    "Account audits and rebuilds",
    "Keyword and negative mining",
    "Landing page CRO and testing",
    "Attribution and budget pacing",
  ],
};

export const metadata: Metadata = {
  title: "PPC Services in USA | Drive Sales With PPC Services | L4RG",
  description:
    "Need PPC management services? Trust L4RG DIGI PLUS to provide PPC services that Increase your sales and lead generation efforts. Get a free quote now!",
  keywords:
    "SPPC Services in USA , Best PPC Services in USA, Top PPC Services in USA, PPC Services, Pay Per Click",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "PPC Services in USA | Drive Sales With PPC Services | L4RG",
    description:
      "Need PPC management services? Trust L4RG DIGI PLUS to provide PPC services that Increase your sales and lead generation efforts. Get a free quote now!",
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

export default function GooglePPCPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #4285F4 0%, #34A853 25%, #FBBC05 50%, #EA4335 75%, #4285F4 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <Container className="relative z-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                🎯 Google PPC
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Dominate Google
                <span className="block text-blue-200">Search Results</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 text-balance">
                {svc.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Start Your Campaign
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Free Account Audit
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/google-ads-dashboard-interface.png"
                alt="Google Ads Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Ad Preview */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Responsive Search Ad Preview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your headline variants combine in real results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">
                  Headlines & Descriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Headline 1"
                  />
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Headline 2"
                  />
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Headline 3"
                  />
                  <input
                    className="border rounded-md px-3 py-2"
                    placeholder="Description"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Search Result Mock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border p-4">
                  <div className="text-sm text-green-700">
                    www.example.com/pricing
                  </div>
                  <div className="text-xl text-blue-700 font-medium">
                    Your Headline | Variant
                  </div>
                  <div className="text-sm text-gray-600">
                    This is a preview of how your RSA might appear on Google.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Keyword Heatmap */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Keyword Heatmap
            </h3>
            <p className="text-gray-600">
              Prioritize by intent, volume, and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { k: "buy crm software", s: 92 },
              { k: "crm pricing", s: 86 },
              { k: "best crm for smb", s: 80 },
              { k: "crm alternatives", s: 74 },
              { k: "pipeline management tool", s: 70 },
              { k: "what is crm", s: 62 },
              { k: "crm free trial", s: 68 },
              { k: "crm demo", s: 76 },
            ].map((row, i) => (
              <div
                key={i}
                className="rounded-xl p-3 text-sm"
                style={{
                  background: `linear-gradient(180deg, rgba(66,133,244,${
                    0.1 + (row.s / 100) * 0.25
                  }) 0%, rgba(52,168,83,0.05) 100%)`,
                  border: "1px solid rgba(66,133,244,0.25)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">{row.k}</span>
                  <span className="text-blue-600 font-medium">{row.s}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Google PPC Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maximize your ROI with data-driven Google Ads campaigns
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Search Ads",
                description: "Target high-intent keywords",
                icon: "🔍",
                color: "blue",
              },
              {
                title: "Performance Max",
                description: "AI-powered campaign optimization",
                icon: "🚀",
                color: "green",
              },
              {
                title: "Shopping Ads",
                description: "Showcase your products",
                icon: "🛒",
                color: "yellow",
              },
              {
                title: "Display Ads",
                description: "Visual remarketing campaigns",
                icon: "🎨",
                color: "red",
              },
              {
                title: "YouTube Ads",
                description: "Video advertising that converts",
                icon: "📺",
                color: "blue",
              },
              {
                title: "Local Campaigns",
                description: "Drive foot traffic to stores",
                icon: "📍",
                color: "green",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className={`border-2 border-${service.color}-200 hover:border-${service.color}-400 transition-colors bg-white/80 backdrop-blur-sm`}
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

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { stat: "8.5B+", label: "Daily Searches" },
              { stat: "2:1", label: "Average ROI" },
              { stat: "65%", label: "Mobile Search Share" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-blue-200">
                  {item.stat}
                </div>
                <div className="text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Deliver */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-blue-500">🎯</span>
                  What we deliver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-blue-500">⚡</span>
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Google Ads certified experts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Advanced bidding strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Conversion tracking mastery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    Transparent reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale with Google?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create Google Ads campaigns that capture high-intent traffic
            and drive profitable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              Free Audit
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
