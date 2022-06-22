import { FeedRepositoryInterface } from "./types";
import { Feed } from "@/store/feed/types";

import { FoodStore, Food } from "@/store/food/types";
import foodStore from "@/store/food";

export class FeedRepository implements FeedRepositoryInterface {
  private readonly ENDPOINT = "http://localhost/api";
  private readonly TOKENENDPOINT = "http://localhost";

  private makeUrl(path: string): string {
    return `${this.ENDPOINT}${path}`;
  }

  getCookieArray(): { [key: string]: string } {
    const arr: { [key: string]: string } = {};
    if (document.cookie != "") {
      const tmp = document.cookie.split("; ");
      for (let i = 0; i < tmp.length; i++) {
        const data = tmp[i].split("=");
        arr[data[0]] = decodeURIComponent(data[1]);
      }
    }
    return arr;
  }

  /**
   * 全Feedデータ取得
   * @returns Promise<Cat[]>
   */
  async fetchMyFeed(id: number): Promise<Feed[]> {
    // const cookie = this.getCookieArray();
    const response = await fetch(this.makeUrl(`/feeds-list/${id}`), {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        // 'X-XSRF-TOKEN': cookie['XSRF-TOKEN'],
      },
      credentials: "include",
    });

    if (response.ok) {
      const feeds = (await response.json()).map((feed: any) => {
        // register Food data
        const food: Food = {
          id: feed.food.id,
          name: feed.food.name,
          maker: feed.food.maker,
          calorie: feed.food.calorie,
          memo: feed.food.memo,
          picture: feed.food.picture,
          url: feed.food.url,
        };
        foodStore.addFood(food);

        return {
          id: feed.id,
          servedAt: new Date(feed.served_at),
          amount: feed.amount,
          memo: feed.memo,
          birth: new Date(feed.birth),
          cat_id: 1,
          user_id: 1,
          food_id: food.id,
        } as Feed;
      });
      return Promise.resolve(feeds);
    } else {
      const err = response.json();
      throw new Error(`APi error: ${err}`);
    }
  }
}
