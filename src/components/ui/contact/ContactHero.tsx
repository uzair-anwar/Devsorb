const ContactHero = () => {
  return (
    <section className="relative isolate h-[460px] overflow-hidden md:h-[520px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/assets/about-hero-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] flex-col items-center justify-end gap-6 px-4 pb-12 text-center lg:px-0 lg:pb-16">
        <h1
          className="text-[44px] font-bold leading-[1] text-[var(--text-headline)] md:text-[64px] md:leading-[1.1] lg:text-[81px] lg:leading-[90px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Contact Us
        </h1>
        <p
          className="max-w-[700px] text-[16px] leading-[1.5] text-[rgba(255,255,255,0.65)] md:text-[20px] md:leading-[1.4] lg:text-[24px] lg:leading-[32px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          Tell us about your idea, project, or business goals, and our team
          will help turn them into a scalable, high performing solution.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
