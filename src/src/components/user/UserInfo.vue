<template>
  <div
    class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
  >
    <span class="text-gray-500">{{ name }}</span>
    <span class="text-gray-500">{{ email }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    email: String,
  },
});
</script>
