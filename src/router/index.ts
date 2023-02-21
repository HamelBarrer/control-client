import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/users',
      name: 'user',
      component: () => import('../views/user/UserView.vue'),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (store.user.userId === 0 && to.name !== 'login') {
    return { name: 'login' };
  }

  if (store.user.userId !== 0 && to.name === 'login') {
    return { name: 'home' };
  }
});

export default router;
