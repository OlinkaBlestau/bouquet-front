<template>
  <form class="container mx-auto" @submit.prevent>
    <h2 class="mx-auto">Add flower</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Name</label>
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
        <label for="">Color</label>
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
        <label for="">Price</label>
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
        <label for="">Amount</label>
        <MyInput
          type="address"
          class="form-control"
          id="address"
          v-model="storage_flowers_amount"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">File</label>
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
        Save changes
      </MyButton>
    </div>
  </form>
</template>

<script>
import { createFlower, imageFlowerUpload } from "@/api/api_request";

export default {
  name: "AddFlowersPage",
  data() {
    return {
      name: "",
      color: "",
      price: "",
      storage_flowers_amount: "",
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
      createFlower({
        name: this.name,
        color: this.color,
        price: this.price,
        storage_flowers_amount: this.storage_flowers_amount,
      })
        .then((response) => {
          let formData = new FormData();
          formData.append("image", this.img_path);
          imageFlowerUpload(response.data.flower.id, formData);
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
          // window.location.href = "/view-decors";
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
  position: relative;
  top: 80px;
  width: 40%;
  border-radius: 60px;
}

form h2 {
  text-align: center;
  color: #3a0000;
  margin-bottom: 60px;
  font-size: 43px;
  font-family: "Marmelad", sans-serif;
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
  font-size: 30px;
  color: #3a0000;
}
</style>
