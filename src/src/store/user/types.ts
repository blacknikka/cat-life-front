import { DeepReadonly } from "vue";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  user: User;
  isLogin: boolean;
}

export interface UserStore {
  state: DeepReadonly<UserState>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  me: () => Promise<User>;
  isLogin: () => Promise<boolean>;
}
