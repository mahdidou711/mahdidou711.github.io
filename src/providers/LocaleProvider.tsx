import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fr, en, type Dict } from "@/i18n";

export type Locale = "fr" | "en";
type Ctx = { locale: Locale; t: Dict; setLocale: (l: Locale) => void; toggle: () => void };

const LocaleContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "mb.locale";

function getInitial(): Locale {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "fr";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    setLocaleState(getInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
  }, [locale]);

  const t = locale === "fr" ? fr : en;
  const setLocale = (l: Locale) => setLocaleState(l);
  const toggle = () => setLocaleState((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale, toggle }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
