"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

function LeadGenHero() {
  return (
    <section className="relative py-12 md:py-20 bg-background bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(79,70,229,0.08),transparent),radial-gradient(800px_400px_at_120%_20%,rgba(14,165,164,0.08),transparent)]">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Lead Generation Services and Appointment Setting
          </p>
          <h1 className="text-pretty text-3xl md:text-5xl font-bold text-foreground">
            Sales leads and appointments built to close faster
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Grow revenue faster with Team + AI-driven lead generation and
            appointment setting services that connect you with key buyers and
            build a sales pipeline that never slows down.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant={"outline"}>
              <Link href="https://www.callboxinc.com/www.callboxinc.com#get-more-leads">
                Request Pricing
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="https://meetings.hubspot.com/callbox-customer-success/us/?utm_source=LPlgas">
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
          <Image
            src={"/software-hero.png"}
            alt="Appointment Setting & Lead Generation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}

function LogosTrusted() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const id = setTimeout(() => {
      const lastIndex = api.scrollSnapList().length - 1;
      if (api.selectedScrollSnap() === lastIndex) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((c) => c + 1);
      }
    }, 1500);
    return () => clearTimeout(id);
  }, [api, current]);

  return (
    <section className="w-full pt-24 pb-16">
      <Container>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left text-foreground">
            Trusted by teams worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 12 }).map((_, index) => (
                <CarouselItem
                  className="basis-1/3 md:basis-1/4 lg:basis-1/6"
                  key={index}
                >
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    <span className="text-sm text-muted-foreground">
                      Logo {index + 1}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

function Challenges() {
  return (
    <section className="py-14 bg-secondary/50">
      <Container>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          B2B Lead Generation and Appointment Setting Solutions
        </p>
        <div className="mt-2 grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-pretty">
              Overcome your lead generation and appointment setting challenges
            </h2>
            <p className="mt-3 text-muted-foreground">
              Break into new markets, win time with decision-makers, capture
              your ideal clients, and drive product launches with lead
              generation and appointment setting services.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border bg-background p-5">
                <dt className="font-medium">Close more deals</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Sales appointment setting that delivers a steady stream of
                  qualified meetings.
                </dd>
              </div>
              <div className="rounded-xl border bg-background p-5">
                <dt className="font-medium">Expand to new markets</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Lead generation services that break barriers and reach fresh
                  customer segments.
                </dd>
              </div>
              <div className="rounded-xl border bg-background p-5">
                <dt className="font-medium">Find ideal clients</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Pinpoint your ideal customers and streamline lead generation
                  efforts.
                </dd>
              </div>
              <div className="rounded-xl border bg-background p-5">
                <dt className="font-medium">Launch your product with impact</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Ensure a successful product launch and maximize market impact.
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="ghost" className="px-0">
                <Link href="https://www.callboxinc.com/solutions/">
                  See how we can help you achieve your goals →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Industries We Serve
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
          Lead Generation and Appointment Setting Across Industries
        </h2>
        <p className="mt-2 text-muted-foreground max-w-prose">
          We provide lead generation services and appointment setting tailored
          to your industry. Whether in technology, healthcare, finance,
          education, or manufacturing, we adapt our approach to reach your
          buyers.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <IndustryCard
            title="Software and Technology"
            links={[
              [
                "ERP Software",
                "https://www.callboxinc.com/industries-we-serve/erp-software-lead-generation/",
              ],
              ["Enterprise Cloud", "#"],
              [
                "Cyber Security",
                "https://www.callboxinc.com/industries-we-serve/cybersecurity-lead-generation/",
              ],
              [
                "Business Intelligence (BI) and Analytics",
                "https://www.callboxinc.com/industries-we-serve/bi-software-lead-generation/",
              ],
              [
                "AI Technology",
                "https://www.callboxinc.com/industries-we-serve/artificial-intelligence-lead-generation/",
              ],
              [
                "FinTech / RegTech",
                "https://www.callboxinc.com/industries-we-serve/fintech-lead-generation/",
              ],
              [
                "IT Governance, Risk, and Compliance",
                "https://www.callboxinc.com/industries-we-serve/it-grc-lead-generation/",
              ],
              [
                "IT Services Management (ITSM)",
                "https://www.callboxinc.com/industries-we-serve/it-managed-services-lead-generation/",
              ],
              ["Back up and Disaster Recovery Solutions", "#"],
              [
                "Wireless Services",
                "https://www.callboxinc.com/industries-we-serve/wireless-technology-lead-generation/",
              ],
            ]}
          />
          <IndustryCard
            title="Manufacturing and Distribution"
            links={[
              ["Equipment Manufacturer", "#"],
              [
                "Computer and Electronic Product Manufacturing",
                "https://www.callboxinc.com/industries-we-serve/lead-generation-for-electronic-manufacturing/",
              ],
              [
                "Technology Manufacturer",
                "https://www.callboxinc.com/industries-we-serve/technology-manufacturer-lead-generation/",
              ],
              ["Medical Manufacturer", "#"],
              [
                "Printing and Related Support Activities",
                "https://www.callboxinc.com/industries-we-serve/printing-manufacturing-lead-generation/",
              ],
            ]}
          />
          <IndustryCard
            title="Logistics"
            links={[
              [
                "3PL Lead Generation",
                "https://www.callboxinc.com/industries-we-serve/3pl-lead-generation/",
              ],
              [
                "4PL Lead Generation",
                "https://www.callboxinc.com/industries-we-serve/4pl-lead-generation/",
              ],
              [
                "Freight Forwarding",
                "https://www.callboxinc.com/industries-we-serve/freight-lead-generation/",
              ],
              ["Logistics & Warehousing", "#"],
              ["Transportation/Trucking/Railroad", "#"],
              ["Moving Companies", "#"],
            ]}
          />
          <IndustryCard
            title="Healthcare"
            links={[
              ["Healthcare Equipment and Supplies", "#"],
              ["Healthcare Provider and Services", "#"],
              ["Medical Practice Management Software and Services", "#"],
              [
                "Healthcare Technology",
                "https://www.callboxinc.com/industries-we-serve/healthcare-it-lead-generation/",
              ],
            ]}
          />
          <IndustryCard
            title="Others"
            links={[
              [
                "GPS Tracking Software",
                "https://www.callboxinc.com/industries-we-serve/gps-tracking-lead-generation/",
              ],
              [
                "Robotic Process Automation (RPA)",
                "https://www.callboxinc.com/industries-we-serve/robotic-process-automation-lead-generation/",
              ],
              [
                "Digital Marketing and Advertising",
                "https://www.callboxinc.com/industries-we-serve/digital-marketing-agency-lead-generation/",
              ],
              [
                "Business Services",
                "https://www.callboxinc.com/industries-we-serve/lead-generation-for-business-products-and-services/",
              ],
              ["And more...", "#"],
            ]}
          />
        </div>

        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="https://www.callboxinc.com/industries-we-serve/">
              Explore our B2B solutions by industry
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function IndustryCard({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <ul className="grid gap-2 text-sm">
          {links.map(([label, href], i) => (
            <li key={i}>
              <Link
                className="text-foreground hover:underline font-semibold"
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
function Reviews() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          Callbox Reviews
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-pretty">
          Why clients trust Callbox for lead generation services
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              challenge:
                "OpsVeda's in-house sales team struggled with low conversions due to poor lead quality and limited engagement methods.",
              outcome:
                "OpsVeda's year-long lead generation program yielded qualified leads, appointments, and revenue growth, prompting a renewal with expanded services.",
              quote:
                "We have seen an increase in our lead generation and conversion rates",
            },
            {
              challenge:
                "Inhalation Sciences sought a strategic partner to improve lead generation and expand reach in order to solidify their market position.",
              outcome:
                "Callbox's lead generation program resulted in significant sales appointments, webinar registrations, and over €300K revenue growth, leading to a successful and ongoing collaboration.",
              quote:
                "Callbox was able to generate leads in a stable pattern for a long period, over one year.",
            },
            {
              challenge:
                "New product launch in 2022 led AutoPylot to seek a lead generation expert to maximize the product's potential",
              outcome:
                "Callbox's lead generation boosted AutoPylot's qualified leads, revenue, and market reach in the US IT sector.",
              quote:
                "Callbox has been instrumental in launching our new product into the market",
            },
            {
              challenge:
                "LynnCo, aiming for growth, needed a lead generation partner to overcome challenges in building a qualified sales pipeline with multi-channel marketing.",
              outcome:
                "LynnCo has experienced substantial growth in its top-of-funnel pipeline, thanks to the steady flow of qualified leads provided by the Callbox team.",
              quote:
                "We have been able to streamline our lead generation process and increase our sales.",
            },
          ].map((r, i) => (
            <Card key={i} className="flex flex-col">
              <CardContent className="p-6 space-y-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Challenge
                  </p>
                  <p className="text-sm">{r.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Outcome
                  </p>
                  <p className="text-sm">{r.outcome}</p>
                </div>
                <blockquote className="border-l-2 pl-4 italic text-sm text-muted-foreground">
                  “{r.quote}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Button asChild variant="ghost" className="px-0">
            <Link href="https://www.callboxinc.com/reviews/">
              See what our clients have to say →
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function B2BLeadGeneration() {
  return (
    <main>
      <LeadGenHero />
      <LogosTrusted />
      <Challenges />
      <Industries />
      <Reviews />
    </main>
  );
}
