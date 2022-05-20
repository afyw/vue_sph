import Vue from "vue";
import App from "./App.vue";
// 三级联动组件---全局组件
import TypeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import { Button, MessageBox } from "element-ui";
// 参数：1.全局组件的名字 第二个参数：哪个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
// 引入MockServer.js---mock数据
import "@/mock/mockServe";
Vue.component(Button.name, Button);
// ElementUI注册组件时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入路由
import router from "@/router";
Vue.config.productionTip = false;
// 引入仓库
import store from "@/store";
// 引入swiper样式
import "swiper/css/swiper.css";
import * as API from "@/api";

// 引入插件
import VueLazyload from "vue-lazyload";
import atm from "./assets/1.gif";
// 注册插件
Vue.use(VueLazyload, {
  // 懒加载默认图片
  loading: atm,
}); 
//引入自定义插件
import myPlugins from "@/plugins/myPlugins"
Vue.use(myPlugins,{
    name:'upper'
})

// 引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由：写法为KV一致省略V
  //注册路由信息：组件身上都会拥有$route,$router属性
  router,
  // 注册仓库:组件实例的身上会多一个$store属性
  store,
}).$mount("#app");
