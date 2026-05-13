const engagements = [
  {
    title: "IT Staff Augmentation",
    description:
      "Quickly scale your team with our IT staff augmentation services. We provide skilled software developers, QA engineers, and technology experts who integrate smoothly with your workflow.",
    mockup: "staff",
  },
  {
    title: "Launch & Scale Support",
    description:
      "Accelerate your product launch and business growth with our expert launch and scale support. Our team helps you plan, deploy, and optimize your digital platforms from day one.",
    mockup: "launch",
  },
  {
    title: "Built for You Teams",
    description:
      "Get a dedicated team of developers, designers, and project managers focused on your goals. We handle everything from planning to delivery, using agile methods and strict quality control.",
    mockup: "team",
  },
];

const MockupIllustration = ({ type }: { type: string }) => {
  if (type === "staff") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-t-[8px] bg-[#0f0a24] p-4">
        {/* Browser chrome */}
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <div className="ml-2 h-4 flex-1 rounded-sm bg-[rgba(255,255,255,0.06)]" />
        </div>
        {/* Table skeleton */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {["Name", "Role", "Status", "Rate"].map((h) => (
              <div key={h} className="h-5 flex-1 rounded bg-[rgba(171,145,234,0.15)] px-1 text-[9px] font-medium text-[rgba(255,255,255,0.4)] flex items-center">{h}</div>
            ))}
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="h-5 flex-1 rounded bg-[rgba(255,255,255,0.04)]" />
              <div className="h-5 flex-1 rounded bg-[rgba(255,255,255,0.04)]" />
              <div className="h-5 w-12 rounded bg-[rgba(171,145,234,0.2)]" />
              <div className="h-5 flex-1 rounded bg-[rgba(255,255,255,0.04)]" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === "launch") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-t-[8px] bg-[#0f0a24] p-4">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <div className="ml-2 h-4 flex-1 rounded-sm bg-[rgba(255,255,255,0.06)]" />
        </div>
        {/* Chart bars */}
        <div className="flex items-end gap-2 h-20 px-2">
          {[40, 60, 35, 75, 55, 80, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                backgroundImage: "linear-gradient(180deg, rgba(171,145,234,0.8) 0%, rgba(34,17,88,0.5) 100%)",
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between px-2">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
            <span key={m} className="text-[8px] text-[rgba(255,255,255,0.3)]">{m}</span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full overflow-hidden rounded-t-[8px] bg-[#0f0a24] p-4">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
        <div className="ml-2 h-4 flex-1 rounded-sm bg-[rgba(255,255,255,0.06)]" />
      </div>
      {/* Sprint board skeleton */}
      <div className="grid grid-cols-3 gap-2">
        {["Todo", "In Progress", "Done"].map((col) => (
          <div key={col} className="flex flex-col gap-1.5">
            <div className="h-4 rounded bg-[rgba(171,145,234,0.15)] px-1 flex items-center">
              <span className="text-[8px] text-[rgba(255,255,255,0.4)]">{col}</span>
            </div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 rounded bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)]" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeWorkWithUs = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1180px] px-4 py-20 lg:px-0">
      {/* Label + heading */}
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
          <span
            className="text-[12px] font-medium uppercase tracking-[0.18em] text-[rgba(255,255,255,0.45)]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Flexibility
          </span>
          <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
        </div>
        <h2
          className="text-[32px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[40px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Work With Us, Your Way
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {engagements.map((eng) => (
          <div
            key={eng.title}
            className="flex flex-col overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.07)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(34,17,88,0.4) 0%, rgba(13,13,25,0.95) 100%)",
            }}
          >
            {/* Mockup area */}
            <div className="h-[160px] border-b border-[rgba(255,255,255,0.07)]">
              <MockupIllustration type={eng.mockup} />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3 p-6">
              <h3
                className="text-[16px] font-semibold leading-[1.3] text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {eng.title}
              </h3>
              <p
                className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.55)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {eng.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeWorkWithUs;
