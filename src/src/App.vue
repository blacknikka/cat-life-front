<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import UserStore, { userKey } from "@/store/user";
import CatStore, { catKey } from "@/store/cat";
export default defineComponent({
  name: "App",
  setup() {
    provide(userKey, UserStore);
    provide(catKey, CatStore);
  },
});
</script>
