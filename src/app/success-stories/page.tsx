import SuccessStoriesView from "@/components/ui/success-stories/SuccessStoriesView";
import { getPublishedCaseStudies } from "@/lib/cms";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "From fintech to healthcare to blockchain — see how Devsorb helps clients turn bold ideas into products that scale.",
};

export const revalidate = 60;

export default async function SuccessStoriesPage() {
  const caseStudies = await getPublishedCaseStudies();
  return <SuccessStoriesView caseStudies={caseStudies} />;
}
