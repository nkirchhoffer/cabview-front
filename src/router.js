import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import WatchView from './views/WatchView.vue';
import RandomView from './views/RandomView.vue';

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/watch', component: WatchView, name: 'watch', props: route => ({ id: route.query.v }) },
  { path: '/random', component: RandomView, name: 'random' }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;