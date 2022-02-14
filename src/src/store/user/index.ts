import { InjectionKey, readonly, reactive } from "vue";
import { User, UserStore, UserState } from "@/store/user/types";
import Repository from "@/repositories/repositoryFactory";

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

const login = async (email: string, password: string): Promise<boolean> => {
  const result = await Repository.user().login(email, password);
  if (result) {
    const user = await Repository.user().me();
    state.user.id = user.id;
    state.user.name = user.name;
    state.user.email = user.email;
    state.user.isLogin = true;

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

const userStore: UserStore = {
  state: readonly(state),
  login,
  logout,
  me,
};

export default userStore;

export const userKey: InjectionKey<UserStore> = Symbol("user");
