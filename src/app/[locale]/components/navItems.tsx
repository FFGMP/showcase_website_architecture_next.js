"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dictionaries } from "@/types";
import LanguageSelect from "./languageSelect";

export function NavItems({ menuItems }: { menuItems: Dictionaries }) {
  const t = menuItems;
  const pathname = usePathname();
  return (
    <ul className=" pb-6 pl-9 pr-6 pt-3 text-xs font-light sm:space-x-3 sm:p-0 sm:text-sm sm:font-normal">
      <li
        className={
          pathname.endsWith("projects") || pathname.endsWith("projectos")
            ? "flex cursor-pointer  opacity-100 sm:inline "
            : "flex cursor-pointer  opacity-60 hover:opacity-100 sm:inline "
        }
      >
        <Link
          className={"h-full w-full py-3 sm:py-0"}
          href={menuItems.menu.Title1.url}
        >
          {t.menu.Title1.Name}
        </Link>
      </li>
      <li
        className={
          pathname.endsWith("news") || pathname.endsWith("noticias")
            ? "flex cursor-pointer  opacity-100 sm:inline "
            : "flex cursor-pointer  opacity-60 hover:opacity-100 sm:inline "
        }
      >
        <Link
          className={"h-full w-full py-3 sm:py-0"}
          href={menuItems.menu.Title2.url}
        >
          {t.menu.Title2.Name}
        </Link>
      </li>
      <li className="flex cursor-pointer  opacity-60 hover:opacity-100 sm:inline ">
        <Link className={"h-full w-full py-3 sm:py-0"} href={"#"}>
          {t.menu.Title3.Name}
        </Link>
      </li>
      <li className="flex cursor-pointer opacity-60 hover:opacity-100 sm:inline ">
        <Link className={"h-full w-full py-3 sm:py-0"} href={"#"}>
          {t.menu.Title4.Name}
        </Link>
      </li>
      <li className="flex cursor-pointer opacity-60 hover:opacity-100 sm:hidden">
        <LanguageSelect />
      </li>
    </ul>
  );
}
