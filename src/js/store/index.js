// STORE
//

import Vue from 'vue';
import Vuex from 'vuex';

// MODULES
import Page from './modules/page';

// INIT VUEX
Vue.use(Vuex);

// MODULE MAP
export default new Vuex.Store({
  modules: {
    Page,
  },
});
