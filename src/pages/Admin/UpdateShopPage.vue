<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">{{ $t("shop.esitprofile") }}</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Email</label>
        <MyInput
          type="email"
          class="form-control"
          id="email"
          v-model="shop.email"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("shop.phone") }}</label>
        <MyInput
          type="phone"
          class="form-control"
          id="phone"
          v-model="shop.phone"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("shop.address") }}</label>
        <MyInput
          type="address"
          class="form-control"
          id="address"
          v-model="shop.address"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Telegram</label>
        <MyInput
          type="telegram"
          class="form-control"
          id="telegram"
          v-model="shop.telegram"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Instagram</label>
        <MyInput
          type="instagram"
          class="form-control"
          id="instagram"
          v-model="shop.instagram"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Facebook</label>
        <MyInput
          type="facebook"
          class="form-control"
          id="facebook"
          v-model="shop.facebook"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <MyButton
        @click="submit"
        type="submit"
        class="btn"
        style="margin-top: 20px"
      >
        {{ $t("shop.btnsave") }}
      </MyButton>
    </div>
  </form>
</template>

<script>
import { getShop, updateShop } from "@/api/api_request";
import Swal from "sweetalert2";

export default {
  name: "UpdateShopPage",
  data() {
    return {
      shop: [],
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Регулярное выражение для проверки email
      return emailRegex.test(email);
    },
    validatePhone(phone) {
      const phoneRegex = /^\+380\d{9}$/; // Регулярное выражение для проверки украинского номера телефона
      return phoneRegex.test(phone);
    },
    submit() {
      if (!this.validateEmail(this.shop.email)) {
        Swal.fire({
          icon: "error",
          color: "#000",
          title: "емаил",
          text: "signup.erorremailtext",
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return; // Останавливаем отправку данных, если email невалиден
      }
      if (!this.validatePhone(this.shop.phone)) {
        Swal.fire({
          icon: "error",
          title: "sтелеф",
          color: "#000",
          text: "signup.erorrphonetext",
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return; // Останавливаем отправку данных, если номер телефона невалиден
      }
      updateShop(this.shop.id, {
        id: this.shop.id,
        email: this.shop.email,
        address: this.shop.address,
        phone: this.shop.phone,
        instagram: this.shop.instagram,
        telegram: this.shop.telegram,
        facebook: this.shop.facebook,
      })
        .then(() => {
          this.$swal({
            icon: "success",
            color: "#000",
            timer: 4000,
            timerProgressBar: true,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          this.$router.push(`/shop-info/${this.shop.id}`);
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            color: "#000",
            title: this.$t("signup.erorrtitle"),
            text: this.$t("signup.erorretext"),
            timer: 4000,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            timerProgressBar: true,
          });
        });
    },
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
      console.log(response);
      this.shop = response.data.shop;
    });
  },
};
</script>

<style scoped>
form {
  background-color: #ffdede;
  padding: 64px;
  margin-bottom: 30px;
  position: relative;
  top: 80px;
  width: 40%;
  border-radius: 60px;
}
form h2 {
  text-align: center;
  color: #3a0000;
  font-family: "Marmelad", sans-serif;
  margin-bottom: 60px;
  font-size: 43px;
  letter-spacing: 5px;
}

.form-group {
  margin-bottom: 40px;
}
a {
  color: #3a0000;
  text-decoration: underline;
  font-size: 18px;
  letter-spacing: 2px;
}
label {
  position: relative;
  top: 21px;
  font-size: 23px;
  color: #3a0000;
}
</style>
