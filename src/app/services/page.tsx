"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ServiceCard from "@/components/ui/services/ServiceCard";
import { services, titleToSlug } from "@/components/ui/home/HomeServices";

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)]">
      <Navbar />

      <section className="relative mx-auto w-full max-w-[1180px] px-4 pb-16 pt-[140px] lg:px-0 lg:pb-[100px] lg:pt-[180px]">
        {/* Purple glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[860px] -translate-x-1/2 rounded-full opacity-40 blur-[160px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, #3a1a8a 0%, #221158 50%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mb-12 flex flex-col items-center gap-4 text-center lg:mb-[64px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[rgba(244,247,255,0.55)]" />
            <span
              className="text-[16px] font-medium leading-4 text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Services
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[rgba(244,247,255,0.55)]" />
          </div>
          <h1
            className="max-w-[640px] text-[32px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[44px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services That Power Your Growth
          </h1>
          <p
            className="max-w-[560px] text-[15px] leading-[1.6] text-[rgba(255,255,255,0.55)] md:text-[17px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            From custom software to AI, blockchain, and cloud — explore the full
            range of what we build and how it can move your business forward.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <ServiceCard
              key={svc.title}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
              href={`/services/${titleToSlug[svc.title] ?? ""}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
