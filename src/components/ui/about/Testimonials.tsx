"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Andrew Colley",
    company: "ADAMA Software",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Sarah Mitchell",
    company: "TechVentures Inc.",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    name: "James Thornton",
    company: "ScaleUp Labs",
  },
  {
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum.",
    name: "Emily Davis",
    company: "Pinnacle Solutions",
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    name: "Michael Brown",
    company: "Nexus Digital",
  },
];

const QuoteIcon = () => (
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 18V12C0 9.5 0.5 7.16667 1.5 5C2.5 2.83333 4.16667 1.16667 6.5 0L9 1.8C7.83333 2.86667 6.83333 4.16667 6 5.7C5.16667 7.23333 4.66667 8.83333 4.5 10.5H9V18H0ZM12.5 18V12C12.5 9.5 13 7.16667 14 5C15 2.83333 16.6667 1.16667 19 0L21.5 1.8C20.3333 2.86667 19.3333 4.16667 18.5 5.7C17.6667 7.23333 17.1667 8.83333 17 10.5H21.5V18H12.5Z"
      fill="#4F60FA"
    />
  </svg>
);

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({
  testimonial,
  style,
}: {
  testimonial: Testimonial;
  style?: React.CSSProperties;
}) => (
  <div
    className="absolute inset-0 flex flex-col justify-between gap-10 overflow-hidden rounded-[20px] border border-[#6269ae] p-9"
    style={{
      backgroundImage: "linear-gradient(180deg, #020a18 0%, #221158 100%)",
      boxShadow: "0px 0px 14px 0px rgba(105,111,166,0.3)",
      transition:
        "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      ...style,
    }}
  >
    {/* Top bloom */}
    <div
      className="pointer-events-none absolute -top-6 left-[80px] h-[90px] w-[170px] rounded-full blur-[44px]"
      style={{ backgroundColor: "#5834e9" }}
    />
    <p
      className="relative z-10 text-[15px] leading-[24px] text-[rgba(255,255,255,0.78)]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      &ldquo;{testimonial.quote}&rdquo;
    </p>
    <div className="relative z-10 flex items-end justify-between">
      <div className="flex flex-col gap-1.5">
        <p
          className="text-[13px] leading-[14px] text-[var(--text-headline)]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {testimonial.name}
        </p>
        <p
          className="text-[12px] font-semibold leading-[14px] text-[rgba(255,255,255,0.65)]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {testimonial.company}
        </p>
      </div>
      <div
        className="flex h-[54px] w-[54px] items-center justify-center rounded-full border"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(74,86,255,0.18), #02041a 70%)",
          borderColor: "rgba(74,86,255,0.45)",
        }}
      >
        <QuoteIcon />
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const getOffset = (i: number): number => (i - active + total) % total;

  const getCardStyle = (offset: number): React.CSSProperties => {
    return {
      transform: `translateX(${offset * 38}px) translateY(${offset * 18}px) rotate(${offset * 7}deg)`,
      opacity: offset === 0 ? 1 : Math.max(0.35, 0.8 - offset * 0.12),
      zIndex: 10 - offset,
      filter: offset === 0 ? "none" : `blur(${offset * 0.6}px)`,
    };
  };

  return (
    <section className="relative mx-auto w-full max-w-[1300px] overflow-hidden px-4 py-24 lg:px-0">
      {/* Globe background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/assets/about-testimonial-globe.png"
          alt=""
          className="h-auto w-[720px] max-w-none object-contain opacity-50"
          style={{ marginTop: "120px" }}
        />
      </div>

      {/* Section heading */}
      <div className="relative z-10 mb-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-px w-12 bg-gradient-to-r from-transparent via-[var(--text-headline)] to-transparent">
            <div className="absolute -right-1 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#4f60fa] blur-[1px]" />
          </div>
          <span
            className="text-[16px] font-medium leading-[16px] text-[var(--text-headline)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Testimonial
          </span>
          <div className="relative h-px w-12 bg-gradient-to-r from-transparent via-[var(--text-headline)] to-transparent">
            <div className="absolute -left-1 top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#4f60fa] blur-[1px]" />
          </div>
        </div>
        <h2
          className="text-[36px] font-bold leading-[40px] text-[var(--text-headline)] md:text-[44px] md:leading-[48px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Real Stories, Real Results
        </h2>
      </div>

      {/* Slider */}
      <div className="relative z-10 mx-auto flex flex-col items-center gap-14">
        <div className="relative h-[440px] w-full max-w-[390px]">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              testimonial={t}
              style={getCardStyle(getOffset(i))}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-[8px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-[3px] w-12 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-[var(--text-headline)] shadow-[0px_0px_9px_0px_rgba(57,115,233,0.64)]"
                  : "cursor-pointer bg-[rgba(28,38,58,0.6)] hover:bg-[rgba(28,38,58,0.9)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
