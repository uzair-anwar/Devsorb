import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Inter, Outfit } from "next/font/google";
import "@/styles/global.css";
import MainLayout from "@/styles/layout/MainLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devsorb — Build. Scale. Automate. Your Business",
    template: "%s | Devsorb",
  },
  description:
    "Devsorb is a software development company helping startups and enterprises turn ideas into reality — custom software, AI, blockchain, mobile, DevOps, and QA delivered faster, smarter, and your way.",
  icons: { icon: "/assets/logo.svg" },
  openGraph: {
    type: "website",
    siteName: "Devsorb",
    title: "Devsorb — Build. Scale. Automate. Your Business",
    description:
      "Custom software, AI, and automation delivered faster, smarter, and your way.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Devsorb — Build. Scale. Automate. Your Business",
    description:
      "Custom software, AI, and automation delivered faster, smarter, and your way.",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${plusJakartaSans.variable} ${inter.variable} ${outfit.variable}`}
    >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
