import Link from "next/link";

const items = [
  "b2b-data",
  "local-data",
  "audience-data",
  "data-enrichment",
  "business-development",
  "inbound-lead-generation",
];

export default function Page() {
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Data Solutions</h1>
      <ul className="list-disc pl-6 space-y-2">
        {items.map((slug) => (
          <li key={slug}>
            <Link href={`/data-solutions/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
