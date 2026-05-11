import Button from "@/components/shared/button/button";

const AboutHero = () => {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden pb-24 pt-0">
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
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 lg:px-0">
        <div className="flex flex-col items-end gap-8">
          <div className="flex flex-col items-end gap-6">
            <h1
              className="w-full text-[52px] font-bold leading-[1.11] text-[var(--text-headline)] md:text-[81px] md:leading-[90px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bringing Your
              <br />
              Vision to Life
            </h1>
            <p className="max-w-[507px] text-right text-[18px] leading-[1.33] text-[rgba(255,255,255,0.65)] md:text-[24px] md:leading-[32px]">
              We create custom software solutions that empower businesses to
              innovate, scale, and thrive in a digital first world.
            </p>
          </div>
          <Button variant="primary" size="sm">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
