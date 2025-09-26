import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What's the difference between Data, Leads, and Appointments?",
      answer: (
        <p>
          <strong>Data</strong> = verified contact info for decision makers.{" "}
          <strong>Leads</strong> = contacts who have shown interest in your
          offer. <strong>Appointments</strong> = leads who agreed to a scheduled
          meeting with sales/technical teams.
        </p>
      ),
    },
    {
      question: "Which tools and CRMs do you support?",
      answer: (
        <p>
          We integrate with Zoho, Salesforce, HubSpot, Bitrix24, Sales
          Navigator, Mailchimp, Brevo, and VOIP/WhatsApp for communications.
        </p>
      ),
    },
    {
      question: "Can you target specific geographies and roles?",
      answer: (
        <p>
          Yes. We filter by country/region, industry, company size, job level
          (L1/L2+), and tech stack to match your ICP.
        </p>
      ),
    },
    {
      question: "How do you ensure quality and compliance?",
      answer: (
        <p>
          Human verification, email/phone validation, opt-out handling, and
          respectful outreach cadences aligned with local regulations.
        </p>
      ),
    },
  ];

  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="font-bold">
          Frequently Asked Questions
        </h2>
        <div className="grid-2">
          <div>
            <Accordion type="single" collapsible className="w-full">
              {leftFaqs.map((faq, index) => {
                const globalIndex = index;
                return (
                  <AccordionItem
                    key={globalIndex}
                    value={`item-${globalIndex}`}
                    className="bg-white border border-gray-200 rounded-xl px-4 mb-3 border-b-0"
                  >
                    <AccordionTrigger className="font-bold text-base hover:no-underline focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {rightFaqs.map((faq, index) => {
                const globalIndex = midpoint + index;
                return (
                  <AccordionItem
                    key={globalIndex}
                    value={`item-${globalIndex}`}
                    className="bg-white border border-gray-200 rounded-xl px-4 mb-3 border-b-0"
                  >
                    <AccordionTrigger className="font-bold text-base hover:no-underline focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-sm">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
