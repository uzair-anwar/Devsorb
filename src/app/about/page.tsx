import Navbar from "@/components/shared/navbar/Navbar";
import AboutHero from "@/components/ui/about/AboutHero";
import WhoWeAre from "@/components/ui/about/WhoWeAre";
import WhyChooseUs from "@/components/ui/about/WhyChooseUs";
import Awards from "@/components/ui/about/Awards";
import AboutCTA from "@/components/ui/about/AboutCTA";
import Testimonials from "@/components/ui/about/Testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <WhyChooseUs />
      <Awards />
      <AboutCTA />
      <Testimonials />
    </main>
  );
}
