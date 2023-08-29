<template>
  包含以下知识点：
  <ul>
    <li>【组件间传参】父组件-->子组件：通过defineProps</li>
    <li>【组件间传参】子组件-->父组件：通过defineEmits（自定义事件）</li>
    <li>
      透传Attributes：传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 v-on
      事件监听器（如下示例中的style属性）
    </li>
    <li>子父组件都声明同一事件（如click），那么都会被触发</li>
    <li>使用透传属性：const attrs = useAttrs()</li>
  </ul>
  <MyComponent
    title="button"
    @click="onClick"
    @CUSTOM_EVENT_A="onCustomEventA"
    style="color: #ffffff"
  />
</template>

<script lang="ts" setup>
import MyComponent from './components/MyComponent.vue';

function onCustomEventA(event: MouseEvent, val: number) {
  console.log('[parent] begin handle custom event');
  const btn = event.target as HTMLButtonElement;
  btn.innerText = val + '';
  console.log('[parent] end handle custom event');
}

function onClick() {
  console.log('[parent] onClick');
}
</script>
