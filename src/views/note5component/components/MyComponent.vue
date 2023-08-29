<template>
  <button :title="title" @click="triggerCustomEvent($event)">clicked me</button>
</template>

<script lang="ts" setup>
import { ref, type PropType, useAttrs } from 'vue';

const count = ref(0);

const props = defineProps({
  title: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    required: true,
    default: 'submit',
    validator(prop: string): boolean {
      return ['button', 'submit', 'reset'].includes(prop);
    }
  }
});
console.log(props.title);

// =============================================================
const CUSTOM_EVENT_A = 'CUSTOM_EVENT_A';
// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits([CUSTOM_EVENT_A]); // 声明自定义事件

function triggerCustomEvent(event: MouseEvent) {
  console.log('[child] before trigger custom event');
  emit(CUSTOM_EVENT_A, event, count.value++); // 触发带参数自定义事件
  console.log('[child] after trigger custom event');
}

// =============================================================
const attrs = useAttrs();
console.log(attrs['style']);
</script>
