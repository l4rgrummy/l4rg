import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | L4RG",
  description:
    "Learn how L4RG Digital Plus LLC collects, uses, and protects your information.",
  robots: "index, follow",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | L4RG",
    description:
      "Privacy practices for visitors and users of L4RG Digital Plus LLC's website and services.",
    url: "https://l4rgdigitalplus.com/privacy",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | L4RG",
    description:
      "Privacy practices for visitors and users of L4RG Digital Plus LLC's website and services.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-slate-700 mb-4">
          This Privacy Policy describes how Technologies Group collects, uses,
          and discloses information from and about users of our website and
          those who interact with us.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Scope and Application
        </h2>
        <p className="text-slate-700 mb-3">
          This Policy applies to information collected through:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>Our Website</li>
          <li>
            Our interactions with you, including through email, phone calls, and
            meetings
          </li>
          <li>
            Our services, including appointment setting, demand generation, cold
            email outreach, sales development, sales enablement, CRM consulting,
            and LinkedIn marketing
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Information We Collect
        </h2>
        <p className="text-slate-700 mb-3">
          We collect two main types of information:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>
            <strong>Personal Information:</strong> This information identifies
            you as an individual and may include your name, title, company name,
            email address, phone number, and other information you directly
            provide to us.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> This information does not
            identify you as an individual and may include information about your
            computer, such as your IP address, browser type, operating system,
            and browsing activity on our Website. We may also collect
            information about your interaction with our services, such as the
            pages you visit and the links you click.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>
            Send you information about our services, including marketing and
            promotional materials
          </li>
          <li>Analyze how you use our Website and services</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Disclosure of Your Information
        </h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>
            Service providers who help us operate our business and provide our
            services
          </li>
          <li>
            Law enforcement or other government agencies, as required by law
          </li>
          <li>Third parties with your consent</li>
        </ul>
        <p className="text-slate-700 mb-6">
          We will not sell or rent your personal information to third parties.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Your Choices and Rights
        </h2>
        <p className="text-slate-700 mb-3">
          You have certain choices and rights regarding your information,
          including:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>
            <strong>Accessing your information:</strong> You can request a copy
            of the information we hold about you.
          </li>
          <li>
            <strong>Correcting your information:</strong> You can request that
            we correct any inaccurate information we hold about you.
          </li>
          <li>
            <strong>Opting out of marketing communications:</strong> You can
            unsubscribe from our marketing emails by clicking the "unsubscribe"
            link at the bottom of any email we send you.
          </li>
          <li>
            <strong>Data deletion:</strong> You can request that we delete your
            information.
          </li>
        </ul>
        <p className="text-slate-700 mb-6">
          To exercise these rights, please contact us as described in the
          "Contact Us" section below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Security</h2>
        <p className="text-slate-700 mb-6">
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. However, no website or
          internet transmission is completely secure, so we cannot guarantee the
          security of your information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Children's Privacy
        </h2>
        <p className="text-slate-700 mb-6">
          Our Website and services are not directed to children under the age of
          13. We do not knowingly collect personal information from children
          under 13. If you are a parent or guardian and you believe your child
          has provided us with personal information, please contact us as
          described in the "Contact Us" section below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          8. Changes to this Privacy Policy
        </h2>
        <p className="text-slate-700 mb-6">
          We may update this Privacy Policy from time to time. We will post any
          changes on this page and will inform you of any material changes by
          email. We encourage you to review this Privacy Policy periodically for
          the latest information.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
        <p className="text-slate-700 mb-6">
          If you have any questions about this Privacy Policy, please contact
          us.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          10. Additional Notes for B2B Audience
        </h2>
        <p className="text-slate-700">
          We understand that the information you share with us may be considered
          business confidential by your organization. We take the protection of
          your confidential information seriously and will use it only for the
          purposes described in this Privacy Policy. We will not share your
          confidential information with third parties without your consent.
        </p>
        <p className="text-slate-700 mt-4">
          This Privacy Policy is intended to comply with applicable data privacy
          laws, including the General Data Protection Regulation (GDPR). If you
          have any questions about our compliance with these laws, please
          contact us.
        </p>
      </div>
    </section>
  );
}
