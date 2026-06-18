import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import data from "./data/bitu.json";

export type Lang = "uz" | "ru" | "en";
export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "uz", label: "Oʻzbekcha", short: "UZ" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
];

/** Shape of one locale, inferred from the real BITU data (uz is the source). */
export type Locale = (typeof data)["i18n"]["uz"];
export const COMMON = data.common;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Locale; common: typeof COMMON };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = (typeof localStorage !== "undefined" && localStorage.getItem("bitu-lang")) as Lang | null;
    return saved && ["uz", "ru", "en"].includes(saved) ? saved : "uz";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("bitu-lang", l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = data.i18n[lang] as Locale;

  return (
    <I18nContext.Provider value={{ lang, setLang, t, common: COMMON }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
