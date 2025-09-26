import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Accessibility & eBook Conversion | L4RG",
  description:
    "End-to-end PDF accessibility (PDF/UA, WCAG, Section 508), ePUB accessibility, and eBook conversion services by L4RG with expert operators and quality checks.",
  keywords: [
    "PDF accessibility",
    "PDF/UA",
    "WCAG 2.0",
    "Section 508",
    "ePUB accessibility",
    "eBook conversion",
    "JAWS screen reader",
    "Adobe Acrobat",
  ],
  robots: "index, follow",
  alternates: { canonical: "/pdf-accessibility" },
  openGraph: {
    title: "PDF Accessibility & eBook Conversion | L4RG",
    description:
      "Comprehensive PDF and ePUB accessibility with Section 508, WCAG, and PDF/UA compliance.",
    url: "https://l4rgdigitalplus.com/pdf-accessibility",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Accessibility & eBook Conversion | L4RG",
    description:
      "Comprehensive PDF and ePUB accessibility with Section 508, WCAG, and PDF/UA compliance.",
  },
};

export default function PdfAccessibilityPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-3">PDF Accessibility</h1>
        <p className="text-slate-700 mb-6">Years Aanniversary</p>
        <p className="text-slate-700 mb-8">
          50K Pages Converted, 40+ InDesign Operators, 24/7 Services, 95%
          Accuracy. L4RG (formerly TEQTS) is an e-Publishing service provider
          since 25 years in Delhi, India and NC, US. We are providing end-to-end
          publishing services including typesetting, editing, daat conversion,
          image corrections, ebook conversion, XML conversion, ePub conversion,
          &amp; pdf Accessibility worked with big publishers Wiley, Cengage,
          McGraw Hill, Macmillan, Pearson Education, etc.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              eBook Conversion (ePub/Mobi)
            </h2>
            <p className="text-slate-700">
              Our eBook conversion team ensures to produce quality eBooks that
              are readable in all eReader platforms.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">PDF Accessibility</h2>
            <p className="text-slate-700">
              We ensure to make all your documents accessible to everyone
              despite of disability.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">ePub Accessibility</h2>
            <p className="text-slate-700">
              eReading applications ensure accessibility by factors like
              semantics, SVG, metadata, Text-to-speech, style sheets,
              navigation, scripted interactivity, media overlays and other
              factors.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Copy-editing</h2>
            <p className="text-slate-700">
              Get your content Polished for Publications by checking for
              mistakes, repetition, inconsistency.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Proof Reading</h2>
            <p className="text-slate-700">
              Compare the edited copy with the proof before print to ensure
              quality content.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Typesetting</h2>
            <p className="text-slate-700">
              Complete control on each &amp; every element that provides endless
              customization possibilities.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">
          Accessibility Services
        </h2>
        <p className="text-slate-700 mb-8">
          The transition of technology over the last few years has transformed,
          refined and redefined the way people can access different kinds of
          data and information these days. While it was next to impossible for
          people with disabilities to access data and information in the past,
          it is simple and easy these days. The emergence of accessibility
          services has facilitated this change to a greater extent.
        </p>

        <h2 className="text-2xl font-bold mb-3">PDF Accessibility</h2>
        <p className="text-slate-700 mb-4">
          For users with disabilities, a PDF file brings several options to the
          table. By modifying the structural hierarchy and displaying the
          contents of various nodes separately, we simplify the process of
          accessing the information of an entire document for people with
          disabilities. From the use of screen readers like JAWS to Adobe
          Acrobat Quick Accessibility Check, our services cover all bases with
          regard to the availability of the information in PDF documents.
        </p>
        <p className="text-slate-700 mb-8">
          In our efforts to create a more accessible PDF, we fully comply with
          the guidelines of PDF/UA. Also, we offer a detailed report on the
          whether or not the PDF files on our clients' websites are accessible
          to people with disabilities. The report also includes suggestions to
          address the existing issues.
        </p>

        <h2 className="text-2xl font-bold mb-3">Accessibility ePUB</h2>
        <p className="text-slate-700 mb-8">
          Our services of ePUB include files of various formats that are
          available on the internet. We are aware of the critical importance for
          people of all abilities to access the information stored in them on
          the go. In collaboration with modern techniques such as WCAG 2.0, ePUB
          Distributable Objects and more, we provide a simple and easy
          alternative to differently abled users to accessing text, video,
          animation and audio of their choice.
        </p>

        <h2 className="text-2xl font-bold mb-3">Web Accessibility</h2>
        <p className="text-slate-700 mb-8">
          The WCAG or the Web Content Accessibility Guidelines 2.0 not only
          applies to web pages but also to the things that customers download
          from a website. Added to their years of experience, our staff members
          also employ innovative practices while providing solutions to problems
          in this category. They keep abreast with the up-to-date information
          about the latest technologies to provide our clients with top-notch
          services in the industry. Site structure, hyperlinks and navigation
          aside, they also make sure that the text and media on the websites of
          our clients are accessible to people with disabilities.
        </p>

        <h2 className="text-2xl font-bold mb-3">Section 508 compliance</h2>
        <p className="text-slate-700 mb-4">
          We attach a great degree of importance to compliance with WCAG 2.0
          accessibility guidelines and Section 508 standards. Therefore, we use
          the following tools to ensure PDF accessibility:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
          <li>Adobe Acrobat Full Accessibility</li>
          <li>Adobe Acrobat Quick Accessibility Check</li>
          <li>
            Third-party tools for verification wherever and whenever necessary
          </li>
          <li>Screen readers like JAWS</li>
          <li>Adobe Read - Aloud</li>
        </ul>
        <p className="text-slate-700 mb-2">
          With an eye out for Section 508 compliance, we also perform the
          following tasks:
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Assisting content authors with remediation methods</li>
          <li>
            Conduct audits on a regular basis to support on-going accessibility
          </li>
          <li>
            Provide extra staff members to your existing workforce for
            additional help.
          </li>
        </ul>
      </div>
    </section>
  );
}
