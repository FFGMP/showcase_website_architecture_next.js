"use client";

import { Dictionaries } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useStore } from "@/store";

export function NewsPosts({ dictionary }: { dictionary: Dictionaries }) {
  const [radioChecked, setRadioChecked] = useState<number | null>(null);
  const { filter } = useStore();

  useEffect(() => {
    setRadioChecked(null);
  }, [filter]);

  return (
    <div className="mb-6 ml-8 mr-7 hover:text-neutral-400 dark:hover:text-neutral-700 ">
      {dictionary.newsPosts.map((v, k) => {
        return (
          <div
            className={
              filter !== "All" &&
              filter !== v.News.Category &&
              filter !== "Todas"
                ? "grid grid-rows-[0fr] duration-200"
                : "grid grid-rows-[1fr] duration-200" +
                  " " +
                  (radioChecked === k
                    ? "border border-x-0 border-t-0 border-black text-black last:border-b-0 dark:border-neutral-200 dark:text-white"
                    : "border border-x-0 border-t-0 border-black last:border-b-0 hover:text-black dark:border-neutral-200 dark:hover:text-white")
            }
            key={k}
          >
            <label className="cursor-pointer select-none overflow-hidden">
              <input
                hidden
                type="radio"
                name="radioNewspost"
                className="peer"
                checked={radioChecked === k}
                onChange={(v) => {}}
                onClick={(v) => {
                  setRadioChecked((prev) => (prev === k ? null : k));
                }}
                value={k}
              ></input>
              <div className="flex flex-col py-2">
                <p className="font-bold">{v.News.Title}</p>
                <p className="text-xs">{v.News.Date}</p>
              </div>
            </label>
            {/*A partir daqui é onde aparece imagem com texto do lado esquerdo */}
            <div
              className={
                radioChecked === k
                  ? "grid grid-rows-[1fr] duration-700"
                  : "grid grid-rows-[0fr] duration-700"
              }
            >
              <div className="flex flex-col overflow-hidden md:block">
                <Image
                  src={v.News.Image.url}
                  alt={v.News.Image.description}
                  width={480}
                  height={480}
                  className="float-right mx-auto pb-3 md:mx-0 md:pl-5"
                />
                <p className="text-sm font-light lg:max-w-[50%]">
                  {v.News.Text.split("\n").map((line, i) => (
                    <span className="" key={i}>
                      {line}
                      <br />
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
