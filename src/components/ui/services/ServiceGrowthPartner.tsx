import type { ServiceFeature } from "@/lib/services-data";

type Props = {
  intro: string;
  features: ServiceFeature[];
};

const ServiceGrowthPartner = ({ intro, features }: Props) => {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-16 lg:px-0 lg:py-20">
      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <h2
          className="text-[28px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[34px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your Growth Partner In
          <br />
          Technology
        </h2>
        <p
          className="text-[15px] leading-[1.7] text-[rgba(255,255,255,0.7)] md:text-[16px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-2 rounded-[10px] border border-[rgba(255,255,255,0.07)] p-6"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(34,17,88,0.45) 0%, rgba(13,13,25,0.85) 100%)",
            }}
          >
            <h3
              className="text-[16px] font-semibold leading-[1.3] text-[var(--text-headline)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {feature.title}
            </h3>
            <p
              className="text-[13px] leading-[1.6] text-[rgba(255,255,255,0.6)]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrowthPartner;
