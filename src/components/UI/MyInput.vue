<template>
  <input class="input" :value="modelValue" @input="updateInput" type="text" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid white;
  background-color: #fff;
  padding: 3px 20px;
  margin-top: 10px;
  font-size: 23px;
  color: black;
  letter-spacing: 1px;
}
</style>
