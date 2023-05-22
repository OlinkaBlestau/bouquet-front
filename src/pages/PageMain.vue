<template>
  <div class="container-page">
    <section id="section1" ref="section1">
      <img
        src="../assets/images/section1-backimage.jpg"
        alt="Logo"
        class="full-width"
      />
      <div class="d-flex justify-content-between">
        <img
          src="../assets/images/flowers.png"
          class="flowers-picture-click"
          alt="Logo"
        />
        <div class="section-info">
          <h1 class="section-title" style="font-size: 115px">
            {{ $t("main.maintitle1") }}
          </h1>
          <h2 class="section-title" style="font-size: 115px">
            {{ $t("main.maintitle2") }}
          </h2>
          <button @click="$router.push('/login')" class="section-button">
            {{ $t("main.enter") }}
          </button>
        </div>
      </div>
    </section>
    <section
      id="section2"
      class="wrap m-auto d-flex justify-content-between"
      ref="section2"
    >
      <div class="info-section2">
        <p style="color: #e1225d; margin-left: 120px; margin-bottom: 0">
          {{ $t("main.visualize") }}
        </p>
        <p style="margin-left: 190px; margin-bottom: 0">
          {{ $t("main.your") }}
        </p>
        <p style="margin-left: 40px">{{ $t("main.ownbouquet") }}</p>
      </div>
      <div class="info-section2-list">
        <ul>
          <li>{{ $t("main.infosection1") }}</li>
          <li>{{ $t("main.infosection2") }}</li>
          <li>{{ $t("main.infosection3") }}</li>
          <li>{{ $t("main.infosection4") }}</li>
          <li>{{ $t("main.infosection5") }}</li>
        </ul>
      </div>
    </section>
    <section id="section3" class="wrap" ref="section3">
      <div style="width: 80%" class="m-auto d-flex justify-content-between">
        <div class="info-section3">
          <img
            src="../assets/images/online-registration.png"
            class="online-register"
            alt="Logo"
          />
        </div>
        <div class="info-section3-list">
          <h1>{{ $t("main.register") }}</h1>
          <ul>
            <li>{{ $t("main.infosection6") }}</li>
            <li>{{ $t("main.infosection7") }}</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="section4" class="wrap" ref="section4">
      <div style="width: 80%" class="m-auto d-flex justify-content-between">
        <div class="info-section4-list">
          <h1>{{ $t("main.create") }}</h1>
          <ul>
            <li>{{ $t("main.infosection8") }}</li>
            <li>{{ $t("main.infosection9") }}</li>
          </ul>
        </div>
        <div class="info-section4">
          <img
            src="../assets/images/flower-bouquet.png"
            class="create-bouquet-info"
            alt="Logo"
          />
        </div>
      </div>
    </section>
    <section id="section5" class="wrap" ref="section5">
      <div style="width: 80%" class="m-auto d-flex justify-content-between">
        <div class="info-section5">
          <img
            src="../assets/images/choices.png"
            class="online-register"
            alt="Logo"
          />
        </div>
        <div class="info-section5-list">
          <h1>{{ $t("main.order") }}</h1>
          <ul>
            <li>{{ $t("main.infosection10") }}</li>
            <li>{{ $t("main.infosection11") }}</li>
            <li>{{ $t("main.infosection12") }}</li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="m-auto">
      <div class="footer-cont d-flex justify-content-between">
        <div class="address-info">
          <h2 class="text-left" style="margin-top: 47px">
            Email: {{ shop.email }}
          </h2>
          <h2
            class="text-left"
            style="margin-top: 30px"
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8,+14,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@50.0035819,36.236927,15.92z/data=!4m5!3m4!1s0x4127a0dd7f5b56d1:0x738b2b1325130e3!8m2!3d50.0031556!4d36.2393487"
          >
            {{ $t("main.address") }} {{ shop.address }}
          </h2>
          <h2 class="text-left" style="margin-top: 30px">
            {{ $t("main.phone") }} {{ shop.phone }}
          </h2>
        </div>
        <div
          class="row"
          style="margin-right: 300px; margin-top: 35px; margin-bottom: 20px"
        >
          <div class="col-md-12">
            <ul class="social-icons">
              <li>
                <a href="https://web.telegram.org/k/" target="_blank">
                  <img src="../assets/images/telegram.png" alt="Facebook" />
                  <span class="social-text">Telegram</span>
                </a>
              </li>
              <li>
                <a href="https://uk-ua.facebook.com/" target="_blank">
                  <img src="../assets/images/facebook.png" alt="Twitter" />
                  <span class="social-text">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F"
                  target="_blank"
                >
                  <img src="../assets/images/instagram.png" alt="Instagram" />
                  <span class="social-text">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { getShop } from "@/api/api_request";

