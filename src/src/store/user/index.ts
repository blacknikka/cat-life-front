import { InjectionKey, readonly, reactive } from "vue";
import { User, UserStore, UserState } from "@/store/user/types";
import Repository from "@/repositories/repositoryFactory";

const state = reactive<UserState>({
  user: {
    id: -1,
    name: "",
    email: "",
  },
  isLogin: false,
});

const login = async (email: string, password: string): Promise<boolean> => {
  const result = await Repository.user().login(email, password);
  if (result) {
    try {
      const user = await Repository.user().me();
      state.user.id = user.id;
      state.user.name = user.name;
      state.user.email = user.email;
      return true;
    } catch {
      return false;
    }
  } else {
    return false;
  }
};

const logout = async (): Promise<boolean> => {
  return await Repository.user().logout();
};

const me = async (): Promise<User> => {
  try {
    return await Repository.user().me();
  } catch {
    state.isLogin = false;
    throw new Error(`cannot get me`);
  }
};

const isLogin = async (): Promise<boolean> => {
  if (!state.isLogin) {
    state.isLogin = await Repository.user().isLogin();
  }
  return state.isLogin;
};

const userStore: UserStore = {
  state: readonly(state),
  login,
  logout,
  me,
  isLogin,
};

export default userStore;

export const userKey: InjectionKey<UserStore> = Symbol("user");
