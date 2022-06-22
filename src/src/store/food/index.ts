import { InjectionKey, readonly, reactive } from "vue";
import { FoodStore, Food, FoodState } from "./types";
import Repository from "@/repositories/repositoryFactory";

const state = reactive<FoodState>({
  foods: [],
});

const getFood = (id: number): Food => {
  const found = state.foods.find((food) => {
    return food.id === id;
  }) as Food;

  if (!found) {
    return initialized();
  }
  return found;
};

const addFood = (food: Food) => {
  const index = state.foods.findIndex((f) => {
    return food.id === f.id;
  });
  if (index >= 0) return;

  state.foods.push(food);
};

export const initialized = () : Food => {
    return {
      id: -1,
      name: "default",
      maker: "",
      calorie: 0,
      memo: "",
      picture: "",
      url: "",
    };
  }

const foodStore: FoodStore = {
  state: readonly(state) as FoodState,
  getFood,
  addFood,
  initialized,
};

export default foodStore;

export const foodKey: InjectionKey<FoodStore> = Symbol("food");
