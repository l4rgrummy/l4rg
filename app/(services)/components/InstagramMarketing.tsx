import type React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  Target,
  BarChart3,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leading Instagram Marketing Agency in USA | L4RG",
  description:
    "Top Instagram Marketing Company in USA. Our marketing services help our clients significantly grow on Instagram. Call us right now.",
  keywords:
    "Best Instagram Marketing Agency in USA, Instagram Marketing Agency in USA, Top Instagram Marketing Services in USA, Instagram Marketing, Cheap Instagram Marketing Services in USA, Instagram Ads, Instagram Marketing Firms, Top Instagram Marketing Firms in USA",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title: "Leading Instagram Marketing Agency in USA | L4RG",
    description:
      "Top Instagram Marketing Company in USA. Our marketing services help our clients significantly grow on Instagram. Call us right now.",
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

export default function InstagramMarketingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent_50%)]" />

        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-accent/20 text-accent-foreground border-accent/30"
                >
                  <Instagram className="w-3 h-3 mr-1" />
                  Instagram Marketing
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                  Captivate Your Audience on{" "}
                  <span className="text-primary">Instagram</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                  Transform your brand with visually stunning content, strategic
                  storytelling, and data-driven campaigns that drive real
                  engagement and conversions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Start Your Campaign
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Success Stories
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {[
                  { value: "2.5M+", label: "Followers Generated" },
                  { value: "340%", label: "Avg. Engagement Boost" },
                  { value: "150+", label: "Successful Campaigns" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Instagram Feed Mockup */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-6 shadow-2xl border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">your_brand</div>
                    <div className="text-sm text-muted-foreground">
                      Sponsored
                    </div>
                  </div>
                </div>

                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-4 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary/60" />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <Heart className="w-6 h-6 text-red-500 fill-current" />
                    <MessageCircle className="w-6 h-6 text-muted-foreground" />
                    <Share2 className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>

                <div className="text-sm">
                  <span className="font-semibold">12,847 likes</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Engaging content that converts viewers into customers...
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                +340% Engagement
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                2.5M Reach
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reels Storyboard */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reels Storyboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan thumb-stopping 5–7 second hooks and beats for your next reel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              { step: "Hook", tip: "Pattern interrupt in 0–1s" },
              { step: "Context", tip: "Set expectation fast" },
              { step: "Value", tip: "Show, don’t tell" },
              { step: "Proof", tip: "Before → After clip" },
              { step: "CTA", tip: "Save/DM for template" },
            ].map((b, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{b.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[9/16] rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-sm text-muted-foreground">
                    {b.tip}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* UGC Highlights */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              UGC Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase your best creator content with social-proof indicators.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                handle: "@skincaresam",
                stat: "1.2M views",
                color: "from-pink-200 to-purple-200",
              },
              {
                handle: "@fitwithjo",
                stat: "680k views",
                color: "from-amber-200 to-pink-200",
              },
              {
                handle: "@techjane",
                stat: "420k views",
                color: "from-blue-200 to-cyan-200",
              },
            ].map((c, i) => (
              <Card key={i} className="border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`aspect-square bg-gradient-to-br ${c.color} relative`}
                  >
                    <div className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                      {c.stat}
                    </div>
                    <div className="absolute bottom-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white text-black">
                      {c.handle}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Complete Instagram Marketing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From content creation to influencer partnerships, we handle every
              aspect of your Instagram presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Content Strategy & Creation",
                description:
                  "Visually stunning posts, stories, and reels that align with your brand and captivate your audience.",
                features: [
                  "Custom content calendar",
                  "Professional photography",
                  "Video production",
                  "Brand storytelling",
                ],
              },
              {
                icon: Users,
                title: "Influencer Partnerships",
                description:
                  "Connect with relevant creators and micro-influencers to expand your reach authentically.",
                features: [
                  "Influencer sourcing",
                  "Campaign management",
                  "Performance tracking",
                  "ROI optimization",
                ],
              },
              {
                icon: Target,
                title: "Instagram Ads Management",
                description:
                  "Targeted advertising campaigns that drive traffic, leads, and sales with optimal ROI.",
                features: [
                  "Audience research",
                  "Creative testing",
                  "Budget optimization",
                  "Conversion tracking",
                ],
              },
              {
                icon: TrendingUp,
                title: "Growth & Engagement",
                description:
                  "Organic strategies to build a loyal community and increase meaningful interactions.",
                features: [
                  "Hashtag strategy",
                  "Community management",
                  "Engagement tactics",
                  "Follower growth",
                ],
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description:
                  "Data-driven reporting to understand performance and optimize your strategy continuously.",
                features: [
                  "Performance metrics",
                  "Audience insights",
                  "Competitor analysis",
                  "Growth tracking",
                ],
              },
              {
                icon: Zap,
                title: "Instagram Shopping",
                description:
                  "Set up and optimize your Instagram Shop to turn followers into customers seamlessly.",
                features: [
                  "Shop setup",
                  "Product catalogs",
                  "Shopping ads",
                  "Sales optimization",
                ],
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach delivers measurable growth for businesses
              of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "340%",
                label: "Average Engagement Increase",
                icon: TrendingUp,
              },
              {
                metric: "2.5M+",
                label: "Total Followers Generated",
                icon: Users,
              },
              { metric: "150+", label: "Successful Campaigns", icon: Target },
              {
                metric: "4.8/5",
                label: "Client Satisfaction Score",
                icon: Star,
              },
            ].map((stat, i) => (
              <Card key={i} className="text-center p-8 border-0 shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Case Study Preview */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                    Featured Case Study
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Fashion Brand Achieves 500% ROI
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A boutique fashion brand transformed their Instagram
                    presence, growing from 5K to 150K followers in 6 months
                    while achieving a 500% return on ad spend through our
                    comprehensive strategy.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "3000% follower growth in 6 months",
                      "500% return on ad spend",
                      "85% increase in website traffic",
                      "40% boost in online sales",
                    ].map((result, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-primary/60" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to Transform Your Instagram Presence?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
              Join hundreds of successful brands who&apos;ve grown their
              audience and revenue with our proven Instagram marketing
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Your Free Strategy Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
