import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Services", template: "%s | Devsorb" },
  description:
    "From custom software to AI, blockchain, and cloud — explore the full range of what Devsorb builds and how it can move your business forward.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
