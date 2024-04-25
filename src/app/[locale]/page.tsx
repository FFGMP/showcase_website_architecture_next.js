import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import { Dictionaries } from "@/types";
import { cookies } from "next/headers";

function ImagesGrid({ dictionary }: { dictionary: Dictionaries }) {
  const t = dictionary;
  return (
    <div
      className="mt-12 grid w-full items-center justify-center justify-items-center gap-12 px-3 sm:mt-32 sm:px-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {t.images.map((v, k) => {
        return (
          <div
            key={k}
            className="group relative flex h-full w-full flex-col items-center justify-center sm:h-fit"
          >
            <Image
              src={v.url}
              width={500}
              height={500}
              quality={30}
              alt={v.name + k}
              priority={true}
              className="w-full object-cover sm:max-h-64 sm:w-52"
            />
            <div className="opacity-0 duration-200 md:absolute md:inset-0 md:bg-black md:transition-opacity md:group-hover:opacity-50"></div>
            <p className="w-full flex-grow select-none pt-2 text-sm transition-opacity duration-0 sm:max-w-52 sm:flex-grow-0 sm:pt-0 md:absolute md:text-center md:text-base  md:text-white md:opacity-0 md:group-hover:opacity-100 md:group-hover:duration-200">
              {v.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getDictionary(locale);
  return (
    <main className="my-11 mt-3 flex flex-col items-center justify-center sm:mt-11">
      <Image
        src={t.mainImage.url}
        width={950}
        height={950}
        quality={30}
        priority={true}
        className="object-cover px-3"
        alt={t.mainImage.description}
      />
      <ImagesGrid dictionary={t} />
    </main>
  );
}
