import VueFbCustomerChat from 'vue-fb-customer-chat';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';

Vue.config.productionTip = false;

Vue.use(VueFbCustomerChat, {
  page_id: 108398407383203,
  theme_color: '#333333',
  locale: 'en_US',
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
