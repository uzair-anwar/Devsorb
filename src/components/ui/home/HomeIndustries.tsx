import SectionHeading from "@/components/shared/section-heading/SectionHeading";

/** Copy, gradient and stroke per Figma 4129:21621. */
const industries = [
  {
    title: "Healthcare",
    description:
      "We architect HIPAA compliant EMR platforms, telemedicine solutions, and patient scheduling systems for the operational realities of clinics and hospitals integrating medical devices, insurance provider APIs, and clinical data pipelines so information flows securely across your ecosystem.",
    image: "/assets/home_healthCare.png",
    variant: "top",
  },
  {
    title: "Banking & Fintech",
    description:
      "We design secure digital banking platforms, payment infrastructure, and KYC onboarding systems that meet regulatory scrutiny without sacrificing user experience. From blockchain to lending platforms and real time analytics, we turn compliance into a competitive edge.",
    image: "/assets/home_banking.png",
    variant: "top",
  },
  {
    title: "Education",
    description:
      "We develop learning management systems, virtual classrooms, and digital assessment platforms with native integrations across PowerSchool, Canvas, and Google Classroom. Our platforms deliver real time collaboration, robust analytics, and enterprise grade data security.",
    image: "/assets/home_education.png",
    variant: "top",
  },
  {
    title: "Retail & E-commerce",
    description:
      "We build secure, high performance e-commerce platforms, inventory systems, and mobile commerce apps tailored to your catalog and customer base integrating it with payment gateways, ERP, and CRM to unify your operations into one connected system, while AI-driven personalization drives higher conversion.",
    image: "/assets/home_retail.png",
    variant: "bottom",
  },
  {
    title: "Travel & Hospitality",
    description:
      "We build custom booking engines, hotel management systems, and travel apps engineered by integrating span CRM, payment processing, and marketing automation, keeping operations synchronized across properties and channels. Scale bookings without scaling complexity.",
    image: "/assets/home_travel.png",
    variant: "bottom",
  },
];

const HomeIndustries = () => (
  <section className="relative mx-auto w-full max-w-[1176px] px-4 py-20 lg:px-0 lg:py-0">
    <SectionHeading
      label="Expertise"
      title="Deep Industry Expertise"
      className="mb-14 lg:mb-[56px]"
    />

    <div className="relative flex flex-col items-center gap-4">
      {/* Figma 4129:21622 — #221158 ellipse behind the grid, blur 135 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[244px] left-[148px] hidden h-[490px] w-[757px] rounded-full bg-[#221158] blur-[135px] lg:block"
      />

      <div className="relative z-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {industries
          .filter((i) => i.variant === "top")
          .map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {industries
          .filter((i) => i.variant === "bottom")
          .map((ind) => (
            <IndustryCard key={ind.title} {...ind} />
          ))}
      </div>
    </div>
  </section>
);

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
    className="flex flex-col gap-6 rounded-[16px] border border-[#3b449a] px-6 pt-10 pb-6"
    style={{
      backgroundImage:
        "linear-gradient(180deg, rgba(34,17,88,0) 0%, #221158 100%)",
    }}
  >
    <div className="flex flex-1 flex-col gap-6">
      <h3
        className="text-[24px] leading-6 font-medium text-[var(--text-headline)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {title}
      </h3>
      <p
        className="text-[16px] leading-[22px] font-normal text-[rgba(255,255,255,0.65)]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        {description}
      </p>
    </div>

    <div
      className={`relative w-full overflow-hidden rounded-[8px] ${
        variant === "bottom"
          ? "aspect-[532/210] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          : "aspect-[282/165]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[8px] bg-[rgba(34,17,88,0.2)]"
      />
    </div>
  </div>
);

export default HomeIndustries;
