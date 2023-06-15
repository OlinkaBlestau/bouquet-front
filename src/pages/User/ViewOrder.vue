<template>
  <div class="cont m-auto">
    <h1>{{ $t("orders.order") }} № {{ order.id }}</h1>
    <div class="cont-info-order d-flex justify-content-between m-5">
      <div class="bouquet-consist">
        <div class="bouquet-info">
          <div class="bouquet-info-item">
            <h1
              class="text-center"
              style="position: relative; top: 10px; margin-bottom: 55px"
            >
              {{ $t("orders.composition") }}
            </h1>
            <div
              v-for="flower in order.bouquet.flowers"
              :key="flower"
              class="info-block d-flex justify-content-between"
            >
              <p>{{ flower.name }}</p>
              <p>{{ flower.color }}</p>
              <!--              <p>3 {{ $t("orders.units") }}</p>-->
              <p>{{ flower.price }}{{ $t("orders.uahunit") }}</p>
            </div>
            <hr />
            <div
              v-for="decor in order.bouquet.decors"
              :key="decor"
              class="info-block d-flex justify-content-between"
            >
              <p>{{ decor.name }}</p>
              <p>{{ decor.color }}</p>
              <!--              <p>3 {{ $t("orders.units") }}</p>-->
              <p>{{ decor.price }} {{ $t("orders.uahunit") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="total-price d-flex justify-content-between">
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ $t("orders.amount") }}
        </p>
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ order.amount }}
        </p>
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ $t("orders.totalprice") }}
        </p>
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ getTotalPrice(order) }} {{ $t("orders.uah") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrder } from "@/api/api_request";

export default {
  name: "ViewOrder",
  data() {
    return {
      order: [],
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeMount() {
    getOrder(this.$route.params.id).then((response) => {
      this.order = response.data.order;
    });
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  methods: {
    getTotalPrice(order) {
      return order.amount * order.bouquet.total_price;
    },
  },
};
</script>

<style scoped>
.cont {
  width: 80%;
  position: relative;
  top: 50px;
}
.total-price {
  width: 580px;
  height: 91px;
  background-color: #ffffff;
  font-size: 1.2vw;
  font-family: "Comfortaa", cursive;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 5px 10px -2px gray;
  font-weight: bold;
}
h1 {
  text-align: center;
  font-family: "Marmelad", sans-serif;
}
.bouquet-info-item {
  position: relative;
  right: 100px;
  width: 170%;
  font-size: 1.2vw;
  background-color: #ffdede;
  padding: 25px;
  box-shadow: 0 5px 10px -2px gray;
  border-radius: 25px;
}
.contacts-info-item h1 {
  font-family: "Marmelad", sans-serif;
}
.info-block {
  margin-bottom: 12px;
}
</style>
