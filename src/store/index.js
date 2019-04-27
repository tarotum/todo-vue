import Vue from 'vue';
import Vuex from 'vuex';

import Todos from './modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { Todos }
});
