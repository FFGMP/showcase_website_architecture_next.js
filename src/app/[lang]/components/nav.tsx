import { Encode_Sans_Condensed } from "next/font/google";
import Link from "next/link";
import { Dictionary } from "../types";

const encode_Sans_Condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export function NavItems({ dict }: { dict: Dictionary }) {
  return (
    <ul className=" space-y-6 pb-6 pl-9 pr-6 pt-3 text-xs font-light sm:space-x-3 sm:p-0 sm:text-sm sm:font-extralight">
      <li className="sm:inline">{dict.menu.Title1}</li>
      <li className="sm:inline">{dict.menu.Title2}</li>
      <li className="sm:inline">{dict.menu.Title3}</li>
      <li className="sm:inline">{dict.menu.Title4}</li>
      <li className="sm:hidden">
        <Link scroll={false} href={dict.menu.Title5.url}>
          {dict.menu.Title5.Name}
        </Link>
      </li>
    </ul>
  );
}

export async function Nav({ dict, lang }: { dict: any; lang: string }) {
  return (
    <nav className="relative flex h-20 w-full flex-row items-center justify-between p-2 pl-8 pt-8">
      {/*Logo */}
      <div className="flex items-end">
        <div
          className={
            encode_Sans_Condensed.className +
            " select-none border-2 border-black p-1 sm:mr-9 dark:border-white"
          }
        >
          <p className="text-sm">
            <span className="font-bold">NOME ATELIER </span> ARQUITETURA LDA
          </p>
        </div>

        {/*Menu Items */}
        <div className="hidden sm:block">
          <NavItems dict={dict} />
        </div>
      </div>

      {/*Language */}
      <div className="mr-5 hidden text-sm font-light sm:block">
        <p>
          <Link scroll={false} href={dict.menu.Title5.url}>
            {dict.menu.Title5.Name}
          </Link>
        </p>
      </div>

      <div className=" mr-5 flex h-5 w-5 flex-col items-center justify-center gap-[1.9px] sm:hidden">
        <input
          type="checkbox"
          className="peer fixed z-50 h-5 w-5  opacity-0"
          name="MenuToggle"
        ></input>
        <div className=" h-1 w-full  rounded-sm bg-black  duration-200 peer-checked:translate-y-[0.2rem] peer-checked:rotate-45 dark:bg-white"></div>
        <div className=" h-1 w-full  rounded-sm bg-black  duration-200 peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-45 dark:bg-white"></div>
        <div className=" h-1 w-full  rounded-sm bg-black  duration-200 peer-checked:hidden dark:bg-white"></div>
        <div className="absolute left-0 top-20 h-0 w-full overflow-hidden bg-neutral-300 shadow-2xl duration-300 peer-checked:h-[212px] dark:bg-neutral-800">
          <NavItems dict={dict} />
        </div>
      </div>
    </nav>
  );
}
