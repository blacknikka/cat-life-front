import { DeepReadonly } from "vue";

export interface Cat {
  id: number;
  name: string;
  description: string;
  image?: Record<string, unknown>;
  birth?: Date;
}

export interface CatStore {
  state: DeepReadonly<Cat[]>;
  getCats: () => Cat[];
  fetchCats: () => Promise<Cat[]>;
}
