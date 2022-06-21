<template>
  <div
    class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
  >
    <span class="text-gray-500">{{ id }}</span>
    <span class="text-gray-500">{{ servedAt }}</span>
    <span class="text-gray-500">{{ amount }}</span>
    <span class="text-gray-500">{{ memo }}</span>
    <span class="text-gray-500">{{ cat_id }}</span>
    <span class="text-gray-500">{{ user_id }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: Number,
    servedAt: Date,
    amount: Number,
    memo: String,
    cat_id: Number,
    user_id: Number,
  },
});
</script>
