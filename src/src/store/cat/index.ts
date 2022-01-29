import { InjectionKey, readonly, reactive } from "vue";
import { CatStore, Cat, CatState } from "@/store/cat/types";

const state = reactive<CatState>({
  cats: [
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
  ],
});

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

const getCats = (): Cat[] => {
  return state.cats as Cat[];
};

const fetchCats = async (): Promise<Cat[]> => {
  await sleep(1000);
  return state.cats as Cat[];
};

const catStore: CatStore = {
  state: readonly(state) as CatState,
  getCats,
  fetchCats,
};

export default catStore;

export const catKey: InjectionKey<CatStore> = Symbol("cat");
