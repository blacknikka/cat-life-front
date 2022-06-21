<template>
  <cat-details
    :id="cat.id"
    :name="cat.name"
    :description="cat.description"
    :birth="cat.birth"
    :image="cat.image"
    :key="cat.id"
  />
  <feed-list></feed-list>
</template>

<script lang="ts">
import { inject, reactive, defineComponent, onMounted } from "vue";
import { CatStore, Cat } from "@/store/cat/types";
import { catKey } from "@/store/cat";
import { useRoute } from "vue-router";

import CatDetails from "@/components/cat/CatDetails.vue";
import FeedList from "@/components/feed/feed-list/FeedList.vue";

export default defineComponent({
  components: {
    CatDetails,
    FeedList,
  },
  setup() {
    let cat = reactive<Cat>({
      id: -1,
      name: "",
      description: "",
    });

    const catStore: CatStore | undefined = inject<CatStore>(catKey);
    if (!catStore) {
      throw new Error("catStore is not provided.");
    }

    const route = useRoute();
    onMounted(() => {
      const id = Number(route.params.id);
      const found = catStore.getCat(id);

      // keep reactive
      Object.assign(cat, found);
    });

    return {
      cat,
    };
  },
});
</script>
