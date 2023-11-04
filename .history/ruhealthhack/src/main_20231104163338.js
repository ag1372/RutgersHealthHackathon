import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const app = createApp(App);
app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(router);
app.mount('#app');
