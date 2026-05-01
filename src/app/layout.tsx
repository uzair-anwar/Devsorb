import { ReactNode } from "react";
import { Poppins, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles/global.css";
import MainLayout from "@/styles/layout/MainLayout";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
