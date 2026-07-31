"use client";

import Link from "next/link";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
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
          {services.map((svc) => {
            const slug = titleToSlug[svc.title];
            return (
              <Link
                key={svc.title}
                href={`/services/${slug}`}
                className="group relative flex min-h-[280px] flex-col justify-between rounded-[12px] border border-[rgba(255,255,255,0.07)] p-6 transition-all duration-300 hover:border-[rgba(171,145,234,0.3)] lg:min-h-[295px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(75,52,175,0.50) 0%, rgba(10,8,26,0.97) 70%)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[rgba(9,7,28,0.85)]">
                    {svc.icon}
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.5)] transition-all duration-200 group-hover:border-[rgba(171,145,234,0.5)] group-hover:text-[var(--accent-primary)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <p
                    className="text-[15px] font-semibold leading-[1.3] text-[var(--text-headline)]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    {svc.title}
                  </p>
                  <p
                    className="text-[13px] leading-[1.6] text-[rgba(255,255,255,0.55)]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    {svc.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
