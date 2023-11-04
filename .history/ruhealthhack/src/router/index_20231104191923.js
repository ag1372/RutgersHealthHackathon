// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '/views/Home.vue';
import Login from '/views/Login.vue';
import Registration from '/views/Registration.vue';

// Create a new router instance with our route definitions
const router = createRouter({
  history: createWebHistory(), // Use the history mode to avoid hashes in URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
        path: '/scheduler',
        name: 'Scheduler',
        component: Scheduler,
      },
    // Add more routes as needed
  ],
});

export default router;
