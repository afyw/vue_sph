// 当前的模块对API进行管理
import requests from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// axios发请求返回的是Promise对象

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});