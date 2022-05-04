// 对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当只会出现api
  baseURL: "/mock",
  // 代表请求超时的时间5s
  timeout: 5000,
});

// 请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发送之前做一些事情
requests.interceptors.request.use((config) => {
  // config:配置对象，对象里面有一个属性很重要，headers请求头
  // 进度条开始
  nprogress.start();
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一下处理
    // 进度条结束
    nprogress.done();
    return res.data;
  },
  () => {
    // 响应失败的回调函数
    return Promise.reject(new Error("failure"));
  }
);
// 对外暴露
export default requests;
