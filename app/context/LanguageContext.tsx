"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import enTranslation from "../../public/locales/en/translation.json";
import jpTranslation from "../../public/locales/jp/translation.json";

export type Locale = "en" | "jp";

const STORAGE_KEY = "portfolio-lang";

const dictionaries: Record<Locale, Record<string, string>> = {
  en: enTranslation,
  jp: jpTranslation,
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "jp") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "jp" : "en");
  }, [locale, setLocale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const dictionary = dictionaries[locale];
      let value = dictionary[key] ?? dictionaries.en[key] ?? key;
      if (vars) {
        for (const [varKey, varValue] of Object.entries(vars)) {
          value = value.replace(`{{${varKey}}}`, String(varValue));
        }
      }
      return value;
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, toggleLocale, t }), [locale, setLocale, toggleLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
