import {
  createRouter,
  createWebHistory
} from 'vue-router';

export const constantRoutes = [{
  path: '/login',
  component: () => import('../pages/login/index.vue'),
  hidden: true
}, {
  path: '/',
  component: () => import('../layout/index.vue'),
  redirect: '/dashboard',
  children: [{
    path: '/dashboard',
    component: () => import('../pages/dashboard/index.vue'),
    name: 'Dashboard',
    meta: {
      title: 'Dashboard'
    }
  }]
}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router;
