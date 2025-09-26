export default function TrustSection() {
  return (
    <section className="section" aria-labelledby="trust">
      <div className="container">
        <h2 id="trust" className="text-2xl font-bold">
          Trusted by B2B Teams Worldwide
        </h2>
        <p className="lead pb-4 pt-1">
          From SaaS to Manufacturing, our programs scale from SMB to Enterprise.
        </p>
        <div
          className="logos"
          role="list"
          aria-label="Client logo placeholders"
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>Logo</div>
          ))}
        </div>
      </div>
    </section>
  );
}
