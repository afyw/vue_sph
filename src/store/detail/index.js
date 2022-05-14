import { reqGoodsInfo, reqAddOrUpdateShopCar } from "@/api";
// 封装游客临时身份模块uuid--->生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'
const state = {
  goodInfo: {},
  //游客临时身份
  uuid_token:getUUID()
};
const mutations = {
  GETGOODSINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  // 获取产品信息的action
  async getGoodInfo({ commit }, skuId) {
    let res = await reqGoodsInfo(skuId);
    if (res.code == 200) {
      commit("GETGOODSINFO", res.data);
    }
  },
  //将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    //   加入购物车返回的结果
    let res = await reqAddOrUpdateShopCar(skuId, skuNum);
    if (res.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {
  // 路径导航简化的数据
  categoryView(state) {
    // state.goodInfo初始状态可能是个空对象，空对象的该属性为undefined
    return state.goodInfo.categoryView || {};
  },
  //简化产品信息的数据
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
