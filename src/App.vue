<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarPage.vue";
import { mapMutations } from "vuex";

export default {
  components: { Navbar },
  beforeMount() {
    this.setAccessTokenToVuex();
  },
  methods: {
    setAccessTokenToVuex() {
      let accessToken = localStorage.getItem("accessToken");

      if (accessToken !== null) {
        this.setAccessToken(accessToken);
      }
    },
    ...mapMutations([
      "setAccessToken", // map `this.increment()` to `this.$store.commit('increment')`
    ]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Klee One", cursive;
}

.app {
  min-height: 100vh;
  height: 100%;
  font-family: "Klee One", cursive;
}
</style>
