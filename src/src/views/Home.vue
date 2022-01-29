<template>
  <div class="max-w-screen-2xl px-4 py-4 md:px-8 mx-auto">
    <button
      class="px-6 py-2 block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
      @click="onCreateClick"
    >
      New Cat
    </button>
  </div>
  <cat-view-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CatViewList from "@/components/cat/CatViewList.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    CatViewList,
  },
  setup() {
    const router = useRouter();

    const onCreateClick = () => {
      router.push({ name: "CreateNewCatView", params: { mode: "create" } });
    };

    return {
      onCreateClick,
    };
  },
});
</script>
