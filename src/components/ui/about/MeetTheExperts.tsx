"use client";

import { useRef, useState } from "react";
import type { TeamMember } from "@/lib/cms";

// "Meet the Experts" per Figma frame 4326:23944: 36px heading, 20px/28px
// subtitle, carousel of 272x372 cards (#3b449a border, 11px radius, 17px
// gaps), round 50px prev/next controls beneath.
const MeetTheExperts = ({ members }: { members: TeamMember[] }) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  if (members.length === 0) return null;

  const CARD = 272 + 17; // card width + gap
  const maxIndex = Math.max(0, members.length - 4);

  const go = (next: number) => {
    const clamped = Math.min(Math.max(next, 0), maxIndex);
    setIndex(clamped);
    viewportRef.current?.scrollTo({ left: clamped * CARD, behavior: "smooth" });
  };

  return (
    <section className="mx-auto flex w-full max-w-[1139px] flex-col items-center gap-10 px-4 py-12 lg:px-0">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2
          className="text-[30px] font-bold leading-[1] text-white lg:text-[36px] lg:leading-[36px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meet the Experts
        </h2>
        <p
          className="max-w-[620px] text-[16px] leading-[1.5] text-[rgba(255,255,255,0.65)] lg:text-[20px] lg:leading-[28px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          Behind every successful project is a team of passionate innovators,
          skilled engineers, and creative problem solvers building scalable
          digital solutions.
        </p>
      </div>

      <div
        ref={viewportRef}
        className="w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max items-center gap-[17px]">
          {members.map((m) => (
            <article
              key={`${m.fullName}-${m.designation}`}
              className="group relative h-[372px] w-[272px] shrink-0 snap-start overflow-hidden rounded-[11px] border border-[#3b449a] bg-[#151030]"
            >
              {m.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.photoUrl}
                  alt={m.fullName}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center text-[64px] text-white/20"
                  style={{ fontFamily: "var(--font-display)" }}
                  aria-hidden="true"
                >
                  {m.fullName.charAt(0)}
                </div>
              )}
              <div
                className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-[3px] p-[26px] pt-16 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(13,13,25,0) 0%, rgba(13,13,25,0.92) 60%)",
                }}
              >
                <p
                  className="text-[20px] font-semibold leading-[24px] text-[#f4f7ff]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {m.fullName}
                </p>
                <p
                  className="text-[12px] leading-[12px] tracking-[-0.02em] text-[#f4f7ff]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {m.designation}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {members.length > 4 && (
        <div className="hidden items-center gap-[30px] lg:flex">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous team members"
            className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.25)] text-white/60 transition-colors hover:border-white hover:text-white disabled:cursor-default disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index >= maxIndex}
            aria-label="Next team members"
            className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-white bg-white text-[#0d0d19] transition-opacity hover:opacity-90 disabled:cursor-default disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default MeetTheExperts;
