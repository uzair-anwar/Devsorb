"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import Button from "@/components/shared/button/button";
import {
  INDUSTRY_GROUPS,
  WHY_CLIENTS,
  type CaseStudy,
} from "@/lib/success-stories-data";

type Tab = "stories" | "case-studies";

export default function SuccessStoriesView({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  const [tab, setTab] = useState<Tab>("stories");

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
      <Navbar />
      <SuccessHero />

      {/* Major-section gaps per Figma root frame 2364:16362: 181px; tabs and
          tab content share one group with a 56px gap (frame 3869:22395) */}
      <div className="relative mx-auto flex w-full flex-col items-center gap-[80px] pt-[80px] lg:gap-[181px] lg:pt-[181px]">
        {/* Purple glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[900px] -z-0 h-[490px] w-[757px] -translate-x-1/2 rounded-full bg-[#221158] opacity-60 blur-[150px]"
        />

        <div className="flex w-full flex-col items-center gap-[40px] lg:gap-[56px]">
          <TabToggle tab={tab} onChange={setTab} />
          {tab === "stories" ? (
          <IndustryStories />
        ) : (
          <CaseStudiesGrid caseStudies={caseStudies} />
        )}
        </div>

        <WhyClientsSucceed />
        <SuccessCTA />
      </div>

      <div className="mt-[80px] lg:mt-[181px]">
        <Footer />
      </div>
    </main>
  );
}

// Hero geometry per Figma Desktop-1 frame (2364:16363): title block 179px
// from top, bg image 128.26% wide / top-aligned crop
const SuccessHero = () => (
  <section className="relative isolate overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <img
        src="/assets/success/hero-bg.png"
        alt=""
        className="absolute max-w-none"
        style={{
          width: "128.26%",
          height: "227.17%",
          left: "-24.75%",
          top: 0,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%), linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
    </div>

    <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 px-4 pb-[24px] pt-[120px] text-center lg:px-0 lg:pt-[179px]">
      <div className="flex flex-col items-center gap-4">
        <h1
          className="text-[40px] font-bold leading-[1.1] text-[var(--text-headline)] md:text-[60px] lg:text-[81px] lg:leading-[81px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Success Stories
        </h1>
        <p
          className="max-w-[600px] text-[16px] leading-[1.5] text-[rgba(255,255,255,0.65)] md:text-[20px] lg:text-[24px] lg:leading-[32px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          From fintech to healthcare to blockchain, we help clients turn bold
          ideas into products that scale.
        </p>
      </div>
      <Button variant="primary" size="sm" href="/contact-us">
        Start Your Success Story
      </Button>
    </div>
  </section>
);

const TabToggle = ({
  tab,
  onChange,
}: {
  tab: Tab;
  onChange: (t: Tab) => void;
}) => (
  <div className="relative z-10 flex w-[calc(100%-32px)] max-w-[320px] overflow-hidden rounded-[8px] md:max-w-[1086px] md:rounded-[12px]">
    {(
      [
        { key: "stories", label: "Success Stories" },
        { key: "case-studies", label: "Case Studies" },
      ] as const
    ).map(({ key, label }) => (
      <button
        key={key}
        type="button"
        onClick={() => onChange(key)}
        aria-pressed={tab === key}
        className={`flex h-[36px] flex-1 cursor-pointer items-center justify-center text-[13px] font-medium transition-colors md:h-[62px] md:text-[22px] lg:text-[25px] ${
          tab === key
            ? "bg-[#f4f7ff] text-[#190c40]"
            : "bg-[#190c40] text-[#f4f7ff] hover:bg-[#241259]"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </button>
    ))}
  </div>
);

const IndustryStories = () => (
  <section className="relative z-10 flex w-full flex-col items-center gap-10 px-4 lg:gap-[40px] lg:px-0">
    <h2
      className="text-center text-[32px] font-bold leading-[1.1] text-[var(--text-headline)] md:text-[42px] lg:text-[50px] lg:leading-[50px]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      Industry Success Stories
    </h2>

    <div className="flex w-full max-w-[1087px] flex-col gap-[70px] lg:gap-[136px]">
      {INDUSTRY_GROUPS.map((group) => (
        <div
          key={group.industry}
          className={`flex flex-col gap-4 ${
            group.imageSide === "right" ? "items-end" : "items-start"
          }`}
        >
          <h3
            className="text-[28px] font-bold capitalize leading-[1] text-[var(--text-headline)] lg:text-[40px] lg:leading-[40px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {group.industry}
          </h3>
          <div
            className={`flex w-full flex-col items-center gap-6 lg:flex-row lg:gap-[25px] ${
              group.imageSide === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-full shrink-0 overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.1)] lg:w-[538px] lg:self-stretch">
              <img
                src={group.image}
                alt={`${group.industry} success stories`}
                className="h-[240px] w-full object-cover md:h-[320px] lg:h-full lg:min-h-[484px]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%)",
                }}
              />
            </div>

            <ul className="flex w-full flex-col gap-3 lg:gap-[14px]">
              {group.clients.map((client) => (
                <li key={client.name} className="flex flex-col gap-2 p-3 lg:p-4">
                  <p
                    className="text-[20px] font-medium leading-[1.1] text-[var(--text-headline)] lg:text-[28px] lg:leading-[28px]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    {client.name}
                  </p>
                  <p
                    className="max-w-[470px] text-[15px] leading-[1.4] text-[rgba(255,255,255,0.65)] lg:text-[20px] lg:leading-[26px]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    {client.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const CaseStudiesGrid = ({ caseStudies }: { caseStudies: CaseStudy[] }) => (
  <section className="relative z-10 w-full px-4 lg:px-0">
    <div className="mx-auto grid w-full max-w-[1083px] grid-cols-1 gap-6 md:grid-cols-2 lg:gap-[35px]">
      {caseStudies.map((cs) => (
        <article
          key={cs.slug}
          className="relative flex min-h-[420px] flex-col justify-between gap-10 overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.1)] p-8 lg:min-h-[503px] lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <img
              src={cs.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #0d0d19 0%, rgba(13,13,25,0.55) 45%, rgba(13,13,25,0.85) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-6 lg:gap-[34px]">
            <p
              className="text-[28px] font-medium leading-[1] text-white lg:text-[40px] lg:leading-[40px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Case Study
            </p>
            <h3
              className="max-w-[420px] text-[22px] font-light leading-[1.25] text-white lg:text-[32px] lg:leading-[40px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {cs.title}
            </h3>
          </div>

          <div className="relative z-10">
            {cs.detail ? (
              <Link
                href={`/success-stories/${cs.slug}`}
                className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#020a18] bg-[#f4f7ff] px-4 text-[16px] font-medium leading-none text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View in Detail
              </Link>
            ) : (
              <span
                className="inline-flex h-[40px] items-center rounded-[8px] border border-white/20 px-4 text-[14px] leading-none text-white/60"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                Full case study coming soon
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

/* Chip centers as % of the 501x417 design card, DOM order = design z-order
   (last chip renders on top). */
const STAT_CHIPS = [
  { value: "1M+", label: "Hours Augmented", cx: "39.3%", cy: "83%", rotate: 0 },
  { value: "97%", label: "Customer Satisfaction", cx: "60.9%", cy: "68.4%", rotate: 21.85 },
  { value: "200+", label: "Projects Delivered", cx: "36.7%", cy: "51.7%", rotate: -23.65 },
  { value: "275 K+", label: "Lives Impacted", cx: "86.9%", cy: "51.2%", rotate: 90.28 },
  { value: "7+ Years", label: "of Client Relationship", cx: "45.9%", cy: "27.1%", rotate: 16.67 },
];

const WhyClientsSucceed = () => (
  <section className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1100px] rounded-[30px] border border-[rgba(255,255,255,0.1)] p-6 lg:p-8">
    <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-[29px]">
      <div className="relative aspect-[501/417] w-full shrink-0 overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.1)] lg:h-[417px] lg:w-[501px]">
        <img
          src="/assets/success/why-clients.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%), linear-gradient(90deg, rgba(13,13,25,0.2) 0%, rgba(13,13,25,0.2) 100%)",
          }}
        />
        {STAT_CHIPS.map((chip) => (
          <div
            key={chip.label}
            className="absolute flex w-[67.5%] flex-col items-center gap-2 rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-[#0c0620] to-[#291b5a] p-3 lg:p-4"
            style={{
              left: chip.cx,
              top: chip.cy,
              transform: `translate(-50%, -50%) rotate(${chip.rotate}deg)`,
            }}
          >
            <p
              className="text-[16px] font-semibold leading-none text-white lg:text-[20px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {chip.value}
            </p>
            <p
              className="text-[13px] leading-none text-[rgba(255,255,255,0.65)] lg:text-[16px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {chip.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 lg:max-w-[500px]">
        <h2
          className="text-[30px] font-bold leading-[1.15] text-[var(--text-headline)] lg:text-[40px] lg:leading-[46px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {WHY_CLIENTS.heading}
        </h2>
        <p
          className="text-[16px] leading-[1.5] text-[rgba(255,255,255,0.65)] lg:text-[20px] lg:leading-[26px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {WHY_CLIENTS.body}
        </p>
      </div>
    </div>
  </section>
);

const SuccessCTA = () => (
  <section
    className="relative w-full overflow-hidden px-4 py-[60px] lg:px-[111px] lg:py-[106px]"
    style={{
      backgroundImage:
        "linear-gradient(180deg, #0d0d19 0%, rgba(6,6,12,0) 50%, #0d0d19 100%), url('/assets/success/cta-bg.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div
      className="mx-auto flex w-full max-w-[1213px] flex-col items-center justify-center gap-6 rounded-[16px] border-2 border-[rgba(255,255,255,0.24)] px-6 py-12 text-center backdrop-blur-[18px] lg:h-[400px] lg:gap-8 lg:px-[120px] lg:py-16"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(34,34,34,0.42) 0%, rgba(85,85,85,0.06) 98%)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <h2
          className="max-w-[700px] text-[28px] font-bold leading-[1.15] text-[var(--text-headline)] md:text-[38px] lg:text-[48px] lg:leading-[54px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Start Your Success Story with Devsorb
        </h2>
        <p
          className="text-[16px] font-medium leading-[1.3] text-[rgba(255,255,255,0.65)] lg:text-[24px] lg:leading-[24px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          Let&apos;s build technology that makes your vision real.
        </p>
      </div>
      <Link
        href="/contact-us"
        className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#020a18] bg-[#f4f7ff] px-4 text-[16px] font-medium leading-none text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Get In Touch
      </Link>
    </div>
  </section>
);
