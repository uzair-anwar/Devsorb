import Button from "@/components/shared/button/button";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "7+", label: "Years of Client Relationship" },
  { value: "97%", label: "Customer Satisfaction" },
  { value: "1M+", label: "Hours Augmented" },
  { value: "275+", label: "Lives Impacted" },
];

const HomeWhoWeAre = () => {
  return (
    <section className="relative w-full overflow-hidden lg:h-[687px]">
      {/* Purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[160px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #3a1a8a 0%, #221158 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-4 py-12 text-center md:gap-8 md:py-20 lg:absolute lg:top-[100px] lg:left-1/2 lg:w-[1180px] lg:-translate-x-1/2 lg:gap-[58px] lg:px-0 lg:py-0">
        {/* Text block: label + headline grouped with 16px inner gap */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            {/* left line + dot */}
            <span
              aria-hidden="true"
              className="h-[5px] w-[5px] rounded-full bg-[#4F60FA]"
            />
            <span
              aria-hidden="true"
              className="h-px w-8 lg:w-12"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 6%, #F4F7FF 51%, transparent 91%)",
              }}
            />
            <span
              className="text-[13px] font-medium text-[#F4F7FF] md:text-[14px] lg:text-[16px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Who We Are
            </span>
            {/* right line + dot */}
            <span
              aria-hidden="true"
              className="h-px w-8 lg:w-12"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 9%, #F4F7FF 49%, transparent 94%)",
              }}
            />
            <span
              aria-hidden="true"
              className="h-[5px] w-[5px] rounded-full bg-[#4F60FA]"
            />
          </div>

          {/* Headline */}
          <p
            className="max-w-[404px] text-[16px] font-medium leading-[22px] text-[#F4F7FF] md:max-w-[760px] md:text-[28px] md:leading-[36px] lg:max-w-[1028px] lg:text-[32px] lg:leading-[41px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            A software development company that helps startups, growing
            businesses, and enterprises turn ideas into reality.
          </p>
        </div>

        {/* Read More */}
        <Button variant="primary" size="sm">
          Read More
        </Button>

        {/* Stats chips — 3 on top row, 2 on bottom row, then dashed indicator */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            {[stats.slice(0, 3), stats.slice(3)].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {row.map((s) => (
                  <span
                    key={s.label}
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/10 px-3 py-1.5 text-[12px] text-white/90 backdrop-blur-[4.5px] md:text-[13px]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    <span className="text-[12px] text-[#F5A623]">✦</span>
                    <span className="flex items-center gap-1">
                      <span className="font-semibold text-white">
                        {s.value}
                      </span>
                      <span className="font-normal">{s.label}</span>
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Dashed perspective indicator with circle handle */}
          <svg
            aria-hidden="true"
            className="h-auto w-[396px] max-w-full"
            viewBox="0 0 396 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M189.76 69.6171H377.654C387.576 69.6171 395.62 61.5736 395.62 51.6511V1.49609"
              stroke="url(#wwa_p0)"
              strokeWidth="0.748582"
              strokeDasharray="8.98 8.98"
            />
            <path
              d="M189.758 69.6142H18.3332C8.4107 69.6142 0.367188 61.5707 0.367188 51.6483V-0.00390625"
              stroke="url(#wwa_p1)"
              strokeWidth="0.748582"
              strokeDasharray="8.98 8.98"
            />
            <path
              d="M189.76 70.3604V38.9199"
              stroke="url(#wwa_p2)"
              strokeWidth="0.748582"
              strokeDasharray="8.98 8.98"
            />
            <path
              d="M189.877 75C192.362 75 194.377 72.9853 194.377 70.5C194.377 68.0147 192.362 66 189.877 66C187.392 66 185.377 68.0147 185.377 70.5C185.377 72.9853 187.392 75 189.877 75Z"
              fill="#EDEDED"
            />
            <path
              opacity="0.5"
              d="M189.875 80.625C195.467 80.625 200 76.0919 200 70.5C200 64.9081 195.467 60.375 189.875 60.375C184.283 60.375 179.75 64.9081 179.75 70.5C179.75 76.0919 184.283 80.625 189.875 80.625Z"
              stroke="#CCCCCC"
              strokeWidth="0.75"
            />
            <defs>
              <linearGradient
                id="wwa_p0"
                x1="387.43"
                y1="1.86065"
                x2="209.025"
                y2="72.2132"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#161835" />
                <stop offset="1" stopColor="#9FA3C7" />
              </linearGradient>
              <linearGradient
                id="wwa_p1"
                x1="-4.79129"
                y1="-0.00390536"
                x2="169.298"
                y2="63.3052"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#161835" />
                <stop offset="1" stopColor="#9FA3C7" />
              </linearGradient>
              <linearGradient
                id="wwa_p2"
                x1="189.76"
                y1="70.36"
                x2="189.76"
                y2="38.92"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#151B3B" />
                <stop offset="1" stopColor="#9FA3C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Road / horizon visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-[110px] w-full overflow-hidden md:h-[180px] lg:absolute lg:top-[339px] lg:h-[248px]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, var(--bg-main) 0%, transparent 40%, transparent 60%, var(--bg-main) 100%), radial-gradient(ellipse 60% 100% at 50% 100%, rgba(115,82,221,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Perspective grid lines converging to horizon */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Converging lines */}
          {[-6, -4, -2, 0, 2, 4, 6].map((i) => (
            <line
              key={i}
              x1={720 + i * 20}
              y1={0}
              x2={720 + i * 240}
              y2={220}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
          {/* Horizontal lines */}
          {[0.3, 0.5, 0.7, 0.85, 1].map((t) => (
            <line
              key={t}
              x1={720 - t * 700}
              y1={t * 220}
              x2={720 + t * 700}
              y2={t * 220}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
