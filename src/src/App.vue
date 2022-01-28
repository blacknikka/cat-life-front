<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import UserStore, { userKey } from "@/store/user";
import PersonStore, { personKey } from "@/store/person";
export default defineComponent({
  name: "App",
  setup() {
    provide(userKey, UserStore);
    provide(personKey, PersonStore);
  },
});
</script>