export default {
  name: "PageMain",
  data() {
    return {
      shop: [],
    };
  },
  beforeMount() {
    getShop(1).then((response) => {
      this.shop = response.data.shop;
    });
  },
};
</script>
<style scoped>
.address-info h2 {
  font-family: "Comfortaa", cursive;
  font-size: 1.3vw;
  margin: 0 0 40px 300px;
}
.social-icons {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}

.social-icons li {
  margin-bottom: 20px;
}

.social-icons a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.social-icons span {
  font-size: 1.3vw;
}

.social-icons img {
  width: 48px;
  height: 48px;
  margin-right: 10px;
}

.social-text {
  font-size: 1.6vw;
}
#section2 {
  background-color: #fff;
  width: 80%;
}

#section3 {
  background-color: #efeed2;
  width: 100%;
}

#section4 {
  background-color: #f4b4d7;
  width: 100%;
}

#section5 {
  background-color: #d6e4f8;
  width: 100%;
}
.info-section3-list,
.info-section4-list {
  margin-top: 60px;
  font-size: 30px;
  font-family: "Comfortaa", cursive;
}
.info-section3-list h1,
.info-section4-list h1 {
  color: #23a79e;
  font-family: "Marmelad", sans-serif;
  font-size: 5vw;
  margin-bottom: 50px;
}
.info-section3-list ul li,
.info-section4-list ul li {
  list-style: none;
  margin-top: 30px;
}

.info-section5-list {
  margin-top: 30px;
  font-size: 30px;
  font-family: "Comfortaa", cursive;
}
.info-section5-list h1 {
  color: #23a79e;
  font-size: 5vw;
  font-family: "Marmelad", sans-serif;
  margin-bottom: 50px;
}
.info-section5-list ul li {
  list-style: none;
  margin-top: 30px;
}
.full-width {
  display: block;
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  min-height: 100vh;
  object-fit: cover;
}
.container-page {
  position: relative;
}
.flowers-picture-click {
  margin-top: -750px;
  margin-left: 100px;
  width: 37%;
}

.create-bouquet-info {
  margin-top: 50px;
  width: 70%;
  transform: rotate(-50deg);
}

.online-register {
  margin-top: 100px;
  width: 50%;
  margin-left: 120px;
}

.section-info {
  margin-top: -550px;
}

.wrap {
  width: 80%;
  height: 50vh;
}

.info-section2 h1 {
  color: #e1225d;
}

.info-section2 {
  font-size: 4vw;
  margin-top: 40px;
  font-family: "Marmelad", sans-serif;
}
.info-section2-list {
  margin-top: 75px;
  font-size: 30px;
  font-family: "Comfortaa", cursive;
}
.info-section2-list ul li {
  list-style: none;
  margin-bottom: 25px;
}

.section-title {
  color: #e1225d;
  font-weight: 700;
  font-family: "Marmelad", sans-serif;
  margin-right: -20px;
}
.section-info h1 {
  right: 250px;
  font-size: 5vw;
  bottom: 90px;
  position: relative;
}
.section-info h2 {
  right: 150px;
  bottom: 90px;
  font-size: 5vw;
  position: relative;
}
.section-button {
  background-color: #23a79e;
  color: #fff;
  bottom: 50px;
  border: none;
  position: relative;
  right: 90px;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Marmelad", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.section-button:hover {
  background-color: #23a79e;
}
footer {
  background-color: #fff;
  height: 6vh;
}
</style>
