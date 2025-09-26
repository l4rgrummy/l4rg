import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | L4RG",
  description:
    "Read the Terms & Conditions that govern the use of L4RG Digital Plus LLC's website and services.",
  robots: "index, follow",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | L4RG",
    description:
      "Terms & Conditions for using L4RG Digital Plus LLC's website and services.",
    url: "https://l4rgdigitalplus.com/terms",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | L4RG",
    description:
      "Terms & Conditions for using L4RG Digital Plus LLC's website and services.",
  },
};

export default function TermsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-slate-700 mb-6">
          Technologies Group Terms and Conditions
        </p>
        <p className="text-slate-700 mb-4">
          Welcome! These Terms and Conditions govern your use of the
          Technologies Group website and services. By accessing or using our
          website or services, you agree to be bound by these Terms. If you do
          not agree to all of these Terms, you are not authorized to use our
          website or services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Services</h2>
        <p className="text-slate-700 mb-3">
          Technologies Group offers a wide range of services designed to help
          businesses grow, including:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>
            <strong>Appointment Setting:</strong> We connect you with qualified
            leads and schedule appointments on your behalf.
          </li>
          <li>
            <strong>Demand Generation:</strong> We create targeted campaigns to
            generate interest in your products or services.
          </li>
          <li>
            <strong>Cold Email Outreach:</strong> We craft and execute email
            campaigns to reach new potential customers.
          </li>
          <li>
            <strong>Sales Development:</strong> We build and qualify pipelines
            of potential customers for your sales team.
          </li>
          <li>
            <strong>Sales Enablement:</strong> We provide training and resources
            to equip your sales team for success.
          </li>
          <li>
            <strong>CRM Consulting:</strong> We help you select and implement
            the right Customer Relationship Management (CRM) system for your
            business.
          </li>
          <li>
            <strong>LinkedIn Marketing:</strong> We develop and execute
            strategies to leverage the power of LinkedIn to connect with your
            target audience.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Target Audience</h2>
        <p className="text-slate-700 mb-6">
          Our services are primarily targeted towards businesses ("Clients")
          seeking to improve their sales and marketing efforts. We focus on
          various technology sectors and industries, but we encourage you to
          contact us to discuss your specific needs and see if we can be a good
          fit.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. General Terms</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>
            <strong>Changes to Terms:</strong> We may modify these Terms at any
            time by posting the revised version on our website. Your continued
            use of our website or services after the posting of any revised
            Terms constitutes your acceptance of the revised Terms.
          </li>
          <li>
            <strong>Term and Termination:</strong> These Terms will remain in
            effect until terminated by either party. You may terminate these
            Terms at any time by discontinuing your use of our website or
            services. We may terminate these Terms at any time, with or without
            cause, upon written notice to you.
          </li>
          <li>
            <strong>Confidentiality:</strong> We will maintain the
            confidentiality of all information you provide to us, except as
            required by law or as necessary to provide you with our services.
          </li>
          <li>
            <strong>Limited Liability:</strong> We will not be liable for any
            damages arising out of or related to your use of our website or
            services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Additional Service-Specific Terms
        </h2>
        <p className="text-slate-700 mb-6">
          Certain services may have additional terms and conditions ("Additional
          Terms") specific to that service. These Additional Terms will be
          presented to you for your review and acceptance before you engage in
          that specific service. The Additional Terms, together with these
          Terms, will govern your use of that service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Governing Law</h2>
        <p className="text-slate-700 mb-6">
          These Terms will be governed by and construed in accordance with the
          laws of the State of India without regard to its conflict of laws
          principles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Contact Us</h2>
        <p className="text-slate-700">
          If you have any questions about these Terms, please contact us.
        </p>
      </div>
    </section>
  );
}
