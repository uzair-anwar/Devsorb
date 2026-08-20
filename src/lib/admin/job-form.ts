import type { JobSection } from "@/lib/careers-data";

export type JobRow = {
  id: string;
  slug: string;
  title: string;
  blurb: string;
  location: string;
  job_type: string;
  facts: string[];
  paragraphs: string[];
  sections: JobSection[];
  published: boolean;
  created_at?: string;
  updated_at?: string;
};

export type JobFormValues = {
  title: string;
  slug: string;
  blurb: string;
  location: string;
  jobType: string;
  facts: string;      // one per line
  paragraphs: string; // blank line separated
  sections: { heading: string; bullets: string }[]; // bullets one per line
  published: boolean;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function rowToForm(row: JobRow): JobFormValues {
  return {
    title: row.title,
    slug: row.slug,
    blurb: row.blurb,
    location: row.location,
    jobType: row.job_type,
    facts: (row.facts ?? []).join("\n"),
    paragraphs: (row.paragraphs ?? []).join("\n\n"),
    sections: (row.sections ?? []).map((s) => ({
      heading: s.heading,
      bullets: s.bullets.join("\n"),
    })),
    published: row.published,
  };
}

export function formToRow(form: JobFormValues): Omit<JobRow, "id"> {
  const lines = (v: string) =>
    v.split("\n").map((l) => l.trim()).filter(Boolean);
  return {
    slug: form.slug.trim() || slugify(form.title),
    title: form.title.trim(),
    blurb: form.blurb.trim(),
    location: form.location.trim() || "Remote",
    job_type: form.jobType.trim() || "Full-time",
    facts: lines(form.facts),
    paragraphs: form.paragraphs
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
    sections: form.sections
      .filter((s) => s.heading.trim())
      .map((s) => ({ heading: s.heading.trim(), bullets: lines(s.bullets) })),
    published: form.published,
  };
}

export const EMPTY_JOB_FORM: JobFormValues = {
  title: "",
  slug: "",
  blurb: "",
  location: "Remote",
  jobType: "Full-time",
  facts: "",
  paragraphs: "",
  sections: [{ heading: "", bullets: "" }],
  published: false,
};
