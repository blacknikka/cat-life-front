<template>
  <cat-view-item
    v-for="cat in cats"
    :name="cat.name"
    :description="cat.description"
    :birth="cat.birth"
    :image="cat.image"
    :key="cat.id"
  />
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

    // // router
    // const router = useRouter();

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
