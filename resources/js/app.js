require('./bootstrap')
import { createApp,h } from 'vue'
import App from './components/App.vue';
import { routes } from './routes';
import axios from 'axios';
import VueAxios from 'vue-axios'
import * as VueRouter from 'vue-router';

const app  = createApp({
    router: routes,
    render: ()=>h(App)
});
app.use(VueAxios, axios, VueRouter)
app.mount("#app")