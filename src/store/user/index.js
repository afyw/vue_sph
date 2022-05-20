import {
  reqGetCode,
  reqUserInfo,
  reqUserLogin,
  reqUserRegister,
  reqLogout,
} from "@/api";
import { setToken, getToken,removeToken } from "@/utils/token";
// 登录与注册模块
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  //清除本地数据
  CLEAR(state){
      state.token = '',
      state.userInfo = {},
      removeToken()
  }
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    //此处验证码返回给后台，正常情况应该返回用户的手机
    let res = await reqGetCode(phone);
    console.log(res);
    if (res.code == 200) {
      commit("GETCODE", res.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async userRegister({ commit }, user) {
    let res = await reqUserRegister(user);
    if (res.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //   登陆业务[token]
  async userLogin({ commit }, data) {
    let res = await reqUserLogin(data);
    //服务器下发token，用户唯一标识(uuid)
    // 将来经常通过带token找服务器要用户信息进行展示
    if (res.code == 200) {
      // 用户已经登录成功并且获取到token
      commit("USERLOGIN", res.data.token);
      //   持久化token
      setToken(res.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    let res = await reqUserInfo();
    console.log(res)
    if (res.code == 200) {
      //提交用户信息
      commit("GETUSERINFO", res.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //退出登录
  async userLogout({commit}) {
    //通知服务器清除数据
    let res = await reqLogout();
    if(res.code == 200) {
        commit("CLEAR")
        return 'ok'
    }else{
        return Promise.reject(new Error('faile'))
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
