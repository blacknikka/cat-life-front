import { UserRepositoryInterface } from "./types";
import { User } from "@/store/user/types";

export class UserRepository implements UserRepositoryInterface {
  private readonly ENDPOINT = "http://localhost";

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
   * @returns User
   */
  async login(email: string, password: string): Promise<boolean> {
    // First, get csrf request via /sanctum/csrf-cookie
    const result = await fetch(this.makeUrl("/sanctum/csrf-cookie"), {
      method: "GET",
      credentials: "include",
    }).then(async () => {
      const cookie = this.getCookieArray();
      const response = await fetch(this.makeUrl("/login"), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-XSRF-TOKEN": cookie["XSRF-TOKEN"],
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      return response.ok;
    });

    return result;
  }

  /**
   * @returns User
   */
  async me(): Promise<User> {
    const response = await fetch(this.makeUrl("/api/me"), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const me = ((await response.json()).data) as User;
      return Promise.resolve(me);
    } else {
      const err = response.json();
      throw new Error(`APi error: ${err}`);
    }
  }

  /**
   * @returns boolean
   */
  async isLogin(): Promise<boolean> {
    const response = await fetch(this.makeUrl("/api/me"), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    return response.ok;
  }

  /**
   *
   * @returns bool
   */
  async logout(): Promise<boolean> {
    const cookie = this.getCookieArray();
    const response = await fetch(this.makeUrl("/logout"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-XSRF-TOKEN": cookie["XSRF-TOKEN"],
      },
      credentials: "include",
    });

    if (response.ok) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }
}
