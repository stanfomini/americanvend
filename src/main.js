import VueFbCustomerChat from 'vue-fb-customer-chat';
import { createPopper } from '@popperjs/core';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//@import "node_modules/bootstrap/scss/functions";
//@import "node_modules/bootstrap/scss/variables";
//@import "node_modules/bootstrap/scss/mixins";

Vue.config.productionTip = false;

Vue.use(createPopper);

// Install BootstrapVue
Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueFbCustomerChat, {
  page_id: 108398407383203,
  theme_color: '#333333',
  locale: 'en_US',
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
