<template>
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
    >
      <cat-view-item
        v-for="cat in cats"
        :id="cat.id"
        :name="cat.name"
        :description="cat.description"
        :birth="cat.birth"
        :image="cat.image"
        :key="cat.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { inject, reactive, defineComponent, onMounted } from "vue";
import { CatStore, Cat } from "@/store/cat/types";
import { catKey } from "@/store/cat";
import CatViewItem from "./CatViewItem.vue";
// import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    CatViewItem,
  },
  setup() {
    const cats = reactive<Cat[]>([]);

    const catStore: CatStore | undefined = inject<CatStore>(catKey);
    if (!catStore) {
      throw new Error("catStore is not provided.");
    }

    // cat
    onMounted(async () => {
      cats.push(...(await catStore.fetchCats()));
    });

    return {
      cats,
    };
  },
});
</script>
