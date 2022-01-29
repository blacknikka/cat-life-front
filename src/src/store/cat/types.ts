import { DeepReadonly } from "vue";

export interface Cat {
  id: number;
  name: string;
  description: string;
  image?: unknown;
  birth?: Date;
}

export interface CatState {
  cats: Cat[];
}

export interface CatStore {
  state: DeepReadonly<CatState>;
  getCats: () => Cat[];
  fetchCats: () => Promise<Cat[]>;
}
