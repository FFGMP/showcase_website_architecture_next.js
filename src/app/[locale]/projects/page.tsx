import { getDictionary } from "@/dictionaries";
import { ImagesGrid } from "./components/imagesGrid";

export default async function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getDictionary(locale);
  return (
    <div className="flex">
      <ImagesGrid dictionary={t} />
    </div>
  );
}
