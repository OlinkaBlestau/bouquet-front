<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">{{ $t("signup.editprofile") }}</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("signup.firstname") }}</label>
        <MyInput
          type="firstname"
          class="form-control"
          id="firstname"
          v-model="user.first_name"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("signup.lastname") }}</label>
        <MyInput
          type="lastname"
          class="form-control"
          id="lastname"
          v-model="user.last_name"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Email</label>
        <MyInput
          type="email"
          class="form-control"
          id="email"
          v-model="user.email"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("signup.address") }}</label>
        <MyInput
          type="address"
          class="form-control"
          id="address"
          v-model="user.address"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("signup.phone") }}</label>
        <MyInput
          type="phone"
          class="form-control"
          id="phone"
          v-model="user.phone"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("signup.password") }}</label>
        <MyInput
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
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
        {{ $t("signup.btnsave") }}
      </MyButton>
    </div>
  </form>
</template>

<script>
import { getUser, updateUser } from "@/api/api_request";
import Swal from "sweetalert2";
export default {
  name: "UpdateProfile",
  data() {
    return {
      user: [],
    };
  },
  methods: {
    validateName(name) {
      const nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z]+$/; // Регулярное выражение для проверки имени
      return nameRegex.test(name);
    },
    validateEmail(email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Регулярное выражение для проверки email
      return emailRegex.test(email);
    },
    validatePhone(phone) {
      const phoneRegex = /^\+380\d{9}$/; // Регулярное выражение для проверки украинского номера телефона
      return phoneRegex.test(phone);
    },
    submit() {
      if (
        !this.validateName(this.user.first_name) ||
        !this.validateName(this.user.last_name)
      ) {
        Swal.fire({
          icon: "error",
          color: "#000",
          title: this.$t("signup.erorrnametitle"),
          text: this.$t("signup.erorrnametext"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return; // Останавливаем отправку данных, если имя невалидно
      }
      if (!this.validateEmail(this.user.email)) {
        Swal.fire({
          icon: "error",
          color: "#000",
          title: this.$t("signup.erorremailtitle"),
          text: this.$t("signup.erorremailtext"),
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
      if (!this.validatePhone(this.user.phone)) {
        Swal.fire({
          icon: "error",
          title: this.$t("signup.erorrphonetitle"),
          color: "#000",
          text: this.$t("signup.erorrphonetext"),
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
      updateUser(this.user.id, {
        id: this.user.id,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        address: this.user.address,
        phone: this.user.phone,
        password: this.user.password,
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
          this.$router.push(`/profile/${this.user.id}`);
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
    getUser(this.$route.params.id).then((response) => {
      console.log(response);
      this.user = response.data.user;
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
