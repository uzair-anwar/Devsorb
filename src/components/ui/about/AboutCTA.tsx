import Link from "next/link";

const AboutCTA = () => {
  return (
    <section className="mx-auto w-full max-w-[1300px] px-4 py-12 lg:px-0">
      <div
        className="relative flex h-[405px] w-full flex-col items-center justify-center overflow-hidden rounded-[39px] border border-[rgba(255,255,255,0.2)]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0d0d19 0%, rgba(7,7,13,0) 50%, #0d0d19 100%), linear-gradient(90deg, #221158 0%, #221158 100%)",
        }}
      >
        {/* Glow ellipses */}
        <div
          className="pointer-events-none absolute -left-[240px] top-1/2 h-[340px] w-[1200px] -translate-y-1/2 -rotate-[26deg] rounded-full opacity-40 blur-[60px]"
          style={{ backgroundColor: "#221158" }}
        />
        <div
          className="pointer-events-none absolute -right-[280px] top-1/4 h-[520px] w-[1200px] -rotate-[26deg] rounded-full opacity-30 blur-[80px]"
          style={{ backgroundColor: "#221158" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          <h2
            className="text-[36px] font-bold leading-[1.16] text-[var(--text-headline)] md:text-[49px] md:leading-[57px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to partner with Devsorb? Let&#39;s
            <br />
            build something great together.
          </h2>
          <Link
            href="/contact-us"
            className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#020a18] bg-[var(--text-headline)] px-4 py-[10px] text-[16px] font-medium leading-[16px] text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start A Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
