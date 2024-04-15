import Image from "next/image";
import { getDictionary } from "./dictionaries";
import { Dictionary } from "./types";

function ImagesGrid({ dict }: { dict: Dictionary }) {
  const imagesArray = Object.values(dict.images);

  return (
    <div
      className="mt-12 grid w-full items-center justify-center justify-items-center gap-12 px-3 sm:mt-32 sm:px-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {imagesArray.map((v, i) => {
        return (
          <div
            key={i}
            className="group relative flex w-full flex-col items-center justify-center "
          >
            <Image
              src={v.url}
              width={500}
              height={500}
              alt={"Edificio " + i}
              className="w-full object-cover sm:max-h-64 sm:w-52"
            />
            <div className="opacity-0 duration-200 md:absolute md:inset-0 md:bg-black md:transition-opacity md:group-hover:opacity-50"></div>
            <p className="select-none pt-2 text-center text-sm transition-opacity duration-0 sm:max-w-52 sm:pt-0 md:absolute md:text-base  md:text-white md:opacity-0 md:group-hover:opacity-100 md:group-hover:duration-200">
              {v.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  return (
    <main className="mt-3 flex flex-col items-center justify-center sm:my-11 sm:mt-11">
      <h1>{dict.menu.Primeiro}</h1>
      <Image
        src="/pexels-vlado-paunovic-3695494.jpg"
        width={950}
        height={950}
        className="object-cover px-3"
        alt="Edifício 1"
      />
      <ImagesGrid dict={dict} />
    </main>
  );
}
