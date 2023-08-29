import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/OptionsAPI',
      name: 'OptionsAPI',
      component: () => import('../views/note1/style/OptionsAPI.vue')
    },
    {
      path: '/CompositionAPI',
      name: 'CompositionAPI',
      component: () => import('../views/note1/style/CompositionAPI.vue')
    },
    {
      path: '/BindText',
      name: 'BindText',
      component: () => import('../views/note3bind/BindTextView.vue')
    },
    {
      path: '/BindAttribute',
      name: 'BindAttribute',
      component: () => import('../views/note3bind/BindAttributeView.vue')
    },
    {
      path: '/BindEvent',
      name: 'BindEvent',
      component: () => import('../views/note3bind/BindEventView.vue')
    },
    {
      path: '/Bind',
      name: 'Bind',
      component: () => import('../views/note3bind/BindView.vue')
    },
    {
      path: '/Dom',
      name: 'Dom',
      component: () => import('../views/note4dom/DomView.vue')
    },
    {
      path: '/PenetrateView',
      name: 'PenetrateView',
      component: () => import('../views/note5component/PenetrateView.vue')
    },
    {
      path: '/NormalSlot',
      name: 'NormalSlot',
      component: () => import('../views/note5component/NormalSlotView.vue')
    },
    {
      path: '/SlotWithParam',
      name: 'SlotWithParam',
      component: () => import('../views/note5component/SlotWithParamView.vue')
    },
    {
      path: '/MyComponent',
      name: 'MyComponent',
      component: () => import('../views/note5component/MyComponentView.vue')
    },
    {
      path: '/ProvideInject',
      name: 'ProvideInject',
      component: () => import('../views/note5component/ProvideInjectView.vue')
    }
  ]
});

export default router;
