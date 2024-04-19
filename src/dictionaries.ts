import "server-only";
import { Dictionaries } from "./types";

const dictionaries: { [key: string]: () => Promise<Dictionaries> } = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
