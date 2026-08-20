import AdminShell from "@/components/ui/admin/AdminShell";
import TeamMemberForm from "@/components/ui/admin/TeamMemberForm";

export default function NewTeamMemberPage() {
  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
            Add Team Member
          </h1>
        </div>
        <TeamMemberForm />
      </div>
    </AdminShell>
  );
}
