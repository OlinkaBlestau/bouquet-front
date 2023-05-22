<template>
  <div class="cont m-auto">
    <h2 class="text-center mb-5">{{ $t("tables.vieworders") }}</h2>
    <TableOrderComponent :orders="orders" />
  </div>
</template>
<script>
import TableOrderComponent from "@/components/TableOrderComponent.vue";

export default {
  name: "ViewOrdersPage",
  components: { TableOrderComponent },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
};
</script>

<style scoped>
.cont {
  width: 80%;
  position: relative;
  top: 80px;
}
h2 {
  font-family: "Marmelad", sans-serif;
  color: #3a0000;
  font-size: 2vw;
}
</style>
