<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">{{ $t("tables.adddecor") }}</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("tables.name") }}</label>
        <MyInput
          type="text"
          class="form-control"
          id="name"
          v-model="name"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("tables.color") }}</label>
        <MyInput
          type="text"
          class="form-control"
          id="color"
          v-model="color"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("tables.Price") }}</label>
        <MyInput
          type="text"
          class="form-control"
          id="price"
          v-model="price"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("tables.Amount") }}</label>
        <MyInput
          type="text"
          class="form-control"
          id="storage_decors_amount"
          v-model="storage_decors_amount"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("tables.img") }}</label>
        <MyInput
          type="file"
          class="form-control"
          id="file"
          v-model="img_path"
          style="width: 70%"
          @change="choosePhoto"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <MyButton @click="submit" type="submit" class="btn">
        {{ $t("tables.adddecor") }}
      </MyButton>
    </div>
  </form>
</template>

<script>
import { createDecor, imageDecorUpload } from "@/api/api_request";

export default {
  name: "AddDecorPage",
  data() {
    return {
      name: "",
      color: "",
      price: "",
      storage_decors_amount: "",
      img_path: "",
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  methods: {
    choosePhoto(event) {
      this.img_path = event.target.files[0];
    },
    submit() {
      createDecor({
        name: this.name,
        color: this.color,
        price: this.price,
        storage_decors_amount: this.storage_decors_amount,
      })
        .then((response) => {
          console.log(response.data.decor.id);
          let formData = new FormData();
          formData.append("image", this.img_path);
          imageDecorUpload(response.data.decor.id, formData);
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
          window.location.href = "/view-decors";
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
