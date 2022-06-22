import { DeepReadonly } from "vue";

export interface Feed {
  id: number;
  servedAt: Date;
  amount: number;
  memo: string;
  cat_id: number;
  user_id: number;
  food_id: number;
}

export interface FeedState {
  feeds: Feed[];
}

export interface FeedStore {
  state: DeepReadonly<FeedState>;
  getAllMyFeeds: (id: number) => Feed[];
  getFeed: (id: number) => Feed;
  fetchMyFeed: (id: number) => Promise<Feed[]>;
  //   createFeed: (
  //     servedAt: string,
  //     description: string,
  //     birth: Date,
  //     image?: string
  //   ) => Promise<Feed>;
}
