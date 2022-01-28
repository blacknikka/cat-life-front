import { InjectionKey, shallowReadonly } from "vue";
import { CatStore, Cat } from "@/store/cat/types";

const state: Cat[] = [
  {
    id: 1,
    name: "cat1",
    description: "cat1 details",
    image: undefined,
    birth: new Date("1980-10-1"),
  },
  {
    id: 2,
    name: "cat1",
    description: "cat2 details",
    image: undefined,
    birth: new Date("2001-4-1"),
  },
];

const getCats = (): Cat[] => {
  return state;
};

const fetchCats = async (): Promise<Cat[]> => {
  return await state;
};

const catStore: CatStore = {
  state: shallowReadonly(state),
  getCats,
  fetchCats,
};

export default catStore;

export const catKey: InjectionKey<CatStore> = Symbol("cat");
