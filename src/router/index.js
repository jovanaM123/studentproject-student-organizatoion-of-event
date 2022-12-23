import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nalog from '../views/Nalog.vue'
import Smestaj from '../views/Smestaj.vue'
import Zahtev from '../components/Zahtev.vue'
import Istrazi from '../views/Istrazi.vue'
import Muzej from '../views/zanimljivosti/Muzeji.vue'
import Utakmice from '../views/Utakmice.vue'
import Prva from '../views/Prva.vue'
import Registracija from '../components/Registracija.vue'
import Promena from '../components/Promena.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'prva',
    component: Prva
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/nalog',
    name: 'nalog',
    component: Nalog,
  },
  {
    path: '/smestaj',
    name: 'smestaj',
    component: Smestaj,
  },
  {
    path: '/utakmice',
    name: 'utakmice',
    component: Utakmice,
  },
{
  path: '/promena',
  name: 'promena',
  component: Promena
},
{
  path: '/registracija',
  name: 'registracija',
  component: Registracija
},
{
  path: '/zahtev',
  name: 'zahtev',
  component: Zahtev
},
{
  path: '/istrazi',
  name: 'istrazi',
  component: Istrazi
},
{
  path: '/muzej',
  name: 'muzej',
  component: Muzej
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
