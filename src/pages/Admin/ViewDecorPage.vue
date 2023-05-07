<template>
  <div class="cont m-auto">
    <h2 class="text-center mb-5">View Decors</h2>
    <TableDecorComponent :decors="decors" />
    <div class="d-flex justify-content-center align-items-center mt-3">
      <button class="btn-add" @click="$router.push(`/add-decor`)">
        Add new
      </button>
    </div>
  </div>
</template>
<script>
import TableDecorComponent from "@/components/TableDecorComponent.vue";
import { getDecors } from "@/api/api_request";

export default {
  name: "ViewDecorPage",
  components: { TableDecorComponent },
  data() {
    return {
      decors: [],
    };
  },
  mounted() {
    document.body.style.background =
      "linear-gradient(to left, #F5B9FF, #B6CFD3)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },
  beforeMount() {
    getDecors().then((response) => {
      this.decors = response.data.decors.data;
    });
  },
};
</script>

<style scoped>
.cont {
  width: 80%;
  position: relative;
  top: 100px;
}
h2 {
  font-family: "Marmelad", sans-serif;
  color: #3a0000;
  font-size: 2vw;
}
.btn-add {
  background-color: #3a0000;
  border-radius: 20px;
  border: 1px solid #3a0000;
  color: white;
  width: 15%;
  padding: 10px 5px;
  font-size: 1.4vw;
}
</style>
