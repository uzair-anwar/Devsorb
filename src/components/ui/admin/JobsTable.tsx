"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { JobRow } from "@/lib/admin/job-form";

const JobsTable = ({ jobs }: { jobs: JobRow[] }) => {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  const togglePublished = async (job: JobRow) => {
    setBusyId(job.id);
    await createClient()
      .from("jobs")
      .update({ published: !job.published })
      .eq("id", job.id);
    setBusyId(null);
    router.refresh();
  };

  const remove = async (job: JobRow) => {
    if (!window.confirm(`Delete "${job.title}"? This cannot be undone.`)) return;
    setBusyId(job.id);
    await createClient().from("jobs").delete().eq("id", job.id);
    setBusyId(null);
    router.refresh();
  };

  if (jobs.length === 0) {
    return (
      <div className="rounded-[17px] border border-[#dfe6eb] bg-white p-8 text-[16px] text-[#5b646f]">
        No job posts yet. Create the first one, or run{" "}
        <code>npx tsx scripts/seed.ts</code> to import the current site content.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[17px] border border-[#dfe6eb] bg-white">
      <ul className="divide-y divide-[#dfe6eb]">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[18px] text-[#1f2937]">{job.title}</span>
              <span className="text-[14px] text-[#5b646f]">
                {job.location} • {job.job_type} • /careers/{job.slug}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[13px] ${
                  job.published
                    ? "bg-[#e8f6ee] text-[#1c7c44]"
                    : "bg-[#f0f1f5] text-[#5b646f]"
                }`}
              >
                {job.published ? "Published" : "Draft"}
              </span>
              <button
                type="button"
                disabled={busyId === job.id}
                onClick={() => togglePublished(job)}
                className="cursor-pointer rounded-[8px] border border-[#dfe6eb] px-3 py-1.5 text-[14px] text-[#5b646f] hover:bg-[#f0f1f5] disabled:opacity-50"
              >
                {job.published ? "Unpublish" : "Publish"}
              </button>
              <Link
                href={`/admin/jobs/${job.id}`}
                className="rounded-[8px] border border-[#190c40] px-3 py-1.5 text-[14px] text-[#221158] hover:bg-[#f0f1f5]"
              >
                Edit
              </Link>
              <button
                type="button"
                disabled={busyId === job.id}
                onClick={() => remove(job)}
                className="cursor-pointer rounded-[8px] border border-red-200 px-3 py-1.5 text-[14px] text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsTable;
