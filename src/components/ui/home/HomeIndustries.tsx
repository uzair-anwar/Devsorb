const industries = [
  {
    title: "Healthcare",
    description:
      "We deliver HIPAA-compliant EMR systems, telemedicine apps, and appointment solutions built for clinics and hospitals. Integrate with medical devices, insurance APIs, and ETL pipelines for efficient data management and interoperability. Improve patient engagement and automate critical workflows for better care delivery.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop",
  },
  {
    title: "Banking & Fintech",
    description:
      "We develop secure digital banking apps, payment gateways, and KYC onboarding systems for banks and fintech companies. Integrate blockchain, lending platforms, and analytics tools to optimize your workflows and meet compliance. Enhance user experience with automation, real-time data, and seamless API integrations.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&auto=format&fit=crop",
  },
  {
    title: "Education",
    description:
      "We build learning management systems, virtual classrooms, and digital assessment tools for schools, universities, and edtech startups. Integrate with PowerSchool, Canvas, Google Classroom, and other platforms to fit your environment. Enable real-time collaboration, analytics, and secure data management for your students.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop",
  },
  {
    title: "Retail & E-commerce",
    description:
      "We design and develop secure e-commerce websites, inventory management systems, and mobile shopping apps tailored to your business. Connect your store with payment gateways, ERP, CRM, and third-party platforms for end-to-end efficiency. Boost conversions using AI-based recommendations and frictionless checkout experiences.",
    image:
      "https://images.unsplash.com/photo-1491897554428-130a60dd4757?w=600&auto=format&fit=crop",
  },
  {
    title: "Travel & Hospitality",
    description:
      "We develop custom booking engines, hotel management systems, and travel apps for hotels, airlines, and agencies. Integrate your existing tools with CRM, payment gateways, and marketing platforms for smoother operations. Add value with AI-powered features and automated workflows designed for your business.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop",
  },
];

const HomeIndustries = () => {
  const topThree = industries.slice(0, 3);
  const bottomTwo = industries.slice(3);

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
            Expertise
          </span>
          <span className="h-px w-8 bg-[rgba(255,255,255,0.2)]" />
        </div>
        <h2
          className="text-[32px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[40px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Deep Industry Expertise
        </h2>
      </div>

      {/* Top row: 3 cards */}
      <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {topThree.map((ind) => (
          <IndustryCard key={ind.title} {...ind} />
        ))}
      </div>

      {/* Bottom row: 2 cards centered */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {bottomTwo.map((ind) => (
          <IndustryCard key={ind.title} {...ind} />
        ))}
      </div>
    </section>
  );
};

const IndustryCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <div className="flex flex-col gap-4 overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]">
    {/* Text content */}
    <div className="flex flex-col gap-3 px-6 pt-6">
      <h3
        className="text-[18px] font-semibold leading-[1.3] text-[var(--text-headline)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] leading-[1.7] text-[rgba(255,255,255,0.55)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {description}
      </p>
    </div>

    {/* Image */}
    <div className="relative h-[200px] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(13,13,25,0.15) 0%, rgba(13,13,25,0.4) 100%)",
        }}
      />
    </div>
  </div>
);

export default HomeIndustries;
