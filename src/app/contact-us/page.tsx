import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ContactHero from "@/components/ui/contact/ContactHero";
import ContactForm from "@/components/ui/contact/ContactForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Share your idea, project, or business goals and the Devsorb team will get back to you with the next steps.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
