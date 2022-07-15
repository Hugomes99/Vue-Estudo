import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import { routes } from './routes';

import './directives/Transform';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes, 
  mode: 'history'
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})