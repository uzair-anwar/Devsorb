import Link from "next/link";

const HomeHireDevelopers = () => {
  return (
    <section className="mx-auto w-full max-w-[1278px] px-4 py-10 lg:h-[605px] lg:px-0 lg:py-[100px]">
      <div
        id="hire"
        className="relative flex min-h-[405px] scroll-mt-24 flex-col items-center justify-center overflow-hidden rounded-[39px] border border-[rgba(255,255,255,0.2)] px-8 text-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0d0d19 0%, rgba(7, 7, 13, 0) 50%, #0d0d19 100%), linear-gradient(90deg, #221158 0%, #221158 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[265px] bottom-[-230px] h-[430px] w-[720px] rotate-[-26deg] rounded-full blur-[118px]"
          style={{ background: "rgba(134,146,255,0.22)" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[340px] -top-[210px] h-[520px] w-[820px] rotate-[-26deg] rounded-full blur-[118px]"
          style={{ background: "rgba(134,146,255,0.24)" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-[33px]">
          <div className="flex flex-col items-center gap-6">
            <h2
              className="text-[36px] font-bold leading-none text-[var(--text-headline)] md:text-[49px] md:leading-[49px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hire Developers
            </h2>
            <p
              className="max-w-[649px] text-[16px] leading-[1.55] text-[rgba(255,255,255,0.65)] md:text-[18px] md:leading-[26px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              Access vetted talent, on your schedule. Whether you need one engineer
              <br className="hidden md:block" /> or a dedicated team, we&apos;ve got you covered.
            </p>
          </div>

          <Link
            href="/hire-developer"
            className="h-[40px] rounded-[8px] border border-[#020a18] bg-[var(--text-headline)] px-4 py-[10px] text-[16px] font-medium leading-[16px] text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hire Developers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHireDevelopers;
