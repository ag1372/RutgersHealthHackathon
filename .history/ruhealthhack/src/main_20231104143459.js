import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// Use Vue Router
Vue.use(Router);


createApp(App).mount('#app')
