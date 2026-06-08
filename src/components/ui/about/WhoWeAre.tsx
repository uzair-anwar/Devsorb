const stats = [
  { value: "1 +", label: "", sublabel: "Years of Client Relationship" },
  { value: "10 %", label: "", sublabel: "Customer Satisfaction" },
  { value: "100 +", label: "", sublabel: "Projects Delivered" },
  { value: "1M+", label: "", sublabel: "Hours Augmented" },
  { value: "180 +", label: "", sublabel: "Lives Impacted" },
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
    <section className="relative mx-auto w-full max-w-[1167px] px-4 pb-16 pt-10 lg:px-0 lg:pb-[55px] lg:pt-[34px]">
      {/* Purple radial glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[28%] -z-0 h-[430px] w-[680px] -translate-x-1/2 rounded-full opacity-45 blur-[135px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #3a1a8a 0%, #221158 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[290px] -z-0 h-[612px] w-[839px] -translate-x-1/2 rounded-full bg-[#221158] opacity-100 blur-[270px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 -z-0 h-[360px] w-[640px] -translate-x-1/2 rounded-full opacity-35 blur-[140px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #4f1fc7 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Heading */}
        <div className="flex max-w-[789px] flex-col items-center gap-6 text-center">
          <h2
            className="text-[34px] font-bold leading-none text-[var(--text-headline)] md:text-[36px] md:leading-[36px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who We Are
          </h2>
          <p
            className="text-[18px] font-normal leading-[26px] text-[rgba(255,255,255,0.65)] md:text-[20px] md:leading-[26px]"
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
        <div className="mt-[71px] grid w-full max-w-[1156px] grid-cols-2 items-start justify-center gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          {stats.map((stat) => (
            <div
              key={stat.sublabel}
              className="flex min-h-[107px] flex-col items-center gap-6 px-3 pt-[26px] text-center lg:border-r lg:border-[rgba(255,255,255,0.07)] lg:last:border-r-0"
            >
              <p
                className="text-[38px] font-medium leading-none text-white md:text-[40px]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {stat.value}
                {stat.label && (
                  <span className="text-[38px] leading-none md:text-[40px]">
                    {" "}
                    {stat.label}
                  </span>
                )}
              </p>
              <p
                className="text-[15px] font-normal leading-[18px] text-[rgba(255,255,255,0.65)] sm:whitespace-nowrap md:text-[17px] md:leading-[17px]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Mission / Vision / Values / Journey cards */}
        <div className="mt-[71px] grid w-full grid-cols-1 gap-[17px] md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[167px] flex-col gap-3 rounded-[8px] border border-[#3b449a] px-8 py-8 shadow-[inset_0_0_0_1px_rgba(0,3,28,0.28)] backdrop-blur-sm"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(34,34,34,0.42) 0%, rgba(85,85,85,0.06) 98%), radial-gradient(ellipse at 28% 60%, rgba(79,31,199,0.2) 0%, rgba(79,31,199,0.08) 42%, transparent 76%)",
                borderColor: "rgba(59, 68, 154, 0.92)",
              }}
            >
              <p
                className="text-[22px] font-medium leading-[22px] text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {card.title}
              </p>
              <p
                className="text-[16px] font-normal leading-[23px] text-[rgba(255,255,255,0.65)]"
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
