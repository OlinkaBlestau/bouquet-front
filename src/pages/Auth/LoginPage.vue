<template>
  <form class="container mx-auto" @submit.prevent="login">
    <h2 class="mx-auto">Log In</h2>
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
        Enter in account
      </MyButton>
    </div>
    <div class="d-flex justify-content-center">
      <a href="/register">I don’t have an account</a>
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
          localStorage.setItem("accessToken", response.data.token);
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
    ...mapMutations([
      "setAccessToken", // map `this.increment()` to `this.$store.commit('increment')`
    ]),
  },
};
</script>

<style scoped>
form {
  background-color: #ffdede;
  padding: 64px;
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
