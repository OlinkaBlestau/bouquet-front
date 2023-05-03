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
  padding: 30px 15px;
  margin-top: 10px;
  font-size: 25px;
  color: black;
  font-weight: 700;
  letter-spacing: 4px;
}
</style>
