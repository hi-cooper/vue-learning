<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/"><span>Home</span></RouterLink>
    <RouterLink to="/CompositionAPI"><span>CompositionAPI</span></RouterLink>
    <RouterLink to="/OptionsAPI"><span>OptionsAPI</span></RouterLink>
    <hr />
    <RouterLink to="/BindText"><span>Element text 绑定 JS变量/函数</span></RouterLink>
    <RouterLink to="/BindAttribute"><span>Element attribute 绑定 JS变量/函数</span></RouterLink>
    <RouterLink to="/BindEvent"><span>Element event 绑定 JS函数</span></RouterLink>
    <RouterLink to="/Bind"><span>综合示例</span></RouterLink>
    <hr />
    <RouterLink to="/Dom"><span>JS操作DOM</span></RouterLink>
    <hr />
    <RouterLink to="/MyComponent"><span>自定义组件基础</span></RouterLink>
    <RouterLink to="/PenetrateView"><span>透传Attributes</span></RouterLink>
    <RouterLink to="/NormalSlot"><span>插槽Slots：普通Slot</span></RouterLink>
    <RouterLink to="/SlotWithParam"><span>插槽Slots：向父组件传参</span></RouterLink>
    <RouterLink to="/ProvideInject"><span>Props多级透传</span></RouterLink>
  </nav>

  <div id="main">
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  overflow: auto;
  font-size: 12px;
  text-align: left;
  padding: 1rem;
  background-color: aliceblue;
}

hr {
  border: 1px solid rgb(209, 209, 209);
  margin: 0.5rem 0;
}

#main {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 1rem;
  padding-left: 210px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active span {
  border-left: 2px solid var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
}
nav a span {
  padding: 0 0.5rem;
  border-left: 2px solid var(--link-color);
}
</style>
