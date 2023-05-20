<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">Edit flower</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Name</label>
        <MyInput
          type="text"
          class="form-control"
          id="name"
          v-model="flower.name"
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
          v-model="flower.color"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Price</label>
        <MyInput
          type="number"
          class="form-control"
          id="price"
          v-model="flower.price"
          style="width: 70%"
          required
        />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Amount</label>
        <MyInput
          type="amount"
          class="form-control"
          id="amount"
          v-model="flower.storage_flowers_amount"
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
          v-model="flower.img_path"
          style="width: 70%"
          @change="choosePhoto"
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
import { getFlower, imageFlowerUpload, updateFlower } from "@/api/api_request";

export default {
  name: "EditFlowersPage",
  data() {
    return {
      flower: [],
      isNewPhoto: false,
    };
  },
  methods: {
    choosePhoto(event) {
      this.flower.img_path = event.target.files[0];
      this.isNewPhoto = true;
    },
    submit() {
      updateFlower(this.flower.id, {
        name: this.flower.name,
        color: this.flower.color,
        price: this.flower.price,
        storage_flowers_amount: this.flower.storage_flowers_amount,
      })
        .then(() => {
          if (this.isNewPhoto) {
            let formData = new FormData();
            formData.append("image", this.flower.img_path);
            imageFlowerUpload(this.flower.id, formData);
          }
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
          window.location.href = "/view-flowers";
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
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  beforeMount() {
    getFlower(this.$route.params.id).then((response) => {
      this.flower = response.data.flower;
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
  margin-bottom: 60px;
  font-size: 43px;
  letter-spacing: 5px;
  font-family: "Marmelad", sans-serif;
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
