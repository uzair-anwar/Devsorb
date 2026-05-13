"use client";

import { useState } from "react";
import Link from "next/link";

const titleToSlug: Record<string, string> = {
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

const services = [
  {
    title: "Custom Software Development",
    description: "Bespoke solutions for your unique business challenges.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="white" strokeWidth="1.6" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="rgba(171,145,234,0.9)" strokeWidth="1.6" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="rgba(171,145,234,0.9)" strokeWidth="1.6" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description: "Unlock business intelligence and automation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="white" strokeWidth="1.6" />
        <circle cx="14" cy="4" r="2" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <circle cx="14" cy="24" r="2" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <circle cx="4" cy="14" r="2" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="2" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <line x1="14" y1="6" x2="14" y2="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
        <line x1="14" y1="18" x2="14" y2="22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
        <line x1="6" y1="14" x2="10" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
        <line x1="18" y1="14" x2="22" y2="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Blockchain Development",
    description: "Secure, scalable decentralized apps and platforms.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="10" y="2" width="8" height="6" rx="1.5" stroke="white" strokeWidth="1.6" />
        <rect x="2" y="12" width="8" height="6" rx="1.5" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <rect x="18" y="12" width="8" height="6" rx="1.5" stroke="rgba(171,145,234,0.9)" strokeWidth="1.5" />
        <rect x="10" y="20" width="8" height="6" rx="1.5" stroke="white" strokeWidth="1.6" />
        <line x1="14" y1="8" x2="14" y2="12" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
        <line x1="10" y1="15" x2="6" y2="15" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
        <line x1="18" y1="15" x2="22" y2="15" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
        <line x1="14" y1="18" x2="14" y2="20" stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "MVP Development",
    description: "Validate ideas and launch quicker, smarter.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17 10H24L18.5 14.5L20.5 22L14 17.5L7.5 22L9.5 14.5L4 10H11L14 3Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
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
    <section id="services" className="relative mx-auto w-full max-w-[1180px] px-4 py-20 lg:px-0">
      {/* Label + heading */}
      <div className="mb-12 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
          <span
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Services
          </span>
        </div>
        <h2
          className="max-w-[400px] text-[32px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[40px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Services That Power Your Growth
        </h2>
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
              className="group relative flex flex-col gap-10 rounded-[12px] border border-[rgba(255,255,255,0.07)] p-6 transition-all duration-300 hover:border-[rgba(171,145,234,0.3)]"
              style={{
                backgroundImage:
                  "linear-gradient(145deg, rgba(34,17,88,0.55) 0%, rgba(13,13,25,0.9) 100%)",
              }}
            >
              {/* Icon + arrow row */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[rgba(171,145,234,0.12)]">
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

      {/* Pagination arrow */}
      {total > 1 && (
        <div className="mt-8 flex justify-center">
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
