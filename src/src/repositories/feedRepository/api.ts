import { FeedRepositoryInterface } from "./types";
import { Feed } from "@/store/feed/types";

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
        return {
          id: feed.id,
          servedAt: new Date(feed.served_at),
          amount: feed.amount,
          memo: feed.memo,
          birth: new Date(feed.birth),
          cat_id: 1,
          user_id: 1,
        } as Feed;
      });
      return Promise.resolve(feeds);
    } else {
      const err = response.json();
      throw new Error(`APi error: ${err}`);
    }
  }
}
