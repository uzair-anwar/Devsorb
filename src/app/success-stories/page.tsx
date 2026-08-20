import SuccessStoriesView from "@/components/ui/success-stories/SuccessStoriesView";
import { getPublishedCaseStudies } from "@/lib/cms";

export const revalidate = 60;

export default async function SuccessStoriesPage() {
  const caseStudies = await getPublishedCaseStudies();
  return <SuccessStoriesView caseStudies={caseStudies} />;
}
