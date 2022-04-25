import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
//注册路由：写法为KV一致省略V
//注册路由信息：组件身上都会拥有$route,$router属性
router
}).$mount('#app')
