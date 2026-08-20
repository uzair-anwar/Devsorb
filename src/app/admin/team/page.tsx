import Link from "next/link";
import AdminShell from "@/components/ui/admin/AdminShell";
import TeamTable from "@/components/ui/admin/TeamTable";
import { createClient } from "@/lib/supabase/server";
import type { TeamMemberRow } from "@/components/ui/admin/TeamMemberForm";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">
              Team Members
            </h1>
            <p className="text-[16px] text-[#5b646f]">
              Manage your company team members.
            </p>
          </div>
          <Link
            href="/admin/team/new"
            className="rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-5 py-2.5 text-[16px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            + Add Team Member
          </Link>
        </div>
        <TeamTable members={(members ?? []) as TeamMemberRow[]} />
      </div>
    </AdminShell>
  );
}
