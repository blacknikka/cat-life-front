<template>
  <div>
    <a
      href="#"
      class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
      @click="onClick"
    >
      <img
        :src="image"
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
import { defineComponent } from "vue";
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
    // router
    const router = useRouter();

    const onClick = () => {
      router.push({ name: "CatDetailsView", params: { id: props.id } });
    };

    return {
      onClick,
    };
  },
});
</script>
