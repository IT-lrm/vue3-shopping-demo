<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="mb-2">后台管理</h5>
        <el-menu router default-active="/goods" class="el-menu-vertical-demo">
          <el-menu-item index="/goods">
            <el-icon><icon-menu /></el-icon>
            <span>商品列表</span>
          </el-menu-item>

          <el-menu-item index="/cart">
            <el-icon><setting /></el-icon>
            <span>购物车</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!-- 右侧 -->
    <el-row :span="20">
      <!-- 嵌套路由出口 -->
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped lang="scss"></style>
