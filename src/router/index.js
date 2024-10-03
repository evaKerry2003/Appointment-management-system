import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Patient/HomeView.vue'
import login from '../views/Patient/LoginView.vue'
import Registration from '../views/Patient/RegistrationView.vue'
import LoginView from '../views/Patient/LoginView.vue'
import RegistrationView from '../views/Patient/RegistrationView.vue'
import DashboardView from '../views/Patient/DashboardView.vue'
import BookView from '../views/Patient/BookView.vue'
import ViewView from '../views/Patient/ViewView.vue'
import ProfileView from '@/views/Patient/ProfileView.vue'
import ContactView from '@/views/Patient/ContactView.vue'
import PaymentView from '@/views/Patient/PaymentView.vue'
import ManageView from '@/views/Admin/ManageView.vue'
import UserView from '@/views/Admin/UserView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: LoginView
    },
    {
      path:'/registration',
      name:'registration',
      component: RegistrationView
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: DashboardView
    },
    {
      path:'/book',
      name:'book',
      component: BookView
    },
    {
      path:'/view',
      name:'view',
      component: ViewView
    },
    {
        path:'/profile',
        name:'profile',
        component: ProfileView
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactView
    },
    {
      path:'/payments',
      name:'/payments',
      component: PaymentView
    },
    {
      path:'/manage',
      name:'manage',
      component: ManageView
    },
    {
      path:'/users',
      name:'users',
      component: UserView
    }
  ]
})

export default router
