export default function IndustriesSection() {
  const industries = [
    {
      title: "SaaS & IT",
      description:
        "From DevOps to cybersecurity, we connect with technical and business buyers.",
    },
    {
      title: "Manufacturing",
      description:
        "Target plant managers, procurement heads, and operations leaders.",
    },
    {
      title: "Healthcare",
      description:
        "Compliant outreach to administrators and clinical decision makers.",
    },
    {
      title: "Professional Services",
      description:
        "Consulting, legal, and accounting buyer journeys mapped and executed.",
    },
    {
      title: "Financial Services",
      description: "FinTech and traditional providers seeking net-new revenue.",
    },
    {
      title: "Education",
      description: "Enrollment and enterprise EdTech expansion programs.",
    },
  ];

  return (
    <section
      className="section"
      id="industries"
      aria-labelledby="industries-title"
    >
      <div className="container">
        <h2 id="industries-title" className="font-bold">
          Industries We Serve
        </h2>
        <div className="cards">
          {industries.map((industry, index) => (
            <div key={index} className="card">
              <h3 className="font-bold">{industry.title}</h3>
              <p className="py-4">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
