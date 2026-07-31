"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, CaseStudyItem } from "@/lib/success-stories-data";

const SECTIONS = ["Overview", "Challenges", "Solution", "Results"] as const;
type Section = (typeof SECTIONS)[number];

const BulletItem = ({ item }: { item: CaseStudyItem }) => (
  <li className="flex flex-col gap-2">
    <p
      className="text-[18px] font-medium leading-[1.1] text-[var(--text-headline)] lg:text-[20px] lg:leading-[20px]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      {item.title}
    </p>
    <p
      className="text-[15px] leading-[1.4] text-[rgba(255,255,255,0.65)] lg:text-[18px] lg:leading-[24px]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      {item.description}
    </p>
  </li>
);

const BulletList = ({
  heading,
  items,
}: {
  heading?: string;
  items: CaseStudyItem[];
}) => (
  <div className="flex flex-col gap-6">
    {heading && (
      <h3
        className="text-[20px] font-medium leading-[1.1] text-[var(--text-headline)] lg:text-[24px] lg:leading-[24px]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {heading}
      </h3>
    )}
    <ul className="flex list-disc flex-col gap-6 pl-5 marker:text-white">
      {items.map((item) => (
        <BulletItem key={item.title} item={item} />
      ))}
    </ul>
  </div>
);

const CaseStudyDetail = ({ study }: { study: CaseStudy }) => {
  const [section, setSection] = useState<Section>("Overview");
  const detail = study.detail;

  if (!detail) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[rgba(25,12,64,0.4)] text-white">
      {/* Blurred backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src="/assets/success/detail-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(25,12,64,0.4)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1252px] px-4 py-10 lg:px-0 lg:py-[94px]">
        <div
          className="flex flex-col gap-8 rounded-[24px] border border-[rgba(244,247,255,0.3)] p-6 backdrop-blur-[6px] lg:gap-[46px] lg:p-14"
          style={{
            backgroundImage:
              "linear-gradient(-30deg, #221158 4%, rgba(34,17,88,0.5) 46%, rgba(34,17,88,0) 100%)",
          }}
        >
          {/* Header: logo + eyebrow + close */}
          <div className="flex w-full items-start justify-between">
            <div className="flex items-end gap-2">
              <Image
                src="/assets/logo.svg"
                alt="Devsorb"
                width={155}
                height={36}
                className="h-8 w-auto object-contain lg:h-9"
              />
              <div className="flex h-9 items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[var(--accent-primary)]"
                />
                <span
                  className="text-[12px] font-medium leading-none text-[var(--text-headline)] lg:text-[14px]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  CASE STUDY
                </span>
              </div>
            </div>
            <Link
              href="/success-stories"
              aria-label="Back to success stories"
              className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-[#291b5a] text-white shadow-[0_4px_5px_rgba(255,255,255,0.1)] transition-colors hover:bg-[#342268]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[22px]">
            {/* Left: tabs + content */}
            <div className="flex min-w-0 flex-1 flex-col gap-7">
              <div className="flex flex-wrap gap-1">
                {SECTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSection(s)}
                    aria-pressed={section === s}
                    className={`flex h-8 w-[104px] cursor-pointer items-center justify-center rounded-[4px] border text-[14px] font-medium leading-none transition-colors lg:w-[116px] lg:text-[16px] ${
                      section === s
                        ? "border-[#f4f7ff] bg-[#190c40] text-[#f4f7ff]"
                        : "border-[#020a18] bg-[#f4f7ff] text-[#150544] hover:bg-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-9 rounded-[12px] border border-[rgba(244,247,255,0.3)] px-6 py-8 lg:px-11 lg:py-9">
                {section === "Overview" && (
                  <>
                    <div className="flex flex-col gap-8">
                      <p
                        className="text-[16px] font-medium leading-[18px] text-[var(--text-headline)] lg:text-[18px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        Introduction
                      </p>
                      <div className="flex flex-col gap-4">
                        <h1
                          className="max-w-[560px] text-[24px] font-medium leading-[1.25] text-[var(--text-headline)] lg:text-[32px] lg:leading-[40px]"
                          style={{ fontFamily: "var(--font-poppins-stack)" }}
                        >
                          {study.title}
                        </h1>
                        <p
                          className="max-w-[640px] text-[14px] leading-[1.5] text-[rgba(255,255,255,0.65)] lg:text-[15px] lg:leading-[22px]"
                          style={{ fontFamily: "var(--font-poppins-stack)" }}
                        >
                          {detail.intro.subtitle}
                        </p>
                      </div>
                    </div>
                    <BulletList items={detail.intro.highlights} />
                  </>
                )}

                {section === "Challenges" && (
                  <>
                    <div className="flex flex-col gap-6">
                      <p
                        className="text-[16px] font-medium leading-[18px] text-[var(--text-headline)] lg:text-[18px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        The Challenge
                      </p>
                      <h2
                        className="text-[24px] font-medium leading-[1.25] text-[var(--text-headline)] lg:text-[32px] lg:leading-[40px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        {detail.challenge.heading}
                      </h2>
                      {detail.challenge.paragraphs.map((p) => (
                        <p
                          key={p.slice(0, 32)}
                          className="max-w-[640px] text-[14px] leading-[1.6] text-[rgba(255,255,255,0.65)] lg:text-[16px] lg:leading-[26px]"
                          style={{ fontFamily: "var(--font-poppins-stack)" }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                    <BulletList
                      heading="Project Objectives"
                      items={detail.challenge.objectives}
                    />
                  </>
                )}

                {section === "Solution" && (
                  <>
                    <div className="flex flex-col gap-6">
                      <p
                        className="text-[16px] font-medium leading-[18px] text-[var(--text-headline)] lg:text-[18px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        The Solution
                      </p>
                      <h2
                        className="text-[24px] font-medium leading-[1.25] text-[var(--text-headline)] lg:text-[32px] lg:leading-[40px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        {detail.solution.heading}
                      </h2>
                    </div>
                    <BulletList items={detail.solution.points} />
                    <BulletList
                      heading="How We Built It"
                      items={detail.solution.howWeBuiltIt}
                    />
                  </>
                )}

                {section === "Results" && (
                  <>
                    <div className="flex flex-col gap-6">
                      <p
                        className="text-[16px] font-medium leading-[18px] text-[var(--text-headline)] lg:text-[18px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        Results / Impact
                      </p>
                      <h2
                        className="text-[24px] font-medium leading-[1.25] text-[var(--text-headline)] lg:text-[32px] lg:leading-[40px]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        {detail.results.heading}
                      </h2>
                    </div>
                    <BulletList items={detail.results.impact} />
                  </>
                )}
              </div>
            </div>

            {/* Right: project snapshot */}
            <aside className="flex w-full flex-col gap-[18px] self-stretch rounded-[12px] border border-[rgba(244,247,255,0.3)] px-8 py-6 lg:w-[346px] lg:shrink-0">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]"
                  />
                  <p
                    className="text-[16px] font-medium leading-none text-[var(--text-headline)]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    Project Snapshot
                  </p>
                </div>
                <p
                  className="text-[22px] font-medium leading-[22px] text-[var(--text-headline)]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {detail.snapshot.client}
                </p>
                <div className="h-px w-full bg-[rgba(255,255,255,0.2)]" />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-10">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/success/icon-name.svg"
                      alt=""
                      className="h-[34px] w-[34px]"
                    />
                    <div className="flex flex-col gap-1.5">
                      <p
                        className="text-[14px] font-medium leading-[14px] text-[rgba(255,255,255,0.65)]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        Name
                      </p>
                      <p
                        className="text-[16px] leading-[16px] text-[var(--text-headline)]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        {detail.snapshot.client}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/success/icon-stack.svg"
                      alt=""
                      className="h-[34px] w-[34px]"
                    />
                    <div className="flex flex-col gap-1.5">
                      <p
                        className="text-[14px] font-medium leading-[14px] text-[rgba(255,255,255,0.65)]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        Stacks
                      </p>
                      <p
                        className="text-[16px] leading-[16px] text-[var(--text-headline)]"
                        style={{ fontFamily: "var(--font-poppins-stack)" }}
                      >
                        {detail.snapshot.stacks}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex min-h-[73px] items-center rounded-[10px] border border-[rgba(226,228,232,0.3)] p-4">
                    <p
                      className="text-[14px] leading-[22px] text-[var(--text-headline)]"
                      style={{ fontFamily: "var(--font-poppins-stack)" }}
                    >
                      {detail.snapshot.ctaText}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex h-[40px] w-full items-center justify-center rounded-[8px] border border-[#020a18] bg-[#f4f7ff] text-[16px] font-medium leading-none text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Let&apos;s Connect
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyDetail;
