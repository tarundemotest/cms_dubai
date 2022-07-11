require('./bootstrap')
import { createApp,h } from 'vue'
import App from './components/App.vue';
import  router from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router';


createApp(App)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app')