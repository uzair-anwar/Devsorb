import { notFound } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import AboutCTA from "@/components/ui/about/AboutCTA";
import Testimonials from "@/components/ui/about/Testimonials";
import ServiceHero from "@/components/ui/services/ServiceHero";
import ServiceGrowthPartner from "@/components/ui/services/ServiceGrowthPartner";
import ServiceCapabilities from "@/components/ui/services/ServiceCapabilities";
import ServiceProcess from "@/components/ui/services/ServiceProcess";
import ServiceFAQ from "@/components/ui/services/ServiceFAQ";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.navTitle,
    description: service.heroSubtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />
      <ServiceHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        ctaText={service.heroCTA}
      />
      <ServiceGrowthPartner
        intro={service.growthIntro}
        features={service.features}
      />
      <ServiceCapabilities
        capabilities={service.capabilities}
        image={service.capabilityImage}
      />
      <ServiceProcess steps={service.process} />
      <Testimonials />
      <AboutCTA />
      <ServiceFAQ faqs={service.faqs} />
      <Footer />
    </main>
  );
}
