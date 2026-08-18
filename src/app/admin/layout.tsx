import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Devsorb",
  robots: { index: false, follow: false },
};

// Admin pages read the Supabase auth cookie on every request — never
// statically prerender them.
export const dynamic = "force-dynamic";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
