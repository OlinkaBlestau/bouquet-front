<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">Sign Up</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">First name</label>
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
        <label for="">Last name</label>
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
        <label for="">Address</label>
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
        <label for="">Phone</label>
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
        <label for="">Password</label>
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
        Make an account
      </MyButton>
    </div>
    <div class="d-flex justify-content-center">
      <a href="/register">I have already an account</a>
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
  margin-bottom: 30px;
  position: relative;
  top: 100px;
  width: 40%;
  border-radius: 60px;
}
form h2 {
  text-align: center;
  color: #3a0000;
  margin-bottom: 60px;
  font-size: 43px;
  letter-spacing: 5px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 60px;
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
  font-size: 30px;
  color: #3a0000;
}
</style>
