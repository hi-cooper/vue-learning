<template>
  [GrandChild] appProvideMessage = {{ appProvideMessage }}<br />
  [GrandChild] message1 = {{ message1 }}<br />
  [GrandChild] message1_1 = {{ message1_1 }}<br />
  [GrandChild] message2 = {{ message2 }}<br />
  [GrandChild] message3 = {{ message3 }}<br />
  [GrandChild] message4 = {{ message4 }}<br />
  [GrandChild] message5 = {{ message5 }}<br />
  [GrandChild] message6 = {{ message6 }}<br />
</template>

<script lang="ts" setup>
import { inject } from 'vue';

const appProvideMessage = inject('appProvideMessage'); // 应用层 Provide
const message1 = inject('message1');
const message1_1 = inject('message1');
const message2 = inject('message2');
const message3 = inject('message3');
const message4 = inject('message4');
const message5 = inject('message5');
const message6 = inject('message6');
</script>
