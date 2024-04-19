import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "pt"];
let defaultLocale = "pt";

type headersType = {
  "accept-language": string;
};

export function getLocale(request: Request) {
  const headers: headersType = {
    "accept-language":
      request.headers.get("accept-language") ?? "en-US,en;q=0.5",
  };

  const language = new Negotiator({ headers }).languages();
  return match(language, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const pathnameHasDefault = pathname === `/`;

  if (pathnameHasDefault)
    return NextResponse.rewrite(new URL(`/${defaultLocale}/`, request.url));

  if (pathnameHasLocale) return;

  // Redirect if there is no locale

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
  //return NextResponse.error();
}

export const config = {
  matcher: [
    "/pt/:path*",
    "/en/:path*",
    "/",
    "/((?!_next|_vercel|.*\\..*).*)",
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
