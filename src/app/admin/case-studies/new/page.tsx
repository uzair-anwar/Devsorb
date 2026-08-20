import AdminShell from "@/components/ui/admin/AdminShell";
import CaseStudyForm from "@/components/ui/admin/CaseStudyForm";

export default function NewCaseStudyPage() {
  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
            Add New Case Study
          </h1>
          <p className="text-[16px] text-[#5b646f]">
            Compose, preview, and publish a new entry.
          </p>
        </div>
        <CaseStudyForm />
      </div>
    </AdminShell>
  );
}
