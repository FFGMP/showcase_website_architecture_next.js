import "server-only";
import { Dictionaries } from "./types";

const dictionaries: { [key: string]: () => Promise<Dictionaries> } = {
  pt: () => import("./dictionaries/en.json").then((module) => module.default),
  en: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
