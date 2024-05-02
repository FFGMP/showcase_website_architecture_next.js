import { getDictionary } from "@/dictionaries";
import { FilterNews } from "./components/FilterNews";
import { NewsPosts } from "./components/NewsPosts";

export default async function News({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getDictionary(locale);

  return (
    <div>
      <FilterNews dictionary={t} />
      <NewsPosts dictionary={t} />
    </div>
  );
}
