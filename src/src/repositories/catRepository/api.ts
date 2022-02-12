import { CatRepositoryInterface } from './types';
import { Cat } from '@/store/cat/types';

export class CatRepository implements CatRepositoryInterface {
  private readonly ENDPOINT = 'http://localhost/api';

  private makeUrl(path: string): string {
    return `${this.ENDPOINT}${path}`;
  }

  getCookieArray() {
    const arr: { [key: string]: string } = {};
    if (document.cookie != '') {
      const tmp = document.cookie.split('; ');
      for (let i = 0; i < tmp.length; i++) {
        const data = tmp[i].split('=');
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
    const response = await fetch(this.makeUrl('/cats'), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // 'X-XSRF-TOKEN': cookie['XSRF-TOKEN'],
      },
      credentials: 'include',
    });

    if (response.ok) {
      const cats = (await response.json()) as Cat[];
      return Promise.resolve(cats);
    } else {
      const err = response.json();
      throw new Error(`APi error: ${err}`);
    }
  }
}
