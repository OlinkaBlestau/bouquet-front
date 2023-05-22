<template>
  <table class="table table-bordered border-black">
    <thead style="background-color: #ffdede">
      <tr>
        <th scope="col">{{ $t("tables.name") }}</th>
        <th scope="col">{{ $t("tables.color") }}</th>
        <th scope="col">{{ $t("tables.Price") }}</th>
        <th scope="col">{{ $t("tables.Amount") }}</th>
        <th scope="col">{{ $t("tables.img") }}</th>
        <th scope="col">{{ $t("tables.edit") }}</th>
        <th scope="col">{{ $t("tables.delete") }}</th>
      </tr>
    </thead>
    <tbody style="background-color: #ffffff">
      <tr
        v-for="(flower, index) in this.flowers"
        :key="index"
        style="border-color: #3a0000"
      >
        <td>{{ flower.name }}</td>
        <td>{{ flower.color }}</td>
        <td>{{ flower.price }}</td>
        <td>{{ flower.storage_flowers_amount }}</td>
        <td>
          <img :src="getImagePath(flower.img_path)" class="img-fluid" alt="" />
        </td>
        <td>
          <button
            @click="$router.push(`/edit-flower/${flower.id}`)"
            style="background-color: transparent; border: none"
          >
            <img src="../assets/images/edit.png" style="width: 40%" alt="" />
          </button>
        </td>
        <td>
          <button
            @click="deleteFlower(flower.id)"
            style="background-color: transparent; border: none"
          >
            <img
              src="../assets/images/delete-button.png"
              style="width: 40%"
              alt=""
            />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { deleteFlower } from "@/api/api_request";

export default {
  name: "TableFlowerComponent",
  props: {
    flowers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImagePath: function (imagePath) {
      return `http://localhost/storage/${imagePath}`;
    },
    deleteFlower: function (id) {
      deleteFlower(id).then(() => {
        location.reload();
      });
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: "Comfortaa", cursive;
  letter-spacing: 1px;
  font-size: 1.3vw;
  color: #3a0000;
  border: 1px solid #000; /* Change the border color to black */
}

th {
  text-align: center;
  border: 1px solid #3a0000;
  padding: 5px;
}

td {
  text-align: center;
  padding: 5px;
  border: 1px solid #000;
}
img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
