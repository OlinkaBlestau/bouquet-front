<template>
  <div class="cont m-auto">
    <h1>{{ $t("orders.makeorder") }}</h1>
    <div class="order-info d-flex justify-content-between">
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
              v-for="bouquet in getBouquetsBasket?.flowers"
              :key="bouquet"
              class="info-block d-flex justify-content-between"
            >
              <p>{{ bouquet.name }}</p>
              <p>{{ bouquet.color }}</p>
              <!--              <p>1 {{ $t("orders.units") }}</p>-->
              <p>{{ bouquet.price }} {{ $t("orders.uahunit") }}</p>
            </div>
            <hr />
            <div
              v-for="bouquet in getBouquetsBasket?.decors"
              :key="bouquet"
              class="info-block d-flex justify-content-between"
            >
              <p>{{ bouquet.name }}</p>
              <p>{{ bouquet.color }}</p>
              <!--              <p>1 {{ $t("orders.units") }}</p>-->
              <p>{{ bouquet.price }} {{ $t("orders.uahunit") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="total-price d-flex justify-content-between">
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ $t("orders.amount") }}
        </p>
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ getBouquetsBasket?.amount }}
        </p>
        <p style="top: 10px; position: relative; font-weight: bold">
          {{ $t("orders.topay") }}
        </p>

        <p style="top: 10px; position: relative; font-weight: bold">
          {{ getBouquetsBasket?.total_price }}
          {{ $t("orders.uah") }}
        </p>
      </div>
    </div>
    <button class="btn pay" @click="this.$router.push(`/payment/`)">
      {{ $t("orders.pay") }}
    </button>
    <button class="btn cancel" @click="this.$router.push(`/view-bouquets/`)">
      {{ $t("orders.cancel") }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getShops } from "@/api/api_request";

export default {
  name: "MakeOrderPage",
  data() {
    return {
      order: [],
    };
  },
  methods: {
    getTotalPrice(price, amount) {
      return price * amount;
    },
  },
  computed: {
    ...mapGetters(["getBouquetsBasket"]),
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  beforeMount() {
    getShops().then((response) =>
      localStorage.setItem("shopId", response.data.shops.data[0].id)
    );
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
  width: 41%;
  background-color: #ffffff;
  font-size: 1.2vw;
  font-family: "Comfortaa", cursive;
  border-radius: 25px;
  padding: 20px;
  top: 130px;
  height: 90px;
  position: relative;
  box-shadow: 0 5px 10px -2px gray;
  font-weight: bold;
}
h1 {
  text-align: center;
  font-family: "Marmelad", sans-serif;
}
.pay {
  background-color: #e1225d;
  width: 200px;
  height: 55px;
  color: #fff;
  font-size: 1.1vw;
  border-radius: 10px;
  position: absolute;
  top: 320px;
  right: 350px;
}
.cancel {
  width: 200px;
  height: 55px;
  color: #000;
  font-size: 1.1vw;
  border-radius: 10px;
  position: absolute;
  top: 320px;
  right: 50px;
  background-color: transparent;
  border: #000000 solid 1px;
}
.pay:hover {
  background-color: #fff;
  color: #000;
}
.cancel:hover {
  background-color: #000;
  color: #fff;
}
.bouquet-info-item {
  position: relative;
  width: 166%;
  font-size: 1.2vw;
  background-color: #ffdede;
  padding: 25px;
  box-shadow: 0 5px 10px -2px gray;
  top: 50px;
  border-radius: 25px;
}
.contacts-info-item h1 {
  font-family: "Marmelad", sans-serif;
}
.info-block {
  margin-bottom: 12px;
}
</style>
