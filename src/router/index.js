import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import errorView from "@/views/ErrorView.vue";
import signupView from "@/views/SignupView.vue";

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signupRoute',
    component: signupView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: errorView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
