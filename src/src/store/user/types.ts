import { DeepReadonly } from "vue";

export interface User {
  id: number;
  name: string;
  email: string;
  isLogin: boolean;
}

export interface UserState {
  user: User;
}

export interface UserStore {
  state: DeepReadonly<UserState>;
  login: (email: string, password: string) => boolean;
  logout: () => boolean;
  me: () => User;
}
