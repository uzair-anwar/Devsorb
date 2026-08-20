"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0d0d19] px-4 text-center text-white">
      <h1
        className="text-[28px] font-bold leading-[1.2] text-[#f4f7ff] lg:text-[36px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Something went wrong
      </h1>
      <p
        className="max-w-[440px] text-[15px] leading-[1.6] text-[rgba(255,255,255,0.65)] lg:text-[17px]"
        style={{ fontFamily: "var(--font-poppins-stack)" }}
      >
        An unexpected error occurred. Try reloading the page — if it keeps
        happening, reach us at hr@devsorb.com.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-flex h-[40px] cursor-pointer items-center justify-center rounded-[8px] border border-[#020a18] bg-[#f4f7ff] px-5 text-[16px] font-medium leading-none text-[#150544] shadow-[0px_0px_8px_rgba(57,115,233,0.25)] transition-colors hover:bg-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Try again
      </button>
    </main>
  );
}
