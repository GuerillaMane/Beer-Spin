import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/beer-spinner',
      name: 'BeerSpinner',
      component: () => import('../views/BeerSpinner.vue')
    }
  ]
});

export default router;
