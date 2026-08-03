import { notFound } from "next/navigation";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ApplyForm from "@/components/ui/careers/ApplyForm";
import { JOBS, getJobBySlug } from "@/lib/careers-data";

export function generateStaticParams() {
  return JOBS.filter((j) => j.detail).map((j) => ({ slug: j.slug }));
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job?.detail) {
    notFound();
  }

  const { detail } = job;

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
      <Navbar />

      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-[70px] px-4 pt-[140px] lg:gap-[135px] lg:pt-[190px]">
        <h1
          className="text-center text-[36px] font-bold leading-[1.1] tracking-[-0.01em] text-[var(--text-headline)] md:text-[54px] lg:text-[70px] lg:leading-[70px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {job.title}
        </h1>

        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-[50px] lg:px-[15px]">
          <h2
            className="text-[24px] font-bold leading-[1.1] text-[var(--text-headline)] lg:text-[36px] lg:leading-[36px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {job.title} – ({detail.facts.some((f) => f.includes("Full-Time")) ? "Full-Time" : job.jobType})
          </h2>

          <ul className="flex flex-col gap-4">
            {detail.facts.map((fact) => (
              <li
                key={fact}
                className="text-[15px] leading-[1.4] text-[rgba(255,255,255,0.65)] lg:text-[19px] lg:leading-[19px]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                {fact}
              </li>
            ))}
          </ul>

          {detail.paragraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)] lg:text-[19px] lg:leading-[27px]"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {p}
            </p>
          ))}

          {detail.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-6 pt-2.5 lg:gap-10">
              <h2
                className="text-[24px] font-bold leading-[1.1] text-[var(--text-headline)] lg:text-[36px] lg:leading-[36px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.heading}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-[25px] text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)] lg:text-[19px] lg:leading-[27px]"
                    style={{ fontFamily: "var(--font-poppins-stack)" }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-2 top-[9px] h-[5px] w-[5px] rounded-[2.5px] bg-[#c8b8e8]"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <a
            href="#apply"
            className="inline-flex h-[40px] w-fit items-center justify-center rounded-[8px] border border-[#020a18] bg-[#f4f7ff] px-4 text-[16px] font-medium leading-none text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Apply for this job
          </a>
        </div>

        <ApplyForm jobTitle={job.title} />
      </div>

      <div className="mt-[70px] lg:mt-[100px]">
        <Footer />
      </div>
    </main>
  );
}
