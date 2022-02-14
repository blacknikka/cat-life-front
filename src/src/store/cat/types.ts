import { DeepReadonly } from "vue";

export interface Cat {
  id: number;
  name: string;
  description: string;
  image?: string;
  birth?: Date;
}

export interface CatState {
  cats: Cat[];
}

export interface CatStore {
  state: DeepReadonly<CatState>;
  getAllCats: () => Cat[];
  getCat: (id: number) => Cat;
  fetchCats: () => Promise<Cat[]>;
  createCat: (
    name: string,
    description: string,
    birth: Date,
    image?: string
  ) => Promise<Cat>;
}
