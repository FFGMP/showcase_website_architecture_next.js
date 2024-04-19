import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "pt"];
let defaultLocale = "pt";

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
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/pt/:path*", "/en/:path*", "/", "/((?!_next|_vercel|.*\\..*).*)"],
};
