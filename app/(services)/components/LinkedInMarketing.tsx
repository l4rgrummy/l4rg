import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Linkedin Marketing Services | L4RG DIGI PLUS",
  description:
    "Looking to create leads on LinkedIn for your B2B company? Visit L4RG DIGI PLUS, the top LinkedIn marketing business in the USA.",
  keywords:
    "Best Linkedin Marketing Service in USA, Top Linkedin Marketing Services in USA, Cheap Linkedin Marketing Services in USA, Linkedin Marketing Strategy Services, Linkedin Marketing Services. Linkedin Ads, Linkedin Growth Agency, Linkedin marketing strategy for B2B",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Linkedin Marketing Services | L4RG DIGI PLUS",
    description:
      "Looking to create leads on LinkedIn for your B2B company? Visit L4RG DIGI PLUS, the top LinkedIn marketing business in the USA.",
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

export default function LinkedInMarketingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - LinkedIn Professional Blue Theme */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0077B5] to-[#005885] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/professional-business-network-pattern.png')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Professional Network Marketing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Build Authority on
                <span className="text-[#70B7FD]"> LinkedIn</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Generate qualified B2B leads through strategic LinkedIn content,
                targeted ads, and professional outreach campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0077B5] hover:bg-gray-100 font-semibold"
                >
                  Start Your Campaign
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <img
                  src="/linkedin-professional-dashboard-interface.png"
                  alt="LinkedIn Marketing Dashboard"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lead Funnel */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              B2B Lead Funnel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Map awareness to pipeline with content, offers, and follow-up.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { stage: "Awareness", action: " POV posts, problem narratives" },
              { stage: "Engage", action: " Carousels, comments, DMs" },
              { stage: "Capture", action: " Lead magnet, webinar" },
              { stage: "Pipeline", action: " Case studies, product demo" },
            ].map((s, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900">
                    {s.stage}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    <span className="text-[#0077B5]">•</span>
                    {s.action}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ABM Matrix */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                ABM Matrix
              </h3>
              <p className="text-gray-600 mb-6">
                Target roles × pains × offers for enterprise accounts.
              </p>
              <div className="grid grid-cols-3 text-xs font-semibold text-gray-500 mb-2">
                <span>Role</span>
                <span>Pain</span>
                <span>Offer</span>
              </div>
              {[
                {
                  role: "CMO",
                  pain: "Attribution",
                  offer: "Measurement workshop",
                },
                { role: "VP Sales", pain: "Pipeline", offer: "ABM playbook" },
                { role: "PMM", pain: "Positioning", offer: "Messaging audit" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-sm py-2 px-3 rounded-md mb-2 bg-white border"
                >
                  <span className="font-medium">{row.role}</span>
                  <span>{row.pain}</span>
                  <span>{row.offer}</span>
                </div>
              ))}
            </div>
            <Card className="border-[#0077B5]">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0077B5]"></span>
                  Target Account Shortlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {["Acme Corp", "Globex", "Initech", "Umbrella"].map(
                    (a, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <span>{a}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0077B5]/10 text-[#0077B5]">
                          Priority
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LinkedIn Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive LinkedIn strategies to build your professional brand
              and generate quality leads
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Thought Leadership Content",
                description:
                  "Position executives as industry experts with strategic content and ghostwriting",
                icon: "💡",
              },
              {
                title: "LinkedIn Ads Management",
                description:
                  "Lead generation and website conversion campaigns with precise targeting",
                icon: "🎯",
              },
              {
                title: "Profile Optimization",
                description:
                  "Professional profile and company page optimization for maximum visibility",
                icon: "⭐",
              },
              {
                title: "Social Selling Playbooks",
                description:
                  "Outbound strategies and connection-building frameworks that convert",
                icon: "🤝",
              },
              {
                title: "Content Calendar Management",
                description:
                  "Consistent posting schedule with industry-relevant, engaging content",
                icon: "📅",
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Detailed performance tracking and ROI measurement for all activities",
                icon: "📊",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center text-2xl mb-4">
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

      {/* Results Section */}
      <section className="py-16 bg-[#0077B5] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              LinkedIn Marketing Results
            </h2>
            <p className="text-xl text-blue-100">
              Real outcomes from our LinkedIn marketing campaigns
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { metric: "340%", label: "Increase in qualified leads" },
              { metric: "85%", label: "Higher engagement rates" },
              { metric: "2.8x", label: "Return on ad spend" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#70B7FD] mb-2">
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
              Ready to Build Your LinkedIn Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create a LinkedIn strategy that positions you as an industry
              leader and generates qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0077B5] hover:bg-[#005885] text-white"
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
