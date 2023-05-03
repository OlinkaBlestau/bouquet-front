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
          <li class="nav-item">
            <a class="nav-link" href="/">Main</a>
          </li>
          <li class="nav-item" v-if="!isLoginPage">
            <a class="nav-link" href="/login">Log in</a>
          </li>
          <li class="nav-item" v-if="!isRegisterPage">
            <a class="nav-link" href="/register">Sign up</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              En
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" style="font-size: 22px" href="#"
                  >Англійська</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" style="font-size: 22px" href="#"
                  >Українська</a
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
export default {
  name: "NavbarPage",
  components: {},
  computed: {
    isRegisterPage() {
      return this.$route.path === "/register";
    },
    isLoginPage() {
      return this.$route.path === "/login";
    },
  },
};
</script>

<style scoped>
nav {
  height: 100px;
  background-color: #ffdede;
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
  font-size: 2.4rem;
  color: #3a0000;
  font-family: "Klee One", cursive;
}

.navbar-nav .nav-item a {
  color: #3a0000;
}
.navbar-nav .nav-link {
  font-size: 2.4rem;
  margin-left: 2rem;
}
</style>
