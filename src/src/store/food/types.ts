import { DeepReadonly } from "vue";

export interface Food {
  id: number;
  name: string;
  maker: string;
  calorie: number;
  memo: string;
  picture: string;
  url: string;
}

export interface FoodState {
  foods: Food[];
}

export interface FoodStore {
  state: DeepReadonly<FoodState>;
  getFood: (id: number) => Food;
  addFood: (food: Food) => void;
  initialized: () => Food;
}
