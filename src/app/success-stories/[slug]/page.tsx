import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/ui/success-stories/CaseStudyDetail";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/success-stories-data";

export function generateStaticParams() {
  return CASE_STUDIES.filter((c) => c.detail).map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study?.detail) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}
