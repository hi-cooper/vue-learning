<template>
  <NormalSlot>
    <template v-slot:header>
      <div class="header"></div>
    </template>

    <!-- v-slot简写为# -->
    <template #main>
      <div class="main"></div>
    </template>
  </NormalSlot>
</template>

<script lang="ts" setup>
import NormalSlot from './components/NormalSlot.vue';
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
