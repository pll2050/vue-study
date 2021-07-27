import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import axios from 'axios'

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

store.dispatch('getUserInfo');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
