// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import instance from './axios/axios.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Http from './axios/axios'
//import Vuex from 'vuex'
import less from 'less'
import store from './vuex'
const echarts = require('echarts')



Vue.prototype.$echarts = echarts 
Vue.use(less)
Vue.use(ElementUI, { locale})
Vue.prototype.$Http = Http;
Vue.config.productionTip = false;
//Vue.use(Vuex)
//const store = new Vuex.Store({
//  state: {
//    count: 0
//  },
//  mutations: {
//    countIncrease(state,nub) {
//      state.count = nub
//    }
//  }
//})
Vue.prototype.$store = store

router.beforeEach((to, from, next) => {
  
  if (store.state.token || to.path == '/VuexLogin') {
    next()
  } else {
    next({
      path: "/VuexLogin",
      query: { redirect: to.fullPath }
    })
  }
})
new Vue({
  el: '#app',
  store, 
  router,
  components: { App },
  template: '<App/>'
})
