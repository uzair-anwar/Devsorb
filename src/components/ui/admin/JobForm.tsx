"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  EMPTY_JOB_FORM,
  formToRow,
  rowToForm,
  slugify,
  type JobFormValues,
  type JobRow,
} from "@/lib/admin/job-form";

const inputClass =
  "w-full rounded-[14px] border border-[#dfe6eb] bg-[#fafafa] px-6 py-[15px] text-[16px] text-[#031222] outline-none placeholder:text-[rgba(101,117,139,0.5)] focus:border-[#7359c9]";
const labelClass = "text-[16px] text-[#031222]";

const Card = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-6 rounded-[17px] border border-[#dfe6eb] bg-white p-6 lg:p-8">
    <div className="flex flex-col gap-1">
      <h2 className="text-[20px] text-[#1f2937]">{title}</h2>
      {subtitle && <p className="text-[14px] text-[#5b646f]">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const JobForm = ({ initial }: { initial?: JobRow }) => {
  const router = useRouter();
  const [form, setForm] = useState<JobFormValues>(
    initial ? rowToForm(initial) : EMPTY_JOB_FORM,
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof JobFormValues>(key: K, value: JobFormValues[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const setSection = (
    i: number,
    key: "heading" | "bullets",
    value: string,
  ) =>
    setForm((f) => ({
      ...f,
      sections: f.sections.map((s, j) => (j === i ? { ...s, [key]: value } : s)),
    }));

  const save = async (publish: boolean) => {
    setError(null);
    if (!form.title.trim()) {
      setError("Job title is required.");
      return;
    }
    setSaving(true);
    const row = { ...formToRow({ ...form, published: publish }) };
    const supabase = createClient();
    const result = initial
      ? await supabase.from("jobs").update(row).eq("id", initial.id)
      : await supabase.from("jobs").insert(row);
    setSaving(false);
    if (result.error) {
      setError(
        result.error.message.includes("duplicate")
          ? "A job with this slug already exists."
          : result.error.message,
      );
      return;
    }
    router.push("/admin/jobs");
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-6">
      <Card
        title="Role details"
        subtitle="Define the role, requirements, and compensation."
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-2 lg:col-span-2">
            <label className={labelClass} htmlFor="title">
              Job title <span className="text-[#fc0000]">*</span>
            </label>
            <input
              id="title"
              className={inputClass}
              placeholder="Senior Software Engineer"
              value={form.title}
              onChange={(e) => {
                const title = e.target.value;
                setForm((f) => ({
                  ...f,
                  title,
                  slug: initial ? f.slug : slugify(title),
                }));
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="slug">URL slug</label>
            <input
              id="slug"
              className={inputClass}
              placeholder="senior-software-engineer"
              value={form.slug}
              onChange={(e) => set("slug", slugify(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="blurb">Card blurb</label>
            <input
              id="blurb"
              className={inputClass}
              placeholder="We're looking for a senior software engineer to join our team."
              value={form.blurb}
              onChange={(e) => set("blurb", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="location">Location</label>
            <input
              id="location"
              className={inputClass}
              placeholder="Warsaw, Poland"
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="jobType">Job type</label>
            <input
              id="jobType"
              className={inputClass}
              placeholder="Full-time"
              value={form.jobType}
              onChange={(e) => set("jobType", e.target.value)}
            />
          </div>
        </div>
      </Card>

      <Card
        title="Job facts"
        subtitle="Shown as the facts list at the top of the posting — one per line (e.g. “Department: Web Development”)."
      >
        <textarea
          className={`${inputClass} min-h-[140px]`}
          placeholder={"Department: Web Development\nNo. of Openings : 3\nSalary range: $80k to $100k"}
          value={form.facts}
          onChange={(e) => set("facts", e.target.value)}
        />
      </Card>

      <Card
        title="Job description"
        subtitle="Intro paragraphs — separate paragraphs with a blank line."
      >
        <textarea
          className={`${inputClass} min-h-[160px]`}
          placeholder="Describe the role, the team, and what success looks like…"
          value={form.paragraphs}
          onChange={(e) => set("paragraphs", e.target.value)}
        />
      </Card>

      <Card
        title="Sections"
        subtitle="Bulleted sections like “What you'll get to do…” — one bullet per line."
      >
        <div className="flex flex-col gap-6">
          {form.sections.map((section, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-[14px] border border-[#dfe6eb] p-4"
            >
              <div className="flex items-center gap-3">
                <input
                  className={inputClass}
                  placeholder="Section heading (e.g. What you'll get to do…)"
                  value={section.heading}
                  onChange={(e) => setSection(i, "heading", e.target.value)}
                />
                <button
                  type="button"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      sections: f.sections.filter((_, j) => j !== i),
                    }))
                  }
                  className="shrink-0 cursor-pointer rounded-[8px] border border-[#dfe6eb] px-3 py-2 text-[14px] text-[#5b646f] hover:bg-[#f0f1f5]"
                >
                  Remove
                </button>
              </div>
              <textarea
                className={`${inputClass} min-h-[120px]`}
                placeholder={"First bullet\nSecond bullet"}
                value={section.bullets}
                onChange={(e) => setSection(i, "bullets", e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setForm((f) => ({
                ...f,
                sections: [...f.sections, { heading: "", bullets: "" }],
              }))
            }
            className="w-fit cursor-pointer rounded-[8px] border border-[#190c40] bg-white px-4 py-2 text-[14px] text-[#221158] hover:bg-[#f0f1f5]"
          >
            + Add section
          </button>
        </div>
      </Card>

      <Card
        title="Ready to publish?"
        subtitle="Published posts go live to candidates on the careers page immediately."
      >
        {error && (
          <p role="alert" className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-700">
            {error}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={() => save(true)}
            className="cursor-pointer rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-5 py-2.5 text-[16px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)] disabled:opacity-60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {saving ? "Saving…" : initial?.published ? "Save & keep published" : "Publish"}
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => save(false)}
            className="cursor-pointer rounded-[6px] border border-[#190c40] bg-white px-5 py-2.5 text-[16px] text-[#221158] hover:bg-[#f0f1f5] disabled:opacity-60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Save as draft
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/jobs")}
            className="cursor-pointer px-3 py-2 text-[15px] text-[#5b646f] hover:text-[#1f2937]"
          >
            Cancel
          </button>
        </div>
      </Card>
    </div>
  );
};

export default JobForm;
