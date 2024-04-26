"use client";
import { usePathname } from "next/navigation";

export function ProjectFilter() {
  const pathname = usePathname();
  return (
    <div
      className={
        pathname.endsWith("projects") || pathname.endsWith("projectos")
          ? "absolute mt-4"
          : "hidden"
      }
    >
      {/*Need to manage this with zustand, cookies or localstorage probably gonna use zustand*/}
      <ul className="hidden w-full space-x-3 text-sm sm:block">
        <li className="inline cursor-pointer opacity-60 hover:opacity-100">
          Equipamentos
        </li>
        <li className="inline cursor-pointer opacity-60 hover:opacity-100">
          Habitação
        </li>
        <li className="inline cursor-pointer opacity-60 hover:opacity-100">
          Reabilitação
        </li>
        <li className="inline cursor-pointer opacity-60 hover:opacity-100">
          Todos
        </li>
      </ul>
    </div>
  );
}
