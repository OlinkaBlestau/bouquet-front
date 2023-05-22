<template>
  <table class="table table-bordered">
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
        v-for="(decor, index) in this.decors"
        :key="index"
        style="border-color: #3a0000"
      >
        <td>{{ decor.name }}</td>
        <td>{{ decor.color }}</td>
        <td>{{ decor.price }}</td>
        <td>{{ decor.storage_decors_amount }}</td>
        <td>
          <img :src="getImagePath(decor.img_path)" class="img-fluid" alt="" />
        </td>
        <td>
          <button
            style="background-color: transparent; border: none"
            @click="$router.push(`/edit-decor/${decor.id}`)"
          >
            <img src="../assets/images/edit.png" style="width: 40%" alt="" />
          </button>
        </td>
        <td>
          <button
            @click="deleteDecor(decor.id)"
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
import { deleteDecor } from "@/api/api_request";

export default {
  name: "TableDecorComponent",
  props: {
    decors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImagePath: function (imagePath) {
      return `http://localhost/storage/${imagePath}`;
    },
    deleteDecor: function (id) {
      deleteDecor(id).then(() => {
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
