import Link from "next/link";

const items = [
  "gtm-setup",
  "scaled-outbound",
  "enterprise-teams",
  "event-marketing",
  "webinar-marketing",
  "cross-border-marketing",
  "additional-channels",
  "sales-outsourcing",
];

export default function Page() {
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Go-To-Market</h1>
      <ul className="list-disc pl-6 space-y-2">
        {items.map((slug) => (
          <li key={slug}>
            <Link href={`/go-to-market/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
