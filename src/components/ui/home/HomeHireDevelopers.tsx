const HomeHireDevelopers = () => {
  return (
    <section className="mx-auto w-full max-w-[1278px] px-4 py-10 lg:h-[605px] lg:px-0 lg:py-[100px]">
      <div
        id="hire"
        className="relative overflow-hidden rounded-[39px] px-8 py-20 text-center lg:h-[405px] lg:py-[103px]"
        style={{
          background:
            "linear-gradient(90deg, #0d0d19 0%, rgba(7,7,13,0) 50%, #0d0d19 100%), #221158",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "inset 0 0 0 1px rgba(134,146,255,0.08)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[205px] -left-[130px] h-[430px] w-[620px] rounded-full blur-[115px]"
          style={{ background: "rgba(134,146,255,0.18)" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[150px] -top-[150px] h-[430px] w-[620px] rounded-full blur-[115px]"
          style={{ background: "rgba(134,146,255,0.18)" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2
            className="text-[36px] font-bold leading-none text-[var(--text-headline)] md:text-[49px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hire Developers
          </h2>
          <p
            className="max-w-[649px] text-[16px] leading-[1.6] text-[rgba(255,255,255,0.65)] md:text-[18px] md:leading-[26px]"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            Access vetted talent, on your schedule. Whether you need one engineer
            <br className="hidden md:block" /> or a dedicated team, we&apos;ve got you covered.
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
