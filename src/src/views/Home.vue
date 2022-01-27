<template>
  <person-view-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PersonViewList from "@/components/person/PersonViewList.vue";

export default defineComponent({
  name: "Home",
  components: {
    PersonViewList,
  },
});
</script>
