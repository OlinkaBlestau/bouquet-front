import { createRouter, createWebHistory } from "vue-router";
import PageMain from "@/pages/PageMain.vue";
import LoginPage from "@/pages/Auth/LoginPage.vue";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";

const routes = [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/",
    component: PageMain,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
