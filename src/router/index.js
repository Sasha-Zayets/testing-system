import Vue from 'vue'
import VueRouter from 'vue-router'

// layouts
import Auth from '../layouts/Auth';

// page
import Login from '../views/Login';
import Registration from '../views/Registration';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'registration',
        name: 'registration',
        component: Registration
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
