import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/services-data";
import { getPublishedJobs, getPublishedCaseStudies } from "@/lib/cms";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [jobs, caseStudies] = await Promise.all([
    getPublishedJobs(),
    getPublishedCaseStudies(),
  ]);

  const staticPages = [
    "",
    "/about",
    "/services",
    "/hire-developer",
    "/success-stories",
    "/careers",
    "/contact-us",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const jobPages = jobs
    .filter((j) => j.detail)
    .map((j) => ({
      url: `${SITE_URL}/careers/${j.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  const caseStudyPages = caseStudies
    .filter((c) => c.detail)
    .map((c) => ({
      url: `${SITE_URL}/success-stories/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...servicePages, ...jobPages, ...caseStudyPages];
}
