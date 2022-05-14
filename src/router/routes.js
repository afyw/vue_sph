import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import shopCart from "@/pages/ShopCart";
// 配置路由
export default [
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
];
