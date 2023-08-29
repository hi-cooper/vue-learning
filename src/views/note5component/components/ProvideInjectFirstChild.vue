<template>
  [FirstChild] appProvideMessage = {{ appProvideMessage }}<br />
  [FirstChild] message1 = {{ message1 }}<br />
  [FirstChild] message1_1 = {{ message1_1 }}<br />
  [FirstChild] message2 = {{ message2 }}<br />
  [FirstChild] message3 = {{ message3 }}<br />
  [FirstChild] message4 = {{ message4 }}<br />
  [FirstChild] message5 = {{ message5 }}<br />
  [FirstChild] message6 = {{ message6 }}<br />
  [FirstChild] message7 = {{ message7 }}<br />
  <br /><br /><br />
  <ProvideInjectSecondChild />
</template>

<script lang="ts" setup>
import ProvideInjectSecondChild from './ProvideInjectSecondChild.vue';

import { inject, provide, ref } from 'vue';

const appProvideMessage = inject('appProvideMessage'); // 应用层 Provide
var message1 = inject('message1'); // 不带默认值
message1 = 'ROOT_MESSAGE'; // 会更新本界面值，但不会更新子孙provide的值
const message1_1 = inject('message1', ref('MESSAGE1_DEFAULT')); // 类型不同，不会抛错
// message1_1.value = 'MESSAGE1_DEFAULT_REF'; // TypeError: Cannot create property 'value' on string 'MESSAGE_1'

var message2 = inject('message2', 'MESSAGE2_DEFAULT'); // 带默认值
message2 = 'MESSAGE2_CHANGED'; // 会更新本界面值，但不会更新子孙

const message3 = inject('message3', ref('MESSAGE2_DEFAULT_REF'));
message3.value = 'MESSAGE_4_REF_OVERRIDE'; // 修改ref，会更新子孙

const message4 = inject('message4');
provide('message4', 'MESSAGE_4_OVERRIDE'); // override，会更新子孙

const message5 = inject('message5', ref('MESSAGE5_DEFAULT_READONLY_REF'));
provide('message5', 'MESSAGE_5_OVERRIDE_READONLY_REF'); // override readonly，会更新子孙

const message6 = inject('message6', ref('MESSAGE6_DEFAULT_READONLY_REF'));
message6.value = 'MESSAGE_6_OVERRIDE_READONLY_REF'; // change readonly，无效（本页面和子孙都不会更新）

const message7 = inject('message7', ref('MESSAGE7_DEFAULT')); // 祖辈未提供，将采用默认值
</script>
