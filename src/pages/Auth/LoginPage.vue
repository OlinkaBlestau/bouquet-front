<template>
  <form class="container mx-auto" @submit.prevent="login">
    <h2 class="mx-auto">{{ $t("login.login") }}</h2>
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
        <label for="">{{ $t("login.password") }}</label>
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
        {{ $t("login.btnenter") }}
      </MyButton>
    </div>
    <div class="d-flex justify-content-center" style="margin-top: 15px">
      <a href="/register">{{ $t("login.signup") }}</a>
    </div>
  </form>
</template>

<script>
import { login } from "@/api/api_request";
import { mapMutations } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to right, #FC8F8F, #FFF1C0)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  methods: {
    submit() {
      login({
        email: this.email,
        password: this.password,
      })
        .then((response) => {
          this.setAccessToken(response.data.token);
          this.setRole(response.data.role);
          this.setUserId(response.data.userId);
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("userId", response.data.userId);
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
          this.$router.push(`/profile/${response.data.userId}`);
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
    ...mapMutations([
      "setAccessToken",
      "setRole",
      "setUserId", // map `this.increment()` to `this.$store.commit('increment')`
    ]),
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
  font-size: 23px;
  color: #3a0000;
}
</style>
