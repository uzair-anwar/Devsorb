import AdminShell from "@/components/ui/admin/AdminShell";
import JobForm from "@/components/ui/admin/JobForm";

export default function NewJobPage() {
  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
            Create a new hiring post
          </h1>
          <p className="text-[16px] text-[#5b646f]">
            Define the role, requirements, and compensation.
          </p>
        </div>
        <JobForm />
      </div>
    </AdminShell>
  );
}
