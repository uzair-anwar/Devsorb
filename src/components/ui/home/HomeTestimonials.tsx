"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "They took the time to understand my brand and target audience, and developed a marketing strategy that perfectly captured our essence. Their creative campaigns led to a significant increase in sales, and their expertise helped us secure a valuable partnership with another company.",
    name: "Andrew Colley",
    role: "ADAMA Software",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "Working with Devsorb transformed our entire product delivery pipeline. Their team integrated seamlessly with ours, bringing both technical depth and clear communication that made every sprint feel productive.",
    name: "Sarah Mitchell",
    role: "CTO, FinScale",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "From day one the team was proactive, responsive, and laser-focused on quality. They helped us launch our MVP three weeks ahead of schedule — and the product held up perfectly under real user traffic.",
    name: "James Okafor",
    role: "Founder, Edutrack",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&crop=face",
  },
];

const HomeTestimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[160px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #3a1a8a 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 lg:px-0">
        {/* Label + heading */}
        <div className="mb-14 flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
            <span
              className="text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Testimonial
            </span>
            <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
          </div>
          <h2
            className="text-[32px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[40px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real Stories, Real Results
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative mx-auto max-w-[780px]">
          {/* Decorative phone/card mockups in background */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-8 hidden h-[220px] w-[110px] rotate-[-12deg] rounded-[16px] border border-[rgba(255,255,255,0.06)] bg-[rgba(34,17,88,0.4)] backdrop-blur-sm lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-8 hidden h-[220px] w-[110px] rotate-[12deg] rounded-[16px] border border-[rgba(255,255,255,0.06)] bg-[rgba(34,17,88,0.4)] backdrop-blur-sm lg:block" />

          {/* Main card */}
          <div
            className="relative rounded-[16px] border border-[rgba(255,255,255,0.09)] p-8 text-center md:p-12"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(34,17,88,0.5) 0%, rgba(13,13,25,0.9) 100%)",
            }}
          >
            {/* Quote mark */}
            <div
              aria-hidden="true"
              className="absolute left-8 top-6 text-[72px] leading-none text-[rgba(171,145,234,0.15)] select-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <p
              className="relative z-10 mb-8 text-[16px] leading-[1.75] text-[rgba(255,255,255,0.75)] md:text-[18px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[rgba(171,145,234,0.4)]">
                <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p
                  className="text-[15px] font-semibold text-[var(--text-headline)]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[13px] text-[rgba(255,255,255,0.45)]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  backgroundColor:
                    i === active
                      ? "rgba(171,145,234,0.9)"
                      : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
