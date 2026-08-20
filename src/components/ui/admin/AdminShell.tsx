"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/admin" },
  { name: "Job Posts", href: "/admin/jobs" },
  { name: "Case Studies", href: "/admin/case-studies" },
  { name: "Team Members", href: "/admin/team" },
  { name: "Submissions", href: "/admin/submissions" },
];

const AdminShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await createClient().auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-[#f9fafc] text-[#1f2937]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      <header className="flex items-center justify-between border-b border-[#dfe6eb] bg-white px-6 py-4 lg:px-[48px]">
        <div className="flex items-center gap-10">
          <Link href="/admin">
            <Image src="/assets/logo.svg" alt="Devsorb" width={110} height={26} className="h-[26px] w-auto" style={{ filter: "invert(1) brightness(0.2)" }} />
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-[8px] px-4 py-2 text-[15px] transition-colors ${
                    active
                      ? "bg-[#221158] text-white"
                      : "text-[#5b646f] hover:bg-[#f0f1f5] hover:text-[#1f2937]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden rounded-[6px] border border-[#190c40] bg-white px-4 py-2 text-[14px] text-[#221158] transition-colors hover:bg-[#f0f1f5] sm:block"
          >
            View site
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="cursor-pointer rounded-[6px] border border-[#f4f7ff] bg-[#190c40] px-4 py-2 text-[14px] text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32)]"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className="flex gap-1 overflow-x-auto border-b border-[#dfe6eb] bg-white px-4 py-2 md:hidden">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-[8px] px-3 py-1.5 text-[14px] ${
                active ? "bg-[#221158] text-white" : "text-[#5b646f]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8 lg:px-8 lg:py-12">
        {children}
      </main>
    </div>
  );
};

export default AdminShell;
