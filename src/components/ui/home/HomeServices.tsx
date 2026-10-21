"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/section-heading/SectionHeading";
import ServiceCard from "@/components/ui/services/ServiceCard";

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

/** Order and icons per Figma 3088:17442. */
export const services = [
  {
    title: "Custom Software Development",
    description: "Bespoke solutions for your unique business challenges.",
    icon: "/assets/services/icon-custom-software.png",
  },
  {
    title: "AI & Machine Learning",
    description: "Unlock business intelligence and automation.",
    icon: "/assets/services/icon-ai-ml.png",
  },
  {
    title: "Blockchain Development",
    description: "Secure, scalable decentralized apps and platforms.",
    icon: "/assets/services/icon-blockchain.png",
  },
  {
    title: "MVP Development",
    description: "Validate ideas and launch faster, smarter.",
    icon: "/assets/services/icon-mvp.png",
  },
  {
    title: "Front & Backend Development",
    description: "Robust architecture for seamless digital experiences.",
    icon: "/assets/services/icon-front-backend.png",
  },
  {
    title: "Android & iOS App Development",
    description: "Mobile-first solutions for any market.",
    icon: "/assets/services/icon-mobile.png",
  },
  {
    title: "Enterprise Software Development",
    description: "Big solutions for big business needs.",
    icon: "/assets/services/icon-enterprise.png",
  },
  {
    title: "Software Testing",
    description: "QA that ensures speed, quality, and peace of mind.",
    icon: "/assets/services/icon-testing.png",
  },
  {
    title: "DevOps & Cloud",
    description: "Faster releases, stable infrastructure, lower costs.",
    icon: "/assets/services/icon-devops.png",
  },
  {
    title: "System Integration",
    description: "Connect your tools, data, and workflows.",
    icon: "/assets/services/icon-integration.png",
  },
];

const VISIBLE = 4;

const HomeServices = () => {
  const [page, setPage] = useState(0);
  const total = Math.ceil(services.length / VISIBLE);
  const start = page * VISIBLE;
  const visible = services.slice(start, start + VISIBLE);

  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-[1172px] px-4 py-16 lg:px-0 lg:py-0"
    >
      <SectionHeading
        label="Services"
        title="Services That Power Your Growth"
        className="mb-12 lg:mb-[56px]"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((svc) => (
          <ServiceCard
            key={svc.title}
            title={svc.title}
            description={svc.description}
            icon={svc.icon}
            href={`/services/${titleToSlug[svc.title] ?? ""}`}
          />
        ))}
      </div>

      {total > 1 && (
        <div className="mt-[43px] flex justify-center gap-[30px]">
          <button
            onClick={() => setPage((p) => (p - 1 + total) % total)}
            className="size-[50px] cursor-pointer transition-opacity hover:opacity-80"
            aria-label="Previous services"
          >
            <img
              src="/assets/services/nav-prev.svg"
              alt=""
              aria-hidden="true"
              className="size-[50px]"
            />
          </button>
          <button
            onClick={() => setPage((p) => (p + 1) % total)}
            className="size-[50px] cursor-pointer transition-opacity hover:opacity-80"
            aria-label="Next services"
          >
            <img
              src="/assets/services/nav-next.svg"
              alt=""
              aria-hidden="true"
              className="size-[50px]"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default HomeServices;
