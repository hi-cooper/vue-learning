<template>
  <button @click="triggerCustomEvent($event)">触发自定义事件</button>
</template>

<script lang="ts" setup>
const CUSTOM_EVENT_A = 'CUSTOM_EVENT_A';
// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits([CUSTOM_EVENT_A]);

function triggerCustomEvent(event: MouseEvent) {
  console.log('aaaaaaa');
  emit(CUSTOM_EVENT_A, 123, event);
  console.log('bbbbbbbb');
}
</script>
