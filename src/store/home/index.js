import {reqCategoryList,reqGetBannerList} from '@/api'
// Home模块的仓库
const state = {
    // state中数据应该根据接口返回值来初始化
    categoryList: [],
    // 轮播图的数据
    bannerList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList
        console.log(state.categoryList)
    },
    GETBANNERLIST(state,bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}) {
        let res = await reqCategoryList();
        if(res.code === 200){ 
            commit("CATEGORYLIST",res.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}) {
        let res = await reqGetBannerList()
        if(res.code == 200){
            commit('GETBANNERLIST',res.data);
        }
    }
};  

const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}