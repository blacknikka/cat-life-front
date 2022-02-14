import { CatRepositoryInterface } from "./types";
import { Cat } from "@/store/cat/types";
import catLogo from "@/assets/cat-logo.png";
import { DateFormatter } from "@/utils/Date.ts";

export class CatRepository implements CatRepositoryInterface {
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
   * 全Catデータ取得
   * @returns Promise<Cat[]>
   */
  async fetchCats(): Promise<Cat[]> {
    // const cookie = this.getCookieArray();
    const response = await fetch(this.makeUrl("/cats"), {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        // 'X-XSRF-TOKEN': cookie['XSRF-TOKEN'],
      },
      credentials: "include",
    });

    if (response.ok) {
      const cats = (await response.json()).data.map((cat: any) => {
        return {
          id: cat.id,
          name: cat.name,
          description: cat.description,
          image: cat.picture,
          birth: new Date(cat.birth),
        } as Cat;
      });
      return Promise.resolve(
        // set default image if it is undefined.
        cats.map((cat: Cat) => {
          if (!cat.image) {
            cat.image = catLogo;
          }
          return cat;
        })
      );
    } else {
      const err = response.json();
      throw new Error(`APi error: ${err}`);
    }
  }

  async createCat(
    name: string,
    description: string,
    birth: Date,
    image?: string
  ): Promise<Cat> {
    const cat = {
      name,
      description,
      birth: DateFormatter.formatDate(birth, "yyyy/MM/dd"),
      image,
    };

    const result = await fetch(this.TOKENENDPOINT + "/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
    }).then(async () => {
      const cookie = this.getCookieArray();
      const response = await fetch(this.makeUrl("/cats"), {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "X-XSRF-TOKEN": cookie["XSRF-TOKEN"],
        },
        credentials: "include",
        body: JSON.stringify(cat),
      });
      if (response.ok) {
        const cat = (await response.json()).data as Cat;
        return Promise.resolve(cat);
      } else {
        const err = response.json();
        throw new Error(`APi error: ${err}`);
      }
    });

    return result;
  }
}
