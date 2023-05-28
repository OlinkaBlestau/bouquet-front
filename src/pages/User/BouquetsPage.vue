<template>
  <div class="cont m-auto">
    <h1 class="text-center">{{ $t("bouquet.viewbouquet") }}</h1>
    <section class="section-grid" v-if="bouquets.length > 0">
      <div v-for="bouquet in bouquets" :key="bouquet" class="view-bouquet">
        <div class="view-bouquet-item" style="margin-bottom: 20px">
          <img class="image" src="../../assets/images/bouquet.png" />
          <h2 class="text-name">
            {{ bouquet.name }}
          </h2>
          <p class="date-text">{{ momentDate(bouquet.created_at) }}</p>
          <div class="icon-group">
            <button
              style="background-color: transparent; border: none"
              @click="edit(bouquet.id)"
            >
              <img
                class="icon-open"
                src="../../assets/images/icon-open.png"
                style="width: 50px; height: 50px; margin-right: 17px"
              />
            </button>
            <button
              style="background-color: transparent; border: none"
              @click="deleteButton(bouquet.id)"
            >
              <img
                class="icon-delete"
                src="../../assets/images/delete-button.png"
                style="width: 40px; height: 40px; margin-right: 17px"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
    <h2 class="hidden-title" v-else>{{ $t("bouquet.titleno") }}</h2>
  </div>
</template>

<script>
import { deleteBouquet, getBouquets } from "@/api/api_request";
import moment from "moment";

export default {
  name: "BouquetsPage",
  data() {
    return {
      bouquets: [],
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
    momentDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD.MM.YYYY");
    },
    deleteButton(id) {
      deleteBouquet(id).then(() => {
        location.reload();
      });
    },
    edit(id) {
      this.$router.push(`/edit-bouquets/${id}`);
    },
  },
  beforeMount() {
    getBouquets().then((response) => {
      let id = localStorage.getItem("userId");
      this.bouquets = response.data.bouquets.data.filter(
        (e) => e.user_id === Number(id)
      );
    });
  },
};
</script>

<style scoped>
.cont {
  width: 87%;
  position: relative;
  top: 80px;
}
.hidden-title {
  font-size: 1.7vw;
  text-align: center;
  margin-top: 150px;
  color: #f8f8f8;
  letter-spacing: 5px;
}
.section-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
h1 {
  font-family: "Marmelad", sans-serif;
  color: #3a0000;
}
.view-bouquet-item {
  box-shadow: 0 5px 10px -2px gray;
  margin-top: 65px;
  width: 410px;
  background-color: #ffdede;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  transition: height 0.3s;
  height: auto;
}

img {
  position: relative;
  left: 25px;
  width: 380px;
  height: 380px;
  object-fit: contain;
}
.text-name {
  font-size: 1.5vw;
  position: relative;
  left: 15px;
  top: 10px;
  color: #3a0000;
  width: 92%;
  text-align: justify;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.3s;
  max-height: 1.5em;
}
.view-bouquet-item:hover .text-name {
  max-height: none;
}
.text-name:hover {
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  text-align: justify;
}

.date-text {
  position: relative;
  left: 15px;
  top: 45px;
  color: #3a0000;
  font-size: 1vw;
}
.icon-group {
  position: relative;
  top: -20px;
  left: 250px;
}
</style>
