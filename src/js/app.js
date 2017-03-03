// VUE-SPA-SCAFFOLD
// ALEX HERNANDEZ, 2016
//

import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import * as filters from './filters';

Object.keys(filters).forEach(
  (key) => Vue.filter(key, filters[key])
);

// INIT VUE W/ ROUTES & DATA STORE
const app = new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  created(){
    // store.dispatch('fetchUser');
    store.dispatch('fetchUserEvents');
  }
});
