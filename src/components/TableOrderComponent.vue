<template>
  <table class="table table-bordered border-black">
    <thead style="background-color: #ffdede">
      <tr>
        <th scope="col">№</th>
        <th scope="col">{{ $t("tables.firstname") }}</th>
        <th scope="col">{{ $t("tables.lastname") }}</th>
        <th scope="col">{{ $t("tables.totalprice") }}</th>
        <th scope="col">{{ $t("tables.date") }}</th>
        <th scope="col">{{ $t("tables.phone") }}</th>
        <th scope="col">{{ $t("tables.amount") }}</th>
        <th scope="col">{{ $t("tables.view") }}</th>
      </tr>
    </thead>
    <tbody style="background-color: #ffffff">
      <tr
        v-for="(order, index) in orders"
        :key="index"
        style="border-color: #3a0000"
      >
        <td>{{ order.id }}</td>
        <td>{{ order.bouquet.user.first_name }}</td>
        <td>{{ order.bouquet.user.last_name }}</td>
        <td>{{ getTotalPrice(order) }}</td>
        <td>{{ momentDate(order.created_at) }}</td>
        <td>{{ order.bouquet.user.phone }}</td>
        <td>{{ order.amount }}</td>
        <td>
          <button
            style="background-color: transparent; border: none"
            @click="$router.push(`/current-order-admin/${order.id}`)"
          >
            <img
              src="../assets/images/icon-open.png"
              style="width: 40%"
              alt=""
            />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moment from "moment/moment";
import router from "@/router/router";

export default {
  name: "TableOrderComponent",
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  methods: {
    router() {
      return router;
    },
    getTotalPrice(order) {
      return order.amount * order.bouquet.total_price;
    },
    momentDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD.MM.YYYY");
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Comfortaa", cursive;
  letter-spacing: 1px;
  font-size: 1.3vw;
  color: #3a0000;
  border: 1px solid #000; /* Change the border color to black */
}

th {
  text-align: center;
  border: 1px solid #3a0000;
  padding: 5px;
}

td {
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
}

img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
