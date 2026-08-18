"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CaseStudyRow } from "@/lib/admin/case-study-form";

const CaseStudiesTable = ({ studies }: { studies: CaseStudyRow[] }) => {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  const toggleStatus = async (cs: CaseStudyRow) => {
    setBusyId(cs.id);
    await createClient()
      .from("case_studies")
      .update({ status: cs.status === "published" ? "draft" : "published" })
      .eq("id", cs.id);
    setBusyId(null);
    router.refresh();
  };

  const remove = async (cs: CaseStudyRow) => {
    if (!window.confirm(`Delete "${cs.title}"? This cannot be undone.`)) return;
    setBusyId(cs.id);
    await createClient().from("case_studies").delete().eq("id", cs.id);
    setBusyId(null);
    router.refresh();
  };

  if (studies.length === 0) {
    return (
      <div className="rounded-[17px] border border-[#dfe6eb] bg-white p-8 text-[16px] text-[#5b646f]">
        No case studies yet. Add the first one, or run{" "}
        <code>npx tsx scripts/seed.ts</code> to import the current site content.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[17px] border border-[#dfe6eb] bg-white">
      <ul className="divide-y divide-[#dfe6eb]">
        {studies.map((cs) => (
          <li
            key={cs.id}
            className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"
          >
            <div className="flex items-center gap-4">
              {cs.image_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cs.image_url}
                  alt=""
                  className="hidden h-[52px] w-[84px] rounded-[8px] border border-[#dfe6eb] object-cover sm:block"
                />
              ) : (
                <div className="hidden h-[52px] w-[84px] rounded-[8px] border border-dashed border-[#dfe6eb] sm:block" />
              )}
              <div className="flex flex-col gap-1">
                <span className="text-[17px] leading-[1.3] text-[#1f2937]">
                  {cs.title}
                </span>
                <span className="text-[14px] text-[#5b646f]">
                  {cs.category || "Uncategorized"} • /success-stories/{cs.slug}
                  {!cs.detail && " • no detail content"}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[13px] ${
                  cs.status === "published"
                    ? "bg-[#e8f6ee] text-[#1c7c44]"
                    : "bg-[#f0f1f5] text-[#5b646f]"
                }`}
              >
                {cs.status === "published" ? "Published" : "Draft"}
              </span>
              <button
                type="button"
                disabled={busyId === cs.id}
                onClick={() => toggleStatus(cs)}
                className="cursor-pointer rounded-[8px] border border-[#dfe6eb] px-3 py-1.5 text-[14px] text-[#5b646f] hover:bg-[#f0f1f5] disabled:opacity-50"
              >
                {cs.status === "published" ? "Unpublish" : "Publish"}
              </button>
              <Link
                href={`/admin/case-studies/${cs.id}`}
                className="rounded-[8px] border border-[#190c40] px-3 py-1.5 text-[14px] text-[#221158] hover:bg-[#f0f1f5]"
              >
                Edit
              </Link>
              <button
                type="button"
                disabled={busyId === cs.id}
                onClick={() => remove(cs)}
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

export default CaseStudiesTable;
