const industries = [
  {
    title: "Healthcare",
    description:
      "We deliver HIPAA-compliant EMR systems, telemedicine apps, and appointment solutions built for clinics and hospitals. Integrate with medical devices, insurance APIs, and ETL pipelines for efficient data management and interoperability. Improve patient engagement and automate critical workflows for better care delivery. Modernize healthcare operations with tailored digital solutions for providers.",
    image:
      "/assets/home_healthCare.png",
    variant: "top",
  },
  {
    title: "Banking & Fintech",
    description:
      "We develop secure digital banking apps, payment gateways, and KYC onboarding systems for banks and fintech companies. Integrate blockchain, lending platforms, and analytics tools to optimize your workflows and meet compliance. Enhance user experience with automation, real-time data, and seamless API integrations. Transform your finance operations with custom fintech software development.",
    image:
      "/assets/home_banking.png",
    variant: "top",
  },
  {
    title: "Education",
    description:
      "We build learning management systems, virtual classrooms, and digital assessment tools for schools, universities, and edtech startups. Integrate with PowerSchool, Canvas, Google Classroom, and other platforms to fit your environment. Enable real-time collaboration, analytics, and secure data management for your students and staff. Modernize teaching and learning with custom software development for education.",
    image:
      "/assets/home_education.png",
    variant: "top",
  },
  {
    title: "Retail & E-commerce",
    description:
      "We design and develop secure e-commerce websites, inventory management systems, and mobile shopping apps tailored to your business. Connect your store with payment gateways, ERP, CRM, and third-party platforms for end-to-end efficiency. Boost conversions using AI-based recommendations and frictionless checkout experiences. Achieve omni-channel retail success with custom, scalable technology solutions.",
    image:
      "/assets/home_retail.png",
    variant: "bottom",
  },
  {
    title: "Travel & Hospitality",
    description:
      "We develop custom booking engines, hotel management systems, and travel apps for hotels, airlines, and agencies. Integrate your existing tools with CRM, payment gateways, and marketing platforms for smoother operations. Add value with AI-powered features and automated workflows designed for your business. Streamline guest experiences and drive more bookings with our scalable travel technology services.",
    image:
      "/assets/home_travel.png",
    variant: "bottom",
  },
];

const HomeIndustries = () => {
  const topThree = industries.slice(0, 3);
  const bottomTwo = industries.slice(3);

  return (
    <section className="relative mx-auto w-full max-w-[1176px] px-4 py-20 lg:h-[1328px] lg:px-0 lg:py-0">
      {/* Label + heading */}
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[rgba(244,247,255,0.55)]" />
          <span
            className="text-[16px] font-medium leading-4 tracking-normal text-[var(--text-headline)]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Expertise
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[rgba(244,247,255,0.55)]" />
        </div>
        <h2
          className="text-[30px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[36px] md:leading-9"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Deep Industry Expertise
        </h2>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[148px] top-[244px] hidden h-[490px] w-[757px] rounded-full bg-[#221158] blur-[270px] lg:block"
        />

        {/* Top row: 3 cards */}
        <div className="relative z-10 mb-4 grid grid-cols-1 gap-5 md:grid-cols-3 lg:h-[580px] lg:grid-cols-3 lg:gap-4">
          {topThree.map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:h-[508px] lg:grid-cols-2 lg:gap-4">
          {bottomTwo.map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({
  title,
  description,
  image,
  variant,
}: {
  title: string;
  description: string;
  image: string;
  variant: string;
}) => (
  <div
    className={`relative flex h-full flex-col overflow-hidden rounded-[16px] p-px ${
      variant === "bottom" ? "lg:h-[508px] lg:w-[580px]" : "lg:h-[580px] lg:w-[380px]"
    }`}
    style={{
      backgroundImage:
        "linear-gradient(135deg, rgba(59,68,154,0.95) 0%, rgba(59,68,154,0.26) 48%, rgba(59,68,154,0.85) 100%)",
    }}
  >
    <div
      className="absolute inset-px rounded-[15px]"
      style={{
        backgroundImage:
          "radial-gradient(110% 74% at 16% 108%, rgba(34,17,88,0.98) 0%, rgba(34,17,88,0.78) 35%, rgba(34,17,88,0.18) 72%, rgba(34,17,88,0) 100%), linear-gradient(180deg, rgba(8,9,20,0.98) 0%, rgba(11,11,25,0.94) 48%, rgba(34,17,88,0.82) 100%)",
      }}
    />

    <div
      className={`relative z-10 flex flex-col gap-6 ${
        variant === "bottom"
          ? "px-6 pt-10 lg:h-[242px] lg:w-full"
          : "px-6 pt-10 lg:h-[330px] lg:w-full"
      }`}
    >
      <h3
        className="text-[24px] font-medium leading-6 text-[var(--text-headline)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {title}
      </h3>
      <p
        className="text-[16px] font-normal leading-[22px] text-[rgba(255,255,255,0.65)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {description}
      </p>
    </div>

    <div
      className={`relative z-10 mx-6 overflow-hidden rounded-[8px] ${
        variant === "bottom"
          ? "mt-6 h-[210px] lg:w-[532px]"
          : "mt-6 h-[194px] lg:w-[332px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(34,17,88,0.2)",
        }}
      />
    </div>
  </div>
);

export default HomeIndustries;
