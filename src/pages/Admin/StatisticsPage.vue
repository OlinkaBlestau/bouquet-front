<template>
  <h2>greg</h2>
</template>

<script>
export default {
  name: "StatisticsPage",

  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
};
</script>

<style scoped></style>
