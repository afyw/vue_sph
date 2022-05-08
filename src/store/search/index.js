import { reqGetSearchInfo } from "@/api";

// search模块的仓库
const state = {
  // 仓库初始状态
  searchList: {},
};
const mutations = {
  GETSEARCHINFO(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params) {
    //   reqGetSearchInfo在调用服务器数据的时候，至少传递一个参数（空对象）
    // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code === 200) {
      commit("GETSEARCHINFO", result.data);
    }
  },
};
// 项目当中getters主要作用是：简化仓库中的数据
// 可以把组件当中需要用到数据简化
const getters = {
  // 当前仓库中的state
  goodsList(state) {
    // 可能存在网速慢的情况，返回的应该是undefinded
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
