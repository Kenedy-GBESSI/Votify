import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '../views/Connexion.vue'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import Profile from '../views/Profile.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'connexion',
      component: Connexion,
      meta: {
        layout : '',
      }
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        layout: 'dashboard',
        requireAuth: true
      } 
    },
    {
      path: '/Users',
      name: 'users',
      component: Users,
      meta: {
        layout: 'dashboard',
        requireAuth: true
      }
      
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile,
      meta: {
        layout: 'dashboard',
        requireAuth: true
      }
      
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) =>{
     if(store.state.user && to.path == "/"){
        next({name: 'dashboard'})
     }
     if(to.meta.requireAuth && !store.state.user){
        next({name: 'connexion'})
     }
     next();
})

export default router
