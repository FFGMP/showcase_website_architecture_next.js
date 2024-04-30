"use client";
import Image from "next/image";
import { Dictionaries } from "@/types";
import { useEffect, useState } from "react";

export function ImagesGrid({ dictionary }: { dictionary: Dictionaries }) {
  const t = dictionary;
  const [getFilterStorage, setFilterStorage] = useState("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("storage", () => {
        setFilterStorage(localStorage.getItem("filterName") ?? "All");
      });
    }
    setFilterStorage(localStorage.getItem("filterName") ?? "All");
  }, []);

  return (
    <div
      className="mt-3 grid w-full items-center justify-center justify-items-center gap-12 px-3 sm:mt-12 sm:px-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {t.images.map((v, k) => {
        return (
          <div
            key={k}
            className={
              "group relative flex h-full w-full flex-col items-center justify-center duration-500 sm:h-fit" +
              (getFilterStorage === "All" ||
              getFilterStorage === "Todos" ||
              getFilterStorage === v.category
                ? " opacity-100"
                : " opacity-20")
            }
          >
            <div className={"relative"}>
              <Image
                src={v.url}
                width={500}
                height={500}
                quality={30}
                alt={v.name + k}
                priority={true}
                className={"w-full object-cover  sm:max-h-64 sm:w-52"}
              />

              <div className="opacity-0 duration-200 md:absolute md:inset-0 md:bg-black md:transition-opacity md:group-hover:opacity-50"></div>
            </div>
            <p className="w-full flex-grow select-none p-1 pt-2 text-sm transition-opacity duration-0 sm:max-w-52 sm:flex-grow-0 sm:pt-0 md:absolute md:text-center md:text-base  md:text-white md:opacity-0 md:group-hover:opacity-100 md:group-hover:duration-200">
              {v.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
