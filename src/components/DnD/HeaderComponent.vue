<template>
  <div class="vs-header">
    <h1>DEMO Project</h1>
    <div class="header-actions">
      <button
        title="Return to the previous state"
        data-action="undo"
        @click="processEventApplicationUndo"
      >
        Undo
      </button>
      <button
        title="Return to the next state"
        data-action="redo"
        @click="processEventApplicationRedo"
      >
        Redo
      </button>
      <button
        title="Duplicate selected component"
        data-action="duplicate"
        @click="processEventComponentDuplicate"
      >
        Duplicate
      </button>
      <button
        title="Delete selected component"
        data-action="delete"
        @click="processEventComponentDelete"
      >
        Delete
      </button>
      <button
        title="Clear all components in the editing area"
        data-action="clear"
        @click="processEventApplicationClear"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import {
  EVENT_APPLICATION_UNDO,
  EVENT_APPLICATION_REDO,
  EVENT_COMPONENT_DUPLICATE,
  EVENT_COMPONENT_DELETE,
  EVENT_APPLICATION_CLEAR,
} from "@/enums/dnd-events";
export default {
  name: "HeaderComponent",
  methods: {
    processEventApplicationUndo() {
      this.eventbus.$emit(EVENT_APPLICATION_UNDO);
    },
    processEventApplicationRedo() {
      this.eventbus.$emit(EVENT_APPLICATION_REDO);
    },
    processEventComponentDuplicate() {
      this.eventbus.$emit(EVENT_COMPONENT_DUPLICATE);
    },
    processEventComponentDelete() {
      this.eventbus.$emit(EVENT_COMPONENT_DELETE);
    },
    processEventApplicationClear() {
      this.eventbus.$emit(EVENT_APPLICATION_CLEAR);
    },
  },
};
</script>

<style lang="less">
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
