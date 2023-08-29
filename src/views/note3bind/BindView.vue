<template>
  <!-- 绑定事件 -->
  <button
    @click="changePlainStateOnly"
    title="只更新普通变量，不会重新渲染组件（即界面上的普通变量不会更新）"
  >
    Change PlainState Only
  </button>
  <button
    @click="changeAllState"
    title="更新带ref/reactive变量，会重新渲染组件（所以普通变量也会在界面中刷新）"
  >
    Change All State
  </button>
  <button
    @click="changeToRefState"
    title="更新toRef变量，会重新渲染组件，同时影响toRef变量，以及它所指向的ref/reactive变量"
  >
    Change toRef State
  </button>
  <button @click="changeToRefsStateDemo1" title="同toRef">Change toRefs State (Demo1)</button>
  <button @click="changeToRefsStateDemo2" title="同toRef">Change toRefs State (Demo2)</button><br />
  <div class="demo ok-demo">正确示例</div>
  <div class="demo-child">
    <div class="category">
      <span class="title">Element text 绑定 JS变量</span>
      <ul>
        <li>refState1 = {{ refState1 }}</li>
        <li>toRefState1 (refState1) = {{ toRefState1 }}</li>
        <li>---</li>
        <li>refState2.count = {{ refState2.count }}</li>
        <li>toRefState2 (refState2.count) = {{ toRefState2 }}</li>
        <li>toRefsState2 (refState2) = {{ toRefsState2.count }}</li>
        <li>count (refState2.count) = {{ count }}</li>
        <li>name (refState2.name) = {{ name }}</li>
        <li>---</li>
        <li>reactiveState1.count = {{ reactiveState1.count }}</li>
        <li>toRefState3 (reactiveState1.count) = {{ toRefState3 }}</li>
        <li>toRefsState3 (reactiveState1) = {{ toRefsState3.count }}</li>
        <li>
          reactiveState1Count (reactiveState1.reactiveState1Count) = {{ reactiveState1Count }}
        </li>
        <li>reactiveState1Name (reactiveState1.reactiveState1Name) = {{ reactiveState1Name }}</li>
      </ul>
    </div>

    <div class="category">
      <span class="title">Element attribute 绑定 JS变量</span>
      <ul>
        <li title="使用:简写">refState1: <input :value="refState1" /></li>
        <li title="使用 v-bind">refState1 (v-bind): <input v-bind:value="refState1" /></li>
        <li>refState2.count: <input :value="refState2.count" /></li>
      </ul>
    </div>

    <div class="category">
      <span class="title">仅支持简单表达式</span>
      <ul>
        <li>
          <input :value="'count=' + refState1" />
        </li>
        <li><input :value="refState1 + 100" /></li>
      </ul>
    </div>

    <div class="category">
      <span class="title">Element text/attribute 绑定 JS函数</span>
      <div :title="getConcatCount('hello, ')">
        {{ getConcatCount('hello, this count =') }}
      </div>
    </div>

    <div class="category">
      <span class="title">绑定包含多个 attribute 的 JS变量</span>
      <div v-bind="objectOfAttrs"></div>
    </div>
  </div>

  <div class="demo error-demo">错误示例</div>
  <div class="demo-child">
    <!-- attribute中不支持{{  }}，需使用v-bind -->
    <div class="category">
      <ul>
        <li>plainState1:{{ plainState1 }}</li>
        <li>plainState1: <input type="text" :value="plainState1" /></li>
        <li>plainState2.count: <input type="text" :value="plainState2.count" /></li>
        <li>
          <input value="{{ plainState1 }}" /><span class="red">无效：不允许绑定HTML attribute</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRef, toRefs, onMounted, type Ref, type UnwrapNestedRefs } from 'vue';
import init from '@/global';

var plainState1 = 1000;
const plainState2 = {
  count: 2000,
  name: 'plainState2',
  plainState2Name: 'plainState2',
  plainState2Count: 2000
};

const refState1 = ref(3000);
const refState2 = ref({
  count: 4000,
  name: 'refState2'
});

const reactiveState1 = reactive({
  count: 5000,
  name: 'reactiveState1',
  reactiveState1Name: 'reactiveState1',
  reactiveState1Count: 5000
});

var toRefState1 = toRef(refState1);
var toRefState2 = toRef(refState2.value, 'count');
var toRefState3 = toRef(reactiveState1, 'count');

// const toRefsState1 = toRefs(refState1); // ERROR, could not read value
// const toRefsState1 = toRefs(refState2); // ERROR, could not read value
const toRefsState2 = toRefs(refState2.value);
const toRefsState3 = toRefs(reactiveState1);

var { name, count } = toRefs(refState2.value);
var { reactiveState1Name, reactiveState1Count } = toRefs(reactiveState1);

function changePlainStateOnly() {
  plainState1++; // 不会更新界面
  plainState2.count++; // 不会更新界面
}

function changeAllState() {
  plainState1++; // 会更新界面，因后面包含ref/reactive变量，会重新刷新组件
  plainState2.count++; // 会更新界面，因后面包含ref/reactive变量，会重新刷新组件
  refState1.value++; // 同时会更新界面（refState1、toRefState1、toRefsState1）
  refState2.value.count++; // 同时会更新界面（refState2、toRefState2、toRefsState2、name、 count）
  reactiveState1.count++; // 同时会更新界面（reactiveState1、toRefState3、toRefsState3）
}

function changeToRefState() {
  toRefState1.value++; // 同时会更新界面（refState1、toRefState1、toRefsState1）
  toRefState2.value++; // 同时会更新界面（refState2、toRefState2、toRefsState2、name、 count）
  toRefState3.value++; // 同时会更新界面（reactiveState1、toRefState3、toRefsState3）
}

function changeToRefsStateDemo1() {
  // toRefsState1++; // 同时会更新界面（refState1、toRefState1、toRefsState1）
  toRefsState2.count.value++; // 同时会更新界面（refState2、toRefState2、toRefsState2、name、 count）
  toRefsState3.count.value++; // 同时会更新界面（reactiveState1、toRefState3、toRefsState3）
}

function changeToRefsStateDemo2() {
  count.value++; // 同时会更新界面（refState2、toRefState2、toRefsState2、name、 count）
  reactiveState1Count.value++; // 同时会更新界面（reactiveState1.reactiveState1Count）
}

function getConcatCount(msg: string): string {
  return msg + ' ' + refState1.value;
}

onMounted(() => {
  console.log(`The initial refState1 is ${refState1.value}.`);
  init();
});

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'width: 500px; height: 50px; background-color: #00eeee;'
};
</script>
