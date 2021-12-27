import { createContext, useContext } from "react";

export const LocaleContext = createContext<{ locale: string, setLocale?: (locale: string) => void }>({ locale: "en-US" });

export function useLocaleContext() {
  return useContext(LocaleContext);
}