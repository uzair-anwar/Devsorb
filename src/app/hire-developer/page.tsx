import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import HeroTechMarquee from "@/components/ui/home/HeroTechMarquee";

export const metadata: Metadata = {
  title: "Hire Developers | Devsorb",
  description:
    "Hire vetted remote developers who integrate with your workflow and help you scale delivery.",
};

const challenges = [
  "You've scoped the roadmap but lack the bandwidth to build.",
  "Your internal team is capable but stretched thin.",
  "Off the shelf tools aren't meeting performance expectations.",
  "You need skilled developers who can integrate quickly and deliver results.",
];

const approach = [
  "Understand your project goals and requirements.",
  "Get vetted engineers tailored to your needs.",
  "Developers align with your workflow and tools.",
  "Expand your team flexibly as your project evolves.",
];

const talentCards = [
  {
    title: "Pre-vetted developers",
    body: "Developers are vetted for expertise, experience, and scalability",
    icon: "people",
  },
  {
    title: "Expert screening",
    body: "Technical assessments and interviews ensure top talent.",
    icon: "screen",
  },
  {
    title: "Fast onboarding",
    body: "Skip long hiring cycles. Get developers who integrate and deliver from day one.",
    icon: "bolt",
  },
];

const primaryButtonClass =
  "inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border border-[rgba(255,255,255,0.32)] bg-[#190c40] px-4 text-[12px] font-medium leading-none text-[#f4f7ff] shadow-[0_0_18px_rgba(112,82,230,0.3)] transition-colors hover:border-white/70 sm:text-[14px] lg:h-10 lg:px-4 lg:text-[16px]";

const HireDeveloperPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0d19] text-white">
      <Navbar />
      <HireHero />
      <TechStrip />
      <div className="relative mx-auto flex w-full flex-col gap-[50px] pb-0 pt-[50px] lg:gap-[100px] lg:pt-[100px]">
        <GlowLayer />
        <HireContentBlock
          eyebrow="Challenges"
          title="What We Help You Solve"
          body="Build your dream team with vetted engineers ready to join your project. We provide highly skilled developers who integrate seamlessly with your workflow and deliver measurable results."
          items={challenges}
        />
        <HireContentBlock
          eyebrow="Our Approach"
          title="How We Help You Scale"
          body="A simple, proven process that takes you from requirements to a fully integrated team — so you can focus on shipping while we handle the sourcing, vetting, and onboarding."
          items={approach}
          reverse
        />
        <TalentDifference />
      </div>
      <div className="mt-[50px] lg:mt-[100px]">
        <Footer />
      </div>
    </main>
  );
};

const HireHero = () => {
  return (
    <section className="relative isolate h-[288px] w-full overflow-hidden lg:h-[543px]">
      <Image
        src="/assets/hire-developer-hero.png"
        alt="Remote developers collaborating in an office"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%), linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px]">
        <div className="ml-[39px] flex w-[calc(100%-39px)] max-w-[397px] flex-col pt-[99px] lg:ml-[130px] lg:max-w-[770px] lg:pt-[179px]">
          <h1
            className="max-w-[217px] text-[27px] font-bold leading-[32px] text-[#f4f7ff] lg:max-w-[650px] lg:text-[81px] lg:leading-[90px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hire Top Remote Developers
          </h1>
          <p
            className="mt-[13px] max-w-[320px] text-[14px] leading-5 text-white/65 lg:mt-6 lg:max-w-[624px] lg:text-[24px] lg:leading-8"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Build your dream team with vetted engineers ready to join your
            project.
          </p>
          <Link
            href="/contact-us"
            className={`${primaryButtonClass} mt-[16px] h-8 w-[126px] lg:mt-8 lg:w-[157px]`}
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

const TechStrip = () => {
  return (
    <section className="relative mx-auto mt-[50px] h-10 w-full overflow-hidden lg:mt-[100px]">
      <HeroTechMarquee />
    </section>
  );
};

const GlowLayer = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-[499px] h-[246px] w-[337px] -translate-x-1/2 rounded-full bg-[#221158] opacity-70 blur-[90px] lg:left-[342px] lg:top-[149px] lg:h-[490px] lg:w-[757px] lg:translate-x-0 lg:blur-[150px]"
  />
);

