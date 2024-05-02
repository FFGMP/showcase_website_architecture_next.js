import { Dictionaries } from "@/types";

// Talvez fosse bom colocar isto no nav para que tenha o mesmo funcionamento dos filtors referents aos projects
export function FilterNews({ dictionary }: { dictionary: Dictionaries }) {
  return (
    <div className="ml-8 mr-7 mt-3 flex border border-x-0 border-black py-3 dark:border-neutral-200">
      <ul className="space-x-3 text-xs">
        <li className="inline">
          <label>
            <input
              hidden
              type="radio"
              name="radioNewsFilter"
              className="peer"
              defaultChecked
            ></input>
            <p className="inline-block cursor-pointer opacity-60 peer-checked:opacity-100">
              {dictionary.newsFilter.Title1.Name}
            </p>
          </label>
        </li>
        <li className="inline">
          <label>
            <input
              hidden
              type="radio"
              name="radioNewsFilter"
              className="peer"
            ></input>
            <p className="inline-block cursor-pointer opacity-60 peer-checked:opacity-100">
              {dictionary.newsFilter.Title2.Name}
            </p>
          </label>
        </li>
        <li className="inline">
          <label>
            <input
              hidden
              type="radio"
              name="radioNewsFilter"
              className="peer"
            ></input>
            <p className="inline-block cursor-pointer opacity-60 peer-checked:opacity-100">
              {dictionary.newsFilter.Title3.Name}
            </p>
          </label>
        </li>
        <li className="inline">
          <label>
            <input
              hidden
              type="radio"
              name="radioNewsFilter"
              className="peer"
            ></input>
            <p className="inline-block cursor-pointer opacity-60 peer-checked:opacity-100">
              {dictionary.newsFilter.Title4.Name}
            </p>
          </label>
        </li>
        <li className="inline">
          <label>
            <input
              hidden
              type="radio"
              name="radioNewsFilter"
              className="peer"
            ></input>
            <p className="inline-block cursor-pointer opacity-60 peer-checked:opacity-100">
              {dictionary.newsFilter.Title5.Name}
            </p>
          </label>
        </li>
      </ul>
    </div>
  );
}
