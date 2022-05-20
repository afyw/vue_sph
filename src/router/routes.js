import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import shopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
// 引入二级路由组件
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";

/* 
    当打包构建应用时，js包会变得非常大，影响页面加载
    如果把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更高效了
    import动态导入
*/
// 配置路由
export default [
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/pages/Home"),
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
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    name: "addcartsuccess",
    meta: { show: true },
  },
  {
    path: "/shopcart",
    component: shopCart,
    meta: { show: true },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 去交易页面，必须从购物车而来
      if (from.path == "/shopcart") {
        next();
      } else {
        // 中断当前路由导航，如果浏览器url改变了，那么url地址会重置到from路由对应的地址
        // 其他路由组件而来，停留在当前
        next(false);
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
];