const HireContentBlock = ({
  eyebrow,
  title,
  body,
  items,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  reverse?: boolean;
}) => {
  const sectionWidthClass = reverse ? "lg:w-[1191px]" : "lg:w-[1176px]";
  const gridClass = reverse
    ? "lg:grid-cols-[530px_1px_541px] lg:gap-[60px]"
    : "lg:grid-cols-[520px_1px_532px] lg:gap-[62px]";

  return (
    <section
      className={`relative z-10 mx-auto w-[min(350px,calc(100%-80px))] min-[520px]:w-[calc(100%-80px)] min-[520px]:max-w-[760px] ${
        reverse ? "min-h-[517px]" : "min-h-[557px]"
      } lg:min-h-0 lg:max-w-none ${sectionWidthClass}`}
    >
      <div className="flex lg:justify-center">
        <span
          className="inline-flex h-8 items-center justify-center rounded-[4px] border border-[#f4f7ff] bg-[#f4f7ff] px-4 text-[16px] font-medium leading-none text-[#0d0d19] lg:h-10 lg:rounded-[8px] lg:text-[20px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {eyebrow}
        </span>
      </div>

      <div className={`mt-[36px] flex flex-col gap-10 lg:mt-14 lg:grid ${gridClass}`}>
        <div
          className={`lg:row-start-1 ${
            reverse ? "lg:col-start-3" : "lg:col-start-1"
          }`}
        >
          <h2
            className="max-w-[247px] text-[29px] font-bold leading-[35px] text-[#f4f7ff] min-[520px]:max-w-[430px] lg:max-w-[307px] lg:text-[36px] lg:leading-9"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <p
            className="mt-[19px] max-w-[320px] text-[14px] leading-5 text-white/65 min-[520px]:max-w-none lg:mt-[29px] lg:max-w-[520px] lg:text-[20px] lg:leading-[26px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            {body}
          </p>
        </div>

        <div className="mx-auto h-px w-36 bg-white lg:col-start-2 lg:row-start-1 lg:h-[221px] lg:w-px" />

        <ul
          className={`flex max-w-[346px] list-disc flex-col gap-5 pl-[18px] lg:row-start-1 lg:gap-10 ${
            reverse ? "lg:col-start-1" : "lg:col-start-3"
          } min-[520px]:max-w-none`}
        >
          {items.map((item, index) => (
            <li
              key={item}
              className={`pl-1 text-[14px] leading-5 text-white/65 marker:text-white/65 lg:text-[16px] ${
                index === items.length - 1 ? "lg:leading-6" : "lg:leading-4"
              }`}
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const TalentDifference = () => {
  return (
    <section className="relative z-10 mx-auto flex w-full flex-col items-center gap-5 lg:gap-[50px]">
      <div className="w-[min(354px,calc(100%-76px))] min-[520px]:w-[calc(100%-76px)] min-[520px]:max-w-[760px] lg:w-[1167px] lg:max-w-none">
        <div className="max-w-[338px] min-[520px]:max-w-[540px] lg:max-w-[479px]">
          <h2
            className="text-[29px] font-bold leading-[35px] text-[#f4f7ff] lg:text-[36px] lg:leading-[44px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Makes Devsorb Talent Different
          </h2>
          <p
            className="mt-[11px] text-[14px] leading-5 text-white/65 lg:mt-[21px] lg:text-[16px] lg:leading-6"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            We focus on delivering results with highly skilled developers not
            just filling roles.
          </p>
        </div>

        <div className="mt-[33px] grid grid-cols-1 gap-[11px] lg:mt-16 lg:grid-cols-3 lg:gap-[21px]">
          {talentCards.map((card, index) => {
            const mobileHeight =
              index === 0 ? "h-[148px]" : index === 1 ? "h-[150px]" : "h-[156px]";

            return (
            <article
              key={card.title}
              className={`relative ${mobileHeight} overflow-hidden rounded-[16px] border border-[#3b449a] px-4 py-4 lg:h-[178px] lg:px-8 lg:py-[22px]`}
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(34,17,88,0) 0%, #221158 100%)",
                boxShadow: "inset 0 0 0 1px rgba(0,3,28,0.5)",
              }}
            >
              <div className="relative z-10 mb-[21px] flex justify-end text-white/65 lg:mb-2">
                <TalentIcon type={card.icon} />
              </div>
              <h3
                className="relative z-10 text-[18px] font-medium leading-[18px] text-white lg:text-[20px] lg:leading-5"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {card.title}
              </h3>
              <p
                className="relative z-10 mt-[13px] text-[16px] leading-[22px] text-white/65 lg:mt-4 lg:leading-5"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {card.body}
              </p>
            </article>
            );
          })}
        </div>
      </div>

      <HireCTA />
    </section>
  );
};

const HireCTA = () => {
  return (
    <section
      className="relative h-[223px] w-full overflow-hidden px-4 py-[49px] lg:h-[534px] lg:px-[214px] lg:py-[106px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0d0d19 0%, rgba(6,6,12,0) 50%, #0d0d19 100%), url('/assets/hireDevBackground.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="mx-auto flex h-[124px] w-full max-w-[364px] flex-col items-center justify-center rounded-[16px] border border-white/25 px-[30px] py-4 text-center backdrop-blur-sm lg:h-[322px] lg:w-[1012px] lg:max-w-none lg:gap-[46px] lg:px-[120px] lg:py-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(34,34,34,0.42) 0%, rgba(85,85,85,0.06) 100%)",
        }}
      >
        <h2
          className="max-w-[304px] text-center text-[19px] font-bold leading-[25px] text-[#f4f7ff] lg:max-w-[772px] lg:text-[48px] lg:leading-[54px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to scale your team with top developers?
        </h2>
        <Link
          href="/contact-us"
          className="mt-3 inline-flex h-[30px] w-[125px] items-center justify-center rounded-[6px] border border-[#020a18] bg-[#f4f7ff] text-[12px] font-medium leading-none text-[#150544] transition-colors hover:bg-white lg:mt-0 lg:h-10 lg:w-[156px] lg:text-[16px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          Let&apos;s Talk Today
        </Link>
      </div>
    </section>
  );
};




const TalentIcon = ({ type }: { type: string }) => {
  if (type === "screen") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 22h8M13 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11l2 2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M14.5 2.8 5.6 14.6h7.2l-1.3 8.6 8.9-11.8h-7.2l1.3-8.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 21c.8-3.4 3-5.1 6-5.1s5.2 1.7 6 5.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18.5" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.8 16.2c2.5.2 4 .5 5.2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default HireDeveloperPage;
