import { getDictionary } from "@/dictionaries";
import { Encode_Sans_Condensed } from "next/font/google";
import Link from "next/link";
import LanguageSelect from "./languageSelect";
import { NavItems } from "./navItems";

const encode_Sans_Condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export async function Nav({ locale }: { locale: string }) {
  const t = await getDictionary(locale);

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
          <Link href={locale === "pt" ? "/" : "/en"}>
            <p className="text-sm">
              <span className="font-bold">NOME ATELIER </span> ARQUITETURA LDA
            </p>
          </Link>
        </div>

        {/*Menu Items */}
        <div className="hidden sm:block">
          <NavItems menuItems={t} />
        </div>
      </div>

      {/*Language */}
      <div className="mr-5 hidden text-sm font-light opacity-60 hover:underline hover:opacity-100 sm:block">
        <p className=" ">
          <LanguageSelect />
        </p>
      </div>

      <div className=" mr-5 flex h-5 w-5 flex-col items-center justify-center gap-[1.9px] sm:hidden">
        <input
          type="checkbox"
          className="peer fixed z-50 h-5 w-5  opacity-0"
          name="MenuToggle"
          title="Menu Toggle"
        ></input>
        <div className=" h-1 w-full  rounded-sm bg-black  duration-200 peer-checked:translate-y-[0.2rem] peer-checked:rotate-45 dark:bg-white"></div>
        <div className=" h-1 w-full  rounded-sm bg-black  duration-200 peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-45 dark:bg-white"></div>
        <div className=" h-1 w-full  rounded-sm bg-black  duration-200 peer-checked:hidden dark:bg-white"></div>
        <div className="absolute left-0 top-20 h-0 w-full overflow-hidden bg-neutral-300 shadow-2xl duration-300 peer-checked:h-[212px] dark:bg-neutral-800">
          <NavItems menuItems={t} />
        </div>
      </div>
    </nav>
  );
}
