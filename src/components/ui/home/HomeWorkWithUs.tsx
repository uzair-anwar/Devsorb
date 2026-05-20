const engagements = [
  {
    title: "IT Staff Augmentation",
    description:
      "Quickly scale your team with our IT staff augmentation services. We provide skilled software developers, QA engineers, and technology experts who integrate smoothly with your workflow.",
    image: "/assets/home_it.png",
    imageClass: "lg:left-[25.5px] lg:top-[24px] lg:h-[215px] lg:w-[329px]",
    textClass: "lg:top-[293px]",
  },
  {
    title: "Launch & Scale Support",
    description:
      "Accelerate your product launch and business growth with our expert launch and scale support. Our team helps you plan, deploy, and optimize your digital platforms from day one.",
    image: "/assets/home_launch.png",
    imageClass: "lg:left-[22px] lg:top-[21px] lg:h-[223px] lg:w-[336px]",
    textClass: "lg:top-[298px]",
  },
  {
    title: "Built for You Teams",
    description:
      "Get a dedicated team of developers, designers, and project managers focused on your goals. We handle everything from planning to delivery, using agile methods and strict quality control.",
    image: "/assets/home_teams.png",
    imageClass: "lg:left-[23.5px] lg:top-[33px] lg:h-[249px] lg:w-[333px]",
    textClass: "lg:top-[306px]",
  },
];

const HomeWorkWithUs = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1172px] px-4 py-20 lg:h-[673px] lg:px-0 lg:py-0">
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-4">
        {engagements.map((eng) => (
          <div
            key={eng.title}
            className="relative flex min-h-[449px] flex-col overflow-hidden rounded-[16px] p-px lg:h-[449px] lg:w-[380px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #3b449a 0%, rgba(0,3,28,0.5) 51%, #3b449a 100%)",
            }}
          >
            <div
              className="absolute inset-px rounded-[15px]"
              style={{
                backgroundColor: "#0d0d19",
                backgroundImage:
                  "linear-gradient(180deg, rgba(34,17,88,0) 0%, rgba(34,17,88,0.08) 62%, rgba(34,17,88,0.58) 100%)",
              }}
            />

            <div
              className={`relative z-10 mx-auto mt-6 h-[215px] w-[88%] lg:absolute lg:m-0 ${eng.imageClass}`}
            >
              <img
                src={eng.image}
                alt={eng.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Text */}
            <div
              className={`relative z-10 flex flex-col gap-3 px-[22px] py-8 lg:absolute lg:left-0 lg:w-full lg:px-[22px] lg:py-0 ${eng.textClass}`}
            >
              <h3
                className="text-[18px] font-medium leading-[18px] text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {eng.title}
              </h3>
              <p
                className="text-[14px] leading-5 text-[rgba(255,255,255,0.65)]"
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
