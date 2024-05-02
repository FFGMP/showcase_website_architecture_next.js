"use client";
import { Dictionaries } from "@/types";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function setFilterItem(filterName: any) {
  localStorage.setItem("filterName", filterName);
  window.dispatchEvent(new Event("storage"));
  return;
}

export function ProjectFilter({ dictionary }: { dictionary: Dictionaries }) {
  const pathname = usePathname();
  useEffect(() => {
    setFilterItem(dictionary.projectFilter.Filter4.Name);
  }, []);
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
        {Object.entries(dictionary.projectFilter).map((v, k) => {
          return (
            <li
              key={k}
              onClick={() => {
                setFilterItem(v[1].Name);
              }}
              className="inline"
            >
              <label>
                <input
                  hidden
                  defaultChecked={v[0] === "Filter4"}
                  className="peer "
                  type="radio"
                  name="FilterRadio"
                ></input>
                <p className="inline-block cursor-pointer opacity-60 hover:opacity-100 peer-checked:opacity-100">
                  {v[1].Name}
                </p>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
