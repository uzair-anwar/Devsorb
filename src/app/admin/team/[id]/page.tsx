import { notFound } from "next/navigation";
import AdminShell from "@/components/ui/admin/AdminShell";
import TeamMemberForm, {
  type TeamMemberRow,
} from "@/components/ui/admin/TeamMemberForm";
import { createClient } from "@/lib/supabase/server";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: member } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .single();

  if (!member) notFound();

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
            Edit Team Member
          </h1>
          <p className="text-[16px] text-[#5b646f]">{member.full_name}</p>
        </div>
        <TeamMemberForm initial={member as TeamMemberRow} />
      </div>
    </AdminShell>
  );
}
