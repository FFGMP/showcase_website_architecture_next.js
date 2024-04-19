import Image from "next/image";
import Link from "next/link";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="my-11 mt-3 flex flex-col items-center justify-center sm:mt-11">
      <h1>{locale}</h1>
      <Link href={"/"}>PT </Link>
      <Link href={"/en"}>EN </Link>
    </main>
  );
}
