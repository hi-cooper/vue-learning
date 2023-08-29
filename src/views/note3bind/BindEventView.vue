<script setup lang="ts">
import { reactive } from 'vue';

const reactiveState2 = reactive({ count: 4 }); // OK

function count(): void {
  reactiveState2.count++;
}

function countWith(val: number): void {
  reactiveState2.count += val;
}

function countWithEvent(val: number, event: MouseEvent): void {
  reactiveState2.count += val;
  const target = event.target as HTMLButtonElement;
  console.log(target.id);
}
</script>

<template>
  <button v-on:click="count">使用v-on</button>
  <button @click="count">使用@</button>
  <button @click="countWith(4)">带参数</button>
  <button id="ID_A" @click="countWithEvent(5, $event)">带参数和事件1</button>
  <button id="ID_B" @click="countWithEvent(100, $event)">带参数和事件2</button><br />

  {{ reactiveState2.count }}
</template>
