<script setup lang="ts">
import { reactive } from 'vue';

const reactiveState2 = reactive({ count: 4 }); // OK

function sayHello(msg: string): string {
  return msg + reactiveState2.count;
}
</script>

<template>
  v-bind方式：<input v-bind:value="reactiveState2.count" /><br />
  简写方式：<input :value="reactiveState2.count" /><br />
  绑定函数：<input :value="sayHello('hello, ')" />
</template>
