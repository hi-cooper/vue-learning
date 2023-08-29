<template>
  <!-- style和att属性未在子组件props中声明 -->
  <MyPenetrate style="color: #ffffff" att="DEMO" @click="onClick" />
</template>

<script lang="ts" setup>
import MyPenetrate from './components/MyPenetrate.vue';

function onClick() {
  console.log('onClick');
}
</script>
