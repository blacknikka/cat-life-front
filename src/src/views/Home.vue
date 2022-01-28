<template>
  <cat-view-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CatViewList from "@/components/cat/CatViewList.vue";

export default defineComponent({
  name: "Home",
  components: {
    CatViewList,
  },
});
</script>
