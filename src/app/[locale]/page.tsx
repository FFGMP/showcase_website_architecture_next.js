import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

function ImagesGrid() {
  const t = useTranslations();
  return (
    <div
      className="mt-12 grid w-full items-center justify-center justify-items-center gap-12 px-3 sm:mt-32 sm:px-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {t.raw("images").map((v: images, i: KeyType) => {
        return (
          <div
            key={i}
            className="group relative flex w-full flex-col items-center justify-center sm:h-fit"
          >
            <Image
              src={v.url}
              width={500}
              height={500}
              quality={30}
              alt={"Edificio " + i}
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

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <main className="my-11 mt-3 flex flex-col items-center justify-center sm:mt-11">
      <Image
        src={t("mainImage.url")}
        width={950}
        height={950}
        quality={30}
        priority={true}
        className="object-cover px-3"
        alt={t("mainImage.description")}
      />
      <ImagesGrid />
    </main>
  );
}
