<template>
  <div class="cont m-auto">
    <div class="contacts-info">
      <div class="contacts-info-item">
        <h1
          class="text-center"
          style="position: relative; top: 10px; margin-bottom: 40px"
        >
          {{ $t("shop.contacts") }}
        </h1>
        <div class="info-block d-flex justify-content-between">
          <p>Email</p>
          <p>{{ shop.email }}</p>
        </div>
        <div class="info-block d-flex justify-content-between">
          <p>{{ $t("shop.phone") }}</p>
          <p>{{ shop.phone }}</p>
        </div>
        <div class="info-block d-flex justify-content-between">
          <p>{{ $t("shop.address") }}</p>
          <p>{{ shop.address }}</p>
        </div>
      </div>

      <div class="social-info-item">
        <h1
          class="text-center"
          style="position: relative; top: 10px; margin-bottom: 40px"
        >
          {{ $t("shop.socialmedia") }}
        </h1>
        <div class="info-block d-flex justify-content-between">
          <p>Telegram</p>
          <p>{{ shop.telegram }}</p>
        </div>
        <div class="info-block d-flex justify-content-between">
          <p>Facebook</p>
          <p>{{ shop.instagram }}</p>
        </div>
        <div class="info-block d-flex justify-content-between">
          <p>Instagram</p>
          <p>{{ shop.facebook }}</p>
        </div>
      </div>
    </div>
    <div class="background-img">
      <img src="../../assets/images/flowers-contacts.png" />
    </div>
  </div>
</template>

<script>
import { getShop } from "@/api/api_request";

export default {
  name: "ContactsPage",
  data() {
    return {
      shop: [],
    };
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
.cont {
  width: 80%;
  position: relative;
  top: 80px;
}
.contacts-info-item {
  position: relative;
  width: 37%;
  height: 40%;
  font-size: 1.2vw;
  background-color: #ffdede;
  padding: 25px;
  box-shadow: 0 5px 10px -2px gray;
  top: 88px;
  left: 280px;
  border-radius: 25px;
  z-index: 2;
}
.contacts-info-item h1 {
  font-family: "Marmelad", sans-serif;
}
.info-block {
  margin-bottom: 12px;
}

.social-info-item {
  position: relative;
  top: 272px;
  left: 645px;
  width: 37%;
  height: 40%;
  font-size: 1.2vw;
  background-color: #ffdede;
  padding: 25px;
  box-shadow: 0 5px 10px -2px gray;

  border-radius: 25px;
  z-index: 2;
}
.social-info-item h1 {
  font-family: "Marmelad", sans-serif;
}
.background-img img {
  width: 75%;
  height: auto;
  left: 170px;
  position: absolute;
  z-index: 1;
  top: -45px;
}
</style>
