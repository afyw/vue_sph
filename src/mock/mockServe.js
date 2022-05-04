// 引入mockjs
import Mock from 'mockjs'
// 先把JSON数据格式引入进来(没暴露可以直接引用)
// webpack默认对外暴露的：图片、JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

// mock数据:第一个参数请求地址  第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banner}); //首页轮播图数据
Mock.mock("/mock/floor",{code:200,data:floor});
 
