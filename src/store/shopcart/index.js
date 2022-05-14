import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let res = await reqCartList();
    if (res.code == 200) {
      commit("GETCARTLIST", res.data);
    }
  },
  //删除购物车某一个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let res = await reqDeleteCartById(skuId);
    if (res.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 修改购物车某一产品的选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let res = await reqUpdateCheckedById(skuId, isChecked);
    if (res.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    // context:小仓库， commit[提交mutation修改state] getters【计算属性】 dispatch【派发action】 state【当前仓库】
    // 获取购物车中全部的产品(是一个数组)
    let promiseList = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let res =
        item.isChecked == 1
          ? dispatch("deleteCartListBySkuId", item.skuId)
          : "";
      promiseList.push(res);
    });
    // 只要一个失败则返回结果为失败
    return Promise.all(promiseList);
  },
  // 修改全部产品状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseList = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseList.push(promise);
    });
    return Promise.all(promiseList);
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
