import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";
import './assets/css/reset.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
import store from './store/store'
Vue.config.productionTip = false

let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,resolve,reject) {
  if(resolve && reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
new Vue({
  store,
  router:router,
  render: h => h(App),
}).$mount('#app')
