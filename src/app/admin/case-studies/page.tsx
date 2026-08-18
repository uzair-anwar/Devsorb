import Link from "next/link";
import AdminShell from "@/components/ui/admin/AdminShell";
import CaseStudiesTable from "@/components/ui/admin/CaseStudiesTable";
import { createClient } from "@/lib/supabase/server";
import type { CaseStudyRow } from "@/lib/admin/case-study-form";

export default async function AdminCaseStudiesPage() {
  const supabase = await createClient();
  const { data: studies } = await supabase
    .from("case_studies")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
              Recent Case Studies
            </h1>
            <p className="text-[16px] text-[#5b646f]">
              Latest activity across drafts and published work.
            </p>
          </div>
          <Link
            href="/admin/case-studies/new"
            className="rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-5 py-2.5 text-[16px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            + Add New Case Study
          </Link>
        </div>
        <CaseStudiesTable studies={(studies ?? []) as CaseStudyRow[]} />
      </div>
    </AdminShell>
  );
}
