import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Credit from "../views/Credit.vue";
import MyPage from "../views/MyPage.vue";
import CatDetailsView from "../views/CatDetailsView.vue";
import EditCatDetailsView from "../views/EditCatDetailsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/me",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/credit",
    name: "Credit",
    component: Credit,
  },
  {
    path: "/cat/:id",
    name: "CatDetailsView",
    component: CatDetailsView,
  },
  {
    path: "/cat/:id/edit",
    name: "EditCatDetailsView",
    component: EditCatDetailsView,
  },
  {
    path: "/cat/create",
    name: "CreateNewCatView",
    component: EditCatDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
