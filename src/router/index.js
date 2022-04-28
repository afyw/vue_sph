// 配置路由处
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
// 先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转，以及传递哪些参数
//   call || apply区别
// 相同点，都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
    console.log(this);
  } else {
    console.log(this);

    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 配置路由
export default new VueRouter({
  // 配置路由
  routes: [
    // 重定向
    {
      path: "*",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      // 路由源信息
      meta: { show: true },
    },
    {
      path: "/search/:Keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "/Login",
      component: Login,
      meta: false,
    },
    {
      path: "/Register",
      component: Register,
      meta: false,
    },
  ],
});
