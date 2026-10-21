"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/shared/button/button";

/**
 * Figma 24:4132. Each stat is an odometer in the design — a scrolling column
 * that lands on `to`. We count up once the section scrolls into view.
 */
const stats = [
  { from: 100, to: 200, suffix: "+", label: "Projects Delivered" },
  { from: 1, to: 7, suffix: "+", label: "Years of Client Relationship" },
  { from: 10, to: 97, suffix: "%", label: "Customer Satisfaction" },
  { from: 1, to: 1, suffix: "M+", label: "Hours Augmented" },
  { from: 180, to: 275, suffix: "+", label: "Lives Impacted" },
];

const COUNT_MS = 1400;

const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || seen) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSeen(true),
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [seen]);

  return [ref, seen] as const;
};

const StatChip = ({
  from,
  to,
  suffix,
  label,
  run,
}: (typeof stats)[number] & { run: boolean }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!run || from === to) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      // reduced motion lands on the final value on the first frame
      const t = reduced ? 1 : Math.min((now - start) / COUNT_MS, 1);
      // ease-out so it settles rather than stopping dead
      setValue(Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, from, to]);

  return (
    <span className="flex h-[30px] w-[236px] shrink-0 items-center justify-center gap-2 rounded-[100px] border border-[#17192b] bg-[rgba(255,255,255,0.1)] px-3 py-1.5 backdrop-blur-[2.25px]">
      <img
        src="/assets/wwa-sparkle.svg"
        alt=""
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0"
      />
      <span className="flex items-center gap-1 whitespace-nowrap">
        <span
          className="text-[16px] leading-4 font-medium text-white"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {value}
          {suffix}
        </span>
        <span
          className="text-[12px] leading-3 font-normal text-white"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {label}
        </span>
      </span>
    </span>
  );
};

const Divider = ({ flip = false }: { flip?: boolean }) => (
  <span aria-hidden="true" className="relative block h-[5px] w-[50px] shrink-0">
    <span
      className="absolute top-[2px] left-0 block h-px w-12"
      style={{
        backgroundImage: `linear-gradient(${flip ? 270 : 90}deg, rgba(0,3,28,0) 6.069%, #f4f7ff 51.261%, rgba(0,3,28,0) 91.211%)`,
      }}
    />
    <span
      className={`absolute top-[1px] block size-[5px] rounded-[5px] bg-[#4f60fa] blur-[1px] ${flip ? "left-[-6px]" : "left-[48px]"}`}
    />
  </span>
);

const HomeWhoWeAre = () => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden lg:h-[487px]"
    >
      {/* Perspective grid floor — Figma 24:4133, rotated 180, 60% opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[140px] w-[1441px] -translate-x-1/2 overflow-hidden md:h-[200px] lg:top-[239px] lg:bottom-auto lg:h-[248px]"
      >
        <img
          src="/assets/wwa-grid.png"
          alt=""
          className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2 rotate-180 opacity-60"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center gap-8 px-4 py-12 pb-10 text-center md:py-20 lg:gap-10 lg:px-[176px] lg:py-0 lg:pt-0 lg:pb-[42px]">
        <div className="flex w-full flex-col items-center gap-6 lg:w-[972px]">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center">
              <Divider />
              <span
                className="px-1 text-[16px] leading-4 font-medium text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Who We Are
              </span>
              <Divider flip />
            </div>

            {/* Body copy: Poppins Regular 32/41 per Figma 24:4149 */}
            <p
              className="max-w-[404px] text-[16px] leading-[22px] font-normal text-[#F4F7FF] md:max-w-[760px] md:text-[28px] md:leading-[36px] lg:max-w-none lg:text-[32px] lg:leading-[41px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              A software development company that helps startups, growing
              businesses, and enterprises turn ideas into reality.
            </p>
          </div>

          <Button variant="primary" size="sm" href="/about">
            Read More
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 lg:w-[724px]">
            {[stats.slice(0, 3), stats.slice(3)].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {row.map((s) => (
                  <StatChip key={s.label} {...s} run={inView} />
                ))}
              </div>
            ))}
          </div>

          {/* Bottom block — Figma 24:4161 */}
          <div className="relative h-[120px] w-[396px] max-w-full overflow-hidden">
            <img
              src="/assets/wwa-line.svg"
              alt=""
              aria-hidden="true"
              className="absolute top-0 left-0 h-[70.357px] w-[396px] max-w-none"
            />
            <img
              src="/assets/wwa-handle.svg"
              alt=""
              aria-hidden="true"
              className="absolute top-[50.31%] right-[46.97%] bottom-[32.81%] left-[47.92%] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
