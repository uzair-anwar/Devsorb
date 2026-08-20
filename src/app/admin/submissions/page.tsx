import AdminShell from "@/components/ui/admin/AdminShell";
import ResumeLink from "@/components/ui/admin/ResumeLink";
import { createClient } from "@/lib/supabase/server";

type ContactSubmission = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

type JobApplication = {
  id: string;
  name: string;
  email: string;
  phone: string;
  job_posting: string;
  expected_salary: string;
  message: string;
  resume_url: string | null;
  created_at: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default async function AdminSubmissionsPage() {
  const supabase = await createClient();
  const [{ data: contacts }, { data: applications }] = await Promise.all([
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  return (
    <AdminShell>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[26px] leading-[1.1] lg:text-[30px]">Submissions</h1>
          <p className="text-[16px] text-[#5b646f]">
            Contact messages and job applications from the website.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-[20px] text-[#1f2937]">
            Job applications ({applications?.length ?? 0})
          </h2>
          {!applications?.length ? (
            <div className="rounded-[17px] border border-[#dfe6eb] bg-white p-6 text-[15px] text-[#5b646f]">
              No applications yet.
            </div>
          ) : (
            <div className="overflow-hidden rounded-[17px] border border-[#dfe6eb] bg-white">
              <ul className="divide-y divide-[#dfe6eb]">
                {(applications as JobApplication[]).map((a) => (
                  <li key={a.id} className="flex flex-col gap-2 p-5 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[17px] text-[#1f2937]">
                        {a.name} — {a.job_posting || "General application"}
                      </span>
                      <span className="text-[13px] text-[#5b646f]">
                        {formatDate(a.created_at)}
                      </span>
                    </div>
                    <span className="text-[14px] text-[#5b646f]">
                      {a.email}
                      {a.phone && ` • ${a.phone}`}
                      {a.expected_salary && ` • Expected: ${a.expected_salary}`}
                    </span>
                    {a.message && (
                      <p className="text-[15px] leading-[1.6] text-[#374151]">
                        {a.message}
                      </p>
                    )}
                    {a.resume_url && <ResumeLink path={a.resume_url} />}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-[20px] text-[#1f2937]">
            Contact messages ({contacts?.length ?? 0})
          </h2>
          {!contacts?.length ? (
            <div className="rounded-[17px] border border-[#dfe6eb] bg-white p-6 text-[15px] text-[#5b646f]">
              No contact messages yet.
            </div>
          ) : (
            <div className="overflow-hidden rounded-[17px] border border-[#dfe6eb] bg-white">
              <ul className="divide-y divide-[#dfe6eb]">
                {(contacts as ContactSubmission[]).map((c) => (
                  <li key={c.id} className="flex flex-col gap-2 p-5 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[17px] text-[#1f2937]">
                        {c.first_name} {c.last_name}
                      </span>
                      <span className="text-[13px] text-[#5b646f]">
                        {formatDate(c.created_at)}
                      </span>
                    </div>
                    <span className="text-[14px] text-[#5b646f]">
                      {c.email}
                      {c.phone && ` • ${c.phone}`}
                    </span>
                    <p className="text-[15px] leading-[1.6] text-[#374151]">
                      {c.message}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </AdminShell>
  );
}
