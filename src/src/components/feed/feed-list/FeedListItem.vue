<template>
  <div
    tabindex="0"
    aria-label="card 1"
    class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded"
  >
    <div class="flex items-center border-b border-gray-200 pb-6">
      <div class="flex items-start justify-between w-full">
        <div class="pl-3 w-full">
          <p
            tabindex="0"
            class="focus:outline-none text-xl font-medium leading-5 text-gray-800"
          >
            {{ food.name }}
          </p>
          <p
            tabindex="0"
            class="focus:outline-none text-xl font-medium leading-5 text-gray-800"
          >
            {{ servedAtForShow }}
          </p>
          <p
            tabindex="0"
            class="focus:outline-none text-sm leading-normal pt-2 text-gray-500"
          >
            量 : {{ amount }}
          </p>
        </div>
      </div>
    </div>
    <div class="px-2">
      <p
        tabindex="0"
        class="focus:outline-none text-sm leading-5 py-4 text-gray-600"
      >
        {{ memo }}
      </p>
      <div tabindex="0" class="focus:outline-none flex">
        <div
          class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
        >
          {{ cat_id }}
        </div>
        <div
          class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
        >
          {{ user_id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, reactive, defineComponent, computed } from "vue";
import { FoodStore, Food } from "@/store/food/types";
import { foodKey } from "@/store/food";
import { DateFormatter } from "@/utils/Date.ts";

export default defineComponent({
  props: {
    id: Number,
    servedAt: Date,
    amount: Number,
    memo: String,
    cat_id: Number,
    user_id: Number,
    food_id: Number,
  },
  setup(props) {
    const foodStore = inject<FoodStore>(foodKey);
    if (!foodStore) {
      throw new Error("foodStore is not provided.");
    }

    let food = reactive<Food>(foodStore.initialized());

    const servedAtForShow = computed(() => {
      return props.servedAt
        ? DateFormatter.formatDate(props.servedAt, "HH:mm")
        : "";
    });

    if (props.food_id) {
      const found = foodStore.getFood(props.food_id);
      Object.assign(food, found);
    }

    return {
      servedAtForShow,
      food,
    };
  },
});
</script>
