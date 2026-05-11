type IconProps = { className?: string };

const FullServiceIcon = ({ className }: IconProps) => (
  <div className={`relative ${className ?? ""}`}>
    <img
      src="/assets/about-icon-1.svg"
      alt="Full Service Expertise"
      className="block h-full w-full"
    />
    <img
      src="/assets/circle.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{
        top: "20.53%",
        left: "39.02%",
        width: "38.84%",
        height: "37.29%",
      }}
    />
    <img
      src="/assets/star.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{
        top: "26.61%",
        left: "45.64%",
        width: "25.62%",
        height: "23.53%",
      }}
    />
  </div>
);

const ClientCentricIcon = ({ className }: IconProps) => (
  <img
    src="/assets/about-icon-2.svg"
    alt="Client Centric Approach"
    className={className}
  />
);

const FlexibleEngagementsIcon = ({ className }: IconProps) => (
  <img
    src="/assets/about-icon-3.svg"
    alt="Flexible Engagements"
    className={className}
  />
);

const ProvenResultsIcon = ({ className }: IconProps) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Shield */}
    <path
      d="M24 5L9 11v12c0 9 6.5 15.5 15 19 8.5-3.5 15-10 15-19V11L24 5z"
      stroke="white"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Checkmark */}
    <path
      d="M17 23l5 5 10-10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

type Feature = {
  Icon: (props: IconProps) => React.JSX.Element;
  title: string;
  body: string;
  side: "left" | "right";
};

const features: Feature[] = [
  {
    Icon: FullServiceIcon,
    title: "Full Service Expertise",
    body: "From strategy to development and ongoing support, we cover the entire product lifecycle.",
    side: "left",
  },
  {
    Icon: ClientCentricIcon,
    title: "Client Centric Approach",
    body: "We align every project with business objectives for maximum return on investment.",
    side: "right",
  },
  {
    Icon: FlexibleEngagementsIcon,
    title: "Flexible Engagements",
    body: "Choose staff augmentation, dedicated teams, or full project delivery based on your needs.",
    side: "left",
  },
  {
    Icon: ProvenResultsIcon,
    title: "Proven Results",
    body: "Successful partnerships across industries including fintech, healthcare, education, retail, and hospitality.",
    side: "right",
  },
];

const WhyChooseUs = () => {
  const leftFeatures = features.filter((f) => f.side === "left");
  const rightFeatures = features.filter((f) => f.side === "right");

  return (
    <section className="relative mx-auto w-full max-w-[1280px] overflow-hidden px-4 py-24 lg:px-0">
      {/* Heading */}
      <div className="relative z-10 mb-16 flex flex-col items-center gap-4 text-center">
        <h2
          className="text-[36px] font-bold leading-[36px] text-[var(--text-headline)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Why Choose Devsorb?
        </h2>
        <p
          className="max-w-[700px] text-[20px] leading-[26px] text-[rgba(255,255,255,0.65)]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          We turn complex challenges into simple, effective digital products
          through smart engineering and collaboration.
        </p>
      </div>

      {/* Layout: left features | center logo | right features */}
      <div className="relative grid grid-cols-1 items-center gap-y-12 md:grid-cols-[1fr_minmax(0,420px)_1fr] md:gap-x-6">
        {/* Left column */}
        <div className="flex flex-col gap-16">
          {leftFeatures.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>

        {/* Center 3D logo with floating gold coin and grid backdrop */}
        <div className="relative hidden h-[460px] items-center justify-center md:flex">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage:
                "radial-gradient(ellipse at center, black 0%, black 35%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 0%, black 35%, transparent 75%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center, rgba(115,82,221,0.35) 0%, transparent 60%)",
            }}
          />
          <img
            src="/assets/about-why-logo.png"
            alt="Devsorb"
            className="relative z-10 h-auto w-[360px] object-contain drop-shadow-[0_0_80px_rgba(115,82,221,0.6)]"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-16">
          {rightFeatures.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ Icon, title, body }: Feature) => (
  <div className="flex flex-col items-center gap-5 text-center">
    <Icon className="h-12 w-12" />
    <div className="flex max-w-[340px] flex-col gap-3">
      <p
        className="text-[18px] font-semibold leading-[20px] text-[var(--text-headline)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {title}
      </p>
      <p
        className="text-[14px] leading-[22px] text-[rgba(255,255,255,0.65)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {body}
      </p>
    </div>
  </div>
);

export default WhyChooseUs;
