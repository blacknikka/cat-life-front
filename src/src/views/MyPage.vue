<template>
  <user-info :name="user.name" :email="user.email" />
</template>

<script lang="ts">
import { inject, reactive, defineComponent, onMounted } from "vue";
import { User, UserStore } from "@/store/user/types";
import { userKey } from "@/store/user";

import UserInfo from "@/components/user/UserInfo.vue";

export default defineComponent({
  components: {
    UserInfo,
  },
  setup() {
    let user = reactive<User>({
      id: -1,
      name: "",
      email: "",
    });

    const userStore: UserStore | undefined = inject<UserStore>(userKey);
    if (!userStore) {
      throw new Error("userStore is not provided.");
    }

    onMounted(async () => {
      const me: User = await userStore.me();

      // keep reactive
      Object.assign(user, me);
    });

    return {
      user,
    };
  },
});
</script>
