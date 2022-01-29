<template>
  <div v-if="isLogin">
    <footer class="text-gray-600 body-font">
      <div
        class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
      >
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
        >
          <a class="text-gray-500">
            <div>
              <router-link :to="{ name: 'Credit' }">Credit</router-link>
            </div>
          </a>
        </span>
      </div>
    </footer>
  </div>
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

    const onClickCredit = () => {
      router.push({ name: "Credit" });
    };

    const isLogin = computed(() => {
      return userStore.state.user.isLogin;
    });

    return {
      onClickCredit,
      isLogin,
    };
  },
});
</script>
