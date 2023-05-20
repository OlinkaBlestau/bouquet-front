<template>
  <div class="app-container">
    <div class="vs-header d-flex justify-content-end">
      <div class="header-actions">
        <button
          style="background-color: #e1225d"
          title="Delete selected component"
          data-action="delete"
          @click="deleteElement"
        >
          Delete
        </button>
        <button
          title="Clear all components in the editing area"
          data-action="clear"
          @click="clearGrid"
        >
          Clear
        </button>
        <button
          title="Clear all components in the editing area"
          data-action="clear"
          @click="saveBouquet"
        >
          Save
        </button>
        <button
          title="Clear all components in the editing area"
          data-action="clear"
          @click="makeOrder"
        >
          Make an order
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
            Decors
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
            Flowers
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
        <div v-for="(element, index) in gridElements" :key="index">
          <DDR
            style="min-width: 8%; object-fit: contain; height: auto"
            :onResize="handleResizeAction"
            :beforeActive="() => handleActive(element.id)"
            :active="index === selectedElementIndex"
            :onRotate="handleRotateAction"
            :onDrag="handleDragAction"
            :value="element.transform"
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
      <GridComponent class="grid" style="height: 100vh" />
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
import { mapGetters } from "vuex";

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
      isDecor: true,
      selectedElementIndex: -1, // Индекс выбранного элемента
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
      this.gridElements = JSON.parse(response.data.bouquet.configuration);
    });
  },
  methods: {
    show(type) {
      if (type === "decor") {
        this.isDecor = true;
      } else {
        this.isDecor = false;
      }
    },
    addNewElementToGrid(imageId, elementId, type, price) {
      this.gridElements.push({
        ...{
          transform: {
            ...this.getDefaultAttributesForElement,
            id: elementId,
          },
        },
        ...{
          image_id: imageId,
          id: elementId,
          type: type,
          price: Number.parseInt(price),
        },
      });
      this.selectedElementIndex = this.gridElements.length - 1;
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
      this.selectedElementIndex = this.gridElements.findIndex(
        (element) => element.id === id
      );
    },
    defaultHandlerAction(transform) {
      if (transform !== undefined) {
        let draggableElement = this.gridElements.filter((element) => {
          return Number.parseInt(element.id) === Number.parseInt(transform.id);
        });
        let index = this.gridElements.findIndex((element) => {
          return element.id === draggableElement[0].id;
        });
        this.gridElements[index].transform = {
          ...transform,
          ...{
            id: draggableElement[0].id,
          },
        };
      }
    },
    deleteElement() {
      console.log(this.selectedElementIndex);
      if (this.selectedElementIndex === -1) {
        this.selectedElementIndex = this.gridElements.length - 1;
      }
      if (this.selectedElementIndex !== -1) {
        this.gridElements.splice(this.selectedElementIndex, 1);
        this.selectedElementIndex = -1; // Сброс выбранного элемента после удаления
      }
    },
    clearGrid() {
      if (this.gridElements.length > 0) {
        this.gridElements = [];
      }
    },
    saveBouquet() {
      this.$swal({
        title: "Введите название",
        input: "text",
        showCancelButton: true,
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          const inputValue = result.value;
          createBouquet({
            user_id: this.getUserId,
            name: inputValue,
            total_price: this.getTotalPrice,
            configuration: this.gridElements,
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
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
    font-size: 1.3vw;
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
</style>
