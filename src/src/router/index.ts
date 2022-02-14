import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Credit from "../views/Credit.vue";
import CatDetailsView from "../views/CatDetailsView.vue";
import EditCatDetailsView from "../views/EditCatDetailsView.vue";

import userStore from "@/store/user/";

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
