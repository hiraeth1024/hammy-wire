import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { Locale, Translations } from "./types";
import zh from "./locales/zh";
import en from "./locales/en";

const LOCALE_KEY = "hammy-locale";

const translations: Record<Locale, Translations> = { zh, en };

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored === "zh" || stored === "en") return stored;
  } catch {}
  return "zh";
}

const LocaleCtx = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(LOCALE_KEY, l); } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <LocaleCtx.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}

export function useT() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useT must be used within LocaleProvider");
  return ctx.t;
}
