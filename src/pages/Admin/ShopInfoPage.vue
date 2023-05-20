<template>
  <div class="cont m-auto">
    <div class="person-info m-auto" style="margin-top: 49px">
      <h1
        class="text-center"
        style="position: relative; top: 10px; margin-bottom: 60px"
      >
        View shop
      </h1>
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
      <button
        class="btn d-block mx-auto"
        @click="$router.push(`/shop-update/${shop.id}`)"
      >
        Edit shop
      </button>
    </div>
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
  font-family: "Marmelad", sans-serif;
}
.person-info {
  border: 2px solid #3a0000;
  width: 45%;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  margin-bottom: -100px;
}
.cont {
  position: relative;
  top: 50px;
  width: 90%;
  overflow-x: hidden;
}
.info-block {
  border: 1px solid #ffdede;
  margin-bottom: 20px;
  font-size: 1.3vw;
  padding: 10px 20px 2px 20px;
  border-radius: 30px;
  color: black;
  box-shadow: 0 5px 10px -2px gray;

  background-color: #ffdede;
}
.btn {
  background-color: #3a0000;
  border: 1px solid #3a0000;
  font-size: 1.3vw;
  color: white;
  width: 30%;
  margin-top: 50px;
  border-radius: 10px;
}
.btn:hover {
  background-color: #fff;
  color: #3a0000;
}
</style>
