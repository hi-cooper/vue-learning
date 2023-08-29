<template>
  <div class="fancy-div">
    <slot name="header" :text="text"></slot>
    <slot name="main"></slot>
    <slot :message="message" :code="code"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const text = ref('This is TEXT');
const message = ref('This is MESSAGE');
const code = ref(100);
</script>
