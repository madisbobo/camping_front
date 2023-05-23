import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import ListingsView from "@/views/ListingsView.vue";
import SignupView from "@/views/SignupView.vue";
import SignupInfoView from "@/views/SignupInfoView.vue";
import MyListingsView from "@/views/MyListingsView.vue";

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
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  },
  {
    path: '/listings',
    name: 'listingsRoute',
    component: ListingsView
  },
  {
    path: '/my-listings',
    name: 'myListingsRoute',
    component: MyListingsView
  },
  {
    path: '/signup',
    name: 'signupRoute',
    component: SignupView
  },
  {
    path: '/signup-info',
    name: 'signupInfoRoute',
    component: SignupInfoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
