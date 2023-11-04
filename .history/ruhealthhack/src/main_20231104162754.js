import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

const app = createApp(App);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
app.use(router);
app.mount('#app');
