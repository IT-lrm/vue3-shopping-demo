<template>
  <div class="goods">
    <el-row>
      <el-col :span="2">
        <el-tag>商品列表</el-tag>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="good_list" style="width: 90%">
          <el-table-column prop="id" label="商品ID" width="160" />
          <el-table-column prop="name" label="商品名称" width="160" />
          <el-table-column prop="price" label="单价" />

          <el-table-column label="操作" width="200">
            <template #default="scope">
              <el-button type="primary" icon="Edit" @click="addGoods(scope.row)"
                >加入购物车</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["good_list"]),
  },
  methods: {
    addGoods(goods) {
      this.$store.dispatch("addCartAction", goods);
    },    
  },
  components: {},
};
</script>
<style></style>
