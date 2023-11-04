// src/main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  router, // Include the router
  render: h => h(App),
}).$mount('#app');
