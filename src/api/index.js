// 当前的模块对API进行管理
import requests from "./request";
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// axios发请求返回的是Promise对象

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = ()=>mockRequests.get('/banner')  