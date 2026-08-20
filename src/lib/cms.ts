/**
 * Public-site reads from the CMS. Uses a cookie-free Supabase client so
 * pages can be statically rendered with ISR, and falls back to the
 * static data files if the database is unreachable (e.g. paused
 * free-tier project) — visitors always see content.
 */
import { createClient } from "@supabase/supabase-js";
import { JOBS, type Job, type JobDetail, type JobSection } from "@/lib/careers-data";
import {
  CASE_STUDIES,
  type CaseStudy,
  type CaseStudyDetail,
} from "@/lib/success-stories-data";

function publicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

type JobRow = {
  slug: string;
  title: string;
  blurb: string;
  location: string;
  job_type: string;
  facts: string[];
  paragraphs: string[];
  sections: JobSection[];
};

function rowToJob(row: JobRow): Job {
  const hasDetail =
    row.facts.length > 0 || row.paragraphs.length > 0 || row.sections.length > 0;
  const detail: JobDetail | undefined = hasDetail
    ? { facts: row.facts, paragraphs: row.paragraphs, sections: row.sections }
    : undefined;
  return {
    slug: row.slug,
    title: row.title,
    blurb: row.blurb,
    location: row.location,
    jobType: row.job_type,
    detail,
  };
}

export async function getPublishedJobs(): Promise<Job[]> {
  const db = publicClient();
  if (!db) return JOBS;
  try {
    const { data, error } = await db
      .from("jobs")
      .select("slug,title,blurb,location,job_type,facts,paragraphs,sections")
      .eq("published", true)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data as JobRow[]).map(rowToJob);
  } catch {
    return JOBS;
  }
}

export async function getPublishedJob(slug: string): Promise<Job | undefined> {
  const db = publicClient();
  if (!db) return JOBS.find((j) => j.slug === slug);
  try {
    const { data, error } = await db
      .from("jobs")
      .select("slug,title,blurb,location,job_type,facts,paragraphs,sections")
      .eq("published", true)
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    return data ? rowToJob(data as JobRow) : undefined;
  } catch {
    return JOBS.find((j) => j.slug === slug);
  }
}

type CaseStudyRow = {
  slug: string;
  title: string;
  image_url: string | null;
  detail: CaseStudyDetail | null;
};

function rowToCaseStudy(row: CaseStudyRow): CaseStudy {
  return {
    slug: row.slug,
    title: row.title,
    image: row.image_url ?? "/assets/success/cs-energy.png",
    detail: row.detail ?? undefined,
  };
}

export async function getPublishedCaseStudies(): Promise<CaseStudy[]> {
  const db = publicClient();
  if (!db) return CASE_STUDIES;
  try {
    const { data, error } = await db
      .from("case_studies")
      .select("slug,title,image_url,detail")
      .eq("status", "published")
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data as CaseStudyRow[]).map(rowToCaseStudy);
  } catch {
    return CASE_STUDIES;
  }
}

export async function getPublishedCaseStudy(
  slug: string,
): Promise<CaseStudy | undefined> {
  const db = publicClient();
  if (!db) return CASE_STUDIES.find((c) => c.slug === slug);
  try {
    const { data, error } = await db
      .from("case_studies")
      .select("slug,title,image_url,detail")
      .eq("status", "published")
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    return data ? rowToCaseStudy(data as CaseStudyRow) : undefined;
  } catch {
    return CASE_STUDIES.find((c) => c.slug === slug);
  }
}

export type TeamMember = {
  fullName: string;
  designation: string;
  photoUrl: string | null;
};

export async function getTeamMembers(): Promise<TeamMember[]> {
  const db = publicClient();
  if (!db) return [];
  try {
    const { data, error } = await db
      .from("team_members")
      .select("full_name,designation,photo_url")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((m) => ({
      fullName: m.full_name,
      designation: m.designation,
      photoUrl: m.photo_url,
    }));
  } catch {
    return [];
  }
}
