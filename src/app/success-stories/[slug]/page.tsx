import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/ui/success-stories/CaseStudyDetail";
import { CASE_STUDIES } from "@/lib/success-stories-data";
import { getPublishedCaseStudy } from "@/lib/cms";

export const revalidate = 60;

export function generateStaticParams() {
  return CASE_STUDIES.filter((c) => c.detail).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getPublishedCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.detail?.intro.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getPublishedCaseStudy(slug);

  if (!study?.detail) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}
