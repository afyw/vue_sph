<template>
  <div id="app">
      <h1 v-upper="msg"></h1>
    <Header></Header>
    <!-- 路由组件出口得地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data(){
      return {
          msg:'欢迎'
      }
  },
  mounted() {
    // 通知Vuex发请求，获取商品分类三级列表
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
