<template>
  <div class="cont m-auto">
    <h2 class="text-center mb-5">{{ $t("tables.vieworders") }}</h2>
    <TableMyOrderComponent :orders="orders" />
  </div>
</template>
<script>
import TableMyOrderComponent from "@/components/TableMyOrderComponent.vue";
import { getMyOrders } from "@/api/api_request";

export default {
  name: "MyOrderPage",
  components: { TableMyOrderComponent },
  data() {
    return {
      orders: [],
    };
  },
  beforeMount() {
    let id = localStorage.getItem("userId");
    getMyOrders(id).then((response) => {
      this.orders = response.data.order;
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
</style>
