import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import axios from 'axios'

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate:function(){

  },
  created:function(){
    store.dispatch('getUserInfo');
    console.log('main created')
    
  },
  render: h => h(App)
}).$mount('#app')
