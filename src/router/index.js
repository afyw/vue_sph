// 配置路由处
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// 使用插件
Vue.use(VueRouter);
// 引入store
import store from "@/store";
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
  } else {
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
// 对外暴露vueRouter实例
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
});
// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
  // to:可以跳转到你要跳转到哪个路由信息
  // from：获取到你从哪个路由来的
  // next：放行函数 next(path)放行到指定路由 next(false)
  //   next();

  // 用户登陆了，才会有token，未登录一定不会有token
  let token = store.state.user.token;
  //用户信息
  let name = store.state.user.userInfo.name;
  // 用户已经登录了
  if (token) {
    //登录以后不能返回login界面
    if (to.path == "/login") {
      next("/home");
    } else {
      //登陆了，但去的不是login【homme|search|detail|shopcar】
      if (name) {
        next();
      } else {
        //没有用户信息 派发action让仓库存储用户信息
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          //token过期了 获取不到用户信息
          //清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    //   未登录 后期处理
    next();
  }
});
export default router;
