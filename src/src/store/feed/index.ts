import { InjectionKey, readonly, reactive } from "vue";
import { FeedStore, Feed, FeedState } from "./types";
import Repository from "@/repositories/repositoryFactory";

const state = reactive<FeedState>({
  feeds: [
    {
      id: 1,
      servedAt: new Date("2022-06-21"),
      amount: 1.5,
      memo: "memo1",
      cat_id: 1,
      user_id: 1,
    },
    {
        id: 2,
        servedAt: new Date("2022-06-20"),
        amount: 0.5,
        memo: "memo2",
        cat_id: 1,
        user_id: 1,
      },
    ],
});

// const sleep = (msec: number) =>
//   new Promise((resolve) => setTimeout(resolve, msec));

const getAllMyFeeds = (): Feed[] => {
  return state.feeds as Feed[];
};

const getFeed = (id: number): Feed => {
  const found = state.feeds.find((feed) => {
    return feed.id === id;
  }) as Feed;

  if (!found) {
    throw new Error(`cannot find feed, id: ${id}`);
  }
  return found;
};

const fetchMyFeed = async (id : number): Promise<Feed[]> => {
  const feeds = await Repository.feed().fetchMyFeed(id);
  state.feeds.splice(0, state.feeds.length);
  state.feeds.push(...feeds);

  return feeds;
};

const feedStore: FeedStore = {
    state: readonly(state) as FeedState,
    getAllMyFeeds,
    getFeed,
    fetchMyFeed
  };

export default feedStore;

export const feedKey: InjectionKey<FeedStore> = Symbol("feed");
