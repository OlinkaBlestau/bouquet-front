<template>
  <nav class="navbar navbar-expand-md navbar-light" style="margin: 0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Bouquet</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse mr-5 navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="!isAuth">
            <a class="nav-link" href="/">{{ $t("navbar.main") }}</a>
          </li>
          <li v-if="!isAuth && !isLoginPage" class="nav-item">
            <a class="nav-link" href="/login">{{ $t("navbar.login") }}</a>
          </li>
          <li class="nav-item" v-if="!isRegisterPage && !isAuth">
            <a class="nav-link" href="/register">{{ $t("navbar.signup") }}</a>
          </li>
          <li class="nav-item dropdown">
            <a
              v-if="isAuth && getRole == 'user'"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("navbar.bouquet") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  style="font-size: 22px"
                  @click="$router.push(`/view-bouquets`)"
                  >{{ $t("navbar.viewbouquets") }}</a
                >
              </li>

              <li><hr class="dropdown-divider" /></li>
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push('/create-bouquet')"
                  style="font-size: 22px"
                  href="#"
                  >{{ $t("navbar.createbouquet") }}</a
                >
              </li>
            </ul>
          </li>
          <li v-if="isAuth && getRole == 'user'" class="nav-item">
            <a class="nav-link" :href="`/profile/${getUserId}`">{{
              $t("navbar.profile")
            }}</a>
          </li>
          <li class="nav-item" v-if="isAuth && getRole == 'admin'">
            <a class="nav-link" :href="`/view-decors`">{{
              $t("navbar.decors")
            }}</a>
          </li>
          <li class="nav-item" v-if="isAuth && getRole == 'admin'">
            <a class="nav-link" :href="`/view-flowers`">{{
              $t("navbar.flowers")
            }}</a>
          </li>
          <li class="nav-item" v-if="isAuth && getRole == 'admin'">
            <a class="nav-link" :href="`/view-orders-admin`">{{
              $t("navbar.orders")
            }}</a>
          </li>
          <!--          <li class="nav-item" v-if="isAuth && getRole == 'admin'">-->
          <!--            <a class="nav-link" :href="`/shop-info/${1}`">Shop</a>-->
          <!--          </li>-->
          <li class="nav-item dropdown">
            <a
              v-if="isAuth && getRole == 'admin'"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("navbar.profile") }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push(`/shop-info/${1}`)"
                  style="font-size: 22px"
                  href="#"
                  >{{ $t("navbar.shopinfo") }}</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a
                  class="dropdown-item"
                  @click="$router.push(`/profile/${getUserId}`)"
                  style="font-size: 22px"
                  href="#"
                  >{{ $t("navbar.profileinfo") }}</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="isAuth && getRole == 'admin'">
            <a class="nav-link" :href="`/statistics`">
              {{ $t("navbar.statistics") }}
            </a>
          </li>
          <li class="nav-item" v-if="isAuth && getRole == 'user'">
            <a class="nav-link" :href="`/my-order-page`">{{
              $t("navbar.myorders")
            }}</a>
          </li>
          <li class="nav-item" v-if="isAuth && getRole == 'user'">
            <a class="nav-link" :href="`/contact`">{{
              $t("navbar.contacts")
            }}</a>
          </li>
          <li class="nav-item" v-if="isAuth">
            <a
              class="nav-link"
              @click="exit"
              :href="`/view-flowers`"
              style="color: #e1225d"
              >{{ $t("navbar.exit") }}</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color: #e1225d"
            >
              {{ currentLocale }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  style="font-size: 22px; text-align: center"
                  href="#"
                  @click="setLocale('en')"
                  >en</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a
                  class="dropdown-item"
                  style="font-size: 22px; text-align: center"
                  href="#"
                  @click="setLocale('uk')"
                  >uk</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavbarPage",
  components: {},
  computed: {
    currentLocale() {
      return localStorage.getItem("locale");
    },
    isRegisterPage() {
      return this.$route.path === "/register";
    },
    isLoginPage() {
      return this.$route.path === "/login";
    },
    ...mapGetters(["getUserId"]),
    ...mapGetters(["getRole"]),
    ...mapGetters(["isAuth"]),
  },
  methods: {
    setLocale: function (locale) {
      localStorage.setItem("locale", locale);
      window.location.reload();
    },
    exit() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      location.replace("/login");
    },
  },
};
</script>

<style scoped>
nav {
  height: 100px;
  background-color: #ffdede;
}
nav ul li a {
  text-decoration: none;
}

nav ul li a:hover,
nav ul li a:active,
nav ul li a:focus {
  text-decoration: underline;
}
.navbar-brand {
  background: linear-gradient(to bottom, #3a0000, #ff0101);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 5rem;
  margin-left: 40px;
  font-family: "Alex Brush", cursive;
}
.navbar-nav {
  margin-left: auto;
  font-size: 2rem;
  color: #3a0000;
  font-family: "Comfortaa", cursive;
}

.navbar-nav .nav-item a {
  color: #3a0000;
  font-size: 1.6rem;
}
.dropdown-item {
  font-size: 22px;
  font-family: "Comfortaa", cursive;
}

.navbar-nav .nav-link {
  font-size: 2rem;
  margin-left: 1.5rem;
}
</style>
