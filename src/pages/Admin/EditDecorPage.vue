<template>
  <form class="container mx-auto" style="margin-bottom: 39px" @submit.prevent>
    <h2 class="mx-auto">{{ $t("tables.editdecor") }}</h2>
    <div class="d-flex justify-content-center">
      <div class="form-group w-100 d-flex justify-content-between">
        <label for="">{{ $t("tables.name") }}</label>
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
        <label for="">{{ $t("tables.color") }}</label>
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
        <label for="">{{ $t("tables.Price") }}</label>
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
        <label for="">{{ $t("tables.Amount") }}</label>
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
        <label for="">{{ $t("tables.img") }}</label>
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
        {{ $t("tables.btnsave") }}
      </MyButton>
    </div>
  </form>
</template>

<script>
import { getDecor, imageDecorUpload, updateDecor } from "@/api/api_request";
import Swal from "sweetalert2";

export default {
  name: "EditDecorPage",
  data() {
    return {
      decor: [],
      isNewPhoto: false,
    };
  },
  methods: {
    validateName(name) {
      const nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z]+$/; // Регулярное выражение для проверки имени
      return nameRegex.test(name);
    },
    validateColor(color) {
      const nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z]+$/; // Регулярное выражение для проверки имени
      return nameRegex.test(color);
    },
    validatePrice(price) {
      // Проверка цены, чтобы она не была меньше 0 и не больше 500
      return price > 0 && price < 500;
    },
    validateAmount(amount) {
      // Проверка цены, чтобы она не была меньше 0 и не больше 500
      return amount > 0 && amount < 500;
    },
    choosePhoto(event) {
      this.decor.img_path = event.target.files[0];
      this.isNewPhoto = true;
    },
    submit() {
      if (!this.validateName(this.decor.name)) {
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
        return; // Останавливаем отправку данных, если имя невалидно
      }
      if (!this.validateColor(this.decor.color)) {
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
        return; // Останавливаем отправку данных, если имя невалидно
      }
      if (!this.validatePrice(this.decor.price)) {
        // Проверка цены
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorrprice"),
          color: "#000",
          text: this.$t("bouquet.texterrorpricebetween"),
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
      if (!this.validateAmount(this.decor.storage_decors_amount)) {
        // Проверка цены
        Swal.fire({
          icon: "error",
          title: this.$t("bouquet.titleerorramount"),
          text: this.$t("bouquet.texterrorpamounttween"),
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
        return;
      }
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
