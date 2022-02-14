import { Cat } from "@/store/cat/types";

export interface CatRepositoryInterface {
  fetchCats(): Promise<Cat[]>;
  createCat(
    name: string,
    description: string,
    birth: Date,
    image?: string
  ): Promise<Cat>;
}
