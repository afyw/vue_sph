// 配置路由处
import Vue from 'vue';
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
// 配置路由
export default new VueRouter({
    // 配置路由
    routes:[
        // 重定向
        {
            path:'*',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            // 路由源信息
            meta:{show:true}
        },
        {
            path:'/search',
            component:Search,
            meta:{show:true}
        },
        {
            path:'/Login',
            component:Login,
            meta:false
        },
        {
            path:'/Register',
            component:Register,
            meta:false
        },
    ]
})