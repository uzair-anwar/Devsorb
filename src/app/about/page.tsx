import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import AboutHero from "@/components/ui/about/AboutHero";
import WhoWeAre from "@/components/ui/about/WhoWeAre";
import WhyChooseUs from "@/components/ui/about/WhyChooseUs";
import Awards from "@/components/ui/about/Awards";
import MeetTheExperts from "@/components/ui/about/MeetTheExperts";
import AboutCTA from "@/components/ui/about/AboutCTA";
import Testimonials from "@/components/ui/about/Testimonials";
import { getTeamMembers } from "@/lib/cms";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Devsorb is a software development company with expertise in frontend, backend, mobile, AI, blockchain, DevOps, and QA — delivering end-to-end, scalable solutions.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const team = await getTeamMembers();
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <WhyChooseUs />
      <Awards />
      <MeetTheExperts members={team} />
      <AboutCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
