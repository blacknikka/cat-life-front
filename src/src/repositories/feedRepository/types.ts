import { Feed } from "@/store/feed/types";

export interface FeedRepositoryInterface {
  fetchMyFeed(id: number): Promise<Feed[]>;
}
