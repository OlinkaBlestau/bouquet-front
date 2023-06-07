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
import Swal from "sweetalert2";
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
    validateName() {
      const namePattern = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z]+$/;
      if (!namePattern.test(this.name)) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorrname"),
          color: "#000",
          text: this.$t("bouquet.texterorrname"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }
      return true;
    },
    validateColor() {
      const namePattern = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z]+$/;
      if (!namePattern.test(this.color)) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorcolor"),
          color: "#000",
          text: this.$t("bouquet.texterorrcolor"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }
      return true;
    },
    validatePrice() {
      const priceValue = parseFloat(this.price);
      if (priceValue <= 0) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorrprice"),
          color: "#000",
          text: this.$t("bouquet.texterorrprice"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }
      if (priceValue > 500) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorrprice0"),
          color: "#000",
          text: this.$t("bouquet.texterorrprice0"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }

      return true;
    },

    validateAmount() {
      const amountPattern = /^\d+$/;
      if (!amountPattern.test(this.storage_decors_amount)) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorramount"),
          text: this.$t("bouquet.texterorramount"),
          timer: 4000,
          color: "#000",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }
      const amountValue = parseInt(this.storage_decors_amount);
      if (amountValue <= 0) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorramount0"),
          color: "#000",
          text: this.$t("bouquet.texterorramount0"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }
      if (amountValue > 500) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorramount500"),
          color: "#000",
          text: this.$t("bouquet.texterorramount500"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return false;
      }

      return true;
    },
    submit() {
      if (!this.validateName()) {
        return;
      }
      if (!this.validateColor()) {
        return;
      }
      if (!this.validatePrice()) {
        return;
      }
      if (!this.validateAmount()) {
        return;
      }
      if (!this.img_path) {
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorrfile"),
          color: "#000",
          text: this.$t("bouquet.texterorrfile"),
          timer: 4000,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          timerProgressBar: true,
        });
        return;
      }
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
          /*window.location.href = "/view-decors";*/
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
