import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const svc = {
  title: "Snapchat Marketing",
  description:
    "Reach Gen Z with performant Snap Ads and creator‑led campaigns.",
  bullets: [
    "TopSnap and Story Ads",
    "AR Lenses and creative",
    "Conversion tracking and LTV cohorts",
    "Creative iteration cycles",
  ],
};

export const metadata: Metadata = {
  title: "Snapchat Marketing Agency in USA - L4RG DIGI PLUS",
  description:
    "We are an agency that knows how to utilise the Power of Advertising on Snapchat to Enhance Your Sales. Let's Discuss to Work Together Today",
  keywords:
    "Snapchat Marketing Services in USA, Best Snapchat Marketing agency in USA, Snapchat Marketing Services in USA, Snapchat Marketing, Top Snapchat Marketing Services in USA, Snapchat Marketing Firm in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Snapchat Marketing Agency in USA - L4RG DIGI PLUS",
    description:
      "We are an agency that knows how to utilise the Power of Advertising on Snapchat to Enhance Your Sales. Let's Discuss to Work Together Today",
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

export default function SnapchatMarketingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #FFFC00 0%, #FFD700 50%, #FFA500 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <Container className="relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm font-medium text-black">
            👻 Snapchat Marketing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black text-balance">
            Capture Gen Z with
            <span className="block text-black/80">Snapchat Ads</span>
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto text-balance">
            {svc.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-black text-yellow-400 hover:bg-black/90 border-2 border-black"
            >
              Start Your Campaign
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black/10 bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </Container>
        <img
          src="/snapchat-ar-lens-interface.png"
          alt="Snapchat AR Lens Interface"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 object-cover rounded-l-3xl opacity-20"
        />
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Snapchat Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with the most engaged generation through creative,
              authentic Snapchat campaigns
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Snap Ads",
                description:
                  "Full-screen vertical video ads that capture attention",
                icon: "📱",
              },
              {
                title: "AR Lenses",
                description: "Interactive augmented reality experiences",
                icon: "🕶️",
              },
              {
                title: "Story Ads",
                description: "Native ads within Discover content",
                icon: "📖",
              },
              {
                title: "Collection Ads",
                description: "Showcase multiple products in one ad",
                icon: "🛍️",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-2 border-yellow-200 hover:border-yellow-400 transition-colors bg-white/80 backdrop-blur-sm"
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

      {/* Lens Lab */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lens Lab
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prototype AR lens concepts and preview interactions before launch.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Face Filter",
                emoji: "😎",
                desc: "Brand sunglasses try-on",
              },
              { title: "World Lens", emoji: "🌍", desc: "Placeable 3D mascot" },
              {
                title: "Portal",
                emoji: "🚪",
                desc: "Step into a branded scene",
              },
            ].map((lens, i) => (
              <Card key={i} className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">{lens.emoji}</span>
                    {lens.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{lens.desc}</p>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center text-yellow-500">
                    Preview
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-yellow-400">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { stat: "375M+", label: "Daily Active Users" },
              { stat: "5B+", label: "Snaps Created Daily" },
              { stat: "70%", label: "Gen Z Reach" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400">
                  {item.stat}
                </div>
                <div className="text-yellow-200">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Deliver */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-yellow-500">👻</span>
                  What we deliver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-yellow-500">⚡</span>
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    Gen Z marketing specialists
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    AR lens development expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    Creative testing at scale
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    Performance-driven campaigns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Snap Into Action?
          </h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Let's create Snapchat campaigns that resonate with Gen Z and drive
            real results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-yellow-400 hover:bg-black/90"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black/10 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
