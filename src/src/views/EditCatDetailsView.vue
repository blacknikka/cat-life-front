<template>
  <edit-cat-details
    :mode="mode"
    :id="cat.id"
    :name="cat.name"
    :description="cat.description"
    :birth="cat.birth"
    :image="cat.image"
    :key="cat.id"
  />
</template>

<script lang="ts">
import { ref, inject, reactive, defineComponent, onMounted } from "vue";
import { CatStore, Cat } from "@/store/cat/types";
import { catKey } from "@/store/cat";
import { useRoute } from "vue-router";

import EditCatDetails from "@/components/cat/EditCatDetails.vue";

export default defineComponent({
  components: {
    EditCatDetails,
  },
  setup() {
    let cat = reactive<Cat>({
      id: -1,
      name: "",
      description: "",
    });

    let mode = ref("edit");

    const catStore: CatStore | undefined = inject<CatStore>(catKey);
    if (!catStore) {
      throw new Error("catStore is not provided.");
    }

    const route = useRoute();
    onMounted(() => {
      if (route.params.mode === "edit") {
        const id = Number(route.params.id);
        const found = catStore.getCat(id);
        // keep reactive
        Object.assign(cat, found);
      } else {
        mode.value = "create";
      }
    });

    return {
      cat,
      mode,
    };
  },
});
</script>
