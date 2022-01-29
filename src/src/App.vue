<template>
  <header-component />
  <router-view />
  <footer-component />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import UserStore, { userKey } from "@/store/user";
import CatStore, { catKey } from "@/store/cat";
import HeaderComponent from "@/components/navigate/Header.vue";
import FooterComponent from "@/components/navigate/Footer.vue";

export default defineComponent({
  components: {
    HeaderComponent,
    FooterComponent,
  },
  name: "App",
  setup() {
    provide(userKey, UserStore);
    provide(catKey, CatStore);
  },
});
</script>
