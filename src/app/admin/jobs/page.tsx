import Link from "next/link";
import AdminShell from "@/components/ui/admin/AdminShell";
import JobsTable from "@/components/ui/admin/JobsTable";
import { createClient } from "@/lib/supabase/server";
import type { JobRow } from "@/lib/admin/job-form";

export default async function AdminJobsPage() {
  const supabase = await createClient();
  const { data: jobs } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
              Recent job posts
            </h1>
            <p className="text-[16px] text-[#5b646f]">
              Latest roles across departments
            </p>
          </div>
          <Link
            href="/admin/jobs/new"
            className="rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-5 py-2.5 text-[16px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            + New job post
          </Link>
        </div>
        <JobsTable jobs={(jobs ?? []) as JobRow[]} />
      </div>
    </AdminShell>
  );
}
