"use client";

import { Dictionaries } from "@/types";
import Image from "next/image";
import { useState } from "react";

export function NewsPosts({ dictionary }: { dictionary: Dictionaries }) {
  const [radioChecked, setRadioChecked] = useState<number | null>(null);

  return (
    <div className="mb-6 ml-8 mr-7">
      {dictionary.newsPosts.map((v, k) => {
        return (
          <div
            className="border border-x-0 border-t-0 border-black last:border-b-0 dark:border-neutral-200"
            key={k}
          >
            <label>
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
              <div className="max-h-0 overflow-hidden duration-500 ease-in-out peer-checked:max-h-[200rem] peer-checked:duration-700">
                <div className="flex flex-col md:block">
                  <Image
                    src={v.News.Image.url}
                    alt={v.News.Image.description}
                    width={480}
                    height={480}
                    className="float-right mx-auto pb-3 md:mx-0"
                  />
                  <p className="text-sm font-light lg:max-w-[50%]">
                    {v.News.Text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
}
