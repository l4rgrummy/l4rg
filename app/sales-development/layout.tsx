import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Development Services | L4RG",
  description:
    "Professional sales development services including lead generation, SDR services, and outreach methods to accelerate your business growth.",
};

export default function SalesDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
