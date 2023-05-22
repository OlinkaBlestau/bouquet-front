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
        <th scope="col">{{ $t("tables.view") }}</th>
      </tr>
    </thead>
    <tbody style="background-color: #ffffff">
      <tr
        v-for="(orders, index) in this.orders"
        :key="index"
        style="border-color: #3a0000"
      >
        <td>1</td>
        <td>Alina</td>
        <td>Zahovora</td>
        <td>1500</td>
        <td>14.05.2023</td>
        <td>0664859785</td>
        <td>
          <button style="background-color: transparent; border: none">
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
export default {
  name: "TableOrderComponent",
  props: {
    orders: {
      type: Array,
      required: true,
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
