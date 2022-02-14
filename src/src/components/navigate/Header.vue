<template>
  <header v-if="isLogin" class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img class="w-10" src="@/assets/title.png" />
        <span class="ml-3 text-xl">Cat Life</span>
      </a>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <a class="mr-5 hover:text-gray-900" @click="onClickHome">Home</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { useRouter } from "vue-router";
import { UserStore } from "@/store/user/types";
import { userKey } from "@/store/user/";

export default defineComponent({
  setup() {
    const userStore: UserStore | undefined = inject<UserStore>(userKey);
    if (!userStore) {
      throw new Error("UserStore is not provided.");
    }

    // router
    const router = useRouter();

    const onClickHome = () => {
      router.push({ name: "Home" });
    };

    const isLogin = computed(() => {
      return userStore.isLogin();
    });

    return {
      onClickHome,
      isLogin,
    };
  },
});
</script>
