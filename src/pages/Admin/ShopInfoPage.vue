<template>
  <div class="cont m-auto">
    <h1
      class="text-center"
      style="position: relative; top: 10px; margin-bottom: 60px"
    >
      View shop
    </h1>
    <div class="person-info m-auto" style="margin-top: 49px">
      <div class="info-block d-flex justify-content-between">
        <p>Email</p>
        <p>{{ shop.email }}</p>
      </div>
      <div class="info-block d-flex justify-content-between">
        <p>Phone</p>
        <p>{{ shop.phone }}</p>
      </div>
      <div class="info-block d-flex justify-content-between">
        <p>Address</p>
        <p>{{ shop.address }}</p>
      </div>
      <div class="info-block d-flex justify-content-between">
        <p>Telegram</p>
        <p>{{ shop.telegram }}</p>
      </div>
      <div class="info-block d-flex justify-content-between">
        <p>Instagram</p>
        <p>{{ shop.instagram }}</p>
      </div>
      <div class="info-block d-flex justify-content-between">
        <p>Facebook</p>
        <p>{{ shop.facebook }}</p>
      </div>
    </div>
    <button
      class="btn d-block mx-auto"
      @click="$router.push(`/shop-update/${shop.id}`)"
    >
      Edit shop
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getShop } from "@/api/api_request";

export default {
  name: "ShopInfoPage",
  data() {
    return {
      shop: [],
    };
  },
  computed: {
    ...mapGetters(["getUserId"]),
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  beforeMount() {
    getShop(1).then((response) => {
      this.shop = response.data.shop;
    });
  },
};
</script>

<style scoped>
h1 {
  color: #3a0000;
  letter-spacing: 3px;
  font-size: 2.7vw;
  font-weight: 700;
  font-family: "Marmelad", sans-serif;
}
.cont {
  border: 1px solid #3a0000;
  position: relative;
  top: 50px;
  border-radius: 30px;
  width: 60%;
  padding: 30px;
}
.info-block {
  border: 1px solid #ffdede;
  margin-bottom: 20px;
  background-color: #ffdede;
  font-size: 1.8vw;
  padding: 10px 20px 2px 20px;
  border-radius: 30px;
  color: black;
}
.btn {
  background-color: #3a0000;
  border: 1px solid #3a0000;
  font-size: 1.5vw;
  color: white;
  width: 30%;
  border-radius: 10px;
}
.btn:hover {
  background-color: #fff;
  color: #3a0000;
}
</style>
