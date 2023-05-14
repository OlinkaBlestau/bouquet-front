<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarPage.vue";

export default {
  components: { Navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
p {
  font-weight: 400;
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
