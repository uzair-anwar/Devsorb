"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { TeamMemberRow } from "@/components/ui/admin/TeamMemberForm";

const TeamTable = ({ members }: { members: TeamMemberRow[] }) => {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  const remove = async (m: TeamMemberRow) => {
    if (!window.confirm(`Remove ${m.full_name} from the team?`)) return;
    setBusyId(m.id);
    await createClient().from("team_members").delete().eq("id", m.id);
    setBusyId(null);
    router.refresh();
  };

  if (members.length === 0) {
    return (
      <div className="rounded-[17px] border border-[#dfe6eb] bg-white p-8 text-[16px] text-[#5b646f]">
        No team members yet — add the first one.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[17px] border border-[#dfe6eb] bg-white">
      <ul className="divide-y divide-[#dfe6eb]">
        {members.map((m) => (
          <li
            key={m.id}
            className="flex items-center justify-between gap-3 p-5 lg:px-8"
          >
            <div className="flex items-center gap-4">
              {m.photo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.photo_url}
                  alt=""
                  className="h-[48px] w-[48px] rounded-full border border-[#dfe6eb] object-cover"
                />
              ) : (
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#f0f1f5] text-[16px] text-[#5b646f]">
                  {m.full_name.charAt(0)}
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[17px] text-[#1f2937]">{m.full_name}</span>
                <span className="text-[14px] text-[#5b646f]">
                  {m.designation || "—"} • {m.email}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href={`/admin/team/${m.id}`}
                className="rounded-[8px] border border-[#190c40] px-3 py-1.5 text-[14px] text-[#221158] hover:bg-[#f0f1f5]"
              >
                Edit
              </Link>
              <button
                type="button"
                disabled={busyId === m.id}
                onClick={() => remove(m)}
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

export default TeamTable;
