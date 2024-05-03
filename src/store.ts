import { create } from "zustand";

type Store = {
  filter: string;
  updateFilter: (filter: string) => void;
};

export const useStore = create<Store>()((set) => ({
  filter: "All",
  updateFilter: (filter: string) => set(() => ({ filter: filter })),
}));
