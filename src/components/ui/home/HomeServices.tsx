"use client";

import { useState } from "react";
import Link from "next/link";

export const titleToSlug: Record<string, string> = {
  "Custom Software Development": "custom-software-development",
  "AI & Machine Learning": "ai-machine-learning-development",
  "Blockchain Development": "blockchain-development",
  "MVP Development": "mvp-development-services",
  "Front & Backend Development": "front-backend-development",
  "Android & iOS App Development": "android-ios-app-development",
  "DevOps & Cloud": "devops-cloud-services",
  "Software Testing": "software-testing-services",
  "System Integration": "system-integration-services",
  "Enterprise Software Development": "enterprise-software-development",
};

export const services = [
  {
    title: "Custom Software Development",
    description: "Bespoke solutions for your unique business challenges.",
    icon: (
      <img src="/assets/home_services_custom_software_dev.png" alt="Custom Software Development" className="h-full w-full object-contain" />
    ),
  },
  {
    title: "AI & Machine Learning",
    description: "Unlock business intelligence and automation.",
    icon: (
      <img src="/assets/home_services_AI.png" alt="AI & Machine Learning" className="h-full w-full object-contain" />
    ),
  },
  {
    title: "Blockchain Development",
    description: "Secure, scalable decentralized apps and platforms.",
    icon: (
      <img src="/assets/home_services_blockChain.png" alt="Blockchain Development" className="h-full w-full object-contain" />
    ),
  },
  {
    title: "MVP Development",
    description: "Validate ideas and launch quicker, smarter.",
    icon: (
      <img src="/assets/home_services_mvp.png" alt="MVP Development" className="h-full w-full object-contain" />
    ),
  },
  {
    title: "Front & Backend Development",
    description: "Robust architecture for seamless digital experiences.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="14" rx="2" stroke="white" strokeWidth="1.6" />
        <path d="M3 9h22" stroke="rgba(171,145,234,0.9)" strokeWidth="1.4" />
        <path d="M9 23h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 19v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Android & iOS App Development",
    description: "Mobile-first solutions for any market.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="3" width="12" height="22" rx="2.5" stroke="white" strokeWidth="1.6" />
        <line x1="12" y1="22" x2="16" y2="22" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="6.5" x2="20" y2="6.5" stroke="rgba(171,145,234,0.9)" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "DevOps & Cloud",
    description: "Faster releases, stable infrastructure, lower costs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 18a5 5 0 01-.5-9.95A7 7 0 0120.5 12H22a4 4 0 010 8H7z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Software Testing",
    description: "QA that ensures speed, quality, and peace of mind.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="10" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    description: "Connect your tools, data, and workflows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="7" r="3" stroke="white" strokeWidth="1.6" />
        <circle cx="21" cy="7" r="3" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <circle cx="7" cy="21" r="3" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <circle cx="21" cy="21" r="3" stroke="white" strokeWidth="1.6" />
        <path d="M10 7h8M7 10v8M21 10v8M10 21h8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Enterprise Software Development",
    description: "Big solutions for big business needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="18" rx="1.5" stroke="white" strokeWidth="1.6" />
        <rect x="8" y="10" width="3" height="3" fill="rgba(171,145,234,0.9)" />
        <rect x="13" y="10" width="3" height="3" fill="rgba(171,145,234,0.5)" />
        <rect x="18" y="10" width="3" height="3" fill="rgba(171,145,234,0.9)" />
        <rect x="8" y="15" width="3" height="3" fill="rgba(171,145,234,0.5)" />
        <rect x="13" y="15" width="3" height="3" fill="rgba(171,145,234,0.9)" />
        <rect x="18" y="15" width="3" height="3" fill="rgba(171,145,234,0.5)" />
      </svg>
    ),
  },
];

const VISIBLE = 4;

const HomeServices = () => {
  const [page, setPage] = useState(0);
  const total = Math.ceil(services.length / VISIBLE);
  const start = page * VISIBLE;
  const visible = services.slice(start, start + VISIBLE);

  return (
    <section id="services" className="relative mx-auto w-full max-w-[1180px] px-4 py-16 lg:h-[670px] lg:px-0 lg:py-0">
      {/* Label + heading */}
      <div className="mb-12 flex flex-col gap-3 lg:mb-[56px] lg:h-[116px] lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[rgba(244,247,255,0.55)]" />
            <span
              className="text-[16px] font-medium leading-4 tracking-normal text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Services
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[rgba(244,247,255,0.55)]" />
          </div>
          <h2
            className="max-w-[400px] text-[32px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[40px] lg:max-w-[358px] lg:text-[36px] lg:leading-[42px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services That Power Your Growth
          </h2>
        </div>
        <Link
          href="/services"
          className="hidden h-10 w-[135px] items-center justify-center rounded-[4px] border border-[rgba(255,255,255,0.42)] bg-[linear-gradient(135deg,rgba(37,22,111,0.95)_0%,rgba(88,67,154,0.55)_100%)] text-[16px] font-medium leading-4 text-white shadow-[0_0_26px_rgba(135,107,255,0.22)] transition-colors hover:border-[rgba(255,255,255,0.7)] lg:mt-[76px] lg:flex"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          Explore&nbsp; More
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((svc) => {
          const slug = titleToSlug[svc.title];
          const href = slug ? `/services/${slug}` : "#services";
          return (
            <Link
              key={svc.title}
              href={href}
              className="group relative flex min-h-[280px] flex-col justify-between rounded-[12px] border border-[rgba(255,255,255,0.07)] p-6 transition-all duration-300 hover:border-[rgba(171,145,234,0.3)] lg:min-h-[295px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(75,52,175,0.50) 0%, rgba(10,8,26,0.97) 70%)",
              }}
            >
              {/* Icon + arrow row */}
              <div className="flex items-start justify-between">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[rgba(9,7,28,0.85)]">
                  {svc.icon}
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.5)] transition-all duration-200 group-hover:border-[rgba(171,145,234,0.5)] group-hover:text-[var(--accent-primary)]"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* Text */}
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

      {/* Pagination arrows */}
      {total > 1 && (
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setPage((p) => (p - 1 + total) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.4)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            aria-label="Previous services"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setPage((p) => (p + 1) % total)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] text-white transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            aria-label="Next services"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default HomeServices;
