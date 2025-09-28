export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "L4RG Digital Plus LLC",
    url: "https://l4rgdigitalplus.com/",
    logo: "https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-logo.webp",
    sameAs: [
      "https://www.linkedin.com/company/l4rg-digital-plus-llc",
      "https://x.com/sureshdas1978",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@l4rgdigitalplus.com",
        telephone: "+1-929-307-7663",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the difference between Data, Leads, and Appointments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data = verified contact info; Leads = contacts who have shown interest; Appointments = leads who agreed to a scheduled meeting.",
        },
      },
      {
        "@type": "Question",
        name: "Which tools and CRMs do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We integrate with Zoho, Salesforce, HubSpot, Bitrix24, Sales Navigator, Mailchimp, Brevo, and VOIP/WhatsApp for communications.",
        },
      },
      {
        "@type": "Question",
        name: "Can you target specific geographies and roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We filter by region, industry, company size, job level (L1/L2+), and tech stack to match your ICP.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure quality and compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Human verification, email/phone validation, opt-out handling, and respectful outreach cadences aligned with local regulations.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
