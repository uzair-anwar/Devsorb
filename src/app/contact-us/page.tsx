import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ContactHero from "@/components/ui/contact/ContactHero";
import ContactForm from "@/components/ui/contact/ContactForm";

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
