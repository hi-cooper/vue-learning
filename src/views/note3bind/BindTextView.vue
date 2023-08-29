<script setup lang="ts">
import { reactive, ref } from 'vue';

const refState1 = ref(1); // OK
const refState2 = ref({ count: 2 }); // OK
// const reactiveState1 = reactive(3); // NOT OK
const reactiveState2 = reactive({ count: 4 }); // OK

console.log(refState1.value); // 1
console.log(refState2.value.count); // 2
console.log(reactiveState2.count); // 4

function sayHelloRefState1(msg: string): string {
  return msg + refState1.value;
}
</script>

<template>
  refState1 = {{ refState1 }}<br />
  refState2 = {{ refState2 }}<br />
  refState2.count = {{ refState2.count }}<br />
  reactiveState2 = {{ reactiveState2 }}<br />
  reactiveState2.count = {{ reactiveState2.count }}<br />
  {{ sayHelloRefState1('hello, ') }}<br />
  简单表达式 = {{ 'It is ' + refState1 }}<br />
</template>
