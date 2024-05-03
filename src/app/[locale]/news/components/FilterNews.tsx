"use client";

import { Dictionaries } from "@/types";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

// Talvez fosse bom colocar isto no nav para que tenha o mesmo funcionamento dos filtors referents aos projects
export function FilterNews({ dictionary }: { dictionary: Dictionaries }) {
  const { updateFilter, filter } = useStore();
  const [filterState, setFilterState] = useState<string>("All");

  useEffect(() => {
    updateFilter(filterState);
  }, [filterState, updateFilter]);

  return (
    <div className="ml-8 mr-7 mt-3 flex border border-x-0 border-black py-3 dark:border-neutral-200">
      <ul className="space-x-3 text-xs">
        {Object.entries(dictionary.newsFilter).map((v, k) => {
          return (
            <li key={k} className="inline">
              <label>
                <input
                  hidden
                  type="radio"
                  name="radioNewsFilter"
                  className="peer"
                  onChange={() => {
                    setFilterState(v[1].Name);
                  }}
                  defaultChecked={
                    v[1].Name === "All" ||
                    v[1].Name === "Todas" ||
                    v[1].Name === filterState
                  }
                ></input>
                <p className="inline-block cursor-pointer opacity-60 peer-checked:opacity-100">
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
