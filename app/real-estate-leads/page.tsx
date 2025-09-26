import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Lead Generation | L4RG",
  description:
    "Get verified pre-launch and commercial real estate project leads with data-driven campaigns, landing pages, and CRM-integrated workflows.",
  keywords: [
    "real estate leads",
    "pre launch projects",
    "commercial projects",
    "real estate marketing",
    "real estate lead generation",
    "property leads",
  ],
  robots: "index, follow",
  alternates: { canonical: "/real-estate-leads" },
  openGraph: {
    title: "Real Estate Lead Generation | L4RG",
    description:
      "Verified pre-launch and commercial project leads through ads, SEO, and CRM-powered funnels.",
    url: "https://l4rgdigitalplus.com/real-estate-leads",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Lead Generation | L4RG",
    description:
      "Verified pre-launch and commercial project leads through ads, SEO, and CRM-powered funnels.",
  },
};

export default function RealEstateLeadsPage() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-28 md:pb-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-3">Real Estate Lead Generation</h1>
        <p className="text-slate-700 mb-6">
          Get Verified Pre Launch Projects & Commercial Projects Leads
        </p>

        <div className="mb-8">
          <a
            href="tel:+919069689226"
            className="hidden md:inline-flex items-center justify-center rounded-md px-4 py-2 text-white font-medium border transition-colors"
          >
            Call Now: +91-906-968-9226
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Market Researches</h2>
            <p className="text-slate-700">
              We help to study target demographics, competitor strategies, and
              industry trends to identify opportunities to drive strategies.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Creative Process</h2>
            <p className="text-slate-700">
              We create compelling content and campaigns strategically aimed at
              the target audience to drive lead generations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Design & Development</h2>
            <p className="text-slate-700">
              We optimize landing pages and use CRM system integration and ads
              to generate leads and manage them efficiently.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Execution & Optimization
            </h2>
            <p className="text-slate-700">
              We run campaigns, track their performance, and optimize strategies
              according to data for better lead generation and a higher rate of
              conversion.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">What we offer?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">REAL TIME ANALYTICS</h3>
            <p className="text-slate-700">
              We detailed reports and insights to monitor performance, as well
              as enhance strategies live tracking systems.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">GOOGLE ADVERTISING</h3>
            <p className="text-slate-700">
              We utilize pay-per-click campaigns to advertise and drive traffic
              that turns into new leads in a very short time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">SEO LAUNCHING</h3>
            <p className="text-slate-700">
              We also build a web presence that increases your organic reach and
              search engine rankings.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Helping you to increase your site traffic.
            </h2>
            <p className="text-slate-700">
              When it comes to B2B lead generation for real estate, concentrate
              our efforts towards targeting corporate real estate managers and
              executives through industry-specific.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">CONTENT SUBMISSION</h3>
              <p className="text-slate-700">
                Our content submission involves sharing valuable real estate
                insights and articles on relevant platforms to attract and
                engage potential leads.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CONVERSION RATE</h3>
              <p className="text-slate-700">
                Our conversion rate measures the percentage of leads that turn
                into actual clients or sales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">REAL-TIME ANALYTICS</h3>
              <p className="text-slate-700">
                Our Real-time Analytics tracks and evaluates lead engagement and
                campaign performance instantly to optimize strategies and drive
                conversions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ONLINE MANAGEMENT</h3>
              <p className="text-slate-700">
                Our Online management involves overseeing and optimizing digital
                marketing efforts, lead tracking, and customer interactions
                through various online platforms.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">
          We offer a full range of real estate lead-generation services
        </h2>
        <p className="text-slate-700 mb-2">
          From real estate-targeted marketing campaigns to lead nurturing and
          conversion optimization, we are experts at every step of the sales
          funnel. We are designed to capture clients effectively.
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>
            Our team creates customized marketing campaigns designed to target
            your ideal demographic.
          </li>
          <li>
            We monitor and assess lead behavior to manage targeting campaigns.
          </li>
          <li>
            We use data-driven context that reveals strategic choices and
            enhances outcomes.
          </li>
          <li>
            With our years of expertise, our expert real estate professionals
            are always on hand.
          </li>
          <li>
            We offer support and consultation from the beginning of your lead
            generation campaign.
          </li>
        </ul>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-indigo-600 shadow-lg">
        <a
          href="tel:+919069689226"
          className="block text-center py-3 text-white font-semibold"
        >
          Call Now: +91-906-968-9226
        </a>
      </div>
    </section>
  );
}
