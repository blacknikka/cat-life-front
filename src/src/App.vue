<template>
  <header-component />
  <router-view />
  <footer-component />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import UserStore, { userKey } from "@/store/user";
import CatStore, { catKey } from "@/store/cat";
import FeedStore, { feedKey } from "@/store/feed";
import FoodStore, { foodKey } from "@/store/food";
import HeaderComponent from "@/components/navigate/Header.vue";
import FooterComponent from "@/components/navigate/Footer.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    HeaderComponent,
    FooterComponent,
  },
  name: "App",
  setup() {
    provide(userKey, UserStore);
    provide(catKey, CatStore);
    provide(feedKey, FeedStore);
    provide(foodKey, FoodStore);

    const router = useRouter();
    const checkAuth = async () => {
      if (!(await UserStore.isLogin())) {
        router.push({ name: "Login" });
      }
    };

    checkAuth();
  },
});
</script>
