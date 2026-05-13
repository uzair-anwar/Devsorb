import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Hero from "@/components/ui/home/Hero";
import HomeWhoWeAre from "@/components/ui/home/HomeWhoWeAre";
import HomeServices from "@/components/ui/home/HomeServices";
import HomeIndustries from "@/components/ui/home/HomeIndustries";
import HomeWorkWithUs from "@/components/ui/home/HomeWorkWithUs";
import HomeTestimonials from "@/components/ui/home/HomeTestimonials";
import HomeHireDevelopers from "@/components/ui/home/HomeHireDevelopers";
import HomeContact from "@/components/ui/home/HomeContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />
      <Hero />
      <HomeWhoWeAre />
      <HomeServices />
      <HomeIndustries />
      <HomeWorkWithUs />
      <HomeTestimonials />
      <HomeHireDevelopers />
      <HomeContact />
      <Footer />
    </main>
  );
}
