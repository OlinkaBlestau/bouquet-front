<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">Edit decor</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">Name</label>
        <MyInput
          type="text"
          class="form-control"
          id="name"
          v-model="decor.name"
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
          v-model="decor.color"
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
          v-model="decor.price"
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
          v-model="decor.storage_decors_amount"
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
          v-model="decor.img_path"
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
import { getDecor, imageDecorUpload, updateDecor } from "@/api/api_request";

export default {
  name: "EditDecorPage",
  data() {
    return {
      decor: [],
      isNewPhoto: false,
    };
  },
  methods: {
    choosePhoto(event) {
      this.decor.img_path = event.target.files[0];
      this.isNewPhoto = true;
    },
    submit() {
      updateDecor(this.decor.id, {
        name: this.decor.name,
        color: this.decor.color,
        price: this.decor.price,
        storage_decors_amount: this.decor.storage_decors_amount,
      })
        .then(() => {
          if (this.isNewPhoto) {
            let formData = new FormData();
            formData.append("image", this.decor.img_path);
            imageDecorUpload(this.decor.id, formData);
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
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  beforeMount() {
    getDecor(this.$route.params.id).then((response) => {
      this.decor = response.data.decor;
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
