export default function ProcessSection() {
  const processSteps = [
    {
      step: "1. ICP & Offer",
      description: "Define ideal buyers, value props, and outcomes.",
    },
    {
      step: "2. Data Build",
      description: "Compile & verify contacts from social/search & tools.",
    },
    {
      step: "3. Outreach",
      description: "Personalized email, LinkedIn, and strategic calling.",
    },
    {
      step: "4. Qualify & Book",
      description: "BDM verifies interest and books the meeting.",
    },
  ];

  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className="font-bold">
          Our Process
        </h2>
        <p className="lead">
          A simple, repeatable playbook optimized for quality and speed.
        </p>

        <div className="process">
          {processSteps.map((step, index) => (
            <div key={index} className="step">
              <strong>{step.step}</strong>
              <br />
              <span className="sub">{step.description}</span>
            </div>
          ))}
        </div>

        <div className="grid-2 mt-4">
          <div className="card">
            <h3 className="font-bold">Commitment & Refund Guarantee</h3>
            <p className="py-4">
              If targets aren&apos;t met within 2 months, we request a 1‑month
              extension. If still not delivered, we refund{" "}
              <strong>100% of the undelivered portion within 7 days</strong>.
              Example: deliver 50% of meetings → we retain 50% and refund the
              rest.
            </p>
          </div>
          <div className="guarantee">
            <strong>Transparent Reporting</strong>
            <p className="py-4">
              Weekly dashboards via your CRM (Zoho, Salesforce, HubSpot,
              Bitrix24) covering contacts added, replies, meetings, and pipeline
              generated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
