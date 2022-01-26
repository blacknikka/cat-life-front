<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import UserStore, { userKey } from "@/store/user";
export default defineComponent({
  name: "App",
  setup() {
    provide(userKey, UserStore);
  },
});
</script>
