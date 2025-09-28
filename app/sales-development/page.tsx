import Link from "next/link";

const items = [
  "b2b-lead-generation",
  "account-based-marketing",
  "outbound-lead-generation",
  "linkedin-lead-generation",
  "outsourced-sdr",
  "inbound-sdr",
  "local-sdr",
  "b2b-appointment-setting",
  "cold-emailing",
  "cold-calling",
  "ai-sales-platform",
  "b2b-sales-training",
];

export default function Page() {
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Sales Development</h1>
      <ul className="list-disc pl-6 space-y-2">
        {items.map((slug) => (
          <li key={slug}>
            <Link href={`/sales-development/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
