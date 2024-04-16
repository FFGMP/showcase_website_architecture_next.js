import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["pt", "en"] as const;
export const localePrefix = "always"; // Default is always

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  "/projects": {
    en: "/projects",
    pt: "/projectos",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
