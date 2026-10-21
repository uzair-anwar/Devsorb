"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Locale list for the navbar switcher. English only by decision — the control
 * matches Figma 4465:19945 but carries no translation layer.
 * ponytail: local state only. Adding a locale here renders it in the dropdown
 * but does NOT translate anything; that needs next-intl + locale routes.
 */
export const LOCALES = [
  { code: "en", label: "English", flag: "/assets/flag-us.svg" },
] as const;

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(LOCALES[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${active.label}`}
        className="flex h-[43px] w-[69px] cursor-pointer items-center gap-[10px] rounded-[6.5px] border border-[var(--text-headline)] px-[11px] transition-opacity hover:opacity-80"
      >
        <img
          src={active.flag}
          alt=""
          aria-hidden="true"
          className="h-[14.5px] w-[23.66px] shrink-0"
        />
        <svg
          width="12.97"
          height="7.13"
          viewBox="44.6579 17.9937 12.97 7.134"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M56.5679 17.9937L57.6279 19.0547L51.8509 24.8337C51.7583 24.9269 51.6483 25.0008 51.527 25.0513C51.4057 25.1017 51.2757 25.1277 51.1444 25.1277C51.0131 25.1277 50.883 25.1017 50.7618 25.0513C50.6405 25.0008 50.5305 24.9269 50.4379 24.8337L44.6579 19.0547L45.7179 17.9947L51.1429 23.4187L56.5679 17.9937Z"
            fill="currentColor"
            className="text-[var(--text-headline)]"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full right-0 z-[120] mt-2 w-[160px] rounded-[10px] border border-[rgba(255,255,255,0.08)] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(34,17,88,0.95) 0%, rgba(13,13,25,0.97) 100%)",
          }}
        >
          {LOCALES.map((locale) => (
            <li key={locale.code}>
              <button
                type="button"
                role="option"
                aria-selected={locale.code === active.code}
                onClick={() => {
                  setActive(locale);
                  setOpen(false);
                }}
                className="flex w-full cursor-pointer items-center gap-2.5 rounded-[6px] px-3 py-2 text-left text-[13px] text-[rgba(255,255,255,0.75)] transition-colors hover:bg-[rgba(171,145,234,0.12)] hover:text-[var(--text-headline)]"
                style={{ fontFamily: "var(--font-poppins-stack)" }}
              >
                <img
                  src={locale.flag}
                  alt=""
                  aria-hidden="true"
                  className="h-[12px] w-[19.6px] shrink-0"
                />
                {locale.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
