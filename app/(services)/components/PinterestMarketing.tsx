import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const svc = {
  title: "Pinterest Marketing",
  description: "Inspire intent and capture demand with Pins that convert.",
  bullets: [
    "Creative and board strategy",
    "Pinterest Ads and tag setup",
    "Catalogs and product feeds",
    "Full‑funnel measurement",
  ],
};

export const metadata: Metadata = {
  title: "Pinterest Marketing Services in USA | L4RG DIGI PLUS",
  description:
    "With Pinterest marketing services in USA, you will be able to reach new people and increase your exposure on the platform",
  keywords:
    "interest Marketing Services in USA, Best Pinterest Marketing Services in USA, Top Pinterest Marketing Services in USA, Cheap Pinterest Marketing Services in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Pinterest Marketing Services in USA | L4RG DIGI PLUS",
    description:
      "With Pinterest marketing services in USA, you will be able to reach new people and increase your exposure on the platform",
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

export default function PinterestMarketingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #E60023 0%, #BD081C 50%, #8B0000 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <Container className="relative z-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                📌 Pinterest Marketing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Turn Inspiration Into
                <span className="block text-pink-200">Conversions</span>
              </h1>
              <p className="text-lg md:text-xl text-pink-100 text-balance">
                {svc.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-pink-50"
                >
                  Start Pinning Success
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/pinterest-board-layout-creative-pins.png"
                alt="Pinterest Board Layout"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-red-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pinterest Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drive discovery and sales with visually compelling Pinterest
              strategies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pin Design",
                description: "Eye-catching pins that stop the scroll",
                icon: "🎨",
              },
              {
                title: "Board Strategy",
                description: "Organized boards that build authority",
                icon: "📋",
              },
              {
                title: "Pinterest Ads",
                description: "Promoted pins that drive traffic",
                icon: "📈",
              },
              {
                title: "Shopping Ads",
                description: "Product catalogs that convert",
                icon: "🛒",
              },
              {
                title: "Rich Pins",
                description: "Enhanced pins with extra details",
                icon: "📝",
              },
              {
                title: "Analytics",
                description: "Data-driven optimization",
                icon: "📊",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-2 border-pink-200 hover:border-red-400 transition-colors bg-white/80 backdrop-blur-sm"
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

      {/* Inspiration Wall */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inspiration Wall
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A curated moodboard of high-performing pin styles for your brand.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/pinterest/aesthetic-kitchen.jpg", label: "Lifestyle" },
              { src: "/pinterest/minimal-desk.jpg", label: "Minimal" },
              { src: "/pinterest/recipe-card.jpg", label: "Recipe" },
              { src: "/pinterest/fashion-flatlay.jpg", label: "Fashion" },
              { src: "/pinterest/infographic.jpg", label: "Infographic" },
              { src: "/pinterest/step-by-step.jpg", label: "How-To" },
              {
                src: "/pinterest/makeover-before-after.jpg",
                label: "Before/After",
              },
              { src: "/pinterest/product-highlight.jpg", label: "Product" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                    {item.label}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="absolute top-3 right-3 bg-white text-red-600 hover:bg-pink-50"
                >
                  Save
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { stat: "450M+", label: "Monthly Active Users" },
              { stat: "85%", label: "Female User Base" },
              { stat: "2x", label: "Higher Purchase Intent" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-pink-200">
                  {item.stat}
                </div>
                <div className="text-pink-100">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Deliver */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-red-500">📌</span>
                  What we deliver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-red-500">✨</span>
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Visual content specialists
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    E-commerce integration experts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    SEO-optimized pin strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Conversion-focused campaigns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pin Your Way to Success
          </h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's create Pinterest campaigns that inspire action and drive
            meaningful results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-pink-50"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
