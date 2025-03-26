import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import SingleProject from '@/views/SingleProject.vue';
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PortfolioView from '@/views/PortfolioView.vue';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
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
    path: '/#projects',
    name: 'projects',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/:projectSlug',
    name: 'project',
    component: SingleProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh(true);

    if (to.hash) {
      return {
        el: to.hash,
        top: 0
      }
    }
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
