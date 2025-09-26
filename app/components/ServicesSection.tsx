export default function ServicesSection() {
  const services = [
    {
      id: "svc1",
      title: "Appointment Setting (SDR-as-a-Service)",
      description:
        "End-to-end outbound program to land sales-ready meetings with decision makers in your ICP. Includes SDR talent, strategy, copy, sequencing, and qualification.",
      features: [
        "Decision-maker research & list building",
        "Personalized multi-touch sequences",
        "Live calendar booking & handoff",
      ],
    },
    {
      id: "svc2",
      title: "B2B Lead Generation",
      description:
        "Generate qualified leads via cold email, LinkedIn, calling, and paid amplification. Nurture prospects until they're ready to meet.",
      features: [
        "Intent + behavioral scoring",
        "Content-led nurturing tracks",
        "Marketing automation integration",
      ],
    },
    {
      id: "svc3",
      title: "Data Solutions",
      description:
        "Accurate, permission-aware prospect data built from social platforms, search, and tools like Sales Navigator, Lusha, and Apollo — human-verified.",
      features: [
        "Firmographic, technographic, and role-level filters",
        "Email & phone validation",
        "Compliance-ready data workflows",
      ],
    },
  ];

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="font-bold">
          Core Services
        </h2>
        <p className="lead">
          We turn raw data into booked meetings through a proven, compliant, and
          transparent system.
        </p>
        <div className="cards">
          {services.map((service) => (
            <article
              key={service.id}
              className="card"
              aria-labelledby={service.id}
            >
              <h3 id={service.id} className="font-bold pb-4">
                {service.title}
              </h3>
              <p>{service.description}</p>
              <ul className="p-4 list-disc items-start ml-6 w-fit">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
