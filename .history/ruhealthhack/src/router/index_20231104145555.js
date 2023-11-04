// src/router/index.js

import Vue from 'vue';
import Router from 'vue-router';
import Home from '/views/Home.vue';
import Login from '/views/Login.vue';
import Registration from '../views/Registration.vue';

// Use Vue Router
Vue.use(Router);

// Create a new router instance with our route definitions
const router = new Router({
  mode: 'history', // Use the history mode to avoid hashes in URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
        path: '/Registration',
        name: 'Registration',
        component: Registration,
      },
    // Add more routes as needed
  ],
});

export default router;
