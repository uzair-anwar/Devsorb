import Button from "@/components/shared/button/button";

type Props = {
  title: string;
  subtitle: string;
  ctaText: string;
};

const ServiceHero = ({ title, subtitle, ctaText }: Props) => {
  return (
    <section className="relative isolate h-[520px] overflow-hidden md:h-[600px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/assets/about-hero-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] flex-col items-center justify-end gap-6 px-4 pb-14 text-center lg:px-0 lg:pb-20">
        <h1
          className="text-[40px] font-bold leading-[1.1] text-[var(--text-headline)] md:text-[60px] md:leading-[1.1] lg:text-[72px] lg:leading-[80px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        <p
          className="max-w-[640px] text-[16px] leading-[1.5] text-[rgba(255,255,255,0.7)] md:text-[18px] md:leading-[1.5] lg:text-[20px] lg:leading-[28px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          {subtitle}
        </p>
        <Button variant="primary" size="sm" className="mt-2">
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default ServiceHero;
