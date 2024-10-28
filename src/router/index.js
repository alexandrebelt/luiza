import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { onBeforeMount } from 'vue'
gsap.registerPlugin(ScrollToPlugin)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    window.scrollTo(0, 0)
  }
})

onBeforeMount(() => {
  gsap.to(window, {
    scrollTo: 0,
  })
})
export default router
