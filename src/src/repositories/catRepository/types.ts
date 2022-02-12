import { Cat, Params } from '@/store/cat/types';

export interface CatRepositoryInterface {
  fetchCats(): Promise<Cat[]>;
}
