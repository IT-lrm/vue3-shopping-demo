<template>
  <div class="home">
    <!-- 菜单原理   
		（1）router 属性实现超链接路由
		（2）default-active: 选中菜单 默认   /goods
		-->
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="mb-2">后台管理</h5>
        <el-menu router default-active="/goods" class="el-menu-vertical-demo">
          <el-menu-item index="/goods">
            <el-icon><document /></el-icon>
            <span>商品列表</span>
          </el-menu-item>
          <el-menu-item index="/cart">
            <el-icon><setting /></el-icon>
            <el-badge :value="cartProducts.length" class="item">
              <span>购物车列表</span>
            </el-badge>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <!-- 嵌套路由出口 -->
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  computed: {
    ...mapGetters(["totalNum","cartProducts"]),
  },
};
</script>

<style scoped lang="scss"></style>
