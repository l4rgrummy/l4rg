export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Ideal for testing a market or segment.",
      features: [
        "1 SDR + 1 Researcher",
        "Up to 10 meetings / month",
        "Weekly reporting",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      description: "Our most popular configuration.",
      features: [
        "2 SDRs + 2 Researchers",
        "15–25 meetings / month",
        "ABM + paid amplification",
      ],
      cta: "Talk to Sales",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Custom teams, complex buyer groups, multi-geo.",
      features: ["Dedicated Pod & QA", "Custom SLAs", "RevOps & integrations"],
      cta: "Request a Proposal",
      highlighted: false,
    },
  ];

  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title" className="font-bold">
          Simple Plans That Scale
        </h2>
        <p className="lead pb-4">
          Start lean, expand as meetings convert to revenue.
        </p>
        <div className="grid-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card ${plan.highlighted ? "!border-indigo-600" : ""}`}
            >
              <h3 className="font-bold">{plan.name}</h3>
              <p className="pt-4">{plan.description}</p>
              <ul className="p-4 list-disc items-start ml-6 w-fit">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                className="btn"
                href="#contact"
                aria-label={`Choose ${plan.name} plan`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
