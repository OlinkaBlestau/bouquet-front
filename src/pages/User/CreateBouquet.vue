<template>
  <div class="app-container">
    <div class="vs-header d-flex justify-content-end">
      <div class="header-actions">
        <button
          id="delete"
          title="Delete selected component"
          data-action="delete"
          @click="deleteElement"
        >
          {{ $t("bouquet.btndelete") }}
        </button>
        <button
          id="clear"
          title="Clear all components in the editing area"
          data-action="clear"
          @click="clearGrid"
        >
          {{ $t("bouquet.btnclear") }}
        </button>
        <button
          id="sloy"
          title="Bring selected component to the front"
          @click="moveElementToFront"
        >
          {{ $t("bouquet.btnsloy") }}
        </button>
        <button
          title="Clear all components in the editing area"
          data-action="clear"
          @click="saveBouquet"
        >
          {{ $t("bouquet.btnsave") }}
        </button>
        <button
          title="Clear all components in the editing area"
          data-action="clear"
          @click="addToBasket()"
        >
          {{ $t("bouquet.btnmakeorder") }}
        </button>
      </div>
    </div>
    <div class="d-flex">
      <div class="vs-components flex-column justify-content-center">
        <div>
          <button
            class="mb-5"
            style="width: 50%; height: 80px; font-size: 1.3vw"
            :style="{
              backgroundColor: isDecor ? '#E1225D' : '#fff',
              borderColor: isDecor ? '#E1225D' : '#fff',
              color: isDecor ? '#fff' : '#000',
            }"
            @click="show('decor')"
          >
            {{ $t("bouquet.decors") }}
          </button>
          <button
            class="mb-5"
            style="width: 50%; height: 80px; color: #ffffff; font-size: 1.3vw"
            :style="{
              backgroundColor: !isDecor ? '#E1225D' : '#fff',
              borderColor: !isDecor ? '#E1225D' : '#fff',
              color: !isDecor ? '#fff' : '#000',
            }"
            @click="show('flower')"
          >
            {{ $t("bouquet.flowers") }}
          </button>
        </div>
        <div>
          <div v-if="isDecor === true">
            <div v-for="item in decors" :key="item.id" class="components-item">
              <img
                class="components-icon"
                :src="getImgUrl(item.img_path)"
                :alt="item.type"
                @click="
                  addNewElementToGrid(
                    item.img_path,
                    item.id,
                    'decor',
                    item.price
                  )
                "
              />
            </div>
          </div>
          <div v-else>
            <div v-for="item in flowers" :key="item.id" class="components-item">
              <img
                class="components-icon"
                :src="getImgUrl(item.img_path)"
                :alt="item.type"
                @click="
                  addNewElementToGrid(
                    item.img_path,
                    item.id,
                    'flower',
                    item.price
                  )
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(element, index) in gridElements"
          :key="index"
          @click="selectElement(index)"
        >
          <DDR
            :key="element.draggable_id"
            style="min-width: 8%; object-fit: contain; height: auto"
            :onResize="handleResizeAction"
            :beforeActive="selectElement(index)"
            :onRotate="handleRotateAction"
            :onDrag="handleDragAction"
            :value="element.transform"
            :active="element.transform.active"
          >
            <div>
              <img
                class="components-icon"
                :src="getImgUrl(element.image_id)"
                :alt="element.type"
                :style="{
                  objectFit: 'contain',
                  minWidth: '10%',
                  minHeight: '10%',
                  width: '100%',
                  height: '100%',
                }"
              />
            </div>
          </DDR>
        </div>
      </div>
      <GridComponent
        class="grid"
        style="height: 100vh"
        @click="clearSelectedElement"
      />
    </div>
  </div>
