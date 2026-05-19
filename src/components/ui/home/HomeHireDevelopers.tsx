const HomeHireDevelopers = () => {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-10 lg:h-[505px] lg:px-0">
      <div
        id="hire"
        className="relative overflow-hidden rounded-[16px] px-8 py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #09081e 0%, #130d35 50%, #09081e 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Large right-side radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(190,160,255,0.55) 0%, rgba(130,90,240,0.25) 45%, transparent 70%)" }}
        />

        {/* Subtle dotted pattern — right side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[280px]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(270deg, rgba(0,0,0,0.45) 0%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(270deg, rgba(0,0,0,0.45) 0%, transparent 80%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <h2
            className="text-[36px] font-bold leading-[1.2] text-[var(--text-headline)] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hire Developers
          </h2>
          <p
            className="max-w-[540px] text-[16px] leading-[1.6] text-[rgba(255,255,255,0.65)] md:text-[18px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Access vetted talent, on your schedule. Whether you need one
            engineer or a dedicated team, we&apos;ve got you covered.
          </p>
          <button
            className="mt-2 h-[40px] rounded-[8px] border border-[#020a18] bg-[var(--text-headline)] px-6 py-[10px] text-[16px] font-medium leading-[16px] text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hire Developers
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHireDevelopers;
