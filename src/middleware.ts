import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localeDetection: false,
  pathnames,

  // Used when no locale matches
  defaultLocale: "pt",
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
};
