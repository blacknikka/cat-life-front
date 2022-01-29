import { InjectionKey, readonly, reactive } from "vue";
import { User, UserStore, UserState } from "@/store/user/types";

const sample_id = 1;
const sample_username = "my name";
const sample_email = "user1@example.com";
const sample_password = "password";

const state = reactive<UserState>({
  user: {
    id: -1,
    name: "",
    email: "",
    isLogin: false,
  },
});

const login = (email: string, password: string): boolean => {
  if (email === sample_email && password === sample_password) {
    state.user.id = sample_id;
    state.user.name = sample_email;
    state.user.email = sample_username;
    state.user.isLogin = true;

    return true;
  } else {
    return false;
  }
};

const logout = (): boolean => {
  state.user.id = -1;
  state.user.name = "";
  state.user.email = "";
  state.user.isLogin = false;
  return true;
};

const me = (): User => {
  return state.user;
};

const userStore: UserStore = {
  state: readonly(state),
  login,
  logout,
  me,
};

export default userStore;

export const userKey: InjectionKey<UserStore> = Symbol("user");
