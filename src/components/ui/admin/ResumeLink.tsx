"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

/** Resumes live in a private bucket — generate a short-lived signed URL on demand. */
const ResumeLink = ({ path }: { path: string }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const open = async () => {
    setLoading(true);
    setError(false);
    const { data } = await createClient()
      .storage.from("resumes")
      .createSignedUrl(path, 60 * 10);
    setLoading(false);
    if (!data?.signedUrl) {
      setError(true);
      return;
    }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <button
        type="button"
        onClick={open}
        disabled={loading}
        className="cursor-pointer rounded-[8px] border border-[#190c40] px-3 py-1.5 text-[14px] text-[#221158] hover:bg-[#f0f1f5] disabled:opacity-50"
      >
        {loading ? "Opening…" : "View resume"}
      </button>
      {error && (
        <span className="ml-2 text-[13px] text-red-600">
          Couldn&apos;t open the resume.
        </span>
      )}
    </div>
  );
};

export default ResumeLink;
