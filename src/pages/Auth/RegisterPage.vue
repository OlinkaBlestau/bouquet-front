<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">{{ $t("signup.signup") }}</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("signup.firstname") }}</label>
        <MyInput
          type="firstname"
          class="form-control"
          id="firstname"
          v-model="firstname"
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
          v-model="lastname"
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
          v-model="email"
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
          v-model="address"
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
          v-model="phone"
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
          v-model="password"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <MyButton @click="submit" type="submit" class="btn">
        {{ $t("signup.btnenter") }}
      </MyButton>
    </div>
    <div class="d-flex justify-content-center" style="margin-top: 15px">
      <a href="/login">{{ $t("signup.login") }}</a>
    </div>
  </form>
</template>

<script>
import { registration } from "@/api/api_request";
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
    };
  },
  methods: {
    submit() {
      registration({
        first_name: this.firstname,
        last_name: this.lastname,
        email: this.email,
        address: this.address,
        phone: this.phone,
        password: this.password,
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
          this.$router.push("/login");
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            color: "#000",
            title: this.$t("something_went_wrong.title"),
            text: this.$t("something_went_wrong.text"),
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
      "linear-gradient(to right, #FC8F8F, #FFF1C0)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
};
</script>

<style scoped>
form {
  background-color: #ffdede;
  padding: 64px;
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
