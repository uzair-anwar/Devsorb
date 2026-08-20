import { notFound } from "next/navigation";
import AdminShell from "@/components/ui/admin/AdminShell";
import CaseStudyForm from "@/components/ui/admin/CaseStudyForm";
import { createClient } from "@/lib/supabase/server";
import type { CaseStudyRow } from "@/lib/admin/case-study-form";

export default async function EditCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: study } = await supabase
    .from("case_studies")
    .select("*")
    .eq("id", id)
    .single();

  if (!study) notFound();

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
            Edit Case Study
          </h1>
          <p className="text-[16px] text-[#5b646f]">{study.title}</p>
        </div>
        <CaseStudyForm initial={study as CaseStudyRow} />
      </div>
    </AdminShell>
  );
}
