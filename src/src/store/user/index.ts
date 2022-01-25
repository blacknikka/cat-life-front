import { InjectionKey, readonly } from "vue";
import { User, UserStore } from "@/store/user/types";

const sample_id = 1;
const sample_username = "my name";
const sample_email = "user1@example.com";
const sample_password = "password";

const state: User = {
  id: -1,
  name: "",
  email: "",
  isLogin: false,
};

const login = (email: string, password: string): boolean => {
  if (email === sample_email && password === sample_password) {
    state.id = sample_id;
    state.name = sample_email;
    state.email = sample_username;
    state.isLogin = true;

    return true;
  } else {
    return false;
  }
};

const logout = (): boolean => {
  state.id = -1;
  state.name = "";
  state.email = "";
  state.isLogin = false;
  return true;
};

const me = (): User => {
  return state;
};

const userStore: UserStore = {
  state: readonly(state),
  login,
  logout,
  me,
};

export default userStore;

export const userKey: InjectionKey<UserStore> = Symbol("user");
