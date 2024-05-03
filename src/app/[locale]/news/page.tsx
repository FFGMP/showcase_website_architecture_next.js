import { getDictionary } from "@/dictionaries";
import { FilterNews } from "./components/filterNews";
import { NewsPosts } from "./components/newsPosts";

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
