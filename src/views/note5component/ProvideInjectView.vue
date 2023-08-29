<template>
  <ProvideInjectFirstChild />
</template>

<script lang="ts" setup>
import { provide, readonly, ref } from 'vue';
import ProvideInjectFirstChild from './components/ProvideInjectFirstChild.vue';

// provide(<注入名>, <值>);
provide('message1', 'MESSAGE_1');

// 值可以是任意类型，包括响应式的状态，比如一个 ref
const message2 = ref('MESSAGE_2');
provide('message2', message2);

const message3 = ref('MESSAGE_3');
provide('message3', message3);

const message4 = ref('MESSAGE_4');
provide('message4', message4);

const message5 = ref('MESSAGE_5');
provide('message5', readonly(message5));

const message6 = ref('MESSAGE_6');
provide('message6', readonly(message6));
</script>
