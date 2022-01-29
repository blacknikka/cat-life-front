<template>
  <div>
    <a
      href="#"
      class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
    >
      <img
        :src="url"
        loading="lazy"
        alt="cat photo"
        class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
      />

      <div
        class="w-full flex flex-col bg-white text-center rounded-lg relative p-4"
      >
        <span class="text-gray-500">{{ name }}</span>
        <span class="text-gray-800 text-lg lg:text-xl font-bold">{{
          description
        }}</span>
      </div>
    </a>
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
