"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DICTS } from "./dict";
import type { Dict } from "./dict";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./types";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LanguageCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "kj_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Read stored preference on mount
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && (LOCALES as readonly string[]).includes(stored)) {
        setLocaleState(stored as Locale);
        document.documentElement.lang = stored;
      } else {
        document.documentElement.lang = DEFAULT_LOCALE;
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <LanguageCtx.Provider value={{ locale, setLocale, t: DICTS[locale] }}>
      {children}
    </LanguageCtx.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
