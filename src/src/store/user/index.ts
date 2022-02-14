import { InjectionKey, readonly, reactive } from "vue";
import { User, UserStore, UserState } from "@/store/user/types";
import Repository from "@/repositories/repositoryFactory";

const state = reactive<UserState>({
  user: {
    id: -1,
    name: "",
    email: "",
  },
});

const login = async (email: string, password: string): Promise<boolean> => {
  const result = await Repository.user().login(email, password);
  if (result) {
    const user = await Repository.user().me();
    state.user.id = user.id;
    state.user.name = user.name;
    state.user.email = user.email;

    return true;
  } else {
    return false;
  }
};

const logout = async (): Promise<boolean> => {
  return await Repository.user().logout();
};

const me = async (): Promise<User> => {
  return await Repository.user().me();
};

const isLogin = async (): Promise<boolean> => {
  return await Repository.user().isLogin();
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
