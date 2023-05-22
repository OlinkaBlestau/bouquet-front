<template>
  <div class="cont m-auto">
    <h2 class="text-center mb-5">{{ $t("tables.viewflowers") }}</h2>
    <TableFlowerComponent :flowers="flowers" />
    <div class="d-flex justify-content-center align-items-center mt-3">
      <button @click="$router.push(`/add-flowers`)" class="btn-add">
        {{ $t("tables.btnadd") }}
      </button>
    </div>
  </div>
</template>

<script>
import TableFlowerComponent from "@/components/TableFlowerComponent.vue";
import { getFlowers } from "@/api/api_request";

export default {
  name: "ViewFlowers",
  components: { TableFlowerComponent },
  data() {
    return {
      flowers: [],
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
    getFlowers().then((response) => {
      this.flowers = response.data.flowers.data;
    });
  },
};
</script>

<style scoped>
.cont {
  width: 80%;
  position: relative;
  top: 80px;
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
  font-size: 1.2vw;
  margin-top: 20px;
}

.btn-add:hover {
  background-color: #fff;
  color: #3a0000;
}
</style>
