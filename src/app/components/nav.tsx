import { Encode_Sans_Condensed } from "next/font/google";

const encode_Sans_Condensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export function Nav() {
  return (
    <nav className="w-full h-20 flex flex-row p-2 items-center justify-between ">
      {/*Logo */}
      <div className="flex items-end">
        <div
          className={
            encode_Sans_Condensed.className +
            " border-black border-2 p-1 select-none mr-9 dark:border-white"
          }
        >
          <p className="text-sm">
            <span className="font-bold">NOME ATELIER </span> ARQUITETURA LDA
          </p>
        </div>

        {/*Menu Items */}

        <ul className="space-x-3 text-sm font-extralight">
          <li className="inline">Projectos</li>
          <li className="inline">Notícias</li>
          <li className="inline">Atelier</li>
          <li className="inline">Contactos</li>
        </ul>
      </div>

      {/*Language */}
      <div className="mr-5 font-light text-sm">
        <p>English</p>
      </div>
    </nav>
  );
}
