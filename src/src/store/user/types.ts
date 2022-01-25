import { DeepReadonly } from "vue";

export interface User {
  id: number;
  name: string;
  email: string;
  isLogin: boolean;
}

export interface UserStore {
  state: DeepReadonly<User>;
  login: (email: string, password: string) => boolean;
  logout: () => boolean;
  me: () => User;
}
