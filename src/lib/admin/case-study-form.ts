import type { CaseStudyDetail, CaseStudyItem } from "@/lib/success-stories-data";

export type CaseStudyRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image_url: string | null;
  detail: CaseStudyDetail | null;
  status: "draft" | "published";
  sort_order: number;
};

export type CaseStudyFormValues = {
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  introSubtitle: string;
  introHighlights: string;
  challengeHeading: string;
  challengeParagraphs: string;
  challengeObjectives: string;
  solutionHeading: string;
  solutionPoints: string;
  solutionHowWeBuiltIt: string;
  resultsHeading: string;
  resultsImpact: string;
  snapshotClient: string;
  snapshotStacks: string;
  snapshotCta: string;
};

/** One item per line, "Title | Description" */
function parseItems(v: string): CaseStudyItem[] {
  return v
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, ...rest] = line.split("|");
      return { title: title.trim(), description: rest.join("|").trim() };
    })
    .filter((i) => i.title);
}

function itemsToText(items: CaseStudyItem[] | undefined): string {
  return (items ?? []).map((i) => `${i.title} | ${i.description}`).join("\n");
}

export function rowToForm(row: CaseStudyRow): CaseStudyFormValues {
  const d = row.detail;
  return {
    title: row.title,
    slug: row.slug,
    category: row.category ?? "",
    imageUrl: row.image_url ?? "",
    introSubtitle: d?.intro.subtitle ?? "",
    introHighlights: itemsToText(d?.intro.highlights),
    challengeHeading: d?.challenge.heading ?? "",
    challengeParagraphs: (d?.challenge.paragraphs ?? []).join("\n\n"),
    challengeObjectives: itemsToText(d?.challenge.objectives),
    solutionHeading: d?.solution.heading ?? "",
    solutionPoints: itemsToText(d?.solution.points),
    solutionHowWeBuiltIt: itemsToText(d?.solution.howWeBuiltIt),
    resultsHeading: d?.results.heading ?? "",
    resultsImpact: itemsToText(d?.results.impact),
    snapshotClient: d?.snapshot.client ?? "",
    snapshotStacks: d?.snapshot.stacks ?? "",
    snapshotCta: d?.snapshot.ctaText ?? "",
  };
}

export function formToDetail(form: CaseStudyFormValues): CaseStudyDetail | null {
  const hasContent =
    form.introSubtitle.trim() ||
    form.challengeParagraphs.trim() ||
    form.solutionPoints.trim() ||
    form.resultsImpact.trim();
  if (!hasContent) return null;

  return {
    intro: {
      subtitle: form.introSubtitle.trim(),
      highlights: parseItems(form.introHighlights),
    },
    challenge: {
      heading: form.challengeHeading.trim() || "The Challenge",
      paragraphs: form.challengeParagraphs
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean),
      objectives: parseItems(form.challengeObjectives),
    },
    solution: {
      heading: form.solutionHeading.trim() || "The Solution",
      points: parseItems(form.solutionPoints),
      howWeBuiltIt: parseItems(form.solutionHowWeBuiltIt),
    },
    results: {
      heading: form.resultsHeading.trim() || "Measurable Business Impact",
      impact: parseItems(form.resultsImpact),
    },
    snapshot: {
      client: form.snapshotClient.trim(),
      stacks: form.snapshotStacks.trim(),
      ctaText: form.snapshotCta.trim(),
    },
  };
}

export const EMPTY_CASE_STUDY_FORM: CaseStudyFormValues = {
  title: "",
  slug: "",
  category: "",
  imageUrl: "",
  introSubtitle: "",
  introHighlights: "",
  challengeHeading: "The Challenge",
  challengeParagraphs: "",
  challengeObjectives: "",
  solutionHeading: "The Solution",
  solutionPoints: "",
  solutionHowWeBuiltIt: "",
  resultsHeading: "Measurable Business Impact",
  resultsImpact: "",
  snapshotClient: "",
  snapshotStacks: "",
  snapshotCta: "",
};
