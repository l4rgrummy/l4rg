import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Gauge,
  Globe,
  Layout,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services in USA | L4RG DIGI PLUS",
  description:
    "As a top web development company in the USA we provide custom web development and web design for all of our clients business needs",
  keywords:
    "Top Web Development Company in USA, Web Development Service in Dubai, Web Design Agency in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Web Development Services in USA | L4RG DIGI PLUS",
    description:
      "As a top web development company in the USA we provide custom web development and web design for all of our clients business needs",
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
    <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-6", className)}>
      {children}
    </div>
  );
}

export default function WebDevelopmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm">
                <Sparkles className="w-4 h-4" /> Modern Web Engineering
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build Fast, Accessible, and SEO‑Ready Websites
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                We craft high‑performance web experiences using Next.js,
                TypeScript, and Tailwind—optimized for Core Web Vitals and
                conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10"
                >
                  View Case Studies
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {[
                  { value: "99+", label: "Sites Shipped" },
                  { value: "<1s", label: "TTFB Targets" },
                  { value: "100", label: "Lighthouse SEO" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-cyan-300">
                      {s.value}
                    </div>
                    <div className="text-sm text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    Layout,
                    Smartphone,
                    Globe,
                    Gauge,
                    ShieldCheck,
                    Server,
                    Code,
                    Zap,
                    Lock,
                  ].map((Icon, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-white/80" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Web Development Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From marketing sites to complex web apps—built for speed,
              accessibility, and maintainability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Next.js + TypeScript",
                desc: "Modern SSR/SSG and App Router",
                icon: Globe,
              },
              {
                title: "Design System + UI",
                desc: "Shadcn/Tailwind component systems",
                icon: Layout,
              },
              {
                title: "Performance + SEO",
                desc: "Core Web Vitals excellence",
                icon: Gauge,
              },
              {
                title: "Security + Compliance",
                desc: "Best practices and audits",
                icon: ShieldCheck,
              },
              {
                title: "API & Integrations",
                desc: "REST/GraphQL and 3rd‑party",
                icon: Server,
              },
              {
                title: "Analytics + A/B",
                desc: "Measurement and experimentation",
                icon: Rocket,
              },
            ].map((svc, i) => (
              <Card
                key={i}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/5 text-slate-900 flex items-center justify-center mb-3">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{svc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">
              Proven Delivery Process
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01 Discover", copy: "Goals, audience, and constraints" },
              { step: "02 Design", copy: "Wireframes, system, and flows" },
              { step: "03 Build", copy: "Agile sprints and QA" },
              { step: "04 Launch", copy: "Observability and optimization" },
            ].map((p, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{p.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{p.copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Build a Better Website?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let’s ship something fast, accessible, and beautiful—without
              sacrificing maintainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90"
              >
                Get a Proposal
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
