import { defaultLocale, locales } from "./constants_locales/locales";

export const i18n = {
  defaultLocale,
  locales: locales.map((l) => l),
} as const;

export type Locale = (typeof i18n)["locales"][number];
