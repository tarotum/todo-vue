import 'normalize.css';
import Vue from 'vue';
import axios from 'axios';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
