export const LOCALES = ["sr", "en", "de", "it", "fr", "zh"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "sr";

export const LOCALE_LABELS: Record<Locale, { native: string; short: string; flag: string }> = {
  sr: { native: "Srpski", short: "SR", flag: "🇷🇸" },
  en: { native: "English", short: "EN", flag: "🇬🇧" },
  de: { native: "Deutsch", short: "DE", flag: "🇩🇪" },
  it: { native: "Italiano", short: "IT", flag: "🇮🇹" },
  fr: { native: "Français", short: "FR", flag: "🇫🇷" },
  zh: { native: "中文", short: "ZH", flag: "🇨🇳" },
};
