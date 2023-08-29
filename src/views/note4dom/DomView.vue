<template>
  <button @click="increase">增加高度</button>
  <button @click="reduce">减少高度</button>
  <div ref="refContainer" class="container"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const refContainer = ref();

function increase() {
  let height = refContainer.value.offsetHeight;
  refContainer.value.style.height = height + 50 + 'px';
}

function reduce() {
  let height = refContainer.value.offsetHeight;
  refContainer.value.style.height = height - 50 + 'px';
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100px;
  background-color: cornflowerblue;
}
</style>
