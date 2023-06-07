import { createRouter, createWebHistory } from "vue-router";
import PageMain from "@/pages/PageMain.vue";
import LoginPage from "@/pages/Auth/LoginPage.vue";
import RegisterPage from "@/pages/Auth/RegisterPage.vue";
import ProfilePage from "@/pages/User/ProfilePage.vue";
import UpdateProfile from "@/pages/User/UpdateProfile.vue";
import ShopInfoPage from "@/pages/Admin/ShopInfoPage.vue";
import UpdateShopPage from "@/pages/Admin/UpdateShopPage.vue";
import store from "@/storage/main";
import AddFlowersPage from "@/pages/Admin/AddFlowersPage.vue";
import AddDecorPage from "@/pages/Admin/AddDecorPage.vue";
import EditDecorPage from "@/pages/Admin/EditDecorPage.vue";
import EditFlowersPage from "@/pages/Admin/EditFlowersPage.vue";
import ViewDecorPage from "@/pages/Admin/ViewDecorPage.vue";
import ViewFlowersPage from "@/pages/Admin/ViewFlowersPage.vue";
import CreateBouquet from "@/pages/User/CreateBouquet.vue";
import ContactsPage from "@/pages/User/ContactsPage.vue";
import BouquetsPage from "@/pages/User/BouquetsPage.vue";
import ViewOrdersPage from "@/pages/Admin/ViewOrdersPage.vue";
import CurrentOrderPage from "@/pages/Admin/CurrentOrderPage.vue";
import EditBouquet from "@/pages/User/EditBouquet.vue";
import StatisticsPage from "@/pages/Admin/StatisticsPage.vue";
import MakeOrderPage from "@/pages/User/MakeOrderPage.vue";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/profile/:id",
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      if (store.getters["isAuth"] === false) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/profile-update/:id",
    component: UpdateProfile,
    beforeEnter: (to, from, next) => {
      if (store.getters["isAuth"] === false) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/shop-info/:id",
    component: ShopInfoPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/add-flowers",
    component: AddFlowersPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/create-bouquet",
    component: CreateBouquet,
    /*beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "admin"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },*/
  },
  {
    path: "/contact",
    component: ContactsPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "admin"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/make-order",
    component: MakeOrderPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "admin"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/add-decor",
    component: AddDecorPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/statistics",
    component: StatisticsPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/view-decors",
    component: ViewDecorPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },

  {
    path: "/view-orders-admin",
    component: ViewOrdersPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/current-order-admin",
    component: CurrentOrderPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },

  {
    path: "/view-bouquets",
    component: BouquetsPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "admin"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },

  {
    path: "/edit-bouquets/:id",
    component: EditBouquet,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "admin"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },

  {
    path: "/view-flowers",
    component: ViewFlowersPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/edit-decor/:id",
    component: EditDecorPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/edit-flower/:id",
    component: EditFlowersPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/shop-update/:id",
    component: UpdateShopPage,
    beforeEnter: (to, from, next) => {
      if (
        store.getters["isAuth"] === false ||
        store.getters["getRole"] === "user"
      ) {
        return next({
          name: "main",
        });
      }
      next();
    },
  },
  {
    path: "/",
    component: PageMain,
    name: "main",
  },
];

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
