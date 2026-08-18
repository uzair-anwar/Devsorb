"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

// Light-themed admin sign-in per Figma frame 4471:21010: #f9fafc page,
// 722px card, gradient header (#221158 -> #7359c9), 14px-radius inputs.
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const configured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (authError) {
      setError(
        authError.message === "Invalid login credentials"
          ? "Incorrect email or password."
          : authError.message,
      );
      return;
    }
    router.push("/admin");
    router.refresh();
  };

  return (
    <main
      className="flex min-h-screen flex-col bg-[#f9fafc]"
      style={{ fontFamily: "var(--font-poppins-stack)" }}
    >
      {/* Top bar */}
      <header className="border-b border-[#dfe6eb] px-6 py-6 lg:px-[117px]">
        <Image
          src="/assets/logo.svg"
          alt="Devsorb"
          width={120}
          height={28}
          className="h-7 w-auto brightness-0 saturate-100 [filter:brightness(0)_sepia(1)_hue-rotate(220deg)_saturate(4)]"
        />
      </header>

      {/* Card */}
      <div className="flex flex-1 items-start justify-center px-4 pt-16 lg:pt-[156px]">
        <div className="w-full max-w-[722px] drop-shadow-[0px_4px_21.7px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-center rounded-t-[17px] bg-gradient-to-r from-[#221158] to-[#7359c9] py-4">
            <Image
              src="/assets/logo.svg"
              alt=""
              width={253}
              height={60}
              className="h-[48px] w-auto lg:h-[60px]"
            />
          </div>

          <div className="flex flex-col gap-8 rounded-b-[17px] border-x-[1.57px] border-b-[1.57px] border-[#dfe6eb] bg-white px-6 py-10 lg:gap-11 lg:px-[66px] lg:py-16">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-[26px] leading-[1.1] text-[#1f2937] lg:text-[30px] lg:leading-[30px]">
                Welcome back
              </h1>
              <p className="text-[16px] leading-[1.2] text-[#5b646f] lg:text-[20px] lg:leading-[20px]">
                Sign in to manage your website content.
              </p>
            </div>

            {!configured ? (
              <div className="rounded-[14px] border border-[#dfe6eb] bg-[#fafafa] p-6 text-[15px] leading-[1.6] text-[#5b646f]">
                The admin portal isn&apos;t connected yet — Supabase environment
                variables are missing. Copy <code>.env.local.example</code> to{" "}
                <code>.env.local</code> and fill in the project keys.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="email" className="text-[17px] text-[#031222] lg:text-[20px]">
                    Work Email
                  </label>
                  <div className="flex items-center justify-between rounded-[14px] border border-[#dfe6eb] bg-[#fafafa] px-6 py-[19px] focus-within:border-[#7359c9]">
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-[17px] text-[#031222] outline-none placeholder:text-[rgba(101,117,139,0.5)] lg:text-[20px]"
                    />
                    <svg width="19" height="15" viewBox="0 0 20 16" fill="none" aria-hidden="true" className="shrink-0 text-[#5b646f]">
                      <rect x="1" y="1" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 3l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="password" className="text-[17px] text-[#031222] lg:text-[20px]">
                    Password
                  </label>
                  <div className="flex items-center justify-between rounded-[14px] border border-[#dfe6eb] bg-[#fafafa] px-6 py-[19px] focus-within:border-[#7359c9]">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent text-[17px] text-[#031222] outline-none placeholder:text-[rgba(91,100,111,0.5)] lg:text-[20px]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="shrink-0 cursor-pointer text-[#5b646f]"
                    >
                      <svg width="20" height="14" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                        <path d="M1 8s4-7 11-7 11 7 11 7-4 7-11 7S1 8 1 8Z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                        {showPassword && <path d="M3 15L21 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
                      </svg>
                    </button>
                  </div>
                </div>

                <label className="flex w-fit cursor-pointer items-center gap-[10px]">
                  <input type="checkbox" name="remember" className="h-[25px] w-[25px] cursor-pointer rounded-full border-[1.57px] border-[#221158] accent-[#221158]" />
                  <span className="text-[16px] text-[#5b646f] lg:text-[18px]">
                    Keep me signed in on this device
                  </span>
                </label>

                {error && (
                  <p role="alert" className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-700">
                    {error}
                  </p>
                )}

                <div className="flex flex-col items-center gap-2.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-[40px] w-full cursor-pointer rounded-[6px] border border-[#f4f7ff] bg-[#190c40] text-[16px] font-medium text-[#f4f7ff] shadow-[inset_-1px_-3.25px_9px_rgba(88,42,255,0.32),inset_0.75px_3px_7.7px_rgba(115,82,221,0.43)] transition-opacity disabled:opacity-60"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {loading ? "Signing in…" : "Login"}
                  </button>
                  <p className="text-[14px] text-[#5b646f] lg:text-[16px]">
                    Authorized administrators only. All activity is logged.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex flex-col items-center gap-8 pb-4">
        <div className="w-full border-t border-[#dfe6eb]" />
        <p className="text-[14px] leading-[14px] text-[#1f2937]">
          Copyright © 2026 Devsorb All rights reserved.
        </p>
      </footer>
    </main>
  );
}
