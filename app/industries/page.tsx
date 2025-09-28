import Link from "next/link";

const items = [
  "information-technology",
  "software",
  "saas",
  "cybersecurity",
  "ai-technology",
  "cloud-services",
  "fintech",
  "crm-software",
  "erp",
  "hr-tech",
  "consulting",
  "msp",
  "manufacturing",
  "healthcare",
  "logistics",
  "energy-solar",
  "telecom",
  "data-centers",
];

export default function Page() {
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Industries</h1>
      <ul className="list-disc pl-6 space-y-2">
        {items.map((slug) => (
          <li key={slug}>
            <Link href={`/industries/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
