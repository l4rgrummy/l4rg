export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span className="badge" aria-label="Performance badge">
            Guaranteed Delivery • Transparent Reporting
          </span>
          <h1 className="text-4xl font-bold">
            We Book Qualified B2B Appointments & Generate Leads — Predictably
          </h1>
          <p className="sub">
            SDR-as-a-Service powered by human expertise, verified data, and
            multi-channel outreach across email, phone, LinkedIn, and ads. Focus
            on closing — we&apos;ll fill your calendar.
          </p>
          <div className="hero-cta">
            <a
              className="btn"
              href="#contact"
              aria-label="Book a consultation now"
            >
              Book a Consultation
            </a>
            <a
              className="btn secondary"
              href="#results"
              aria-label="See our results"
            >
              See Results
            </a>
          </div>
          <div className="stats" aria-label="Key performance metrics">
            <div className="stat">
              <div className="num">85%</div>
              <div>SQL Acceptance Rate (avg.)</div>
            </div>
            <div className="stat">
              <div className="num">10–30</div>
              <div>Meetings / Month / Team</div>
            </div>
            <div className="stat">
              <div className="num">5–7x</div>
              <div>Pipeline ROI</div>
            </div>
            <div className="stat">
              <div className="num">24/7</div>
              <div>Reporting & QA</div>
            </div>
          </div>
        </div>

        <div
          className="card"
          role="img"
          aria-label="Illustration of outreach workflow"
        >
          <h3 className="mb-5 font-bold">Outbound Orchestration</h3>
          <p className="sub">
            Research ➜ List Build ➜ Personalization ➜ Multi-Touch Sequences ➜
            Live Handoffs
          </p>
          <div className="grid-3 mt-3">
            <div className="card">
              <strong>ICP & Data</strong>
              <br />
              <span className="sub">
                Firmographic + technographic filters, verified by humans.
              </span>
            </div>
            <div className="card">
              <strong>Messaging</strong>
              <br />
              <span className="sub">
                Pain-based copy & value props tailored per segment.
              </span>
            </div>
            <div className="card">
              <strong>Sequencing</strong>
              <br />
              <span className="sub">
                Email • LinkedIn • Calling • Retargeting.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
