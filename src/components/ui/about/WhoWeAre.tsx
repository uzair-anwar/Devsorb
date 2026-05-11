const stats = [
  { value: "7+", label: "Years", sublabel: "of Client Relationship" },
  { value: "97%", label: "", sublabel: "Customer Satisfaction" },
  { value: "200+", label: "", sublabel: "Projects Delivered" },
  { value: "1M+", label: "", sublabel: "Hours Augmented" },
  { value: "275K+", label: "", sublabel: "Lives Impacted" },
];

const cards = [
  {
    title: "Our Mission",
    body: "We simplify technology to make it accessible, reliable, and growth focused, partnering with businesses to turn ideas into impactful digital products.",
  },
  {
    title: "Our Vision",
    body: "We strive to be a trusted global partner for businesses seeking innovation through custom software, artificial intelligence, and emerging technologies.",
  },
  {
    title: "Our Values",
    body: "We drive innovation with technologies, ensure integrity through transparency, deliver excellence with high standards, and collaborate closely with clients for shared success.",
  },
  {
    title: "Our Journey",
    body: "Since its inception, Devsorb has enabled global clients to build products, scale platforms, and streamline operations ranging from blockchain prototypes to enterprise solutions.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1180px] px-4 py-20 lg:px-0">
      {/* Purple radial glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] -z-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-[140px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #3a1a8a 0%, #221158 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-50 blur-[160px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #4f1fc7 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-[71px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className="text-[36px] font-bold leading-[36px] text-[var(--text-headline)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who We Are
          </h2>
          <p
            className="max-w-[820px] text-[18px] leading-[26px] text-[rgba(255,255,255,0.65)]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            A software development company helping startups and enterprises
            turn ideas into reality. With expertise in frontend, backend,
            mobile, AI, blockchain, DevOps, and QA, it delivers end-to-end,
            scalable, and user friendly solutions that drive real results and
            long term value.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex w-full flex-wrap items-center justify-center divide-x divide-[rgba(255,255,255,0.07)]">
          {stats.map((stat) => (
            <div
              key={stat.sublabel}
              className="flex min-w-[160px] flex-1 flex-col items-center gap-6 px-6 py-6 text-center"
            >
              <p
                className="text-[40px] font-semibold leading-[40px] text-white"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {stat.value}
                {stat.label && (
                  <span className="text-[40px] leading-[40px]">
                    {" "}
                    {stat.label}
                  </span>
                )}
              </p>
              <p
                className="text-[18px] leading-[18px] text-[rgba(255,255,255,0.65)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Mission / Vision / Values / Journey cards */}
        <div className="grid w-full grid-cols-1 gap-[17px] md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 rounded-[8px] border border-[rgba(255,255,255,0.07)] p-8 backdrop-blur-sm"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(34,34,34,0.42) 0%, rgba(85,85,85,0.06) 97.91%)",
              }}
            >
              <p
                className="text-[22px] font-medium leading-[22px] text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {card.title}
              </p>
              <p
                className="text-[16px] leading-[23px] text-[rgba(255,255,255,0.65)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
