<template>
  <div class="cont m-auto">
    <h2 class="text-center mb-5">{{ $t("tables.vieworders") }}</h2>
    <div v-if="orders.length > 0">
      <TableOrderComponent :orders="orders" />
    </div>
    <h2 class="hidden-title" v-else>{{ $t("tables.no_order") }}</h2>
  </div>
</template>
<script>
import TableOrderComponent from "@/components/TableOrderComponent.vue";
import { getAllOrders } from "@/api/api_request";

export default {
  name: "ViewOrdersPage",
  components: { TableOrderComponent },
  data() {
    return {
      orders: [],
    };
  },
  beforeMount() {
    getAllOrders().then((response) => {
      this.orders = response.data.orders;
    });
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
.hidden-title {
  font-size: 1.7vw;
  text-align: center;
  margin-top: 150px;
  color: #f8f8f8;
  letter-spacing: 5px;
}
</style>
