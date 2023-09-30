import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:name/:age',
    name: 'about',
    // alias: '/about-us',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/allList',
    name: 'allList',
    component: () => import('../views/MyShortList/AllList.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404_page',
    component: ()=>import('../views/MyShortList/404Page.vue')
  },
  {
    path: '/todoAllList',
    name: 'todoAllList',
    component: () => import('../views/MyList/AllList.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('vueAuth') == 'true') {
        next();
      } else {
        next('LoginPage')
      }
    }
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
