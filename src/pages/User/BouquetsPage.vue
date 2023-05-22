<template>
  <div class="cont m-auto">
    <h1 class="text-center">{{ $t("bouquet.viewbouquet") }}</h1>
    <div class="view-bouquet justify-content-between d-flex">
      <div class="view-bouquet-item">
        <img class="image" src="../../assets/images/bouquet.png" />
        <h2 class="text-name">
          Bouquet for mum, that I made for her Birthday авиаипаи укрукрукр
          укпукрир укиуии
        </h2>
        <p class="date-text">14.01.2023</p>
        <div class="icon-group">
          <button style="background-color: transparent; border: none">
            <img
              class="icon-open"
              src="../../assets/images/icon-open.png"
              style="width: 50px; height: 50px; margin-right: 17px"
            />
          </button>
          <button style="background-color: transparent; border: none">
            <img
              class="icon-delete"
              src="../../assets/images/delete-button.png"
              style="width: 40px; height: 40px; margin-right: 17px"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.cont {
  width: 87%;
  position: relative;
  top: 80px;
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
