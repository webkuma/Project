import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /* for github */
  // history: createWebHistory(window.location.pathname.split('/')[1]), 
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/Awards/:year',
      name: 'Awards',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AwardsView.vue')
    },
    {
      path: '/DB',
      name: 'DB',
      component: () => import('../views/DBView.vue')
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/AdminAwards/:year',
      name: 'AdminAwards',
      component: () => import('../views/AdminAwardsView.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
    path: '/404',
    name: '404',
    component: HomeView
    // component: () => import('@/pages/404')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
]
})

export default router
