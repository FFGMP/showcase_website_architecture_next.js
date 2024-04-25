import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

//This data should come from json files
export const validPathnames: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  menuTitle1: { pt: "projectos", en: "projects" },
  menuTitle2: { pt: "noticias", en: "news" },
  menuTitle3: { pt: "atelier", en: "studio" },
  menuTitle4: { pt: "contactos", en: "contacts" },
};

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

function rewriteURLToEnVersion(pathname: string) {
  for (const menuItem in validPathnames) {
    if (pathname.endsWith("/pt/" + validPathnames[menuItem]["pt"])) {
      return validPathnames[menuItem]["en"];
    }
  }
  return false;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Check if locale is the default one
  const pathnameHasDefault = pathname === `/`;

  //Because of second part of pathname does not work with slugs this need to be done so it redirects to the EN version
  //but with portuguese slug before
  const slugPTVersionNeeded = rewriteURLToEnVersion(pathname);

  if (typeof slugPTVersionNeeded === "string") {
    return NextResponse.rewrite(
      new URL("/pt/" + slugPTVersionNeeded, request.url),
    );
  }

  if (pathnameHasDefault)
    return NextResponse.rewrite(new URL(`/${defaultLocale}/`, request.url));

  if (pathnameHasLocale) return;
  // Redirect if there is no locale i think that this does not work

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
