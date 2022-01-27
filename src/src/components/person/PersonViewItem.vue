<template>
  <div class="flex flex-wrap mt-12 justify-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4"
    >
      <div class="col-span-2 sm:col-span-1 xl:col-span-1">
        <img alt="..." :src="url" class="h-24 w-24 rounded mx-auto" />
      </div>
      <div class="col-span-2 sm:col-span-4 xl:col-span-4">
        <h3 class="font-semibold text-black">{{ name }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import catLogo from "@/assets/cat-logo.png";

export default defineComponent({
  props: {
    name: String,
    description: String,
    birth: Date,
    image: Object,
  },
  setup() {
    let url = ref("");

    onMounted(() => {
      url.value = catLogo;
    });

    return {
      url,
    };
  },
});
</script>
