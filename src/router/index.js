import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import SignupView from "@/views/SignupView.vue";
import SignupInfoView from "@/views/SignupInfoView.vue";
import MyProfileView from "@/views/MyProfileView.vue";
import myBookingsView from "@/views/MyBookingsView.vue";
import myListingsView from "@/views/MyListingsView.vue";
import blogView from "@/views/BlogView.vue";
import contactView from "@/views/ContactView.vue";
import ListingsView from "@/views/ListingsView.vue";
import MyBookingsView from "@/views/MyBookingsView.vue";
import MyListingsView from "@/views/MyListingsView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";

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
    component: SignupView
  },
  {
    path: '/signup-info',
    name: 'signupInfoRoute',
    component: SignupInfoView
  },
  {
    path: '/account/my-profile',
    name: 'myProfileRoute',
    component: MyProfileView
  },
  {
    path: '/my-bookings',
    name: 'myBookingsView',
    component: MyBookingsView
  },
  {
    path: '/my-listings',
    name: 'myListingsView',
    component: MyListingsView
  },
  {
    path: '/listings',
    name: 'ListingsView',
    component: ListingsView
  },
  {
    path: '/blog',
    name: 'blogView',
    component: BlogView
  },
  {
    path: '/contact',
    name: 'contactView',
    component: ContactView
  },
  {
    path: '/error',
    name: 'errorRoute',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
