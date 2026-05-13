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
    <section className="relative w-full overflow-hidden">
      {/* Purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[160px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #3a1a8a 0%, #221158 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center gap-8 px-4 py-24 text-center lg:px-0">
        {/* Label */}
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
          <span
            className="text-[13px] font-medium uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Who We Are
          </span>
          <span className="h-px w-16 bg-[rgba(255,255,255,0.2)]" />
        </div>

        {/* Headline */}
        <p
          className="max-w-[820px] text-[26px] font-semibold leading-[1.35] text-[var(--text-headline)] md:text-[36px] md:leading-[48px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          A software development company that helps startups, growing
          businesses, and enterprises turn ideas into reality.
        </p>

        {/* Read More */}
        <Button variant="secondary" size="sm">
          Read More
        </Button>

        {/* Stats chips — 3 on top row, 2 on bottom row to match design */}
        <div className="flex flex-col items-center gap-3">
          {[stats.slice(0, 3), stats.slice(3)].map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap items-center justify-center gap-3">
              {row.map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[13px] font-medium text-[rgba(255,255,255,0.75)]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-[var(--accent-primary)]" />
                  <span className="font-semibold text-white">{s.value}</span>
                  {s.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Road / horizon visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-[220px] w-full overflow-hidden"
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
          {/* Dot dots indicator row */}
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              cx={700 + i * 10}
              cy={10}
              r={i === 2 ? 3.5 : 2.5}
              fill={i === 2 ? "rgba(171,145,234,0.9)" : "rgba(255,255,255,0.2)"}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};

export default HomeWhoWeAre;
