import { DeepReadonly } from "vue";

export interface Cat {
  id: number;
  name: string;
  description: string;
  image?: any;
  birth?: Date,
}

export interface CatStore {
  state: DeepReadonly<Cat[]>;
  getCats: () => Cat[],
  fetchCats:  () => Promise<Cat[]>
}
