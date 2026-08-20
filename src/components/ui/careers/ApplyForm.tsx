"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

const MAX_RESUME_BYTES = 15 * 1024 * 1024;

const inputClass =
  "h-[42px] w-full rounded-[5px] border border-[#3f3f49] bg-[rgba(255,255,255,0.05)] px-3 text-[15px] text-white outline-none transition-colors focus:border-[var(--accent-primary)] lg:h-[64px] lg:px-4";

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
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorText(null);

    if (resumeFile && resumeFile.size > MAX_RESUME_BYTES) {
      setErrorText("Resume must be 15 MB or smaller.");
      return;
    }

    const data = new FormData(e.currentTarget);
    if ((data.get("company") as string)?.trim()) {
      setStatus("sent"); // bot: pretend success, store nothing
      return;
    }

    setStatus("sending");
    const supabase = createClient();

    let resumePath: string | null = null;
    if (resumeFile) {
      const safeName = resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const path = `applications/${Date.now()}-${safeName}`;
      const { error: upErr } = await supabase.storage
        .from("resumes")
        .upload(path, resumeFile);
      if (upErr) {
        setStatus("error");
        return;
      }
      resumePath = path;
    }

    const { error } = await supabase.from("job_applications").insert({
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone") ?? "",
      address: data.get("address") ?? "",
      job_posting: data.get("job-posting") ?? jobTitle,
      heard_from: data.get("source") ?? "",
      expected_salary: data.get("salary") ?? "",
      message: data.get("message") ?? "",
      resume_url: resumePath,
    });
    setStatus(error ? "error" : "sent");
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

      {status === "sent" ? (
        <div
          className="mt-10 flex flex-col gap-3 rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] p-6"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
          role="status"
        >
          <p className="text-[18px] font-medium text-[var(--text-headline)]">
            Application submitted — thank you!
          </p>
          <p className="text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)]">
            Your application for the{" "}
            <span className="text-white">{jobTitle}</span> role has been
            received. Our team reviews every application and will be in touch.
          </p>
        </div>
      ) : status === "error" ? (
        <div
          className="mt-10 flex flex-col gap-3 rounded-[10px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] p-6"
          style={{ fontFamily: "var(--font-poppins-stack)" }}
          role="alert"
        >
          <p className="text-[18px] font-medium text-[var(--text-headline)]">
            We couldn&apos;t submit your application right now.
          </p>
          <p className="text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)]">
            Please email your resume and details for the{" "}
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
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="w-fit cursor-pointer text-[14px] text-[var(--accent-primary)] underline underline-offset-2"
          >
            Try again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-9 flex flex-col gap-5 lg:gap-[32px]">
          <div className="grid grid-cols-2 gap-4 lg:gap-[32px]">
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
              {resumeFile?.name ?? "Resume/ CV"}
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.jpg,.jpeg"
                required
                className="hidden"
                onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
              />
            </label>
            <p className="text-[15px] leading-[16px]">
              <span className="font-medium text-white">Accepted file types :</span>{" "}
              <span className="text-[#c8b8e8]">pdf, doc, jpg, Max. file size: 15 MB.</span>
            </p>
          </div>

          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {errorText && (
            <p
              role="alert"
              className="rounded-[8px] border border-red-400/40 bg-red-500/10 px-4 py-3 text-[15px] text-red-300"
              style={{ fontFamily: "var(--font-poppins-stack)" }}
            >
              {errorText}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 inline-flex h-[40px] w-fit cursor-pointer items-center justify-center rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-4 text-[16px] font-medium leading-none text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32),inset_0.75px_3px_7.7px_rgba(115,82,221,0.43)] transition-transform hover:scale-[1.02] disabled:opacity-60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {status === "sending" ? "Submitting…" : "Submit Now"}
          </button>
        </form>
      )}
    </section>
  );
};

export default ApplyForm;
