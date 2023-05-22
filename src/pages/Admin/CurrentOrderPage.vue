<template>
  <div class="cont m-auto">
    <h1>{{ $t("orders.order") }} №1</h1>
    <div class="cont-info-order d-flex justify-content-between">
      <div class="contacts-info">
        <div class="contacts-info-item">
          <h1
            class="text-center"
            style="position: relative; top: 10px; margin-bottom: 55px"
          >
            {{ $t("orders.profile") }}
          </h1>
          <div class="info-block d-flex justify-content-between">
            <p>{{ $t("orders.firstname") }}</p>
            <p>Rostislav</p>
          </div>
          <div class="info-block d-flex justify-content-between">
            <p>{{ $t("orders.lastname") }}</p>
            <p>Kaplenko</p>
          </div>
          <div class="info-block d-flex justify-content-between">
            <p>Email</p>
            <p>rostislav@gmail.com</p>
          </div>
          <div class="info-block d-flex justify-content-between">
            <p>{{ $t("orders.phone") }}</p>
            <p>+380664581247</p>
          </div>
          <div class="info-block d-flex justify-content-between">
            <p>{{ $t("orders.address") }}</p>
            <p>Kharkiv, Mire 15-8</p>
          </div>
        </div>
      </div>
      <div class="bouquet-consist">
        <div class="bouquet-info">
          <div class="bouquet-info-item">
            <h1
              class="text-center"
              style="position: relative; top: 10px; margin-bottom: 55px"
            >
              {{ $t("orders.composition") }}
            </h1>
            <div class="info-block d-flex justify-content-between">
              <p>Троянда</p>
              <p>Червона</p>
              <p>3 {{ $t("orders.units") }}</p>
              <p>25 {{ $t("orders.uahunit") }}</p>
            </div>
            <hr />
            <div class="info-block d-flex justify-content-between">
              <p>Троянда</p>
              <p>Червона</p>
              <p>3 {{ $t("orders.units") }}</p>
              <p>25 {{ $t("orders.uahunit") }}</p>
            </div>
            <hr />
            <div class="info-block d-flex justify-content-between">
              <p>Троянда</p>
              <p>Червона</p>
              <p>3 {{ $t("orders.units") }}</p>
              <p>25 {{ $t("orders.uahunit") }}</p>
            </div>
            <hr />
            <div class="info-block d-flex justify-content-between">
              <p>Троянда</p>
              <p>Червона</p>
              <p>3 {{ $t("orders.units") }}</p>
              <p>25 {{ $t("orders.uahunit") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total-price d-flex justify-content-between">
      <p style="top: 10px; position: relative; font-weight: bold">
        {{ $t("orders.totalprice") }}
      </p>
      <p style="top: 10px; position: relative; font-weight: bold">
        800 {{ $t("orders.uah") }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CurrentOrderPage",
  data() {
    return {
      order: [],
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
  top: 50px;
}
.total-price {
  width: 41%;
  background-color: #ffffff;
  font-size: 1.2vw;
  font-family: "Comfortaa", cursive;
  position: absolute;
  border-radius: 25px;
  padding: 20px;
  right: 1019px;
  top: 600px;
  box-shadow: 0 5px 10px -2px gray;
  font-weight: bold;
}
h1 {
  text-align: center;
  font-family: "Marmelad", sans-serif;
}
.contacts-info-item {
  position: relative;
  width: 170%;
  font-size: 1.2vw;
  background-color: #ffdede;
  padding: 25px;
  box-shadow: 0 5px 10px -2px gray;
  top: 50px;
  left: -150px;
  border-radius: 25px;
}
.bouquet-info-item {
  position: relative;
  width: 200%;
  font-size: 1.2vw;
  background-color: #ffdede;
  padding: 25px;
  box-shadow: 0 5px 10px -2px gray;
  top: 50px;
  right: 415px;
  border-radius: 25px;
}
.contacts-info-item h1 {
  font-family: "Marmelad", sans-serif;
}
.info-block {
  margin-bottom: 12px;
}
</style>
