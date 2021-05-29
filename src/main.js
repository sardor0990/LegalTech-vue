import Vue from 'vue';
import App from './App.vue';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
