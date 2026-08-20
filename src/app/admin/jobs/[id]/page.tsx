import { notFound } from "next/navigation";
import AdminShell from "@/components/ui/admin/AdminShell";
import JobForm from "@/components/ui/admin/JobForm";
import { createClient } from "@/lib/supabase/server";
import type { JobRow } from "@/lib/admin/job-form";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: job } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  if (!job) notFound();

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
            Edit job post
          </h1>
          <p className="text-[16px] text-[#5b646f]">{job.title}</p>
        </div>
        <JobForm initial={job as JobRow} />
      </div>
    </AdminShell>
  );
}
