const HomeHireDevelopers = () => {
  return (
    <section className="mx-auto w-full max-w-[1180px] px-4 py-10 lg:h-[505px] lg:px-0">
      <div
        id="hire"
        className="relative overflow-hidden rounded-[16px] px-8 py-16 text-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1a0a4a 0%, #221158 40%, #2d1a6e 70%, #1a0a4a 100%)",
          border: "1px solid rgba(171,145,234,0.2)",
        }}
      >
        {/* Glow blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #7352dd 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #ab91ea 0%, transparent 70%)" }}
        />

        {/* Grid pattern overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
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
