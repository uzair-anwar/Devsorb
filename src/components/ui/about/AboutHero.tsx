import Button from "@/components/shared/button/button";

const AboutHero = () => {
  return (
    <section className="relative isolate h-[575px] overflow-hidden">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/assets/about-hero-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%), linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>

      {/* Content */}
      {/* Figma 1904:23481: headline across the top on two lines, copy + CTA
          stacked below it on the right */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1180px] px-4 lg:max-w-[1226px] lg:px-0">
        <div className="flex h-full flex-col justify-end gap-8 pb-12 lg:justify-start lg:gap-[37px] lg:pb-0 lg:pt-[168px]">
          <h1
            className="text-[36px] font-bold leading-[42px] text-[var(--text-headline)] md:text-[56px] md:leading-[64px] lg:text-[81px] lg:leading-[90px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Technology Partner for <br className="hidden lg:inline" />
            Digital Innovation
          </h1>
          <div className="flex max-w-[507px] flex-col items-end gap-6 self-end lg:max-w-[616px] lg:gap-8">
            <p className="text-[18px] leading-[1.33] text-[rgba(255,255,255,0.65)] md:text-[24px] md:leading-[32px]">
              We design and develop custom software solutions that empower businesses to
              innovate, scale, and thrive in a digital first world.
            </p>
            <Button variant="primary" size="sm">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
