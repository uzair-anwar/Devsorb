/**
 * One-time seed: ports the static site content into Supabase.
 * Run after applying supabase/migrations/0001_initial_schema.sql:
 *
 *   npx tsx scripts/seed.ts
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { JOBS } from "../src/lib/careers-data";
import { CASE_STUDIES } from "../src/lib/success-stories-data";

for (const line of readFileSync(".env.local", "utf8").split("\n")) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const db = createClient(url, serviceKey);

async function main() {
  const jobs = JOBS.map((j) => ({
    slug: j.slug,
    title: j.title,
    blurb: j.blurb,
    location: j.location,
    job_type: j.jobType,
    facts: j.detail?.facts ?? [],
    paragraphs: j.detail?.paragraphs ?? [],
    sections: j.detail?.sections ?? [],
    published: true,
  }));
  const { error: jobsErr } = await db.from("jobs").upsert(jobs, { onConflict: "slug" });
  if (jobsErr) throw new Error(`jobs: ${jobsErr.message}`);
  console.log(`Seeded ${jobs.length} jobs`);

  const studies = CASE_STUDIES.map((c, i) => ({
    slug: c.slug,
    title: c.title,
    image_url: c.image,
    detail: c.detail ?? null,
    status: c.detail ? "published" : "draft",
    sort_order: i,
  }));
  const { error: csErr } = await db.from("case_studies").upsert(studies, { onConflict: "slug" });
  if (csErr) throw new Error(`case_studies: ${csErr.message}`);
  console.log(`Seeded ${studies.length} case studies`);
}

main().then(() => {
  console.log("Seed complete.");
  process.exit(0);
});
