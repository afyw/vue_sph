import Vue from "vue";
import App from "./App.vue";
// 三级联动组件---全局组件
import TypeNav from "@/components/TypeNav";
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 参数：1.全局组件的名字 第二个参数：哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name,Carsousel);
Vue.component(Pagination.name,Pagination);
// 引入MockServer.js---mock数据
import '@/mock/mockServe';

// 引入路由
import router from "@/router";
Vue.config.productionTip = false;
// 引入仓库
import store from "@/store";
// 引入swiper样式
import "swiper/css/swiper.css"
import {reqGetSearchInfo} from "@/api"
console.log(reqGetSearchInfo({}))
new Vue({   
  render: (h) => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this;
  },
  //注册路由：写法为KV一致省略V
  //注册路由信息：组件身上都会拥有$route,$router属性
  router,
  // 注册仓库:组件实例的身上会多一个$store属性
  store,
}).$mount("#app");
