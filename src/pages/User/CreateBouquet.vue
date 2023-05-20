<template>
  <div class="app-container">
    <div class="vs-header">
      <h1>DEMO Project</h1>
      <div class="header-actions">
        <button
          title="Return to the previous state"
          data-action="undo"
          @click="undoElement"
        >
          Undo
        </button>
        <button
          title="Return to the next state"
          data-action="redo"
          @click="redoElement"
        >
          Redo
        </button>
        <button
          title="Duplicate selected component"
          data-action="duplicate"
          @click="duplicateElement"
        >
          Duplicate
        </button>
        <button
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
      </div>
    </div>
    <div class="d-flex">
      <div class="vs-components">
        <div v-for="item in draggableElements" :key="item.id">
          <img
            class="components-icon"
            :src="getImgUrl(item.id)"
            :alt="item.type"
            @click="addNewElementToGrid(item.id, item.id)"
          />
          {{ item.name }}
        </div>
      </div>
      <div>
        <div v-for="(element, index) in gridElements" :key="index">
          <DDR
            :style="getDefaultStyleForElement"
            :onResize="handleResizeAction"
            :onRotate="handleRotateAction"
            :onDrag="handleDragAction"
            :value="element.transform"
          >
            <div>
              <img
                class="components-icon"
                :src="getImgUrl(element.image_id)"
                v-bind:alt="element.type"
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
import { components } from "@/assets/dnd/draggable_components";
import {
  EVENT_APPLICATION_UNDO,
  EVENT_APPLICATION_REDO,
  EVENT_COMPONENT_DUPLICATE,
  EVENT_COMPONENT_DELETE,
  EVENT_APPLICATION_CLEAR,
} from "yoyoo-ddr-vue3";

export default {
  name: "CreateBouquet",
  components: {
    GridComponent,
    DDR,
  },
  data() {
    return {
      draggableElements: components,
      gridElements: [],
    };
  },
  computed: {
    getGridWidth() {
      let grid = document.querySelector(".grid");

      return grid.clientWidth;
    },
    getGridHeight() {
      let grid = document.querySelector(".grid");

      return grid.clientHeight;
    },
    getDefaultAttributesForElement() {
      return {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        rotation: 0,
      };
    },
    getDefaultStyleForElement() {
      return {
        /*top: this.getGridHeight,
        right: this.getGridWidth,*/
        /* top: 200,
        left: 200,*/
        /*width: 300,
        height: 300,*/
      };
    },
  },
  methods: {
    addNewElementToGrid(imageId, elementId) {
      this.gridElements.push({
        ...{
          transform: {
            ...this.getDefaultAttributesForElement,
            id: elementId,
          },
        },
        ...{ image_id: imageId, id: elementId },
      });
    },
    getImgUrl(id) {
      let imageElement = this.draggableElements.filter(
        (element) => element.id === id
      );

      imageElement = imageElement[0];
      let images = require.context("@/assets/dnd", false, /\.png$/);
      return images("./" + imageElement.type + ".png");
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
    undoElement() {
      this.eventbus.$emit(EVENT_APPLICATION_UNDO);
    },
    redoElement() {
      this.eventbus.$emit(EVENT_APPLICATION_REDO);
    },
    duplicateElement() {
      this.eventbus.$emit(EVENT_COMPONENT_DUPLICATE);
    },
    deleteElement() {
      this.eventbus.$emit(EVENT_COMPONENT_DELETE);
    },
    clearGrid() {
      this.eventbus.$emit(EVENT_APPLICATION_CLEAR);
    },
  },
};
</script>

<style lang="less" scoped>
.vs-components {
  width: 200px;
  border-right: 1px solid #ececec;
  position: relative;
  overflow-y: scroll;
  background: #f8f8f8;
  &::-webkit-scrollbar {
    display: none;
  }
  .components-icon {
    width: 35px;
    height: 35px;
    margin-bottom: 6px;
  }
}

.components-item {
  height: 100px;
  width: 50%;
  float: left;
  display: flex;
  &:nth-child(2n + 1) {
    border-right: 1px solid #ececec;
  }
  border-bottom: 1px solid #ececec;
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
  height: 50px;
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;
  background: #f8f8f8;
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
    font-size: 16px;
    color: #555;
    background: #eee;
    background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
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
