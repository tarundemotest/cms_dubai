
// require('./bootstrap');

// import { createApp } from 'vue';

// import * as VueRouter from 'vue-router';
// import VueAxios from 'vue-axios';
// import axios from 'axios';
// import {routes} from './routes';
 
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);

// import CompaniesIndex from './components/App.vue';

// createApp({
//     components: {
//         CompaniesIndex
//     }
// }).use(routes).mount('#app')




// require('./bootstrap');

// import App from './components/App.vue';
// import VueAxios from 'vue-axios';
// import * as VueRouter from 'vue-router';
// import axios from 'axios';
// import { routes } from './routes';
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
 

 
// const app = new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App),
// });





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
app.use(routes)
app.mount("#app")

// const app = createApp({ router: routes})

// app.component('hello-world', App)

// app.mount('#app')