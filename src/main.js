// import 'bootstrap-css-only/css/bootstrap.min.css'
import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import axios from 'axios';

Vue.prototype.$http = axios

// Install BootstrapVue
Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


import { EmbedPlugin } from 'bootstrap-vue'
Vue.use(EmbedPlugin)

// FIXME  Manually putting in Meta Tags above styling in index.html. THIS WORKS, limits flexability
// But gets the job done for personal website
// import Meta from 'vue-meta';
// Vue.use(Meta); 
new Vue({
  render: h => h(App),
}).$mount('#app')