import { createRouter, createWebHistory } from 'vue-router';
import MainDesktop from './components/MainDesktop.vue';
import RockPaperScissors from './components/RockPaperScissors.vue';  // Przykładowy komponent

const routes = [
  { path: '/', component: MainDesktop },
  { path: '/rock-paper-scissors', component: RockPaperScissors },
  // Dodaj więcej tras w zależności od potrzeb
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;