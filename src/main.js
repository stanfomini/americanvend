import VueFbCustomerChat from 'vue-fb-customer-chat';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

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