</template>
<script>
import GridComponent from "@/components/DnD/GridComponent.vue";
import DDR from "yoyoo-ddr-vue3";
import "yoyoo-ddr-vue3/dist/yoyoo-ddr-vue3.css";
import {
  createBouquet,
  getBouquet,
  getDecors,
  getFlowers,
} from "@/api/api_request";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CreateBouquet",
  components: {
    GridComponent,
    DDR,
  },
  data() {
    return {
      gridElements: [],
      decors: [],
      flowers: [],
      resultBouquet: [],
      isDecor: true,
      selectedElementIndex: null, // Индекс выбранного элемента
    };
  },
  computed: {
    ...mapGetters(["getUserId"]),
    getDefaultAttributesForElement() {
      return {
        x: 700,
        y: 200,
        width: 100,
        height: 100,
        rotation: 0,
      };
    },
    getTotalPrice() {
      return this.gridElements.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);
    },
    getFlowersIdsFromGrid() {
      return this.gridElements
        .filter((element) => element.type === "flower")
        .map((element) => element.id);
    },
    getDecorsIdsFromGrid() {
      return this.gridElements
        .filter((element) => element.type === "decor")
        .map((element) => element.id);
    },
  },
  beforeMount() {
    getDecors().then((response) => {
      this.decors = response.data.decors.data.map((decor) => {
        return {
          ...decor,
          active: false, // Установите значение по умолчанию
        };
      });
    });
    getFlowers().then((response) => {
      this.flowers = response.data.flowers.data.map((flower) => {
        return {
          ...flower,
          active: false, // Установите значение по умолчанию
        };
      });
    });
    getBouquet(1).then((response) => {
      this.gridElements = JSON.parse(response.data.bouquet.configuration) ?? [];
    });
  },
  methods: {
    moveElementToFront(index) {
      if (index === this.gridElements.length - 1) {
        // Элемент уже на переднем плане
        return;
      }
      const element = this.gridElements.splice(index, 1)[0];
      this.gridElements.push(element);
    },
    selectElement(index) {
      return () => {
        this.selectedElementId = this.gridElements[index].id;
        this.gridElements.forEach((element, i) => {
          element.transform.active = i === index;
        });
      };
    },
    clearSelectedElement() {
      this.selectedElementIndex = -1;
    },
    ...mapMutations(["setBouquetsBasket"]),
    show(type) {
      if (type === "decor") {
        this.isDecor = true;
      } else {
        this.isDecor = false;
      }
    },
    addToBasket() {
      const hasFlowers = this.getFlowersIdsFromGrid.length > 0;
      const hasDecors = this.getDecorsIdsFromGrid.length > 0;

      if (!hasFlowers && !hasDecors) {
        // Show a notification or alert to inform the user that they need to add flowers or decors
        this.$swal({
          title: this.$t("bouquet.no_f_d"),
          text: this.$t("bouquet.add_f_d"),
          icon: "warning",
          color: "#000",
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

      if (!hasFlowers) {
        // Show a notification or alert to inform the user that they need to add flowers
        this.$swal({
          title: this.$t("bouquet.n_f"),
          text: this.$t("bouquet.add_f"),
          icon: "warning",
          color: "#000",
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

      if (!hasDecors) {
        // Show a notification or alert to inform the user that they need to add decors
        this.$swal({
          title: this.$t("bouquet.n_d"),
          text: this.$t("bouquet.add_d"),
          icon: "warning",
          color: "#000",
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
      this.$swal({
        title: this.$t("bouquet.enter_name"),
        input: "text",
        showCancelButton: true,
        confirmButtonText: this.$t("bouquet.submit"),
      }).then((result) => {
        if (result.isConfirmed) {
          const inputValue = result.value;
          createBouquet({
            user_id: this.getUserId,
            name: inputValue,
            total_price: this.getTotalPrice,
            configuration: this.gridElements,
            flowers: this.getFlowersIdsFromGrid,
            decors: this.getDecorsIdsFromGrid,
          }).then((response) => {
            // this.resultBouquet = response.data.bouquet;
            this.$swal({
              title: this.$t("bouquet.enter_amount"),
              input: "number",
              showCancelButton: true,
              confirmButtonText: this.$t("bouquet.submit"),
            }).then((result) => {
              if (result.isConfirmed) {
                this.resultBouquet = {
                  ...response.data.bouquet,
                  amount: result.value,
                  total_price: this.getTotalPrice * result.value,
                };
                this.setBouquetsBasket(this.resultBouquet);
                this.$router.push(`/make-order`);
              }
            });
          });
        }
      });
    },
    addNewElementToGrid(imageId, elementId, type, price) {
      const index =
        this.gridElements.length === 0
          ? 0
          : this.gridElements.lastIndexOf(
              this.gridElements[this.gridElements.length - 1]
            ) + 1;

      this.gridElements.push({
        ...{
          transform: {
            ...this.getDefaultAttributesForElement,
            draggable_id: index,
            active: true,
          },
        },
        ...{
          image_id: imageId,
          id: elementId,
          draggable_id: index,
          type: type,
          price: Number.parseInt(price),
        },
      });

      this.gridElements.forEach((element) => {
        if (element.draggable_id !== index) {
          element.transform.active = false;
        }
      });
    },

    getImgUrl(imagePath) {
      return `http://localhost/storage/${imagePath}`;
    },
    handleDragAction(event, transform) {
      this.defaultHandlerAction(transform);
    },
    handleResizeAction(event, transform) {
      this.defaultHandlerAction(transform);
    },
    handleRotateAction(event, transform) {
      this.defaultHandlerAction(transform);
    },
    handleActive(id) {
      this.gridElements.forEach((element) => {
        element.transform.active = element.draggable_id === id;
      });
    },
    defaultHandlerAction(transform) {
      if (transform !== undefined) {
        let draggableElement = this.gridElements.filter((element) => {
          return (
            Number.parseInt(element.draggable_id) ===
            Number.parseInt(transform.draggable_id)
          );
        });
        let index = this.gridElements.findIndex((element) => {
          return element.draggable_id === draggableElement[0].draggable_id;
        });
        this.gridElements[index].transform = {
          ...transform,
          ...{
            id: draggableElement[0].draggable_id,
          },
        };
      }
    },

    deleteElement() {
      if (this.selectedElementId !== null) {
        const index = this.gridElements.findIndex(
          (element) => element.id === this.selectedElementId
        );
        if (index !== -1) {
          this.gridElements.splice(index, 1);
          this.selectedElementId = null; // Сброс выбранного элемента после удаления
        }
      }
    },
    clearGrid() {
      if (this.gridElements.length > 0) {
        this.gridElements = [];
      }
    },
    saveBouquet() {
      if (this.gridElements.length === 0) {
        // Show a notification or alert to inform the user that there are no elements to save
        this.$swal({
          title: this.$t("bouquet.n_element"),
          text: this.$t("bouquet.empty"),
          icon: "warning",
          color: "#000",
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
      this.$swal({
        title: this.$t("bouquet.enter_name"),
        input: "text",
        showCancelButton: true,
        confirmButtonText: this.$t("bouquet.submit"),
      }).then((result) => {
        if (result.isConfirmed) {
          const inputValue = result.value;
          createBouquet({
            user_id: this.getUserId,
            name: inputValue,
            total_price: this.getTotalPrice,
            configuration: this.gridElements,
            flowers: this.getFlowersIdsFromGrid,
            decors: this.getDecorsIdsFromGrid,
          }).then(() => {
            this.$router.push("/view-bouquets");
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  background-color: #fff;
}
.vs-components {
  width: 500px;
  border-right: 1px solid #ececec;
  position: relative;
  overflow-y: scroll;
  background: #f8f8f8;
  &::-webkit-scrollbar {
    display: none;
  }
  .components-icon {
    width: 150px;
    object-fit: contain;
    height: 150px;
  }
}

.components-item {
  height: 100px;
  width: 50%;
  float: left;
  display: flex;
  margin-bottom: 100px;
  align-items: center;
  justify-content: center;
  cursor: move;
  flex-direction: column;
  font-weight: 300;
  &:hover {
    background: #f5f5f5;
  }
}

.vs-header {
  height: 80px;
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  background: #fff;
  h1 {
    text-align: center;
    font-size: 20px;
    color: #333;
    font-weight: 300;
    width: 200px;
  }
  .header-actions {
    display: flex;
    align-items: center;
  }
  button {
    padding: 5px 12px;
    font-size: 1.1vw;
    color: #fff;
    background: #e1225d;
    border: 1px solid #d5d5d5;
    margin-right: 20px;
    border-radius: 4px;
    &:hover {
      background: #ddd;
      cursor: pointer;
      transition: all 300ms;
      background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
    }
  }
}

#delete,
#sloy,
#clear {
  border: #000 solid 1px;
  background-color: transparent;
  color: #000;
}
</style>
