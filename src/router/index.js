import {
  createRouter,
  createWebHistory
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/login',
    component: () => import('../pages/login/index.vue'),
    meta: {
      hidden: true
    }
  }, {
    path: '/',
    component: () => import('../layout/index.vue'),
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('../pages/dashboard/index.vue'),
      name: 'Dashboard',
      meta: {
        title: 'Dashboard'
      }
    }]
  }]
})

export default router;