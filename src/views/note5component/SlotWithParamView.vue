<template>
  <SlotWithParam>
    <template #header="headerProps">
      <div class="header">{{ headerProps.text }}</div>
    </template>

    <!-- v-slot简写为# -->
    <template #main>
      <div class="main"></div>
    </template>

    <!-- 匿名slot -->
    <template v-slot="{ message, code }"> {{ message }} = {{ code }} </template>
  </SlotWithParam>
</template>

<script lang="ts" setup>
import SlotWithParam from './components/SlotWithParam.vue';
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: cornflowerblue;
}
.main {
  width: 100%;
  height: 300px;
  background-color: aqua;
}
</style>
