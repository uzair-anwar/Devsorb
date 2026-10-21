import SectionHeading from "@/components/shared/section-heading/SectionHeading";

const engagements = [
  {
    title: "IT Staff Augmentation",
    description:
      "Quickly scale your team with our IT staff augmentation services. We provide skilled software developers, QA engineers, and technology experts who integrate smoothly with your workflow.",
    image: "/assets/home_it.png",
    imageClass: "lg:h-[215px] lg:w-[329px]",
  },
  {
    title: "Launch & Scale Support",
    description:
      "Accelerate your product launch and business growth with our expert launch and scale support. Our team helps you plan, deploy, and optimize your digital platforms from day one.",
    image: "/assets/home_launch.png",
    imageClass: "lg:h-[223px] lg:w-[336px]",
  },
  {
    title: "Built for You Teams",
    description:
      "Get a dedicated team of developers, designers, and project managers focused on your goals. We handle everything from planning to delivery, using agile methods and strict quality control.",
    image: "/assets/home_teams.png",
    imageClass: "lg:h-[249px] lg:w-[333px]",
  },
];

const HomeWorkWithUs = () => (
  <section className="relative mx-auto w-full max-w-[1172px] px-4 py-20 lg:px-0 lg:py-0">
    <SectionHeading
      label="Engagement Models"
      title="Work With Us, Your Way"
      className="mb-14 lg:mb-[56px]"
    />

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {engagements.map((eng) => (
        <div
          key={eng.title}
          /* Figma 1540:32627 — #3b449a stroke over #0d0d19 with a #221158
             wash rising to full at the bottom edge. */
          className="flex flex-col items-center justify-center gap-6 rounded-[16px] border border-[#3b449a] bg-[#0d0d19] px-[22px] py-[33px] lg:h-[449px] lg:gap-[54px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(34,17,88,0) 0%, #221158 100%)",
          }}
        >
          <div className={`w-full ${eng.imageClass}`}>
            <img
              src={eng.image}
              alt={eng.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex w-full flex-col gap-3">
            <h3
              className="text-[18px] leading-[18px] font-medium text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {eng.title}
            </h3>
            <p
              className="text-[14px] leading-5 font-normal text-[rgba(255,255,255,0.65)]"
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

export default HomeWorkWithUs;
