import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
// Home模块的仓库
const state = {
  // state中数据应该根据接口返回值来初始化
  categoryList: [],
  // 轮播图的数据
  bannerList: [],
  // floor的数据
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({ commit }) {
    let res = await reqCategoryList();
    if (res.code === 200) {
      commit("CATEGORYLIST", res.data);
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({ commit }) {
    let res = await reqGetBannerList();
    if (res.code == 200) {
      commit("GETBANNERLIST", res.data);
    }
  },

  // 获取floor数据
  /* 
  Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
  因此你可以调用 context.commit 提交一个 mutation，此处是解构赋值
   */
  async getFloorList({ commit }) {
    let res = await reqFloorList();
    if (res.code == 200) {
      commit("GETFLOORLIST", res.data);
    }
  },
};

// 计算属性
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
