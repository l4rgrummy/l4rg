import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const svc = {
  title: "Bing Ads",
  description:
    "Reach high‑value audiences across Microsoft Search, Edge, and the Microsoft Network with precise intent targeting.",
  bullets: [
    "Account audits and clean structure",
    "Audience and demographic layering",
    "Import from Google and customize",
    "Attribution and budget pacing",
  ],
};

export const metadata: Metadata = {
  title: "Bing Ads Services in USA | Microsoft Advertising PPC",
  description:
    "We are a team of Reddit marketing experts who provide services such as Reddit management, Our team has experience in multiple fields of marketing",
  keywords:
    "Best Bing Ads Service in USA, Top Bing Ads Service in USA, Bing Ads Services in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Bing Ads Services in USA | Microsoft Advertising PPC",
    description:
      "We are a team of Reddit marketing experts who provide services such as Reddit management, Our team has experience in multiple fields of marketing",
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

export default function BingAdsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0078D4 0%, #5C2D91 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <Container className="relative z-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                🔎 Microsoft Advertising
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Scale with
                <span className="block text-blue-200">Bing Ads</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 text-balance">
                {svc.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0078D4] hover:bg-blue-50"
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
                src="/microsoft-ads-dashboard-interface.png"
                alt="Microsoft Ads Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Network Overview */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Microsoft Advertising Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access searchers on Bing, Yahoo, AOL, and partner properties with
              unique audience reach.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <Card className="border-[#0078D4]">
              <CardHeader>
                <CardTitle className="text-lg">Audience Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0078D4] mt-1">•</span>Higher desktop
                    share and affluent demographics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0078D4] mt-1">•</span>Lower CPCs vs.
                    Google in many verticals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0078D4] mt-1">•</span>LinkedIn
                    profile targeting for job title, company, industry
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0078D4] mt-1">•</span>Import Google
                    campaigns and tailor to Bing
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-[#0078D4]">
              <CardHeader>
                <CardTitle className="text-lg">What we deliver</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0078D4] mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-[#E6F2FB] to-[#F1E9FB]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bing Ads Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build efficient, scalable campaigns across Search, Audience, and
              Shopping.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Search Ads",
                description: "Capture intent with exact and phrase match",
                icon: "🔍",
              },
              {
                title: "Audience Ads",
                description: "Extend reach across the Microsoft Network",
                icon: "👥",
              },
              {
                title: "Shopping Ads",
                description: "Product feeds optimized for ROAS",
                icon: "🛒",
              },
              {
                title: "Remarketing",
                description: "Bring visitors back with segmented lists",
                icon: "🎯",
              },
              {
                title: "LinkedIn Targeting",
                description: "Layer company, industry, and job title",
                icon: "💼",
              },
              {
                title: "Reporting & Insights",
                description: "Transparent performance analytics",
                icon: "📊",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-0 shadow-md hover:shadow-lg bg-white"
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
      <section className="py-16 bg-[#0078D4] text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { stat: "1.1B+", label: "Monthly PC Searches" },
              { stat: "35%", label: "US Desktop Share" },
              { stat: "20-40%", label: "Typical CPC Savings" },
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0078D4] to-[#5C2D91] text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow with Bing Ads?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Unlock incremental conversions by complementing your Google Ads with
            Microsoft Advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0078D4] hover:bg-blue-50"
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
