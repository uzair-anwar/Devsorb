"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { slugify } from "@/lib/admin/job-form";
import {
  EMPTY_CASE_STUDY_FORM,
  formToDetail,
  rowToForm,
  type CaseStudyFormValues,
  type CaseStudyRow,
} from "@/lib/admin/case-study-form";

const inputClass =
  "w-full rounded-[14px] border border-[#dfe6eb] bg-[#fafafa] px-6 py-[15px] text-[16px] text-[#031222] outline-none placeholder:text-[rgba(101,117,139,0.5)] focus:border-[#7359c9]";
const labelClass = "text-[16px] text-[#031222]";
const ITEMS_HINT = "One per line as:  Title | Description";

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

const Field = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <span className={labelClass}>{label}</span>
    {children}
  </div>
);

const CaseStudyForm = ({ initial }: { initial?: CaseStudyRow }) => {
  const router = useRouter();
  const [form, setForm] = useState<CaseStudyFormValues>(
    initial ? rowToForm(initial) : EMPTY_CASE_STUDY_FORM,
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof CaseStudyFormValues>(
    key: K,
    value: CaseStudyFormValues[K],
  ) => setForm((f) => ({ ...f, [key]: value }));

  const uploadImage = async (file: File) => {
    setUploading(true);
    setError(null);
    const supabase = createClient();
    const path = `case-studies/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const { error: upErr } = await supabase.storage
      .from("site-media")
      .upload(path, file, { upsert: false });
    if (upErr) {
      setUploading(false);
      setError(`Image upload failed: ${upErr.message}`);
      return;
    }
    const { data } = supabase.storage.from("site-media").getPublicUrl(path);
    set("imageUrl", data.publicUrl);
    setUploading(false);
  };

  const save = async (status: "draft" | "published") => {
    setError(null);
    if (!form.title.trim()) {
      setError("Case study title is required.");
      return;
    }
    setSaving(true);
    const row = {
      slug: form.slug.trim() || slugify(form.title),
      title: form.title.trim(),
      category: form.category.trim(),
      image_url: form.imageUrl.trim() || null,
      detail: formToDetail(form),
      status,
    };
    const supabase = createClient();
    const result = initial
      ? await supabase.from("case_studies").update(row).eq("id", initial.id)
      : await supabase.from("case_studies").insert(row);
    setSaving(false);
    if (result.error) {
      setError(
        result.error.message.includes("duplicate")
          ? "A case study with this slug already exists."
          : result.error.message,
      );
      return;
    }
    router.push("/admin/case-studies");
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-6">
      <Card title="Case Study Basics">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <Field label={<>Case Study Title <span className="text-[#fc0000]">*</span></>}>
              <input
                className={inputClass}
                placeholder="e.g. Scaling Payments for Southeast Asia"
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
            </Field>
          </div>
          <Field label="URL slug">
            <input
              className={inputClass}
              value={form.slug}
              onChange={(e) => set("slug", slugify(e.target.value))}
            />
          </Field>
          <Field label="Category">
            <input
              className={inputClass}
              placeholder="Fintech / Healthcare / …"
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
            />
          </Field>
          <div className="lg:col-span-2">
            <Field label="Card image">
              <div className="flex flex-wrap items-center gap-4">
                {form.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form.imageUrl}
                    alt=""
                    className="h-[72px] w-[120px] rounded-[8px] border border-[#dfe6eb] object-cover"
                  />
                )}
                <label className="cursor-pointer rounded-[8px] border border-[#190c40] bg-white px-4 py-2 text-[14px] text-[#221158] hover:bg-[#f0f1f5]">
                  {uploading ? "Uploading…" : form.imageUrl ? "Replace image" : "Upload image"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={uploading}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void uploadImage(file);
                    }}
                  />
                </label>
              </div>
            </Field>
          </div>
        </div>
      </Card>

      <Card title="Overview" subtitle="Intro tab of the case-study page.">
        <Field label="Subtitle">
          <textarea
            className={`${inputClass} min-h-[80px]`}
            value={form.introSubtitle}
            onChange={(e) => set("introSubtitle", e.target.value)}
          />
        </Field>
        <Field label={`Highlights — ${ITEMS_HINT}`}>
          <textarea
            className={`${inputClass} min-h-[100px]`}
            placeholder={"30+ Years | Historical Energy Data\n80% | Market Trend Prediction Accuracy"}
            value={form.introHighlights}
            onChange={(e) => set("introHighlights", e.target.value)}
          />
        </Field>
      </Card>

      <Card title="Challenges">
        <Field label="Heading">
          <input
            className={inputClass}
            value={form.challengeHeading}
            onChange={(e) => set("challengeHeading", e.target.value)}
          />
        </Field>
        <Field label="Paragraphs — separate with a blank line">
          <textarea
            className={`${inputClass} min-h-[140px]`}
            value={form.challengeParagraphs}
            onChange={(e) => set("challengeParagraphs", e.target.value)}
          />
        </Field>
        <Field label={`Project objectives — ${ITEMS_HINT}`}>
          <textarea
            className={`${inputClass} min-h-[100px]`}
            value={form.challengeObjectives}
            onChange={(e) => set("challengeObjectives", e.target.value)}
          />
        </Field>
      </Card>

      <Card title="Solution">
        <Field label="Heading">
          <input
            className={inputClass}
            value={form.solutionHeading}
            onChange={(e) => set("solutionHeading", e.target.value)}
          />
        </Field>
        <Field label={`Solution points — ${ITEMS_HINT}`}>
          <textarea
            className={`${inputClass} min-h-[120px]`}
            value={form.solutionPoints}
            onChange={(e) => set("solutionPoints", e.target.value)}
          />
        </Field>
        <Field label={`How we built it — ${ITEMS_HINT}`}>
          <textarea
            className={`${inputClass} min-h-[120px]`}
            value={form.solutionHowWeBuiltIt}
            onChange={(e) => set("solutionHowWeBuiltIt", e.target.value)}
          />
        </Field>
      </Card>

      <Card title="Results">
        <Field label="Heading">
          <input
            className={inputClass}
            value={form.resultsHeading}
            onChange={(e) => set("resultsHeading", e.target.value)}
          />
        </Field>
        <Field label={`Impact — ${ITEMS_HINT}`}>
          <textarea
            className={`${inputClass} min-h-[120px]`}
            value={form.resultsImpact}
            onChange={(e) => set("resultsImpact", e.target.value)}
          />
        </Field>
      </Card>

      <Card title="Project Snapshot" subtitle="Sidebar on the case-study page.">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Field label="Client name">
            <input
              className={inputClass}
              placeholder="NAT Power"
              value={form.snapshotClient}
              onChange={(e) => set("snapshotClient", e.target.value)}
            />
          </Field>
          <Field label="Stacks">
            <input
              className={inputClass}
              placeholder="Node.js · React · Next.js · Python"
              value={form.snapshotStacks}
              onChange={(e) => set("snapshotStacks", e.target.value)}
            />
          </Field>
          <div className="lg:col-span-2">
            <Field label="Sidebar CTA text">
              <input
                className={inputClass}
                placeholder="Looking to build powerful analytics platforms with Devsorb?"
                value={form.snapshotCta}
                onChange={(e) => set("snapshotCta", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </Card>

      <Card
        title="Status"
        subtitle="Published case studies appear on the Success Stories page immediately. Drafts stay private."
      >
        {error && (
          <p role="alert" className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-700">
            {error}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={saving || uploading}
            onClick={() => save("published")}
            className="cursor-pointer rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-5 py-2.5 text-[16px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)] disabled:opacity-60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {saving ? "Saving…" : "Publish"}
          </button>
          <button
            type="button"
            disabled={saving || uploading}
            onClick={() => save("draft")}
            className="cursor-pointer rounded-[6px] border border-[#190c40] bg-white px-5 py-2.5 text-[16px] text-[#221158] hover:bg-[#f0f1f5] disabled:opacity-60"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Save as draft
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/case-studies")}
            className="cursor-pointer px-3 py-2 text-[15px] text-[#5b646f] hover:text-[#1f2937]"
          >
            Cancel
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CaseStudyForm;
