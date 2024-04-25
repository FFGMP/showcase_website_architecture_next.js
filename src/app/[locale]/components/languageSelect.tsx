"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { validPathnames } from "@/middleware";

function replaceLanguagePrefix(
  pathname: string,
  currentLang: string,
  newLang: string,
) {
  let newPathname = pathname;
  for (const menuTitle in validPathnames) {
    if (pathname.endsWith(validPathnames[menuTitle][currentLang])) {
      newPathname = pathname.replace(
        validPathnames[menuTitle][currentLang],
        validPathnames[menuTitle][newLang],
      );
    }
  }
  return newPathname.replace(
    /^\/(pt|en)/,
    pathname.startsWith("/pt") ? "/en" : "/pt",
  );
}

export default function LanguageSelect() {
  const pathname = usePathname();
  let newPathname: string;

  if (pathname === "/" || pathname === "/en") {
    //This is for root pathname
    newPathname = pathname === "/" ? "/en" : "/";
  } else {
    //This is for changing without forgetting the actual pathname

    if (pathname.startsWith("/pt")) {
      newPathname = replaceLanguagePrefix(pathname, "pt", "en");
    } else {
      newPathname = replaceLanguagePrefix(pathname, "en", "pt");
    }
  }

  return (
    <Link className={"h-full w-full py-3 sm:py-0"} href={newPathname}>
      {pathname.startsWith("/en") ? "Português" : "English"}
    </Link>
  );
}
