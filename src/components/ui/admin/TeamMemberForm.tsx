"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export type TeamMemberRow = {
  id: string;
  full_name: string;
  email: string;
  designation: string;
  photo_url: string | null;
  sort_order: number;
};

const inputClass =
  "w-full rounded-[14px] border border-[#dfe6eb] bg-[#fafafa] px-6 py-[15px] text-[16px] text-[#031222] outline-none placeholder:text-[rgba(101,117,139,0.5)] focus:border-[#7359c9]";

const TeamMemberForm = ({ initial }: { initial?: TeamMemberRow }) => {
  const router = useRouter();
  const [fullName, setFullName] = useState(initial?.full_name ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [designation, setDesignation] = useState(initial?.designation ?? "");
  const [photoUrl, setPhotoUrl] = useState(initial?.photo_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadPhoto = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be 5 MB or smaller.");
      return;
    }
    setUploading(true);
    setError(null);
    const supabase = createClient();
    const path = `team/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const { error: upErr } = await supabase.storage
      .from("site-media")
      .upload(path, file);
    if (upErr) {
      setUploading(false);
      setError(`Photo upload failed: ${upErr.message}`);
      return;
    }
    const { data } = supabase.storage.from("site-media").getPublicUrl(path);
    setPhotoUrl(data.publicUrl);
    setUploading(false);
  };

  const save = async () => {
    setError(null);
    if (!fullName.trim() || !email.trim()) {
      setError("Full name and email are required.");
      return;
    }
    setSaving(true);
    const row = {
      full_name: fullName.trim(),
      email: email.trim(),
      designation: designation.trim(),
      photo_url: photoUrl || null,
    };
    const supabase = createClient();
    const result = initial
      ? await supabase.from("team_members").update(row).eq("id", initial.id)
      : await supabase.from("team_members").insert(row);
    setSaving(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    router.push("/admin/team");
    router.refresh();
  };

  return (
    <section className="flex max-w-[720px] flex-col gap-6 rounded-[17px] border border-[#dfe6eb] bg-white p-6 lg:p-8">
      <div className="flex flex-col gap-2">
        <span className="text-[16px] text-[#031222]">
          Profile Picture <span className="text-[#fc0000]">*</span>
        </span>
        <div className="flex items-center gap-4">
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photoUrl}
              alt=""
              className="h-[72px] w-[72px] rounded-full border border-[#dfe6eb] object-cover"
            />
          ) : (
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-dashed border-[#dfe6eb] text-[12px] text-[#5b646f]">
              No photo
            </div>
          )}
          <div className="flex flex-col gap-1">
            <label className="w-fit cursor-pointer rounded-[8px] border border-[#190c40] bg-white px-4 py-2 text-[14px] text-[#221158] hover:bg-[#f0f1f5]">
              {uploading ? "Uploading…" : "Upload Image"}
              <input
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                disabled={uploading}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void uploadPhoto(file);
                }}
              />
            </label>
            <span className="text-[13px] text-[#5b646f]">PNG, JPG, up to 5MB.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-[#031222]" htmlFor="fullName">
          Full Name <span className="text-[#fc0000]">*</span>
        </label>
        <input
          id="fullName"
          className={inputClass}
          placeholder="Sarah Jenkins"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-[#031222]" htmlFor="memberEmail">
          Email Address <span className="text-[#fc0000]">*</span>
        </label>
        <input
          id="memberEmail"
          type="email"
          className={inputClass}
          placeholder="sarah.j@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-[#031222]" htmlFor="designation">
          Designation <span className="text-[#fc0000]">*</span>
        </label>
        <input
          id="designation"
          className={inputClass}
          placeholder="Senior Software Engineer"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-700">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={saving || uploading}
          onClick={save}
          className="cursor-pointer rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-5 py-2.5 text-[16px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)] disabled:opacity-60"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {saving ? "Saving…" : initial ? "Save changes" : "Add member"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/team")}
          className="cursor-pointer px-3 py-2 text-[15px] text-[#5b646f] hover:text-[#1f2937]"
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default TeamMemberForm;
