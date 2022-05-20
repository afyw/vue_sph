// vue插件一定暴露一个对象
let myPlugins = {};
// 第一个参数Vue 第二个为传参   
myPlugins.install = function(Vue,options) {
    Vue.directive(options.name,()=>{
        console.log('执行')
    })
}

export default myPlugins;