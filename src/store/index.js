import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import modules from './module/index';

const store = new Vuex.Store({
    modules,
});

export default store;