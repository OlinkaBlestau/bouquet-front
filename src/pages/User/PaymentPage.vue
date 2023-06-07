<template>
  <div class="w-50 m-auto cont">
    <div class="payment">
      <h2 class="text-center title" style="font-size: 2.3vw">
        {{ $t("payment.title") }}
      </h2>
      <form id="stripe-payment-element-form">
        <div class="form-group">
          <input
            class="form-control"
            style="height: 50px"
            id="card-holder-name"
            type="text"
            v-model="fullName"
          />
        </div>
        <div id="stripe-payment-element-mount-point" />
        <slot name="stripe-payment-element-errors">
          <div id="stripe-payment-element-errors" role="alert" />
        </slot>
      </form>
      <div class="d-flex justify-content-center">
        <button
          ref="submitButtonRef"
          @click="purchase($event)"
          type="submit"
          class="custom-button m-auto"
        >
          {{ $t("payment.btn") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
import { getStripeIntent, purchase } from "@/api/api_request";
import { mapGetters } from "vuex";
const ELEMENT_TYPE = "payment";

export default {
  data() {
    return {
      stripe: null,
      card: null,
      options: {
        clientSecret: "",
      },
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  async beforeMount() {
    const stripe = await loadStripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
    this.stripe = stripe;
    const userId = localStorage.getItem("userId");
    await getStripeIntent(userId).then((response) => {
      this.options.clientSecret = response.data.client_secret;

      let elements = stripe.elements(this.options);
      this.card = elements.create(ELEMENT_TYPE);
      this.card.mount("#stripe-payment-element-mount-point");
    });
  },
  computed: {
    ...mapGetters(["getUserId"]),
  },
  methods: {
    async purchase(e) {
      e.preventDefault();
      const cardHolderName = document.getElementById("card-holder-name");

      const { paymentMethod, error } = await this.stripe.createPaymentMethod(
        "card",
        this.card,
        {
          billing_details: { name: cardHolderName.value },
        }
      );

      if (error) {
        console.log(error);
      } else {
        purchase({
          bouquet: localStorage.getItem("bouquets"),
          shop_id: localStorage.getItem("shopId"),
          payment_method: paymentMethod.id,
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
      }
    },
  },
};
</script>
<style scoped>
.cont {
  position: relative;
  top: 80px;
}
form {
  padding: 40px;
}
.title {
  margin-top: 35px;
  font-family: "Marmelad", sans-serif;
}
.custom-button {
  background-color: #e1225d;
  color: #fff;
  border: none;
  font-size: 1.1vw;
  width: 200px;
  height: 55px;
  border-radius: 20px;
}
.custom-button:hover {
  background-color: #fff;
  color: #000;
}
.payment {
  background-color: #ffdede;
  padding: 10px;
  border-radius: 20px;
}
.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  font-size: 1.2vw;
  letter-spacing: 2px;
  height: 30px;
  padding: 10px;
  border-radius: 4px;
  outline: none;
}
</style>
