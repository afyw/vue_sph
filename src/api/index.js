// 当前的模块对API进行管理
import requests from "./request";
import mockRequests from "./mockAjax";

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// axios发请求返回的是Promise对象

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get("/banner");
// 获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
//获取搜索模块数据 地址：/api/list 请求方式：post
// 参数：
/* 
    {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
// 当前函数需要传参,给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

// 获取商品详情接口
// /api/item/{ skuId }  请求方式：get

export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCar = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/ ${skuId}/${skuNum}`, method: "post" });

// 获取购物车的列表数据接口
// /api/cart/cartList method:get
export const reqCartList = () =>
  requests({ url: "/cart/cartList", method: "get" });

//删除购物产品的接口
// URL:/api/cart/deleteCart/{skuId} method:DELETE
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

// 修改商品的选中状态
// url: /api/cart/checkCart/{skuID}/{isChecked} method:get
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

// 获取验证码
// url:/api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

// 注册
// url:/api/user/passport/register method:post   phone code password
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", method: "post", data });

// 登录
export const reqUserLogin = (data) =>
  requests({ url: "user/passport/login", method: "post", data });

// 获取用户信息【需要带着用户的token向服务器要用户信息】
// url:/api/user/passport/auth/getUserInfo mtehod:'get'
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", methods: "get" });

//退出登录
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:"get"})