import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import navbarVue from '../layouts/navbar.vue';
import profile from '../pages/profile.vue';
import login from '../pages/firma-giris.vue';
import sikayet from '../pages/sikayetler.vue';
import login2 from '../pages/musteri-giris.vue';
import SikayetYaz from '../pages/sikayet-yaz.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/home",
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
            component: sikayet,
          },
          {
            path: "/firma-giris",
            name: "FirmaLoginPage",
            component: login
          },
          {
            path: "/musteri-giris",
            name: "MusteriLoginPage",
            component: login2
          },
          {
            path: "/sikayet-yaz",
            name: "SikayetYaz",
            component: SikayetYaz
          },
        ]
    },

  ]
})

export default router
