import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Boxes,
  Cpu,
  Gauge,
  Layers,
  Layout,
  Puzzle,
  Shield,
  Smartphone,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "App Development Service in USA | L4RG DIGI PLUS",
  description:
    "We provide organizations with end-to-end services for developing mobile apps. Leading US company for the production of mobile apps.",
  keywords:
    "Mobile app development services in USA, iOS app development in USA, Android app development in USA, App development company in USA, App development agency in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "App Development Service in USA | L4RG DIGI PLUS",
    description:
      "We provide organizations with end-to-end services for developing mobile apps. Leading US company for the production of mobile apps.",
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

export default function AppDevelopmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm">
                <Smartphone className="w-4 h-4" /> Native & Cross‑Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build Beautiful, Performant Mobile Apps
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                From MVP to enterprise, we ship scalable iOS and Android apps
                with great UX and reliable APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-indigo-900 hover:bg-white/90"
                >
                  Start Your App
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10"
                >
                  See Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    Apple,
                    Cpu,
                    Layout,
                    Layers,
                    Puzzle,
                    Boxes,
                    Workflow,
                    Shield,
                    Gauge,
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
              App Development Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              End‑to‑end product delivery: research, design, development, QA,
              and launch.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "iOS & Android",
                desc: "Swift/Kotlin and React Native",
                icon: Smartphone,
              },
              {
                title: "UX/UI Design",
                desc: "User research and prototyping",
                icon: Layout,
              },
              {
                title: "Backend & APIs",
                desc: "Node, GraphQL, Firebase",
                icon: Cpu,
              },
              {
                title: "CI/CD & QA",
                desc: "Automated testing and release",
                icon: Workflow,
              },
              {
                title: "Security & Privacy",
                desc: "Auth, encryption, compliance",
                icon: Shield,
              },
              {
                title: "Analytics & Growth",
                desc: "Attribution and experimentation",
                icon: Gauge,
              },
            ].map((svc, i) => (
              <Card
                key={i}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-900/10 text-indigo-900 flex items-center justify-center mb-3">
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

      {/* Roadmap */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">
              From Idea to App Store
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01 Discover", copy: "Product framing, risks, scope" },
              { step: "02 Design", copy: "Flows, prototypes, design system" },
              { step: "03 Build", copy: "Feature slices, QA, analytics" },
              { step: "04 Launch", copy: "Release, monitoring, iteration" },
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
      <section className="py-20 bg-indigo-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Build Your App?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let’s ship a delightful mobile experience on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-900 hover:bg-white/90"
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
