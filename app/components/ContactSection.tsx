export default function ContactSection() {
  const whyChoosePoints = [
    "Experienced SDRs & BDMs with global reach",
    "Custom messaging per segment & persona",
    "Clear SLAs, weekly reporting, and QA",
    "Performance guarantee & refund policy",
  ];

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="font-bold">
          Book a Consultation
        </h2>
        <p className="lead">
          Tell us about your ICP and goals. We&apos;ll propose the fastest path
          to qualified meetings.
        </p>
        <div className="grid-2">
          <form
            aria-label="Contact form"
            action="#"
            method="post"
            className="grid gap-2 pt-4"
          >
            <label htmlFor="name" className="font-bold">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full border border-slate-300 rounded-lg text-base h-11 bg-white"
            />

            <label htmlFor="email" className="font-bold">
              Work Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full border border-slate-300 rounded-lg text-base h-11 bg-white"
            />

            <label htmlFor="company" className="font-bold">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="w-full border border-slate-300 rounded-lg p-3 text-base h-11 bg-white"
            />

            <label htmlFor="role" className="font-bold">
              Your Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full border border-slate-300 rounded-lg text-start h-11 bg-white"
            >
              <option>Founder/CEO</option>
              <option>Sales Leader</option>
              <option>Marketing Leader</option>
              <option>RevOps</option>
              <option>Other</option>
            </select>

            <label htmlFor="message" className="font-bold">
              Goals & ICP (brief)
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="e.g., Targeting US-based SaaS CMOs in Series B–D companies"
              className="w-full border border-slate-300 rounded-lg p-3 text-base bg-white h-28"
            ></textarea>

            <button
              className="btn h-12 !flex !items-center !justify-center text-sm"
              type="submit"
              aria-label="Submit contact form"
            >
              Request a Call
            </button>
          </form>

          <div className="card mt-4">
            <h3 className="font-bold">Why Teams Choose L4RG</h3>
            <ul className="list-disc list-outside !m-5">
              {whyChoosePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="guarantee mt-4">
              <strong className="pb-4">Closing Note</strong>
              <p className="py-4">
                We aim to deliver not just meetings—but long-term revenue
                outcomes built on transparency, trust, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
