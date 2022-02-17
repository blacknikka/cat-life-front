<template>
  <div
    class="flex items-center justify-center bg-white px-8 pt-6 pb-8 flex-col"
  >
    <div class="mb-4 self-center">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="username"
      >
        Username
      </label>
      <input
        class="shadow appearance-none border py-2 px-3 text-grey-darker"
        id="username"
        type="text"
        placeholder="Username"
        v-model="email"
      />
    </div>
    <div class="mb-6">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="password"
      >
        Password
      </label>
      <input
        class="shadow appearance-none border border-red py-2 px-3 text-grey-darker mb-3"
        id="password"
        type="password"
        placeholder="******************"
        v-model="password"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="relative py-2 px-4 border border-transparent text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="button"
        @click="onLoginClick"
      >
        Sign In
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref, defineComponent } from "vue";
import { UserStore } from "@/store/user/types";
import { userKey } from "@/store/user/";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let email = ref<string>("");
    let password = ref<string>("");

    // router
    const router = useRouter();

    const userStore: UserStore | undefined = inject<UserStore>(userKey);
    if (!userStore) {
      throw new Error("UserStore is not provided.");
    }

    const onLoginClick = async () => {
      const isSucceeded = await userStore.login(email.value, password.value);
      if (isSucceeded) {
        // top page
        console.log("login");
        router.push({ name: "Home" });
      } else {
        // error message
        console.log("login error");
      }
    };

    return {
      email,
      password,
      onLoginClick,
    };
  },
});
</script>
