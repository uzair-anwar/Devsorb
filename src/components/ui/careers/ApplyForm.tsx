"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "h-[56px] w-full rounded-[5px] border border-[#3f3f49] bg-[rgba(255,255,255,0.05)] px-4 text-[15px] text-white outline-none transition-colors focus:border-[var(--accent-primary)] lg:h-[64px]";

const labelClass = "text-[14px] leading-[14px] text-white";

const Field = ({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div
    className="flex w-full flex-col gap-2"
    style={{ fontFamily: "var(--font-poppins-stack)" }}
  >
    <label htmlFor={name} className={labelClass}>
      {label} {required && <span className="text-[#fc0000]">*</span>}
    </label>
    <input id={name} name={name} type={type} required={required} className={inputClass} />
  </div>
);

const ApplyForm = ({ jobTitle }: { jobTitle: string }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="relative mx-auto w-full max-w-[1196px] scroll-mt-[120px] rounded-[24px] border border-[#3f3f49] px-5 py-10 shadow-[0px_4px_18px_rgba(255,255,255,0.05)] lg:px-[54px] lg:py-[72px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0d0d19 0%, #221158 49%, #0d0d19 100%)",
      }}
    >
      <div className="flex flex-col gap-2">
        <h2
          className="text-[26px] font-bold leading-[1.1] text-[var(--text-headline)] lg:text-[32px] lg:leading-[32px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Apply for this job
        </h2>
        <p
          className="text-[13px] leading-[1.4] text-[rgba(255,255,255,0.65)] lg:text-[14px]"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
        >
          Devsorb doesn&apos;t accept unsolicited resumes from recruiters or
          employment agencies.
        </p>
      </div>

      {submitted ? (
        <div
          className="mt-10 flex flex-col gap-3 rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] p-6"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
          role="status"
        >
          <p className="text-[18px] font-medium text-[var(--text-headline)]">
            Online applications aren&apos;t open yet.
          </p>
          <p className="text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)]">
            We&apos;re still wiring up the application system. In the meantime,
            please email your resume and details for the{" "}
            <span className="text-white">{jobTitle}</span> role to{" "}
            <a
              href={`mailto:hr@devsorb.com?subject=${encodeURIComponent(
                `Application: ${jobTitle}`,
              )}`}
              className="text-[var(--accent-primary)] underline underline-offset-2"
            >
              hr@devsorb.com
            </a>{" "}
            — we review every application.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-9 flex flex-col gap-[32px]">
          <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2">
            <Field label="Your Name" name="name" />
            <Field label="Your Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Address" name="address" />
          </div>

          <div
            className="flex w-full flex-col gap-2"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            <label htmlFor="job-posting" className={labelClass}>
              Which job posting are you applying for ?{" "}
              <span className="text-[#fc0000]">*</span>
            </label>
            <input
              id="job-posting"
              name="job-posting"
              type="text"
              required
              defaultValue={jobTitle}
              className={inputClass}
            />
          </div>

          <Field label="From where you have heard about the job opening?" name="source" />
          <Field label="What is your expected salary?" name="salary" />

          <div
            className="flex w-full flex-col gap-2"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            <label htmlFor="message" className={labelClass}>
              Message <span className="text-[#fc0000]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="min-h-[145px] w-full rounded-[5px] border border-[#3f3f49] bg-[rgba(255,255,255,0.05)] p-4 text-[15px] text-white outline-none transition-colors focus:border-[var(--accent-primary)]"
            />
          </div>

          <div
            className="flex flex-col gap-4"
            style={{ fontFamily: "var(--font-poppins-stack)" }}
          >
            <span className={labelClass}>
              Resume/CV <span className="text-[#fc0000]">*</span>
            </span>
            <label className="inline-flex h-[40px] w-fit cursor-pointer items-center justify-center rounded-[8px] border border-white px-4 text-[16px] font-medium leading-none text-white shadow-[0px_0px_16px_rgba(57,115,233,0.25)] transition-colors hover:bg-white/10">
              {fileName ?? "Resume/ CV"}
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.jpg,.jpeg"
                required
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
            <p className="text-[15px] leading-[16px]">
              <span className="font-medium text-white">Accepted file types :</span>{" "}
              <span className="text-[#c8b8e8]">pdf, doc, jpg, Max. file size: 15 MB.</span>
            </p>
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex h-[40px] w-fit cursor-pointer items-center justify-center rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-4 text-[16px] font-medium leading-none text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32),inset_0.75px_3px_7.7px_rgba(115,82,221,0.43)] transition-transform hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Submit Now
          </button>
        </form>
      )}
    </section>
  );
};

export default ApplyForm;
