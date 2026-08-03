import Link from "next/link";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { JOBS } from "@/lib/careers-data";

const PinIcon = () => (
  <svg width="12" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 7v5l3.5 2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          <img
            src="/assets/careers/hero-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d19 100%), linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] items-end justify-center px-4 pb-[80px] pt-[160px] lg:pb-[130px] lg:pt-[240px]">
          <h1
            className="text-center text-[44px] font-bold leading-[1.1] text-[var(--text-headline)] md:text-[64px] lg:text-[81px] lg:leading-[81px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured Jobs
          </h1>
        </div>
      </section>

      {/* Job cards */}
      <section className="relative mx-auto w-full max-w-[1196px] px-4 pt-[60px] lg:px-0 lg:pt-[100px]">
        <div className="flex flex-col gap-5">
          {JOBS.map((job) => (
            <article
              key={job.slug}
              className="flex flex-col gap-6 rounded-[10px] border border-[rgba(255,255,255,0.12)] bg-[rgba(34,17,88,0.3)] px-6 py-8 shadow-[0px_4px_38.8px_rgba(255,255,255,0.05)] md:flex-row md:items-start md:justify-between lg:px-[25px] lg:py-9"
            >
              <div className="flex flex-col gap-4">
                <h2
                  className="text-[20px] font-semibold leading-[1.1] text-[var(--text-headline)] lg:text-[24px] lg:leading-[24px]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {job.title}
                </h2>
                <p
                  className="text-[14px] leading-[1.4] text-[rgba(255,255,255,0.65)] lg:text-[16px] lg:leading-[16px]"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  {job.blurb}
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="flex items-center gap-1.5 rounded-[6px] border border-[rgba(255,255,255,0.9)] px-4 py-2 text-[13px] leading-none text-white lg:text-[14px]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    <PinIcon />
                    {job.location}
                  </span>
                  <span
                    className="flex items-center gap-1.5 rounded-[6px] border border-[rgba(255,255,255,0.9)] px-4 py-2 text-[13px] leading-none text-white lg:text-[14px]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    <ClockIcon />
                    {job.jobType}
                  </span>
                </div>
              </div>

              {job.detail ? (
                <Link
                  href={`/careers/${job.slug}`}
                  className="group flex shrink-0 items-center gap-1.5 text-[16px] font-medium leading-none text-white transition-colors hover:text-[var(--accent-primary)] lg:text-[18px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  View job
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ) : (
                <span
                  className="shrink-0 text-[14px] leading-none text-white/50"
                  style={{ fontFamily: "var(--font-poppins-stack)" }}
                >
                  Details coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="mt-[60px] lg:mt-[100px]">
        <Footer />
      </div>
    </main>
  );
}
