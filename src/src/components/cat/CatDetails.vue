<template>
  <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
    <img class="w-full object-cover object-center" :src="image" alt="avatar" />
    <div class="py-4 px-6">
      <h1 class="text-2xl font-semibold text-gray-800">{{ name }}</h1>
      <p class="py-2 text-lg text-gray-700">
        {{ description }}
      </p>
      <p class="py-2 text-sm text-gray-700">birthday : {{ birthday }}</p>
      <button
        class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2"
        @click="onEditClick"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { DateFormatter } from "@/utils/Date.ts";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    id: Number,
    name: String,
    description: String,
    birth: Date,
    image: String,
  },
  setup(props) {
    const router = useRouter();

    const birthday = computed(() => {
      return props.birth
        ? DateFormatter.formatDate(props.birth, "yyyy/MM/dd")
        : "";
    });

    const onEditClick = () => {
      router.push({ name: "EditCatDetailsView", params: { id: props.id } });
    };

    return {
      birthday,
      onEditClick,
    };
  },
});
</script>
