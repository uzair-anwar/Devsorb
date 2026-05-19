const engagements = [
  {
    title: "IT Staff Augmentation",
    description:
      "Quickly scale your team with our IT staff augmentation services. We provide skilled software developers, QA engineers, and technology experts who integrate smoothly with your workflow.",
    image: "/assets/home_it.png",
  },
  {
    title: "Launch & Scale Support",
    description:
      "Accelerate your product launch and business growth with our expert launch and scale support. Our team helps you plan, deploy, and optimize your digital platforms from day one.",
    image: "/assets/home_launch.png",
  },
  {
    title: "Built for You Teams",
    description:
      "Get a dedicated team of developers, designers, and project managers focused on your goals. We handle everything from planning to delivery, using agile methods and strict quality control.",
    image: "/assets/home_teams.png",
  },
];

const HomeWorkWithUs = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1180px] px-4 py-20 lg:h-[673px] lg:px-0">
      {/* Label + heading */}
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
          <span
            className="text-[12px] font-medium tracking-[0.12em] text-[rgba(255,255,255,0.45)]"
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
            {/* Image area */}
            <div className="h-[200px] overflow-hidden border-b border-[rgba(255,255,255,0.07)]">
              <img
                src={eng.image}
                alt={eng.title}
                className="h-full w-full object-cover"
              />
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
