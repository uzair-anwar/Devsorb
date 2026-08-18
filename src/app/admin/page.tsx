import Link from "next/link";
import AdminShell from "@/components/ui/admin/AdminShell";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return (
      <AdminShell>
        <div className="max-w-[640px] rounded-[17px] border border-[#dfe6eb] bg-white p-8 text-[16px] leading-[1.6] text-[#5b646f]">
          The admin portal isn&apos;t connected yet — Supabase environment
          variables are missing. Copy <code>.env.local.example</code> to{" "}
          <code>.env.local</code>, fill in the project keys, and restart the
          dev server.
        </div>
      </AdminShell>
    );
  }

  const supabase = await createClient();

  const [jobs, studies, team, contacts, applications] = await Promise.all([
    supabase.from("jobs").select("id", { count: "exact", head: true }),
    supabase.from("case_studies").select("id", { count: "exact", head: true }),
    supabase.from("team_members").select("id", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
    supabase.from("job_applications").select("id", { count: "exact", head: true }),
  ]);

  const cards = [
    { name: "Job Posts", count: jobs.count ?? 0, href: "/admin/jobs", cta: "Manage jobs" },
    { name: "Case Studies", count: studies.count ?? 0, href: "/admin/case-studies", cta: "Manage case studies" },
    { name: "Team Members", count: team.count ?? 0, href: "/admin/team", cta: "Manage team" },
    {
      name: "Submissions",
      count: (contacts.count ?? 0) + (applications.count ?? 0),
      href: "/admin/submissions",
      cta: "View submissions",
    },
  ];

  return (
    <AdminShell>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">Dashboard</h1>
          <p className="text-[16px] text-[#5b646f]">
            Manage the website&apos;s jobs, case studies, and team from here.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.name}
              href={card.href}
              className="flex flex-col gap-3 rounded-[17px] border border-[#dfe6eb] bg-white p-6 transition-shadow hover:shadow-[0px_4px_21.7px_rgba(0,0,0,0.05)]"
            >
              <span className="text-[15px] text-[#5b646f]">{card.name}</span>
              <span className="text-[34px] leading-none text-[#1f2937]">{card.count}</span>
              <span className="text-[14px] text-[#3c83f6]">{card.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
