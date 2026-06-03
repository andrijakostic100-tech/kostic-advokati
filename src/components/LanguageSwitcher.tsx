"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/Provider";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/types";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={
          compact
            ? "flex items-center gap-1.5 text-[11px] uppercase tracking-display text-ink-soft hover:text-green transition-colors"
            : "flex items-center gap-2 text-[11px] uppercase tracking-display text-ink-soft hover:text-green transition-colors border border-rule/60 px-3 py-2"
        }
      >
        <span aria-hidden>{LOCALE_LABELS[locale].flag}</span>
        <span>{LOCALE_LABELS[locale].short}</span>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden>
          <path d="M0 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 z-50 w-44 bg-ivory border border-rule shadow-[0_20px_40px_-20px_rgba(17,56,56,0.35)] py-2"
        >
          {LOCALES.map((l) => {
            const label = LOCALE_LABELS[l as Locale];
            const active = l === locale;
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(l as Locale);
                    setOpen(false);
                  }}
                  className={
                    "w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors " +
                    (active
                      ? "bg-parchment text-green"
                      : "text-ink-soft hover:bg-parchment hover:text-green")
                  }
                >
                  <span aria-hidden className="text-base">
                    {label.flag}
                  </span>
                  <span className="font-medium">{label.native}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-display text-ink-soft/60">
                    {label.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
