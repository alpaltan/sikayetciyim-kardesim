import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import navbarVue from '../layouts/navbar.vue';
import profile from '../pages/profile.vue';
import login from '../pages/login.vue';
import sikayet from '../pages/sikayetler.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: navbarVue,

      children:
        [
          {
            path: "/home",
            name: "HomePage",
            component: HomeView
          },
          {
            path: "/profile",
            name: "ProfilePage",
            component: profile
          },
          {
            path: "/sikayetler",
            name: "SikayetPage",
            component: sikayet
          },
        ]
    },
    {
      path: "/login",
      name: "LoginPage",
      component: login
    },
  ]
})

export default router
