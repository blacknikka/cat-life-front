<template>
  <feed-list-item
    v-for="feed in feeds"
    :id="feed.id"
    :servedAt="feed.servedAt"
    :amount="feed.amount"
    :memo="feed.memo"
    :cat_id="feed.cat_id"
    :user_id="feed.user_id"
    :key="feed.id"
  />
</template>

<script lang="ts">
import { inject, reactive, defineComponent, onMounted } from "vue";
import { FeedStore, Feed } from "@/store/feed/types";
import { feedKey } from "@/store/feed";
import { useRoute } from "vue-router";

import FeedListItem from "@/components/feed/feed-list/FeedListItem.vue";

export default defineComponent({
  components: {
    FeedListItem,
  },
  setup() {
    let feeds = reactive<Feed[]>([]);

    const feedStore: FeedStore | undefined = inject<FeedStore>(feedKey);
    if (!feedStore) {
      throw new Error("feedStore is not provided.");
    }

    const route = useRoute();
    onMounted(async () => {
      const id = Number(route.params.id);
      const fetched = await feedStore.fetchMyFeed(id);

      // keep reactive
      Object.assign(feeds, fetched);
    });

    return {
      feeds,
    };
  },
});
</script>
