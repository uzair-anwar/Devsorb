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
      <div className="relative z-10 mx-auto h-full w-full max-w-[1180px] px-4 lg:px-0">
        <div className="flex h-full flex-col justify-end gap-10 pb-12 md:flex-row md:justify-between md:gap-8 md:pb-12">
          <h1
            className="text-[52px] font-bold leading-[1.11] text-[var(--text-headline)] md:self-center md:text-[81px] md:leading-[90px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bringing Your
            <br />
            Vision to Life
          </h1>
          <div className="flex max-w-[507px] flex-col items-end gap-6 md:self-end">
            <p className="text-[18px] leading-[1.33] text-[rgba(255,255,255,0.65)] md:text-[24px] md:leading-[32px]">
              We create custom software solutions that empower businesses to
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
