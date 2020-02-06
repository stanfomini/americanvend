import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.config.productionTip = false;

Vue.use(VueFbCustomerChat, {
	  page_id: 108398407383203, //  change 'null' to your Facebook Page ID,
	  theme_color: '#333333', // theme color in HEX
	  locale: 'en_US', // default 'en_US'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
