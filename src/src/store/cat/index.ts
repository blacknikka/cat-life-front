import { InjectionKey, readonly, reactive } from "vue";
import { CatStore, Cat, CatState } from "./types";
import Repository from "@/repositories/repositoryFactory";
import catLogo from "@/assets/cat-logo.png";

const state = reactive<CatState>({
  cats: [
    {
      id: 1,
      name: "cat1",
      description: "cat1 details",
      image: catLogo,
      birth: new Date("1980-10-1"),
    },
    {
      id: 2,
      name: "cat1",
      description: "cat2 details",
      image: catLogo,
      birth: new Date("2001-4-1"),
    },
  ],
});

// const sleep = (msec: number) =>
//   new Promise((resolve) => setTimeout(resolve, msec));

const getAllCats = (): Cat[] => {
  return state.cats as Cat[];
};

const getCat = (id: number): Cat => {
  const found = state.cats.find((cat) => {
    return cat.id === id;
  }) as Cat;

  if (!found) {
    throw new Error(`cannot find cat, id: ${id}`);
  }
  return found;
};

const fetchCats = async (): Promise<Cat[]> => {
  return await Repository.cat().fetchCats();
};

const createCat = async (
  name: string,
  description: string,
  birth: Date,
  image?: string
): Promise<Cat> => {
  return await Repository.cat().createCat(name, description, birth, image);
};

const catStore: CatStore = {
  state: readonly(state) as CatState,
  getAllCats,
  getCat,
  fetchCats,
  createCat,
};

export default catStore;

export const catKey: InjectionKey<CatStore> = Symbol("cat");
