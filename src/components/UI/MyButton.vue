<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  border: 1px solid #3a0000;
  background-color: #3a0000;
  color: white;
  font-size: 21px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.btn:hover {
  background-color: #fff;
  color: #3a0000;
}
</style>
