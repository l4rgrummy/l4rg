export default function ResultsSection() {
  const results = [
    {
      title: "SaaS • North America",
      meetings: "22",
      timeframe: "60 days",
      replyRate: "31%",
      roi: "7x pipeline ROI",
    },
    {
      title: "Manufacturing • EMEA",
      meetings: "18",
      timeframe: "45 days",
      replyRate: "24%",
      roi: "3 enterprise deals opened",
    },
    {
      title: "FinTech • APAC",
      meetings: "25",
      timeframe: "60 days",
      replyRate: "28%",
      roi: "2 strategic partnerships",
    },
  ];

  return (
    <section className="section" id="results" aria-labelledby="results-title">
      <div className="container">
        <h2 id="results-title" className="font-bold">
          Proven Results
        </h2>
        <p className="lead">
          Real metrics from recent programs (illustrative).
        </p>
        <div className="cards">
          {results.map((result, index) => (
            <div key={index} className="card">
              <h3 className="font-bold">{result.title}</h3>
              <p className="py-4">
                <strong>{result.meetings}</strong> meetings in{" "}
                {result.timeframe} • <strong>{result.replyRate}</strong> reply
                rate • <strong>{result.roi}</strong>.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
