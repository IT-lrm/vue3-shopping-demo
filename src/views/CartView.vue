<template>
  <div class="cart">
    <el-row>
      <el-col :span="2">
        <el-tag>购物车列表</el-tag>
      </el-col>
    </el-row>
    <el-col :span="24">
      <el-table
        :data="cartProducts"
        style="width: 100%"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商品ID" width="100" />
        <el-table-column prop="name" label="商品名称" width="120" />
        <el-table-column prop="num" label="数量" width="180">
          <template #default="scope">
            <el-input-number
              v-model="scope.row.num"
              :min="1"
              :max="10"
              @change="handleChange(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价" />
        <el-table-column prop="total_num" label="总价" />

        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              type="danger"
              icon="Delete"
              @click="dialogVisibleTrue(scope.row)"
              >删除</el-button
            >
            <!-- 对话框 -->
            <el-dialog v-model="dialogVisible" title="注意" width="30%">
              <span>确定要删除这个商品吗?</span>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取消</el-button>
                  <el-button type="primary" @click="dialogTrue()"
                    >确定</el-button
                  >
                </span>
              </template>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
      <!-- 其他选择 -->
      <div class="foot">
        <div>
          <el-button @click="toggleSelection()">全不选</el-button>
          <el-button @click="toggleSelection(cartProducts)">反选</el-button>
          <el-button type="danger" icon="Delete" @click="clearCartProducts()"
            >清空购物车</el-button
          >
        </div>
        <div>
          <div
            style="
              display: inline-block;
              margin-right: 60px;
              letter-spacing: 2px;
            "
          >
            已选{{ num }}件商品总计(不含运费): ￥{{ priceSum }}
          </div>
          <div style="display: inline-block">
            <el-button type="danger" @click="dialogVisibleJ = true"
              >去结算</el-button
            >
          </div>
          <!-- 对话框 -->
          <el-dialog
            v-model="dialogVisibleJ"
            title="商品结算"
            width="30%"
            draggable
          >
            <span>是否前往结算所选商品?</span>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisibleJ = false">取消</el-button>
                <el-button type="primary" @click="dialogVisibleJ = false"
                  >结算</el-button
                >
              </span>
            </template>
          </el-dialog>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "AboutView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisibleJ: false,
      // 删除信息的值
      deleteOne: null,
      // 计算点击然后加入进入
      multipleSelection: [],
      // 计算点击选中的数目
      num: 0,
      // 计算选中的价格
      priceSum: 0,
    };
  },
  mounted() {
    this.multipleSelection = this.cartProducts;
  },
  computed: {
    ...mapGetters(["cartProducts"]),
    freight() {
      return this.multipleSelection.reduce((sum, item) => {
        return sum + item.price;
      }, 0);
    },
  },
  methods: {
    ...mapActions(["numChangeAction", "deleteProductAction"]),
    //改变数量的方法
    handleChange(payload) {
      this.numChangeAction(payload);
    },

    // 点击删除 出现对话框 并且传入值
    dialogVisibleTrue(payload) {
      this.dialogVisible = true;
      this.deleteOne = payload;
    },

    dialogTrue() {
      // 删除指定商品
      this.deleteProductAction(this.deleteOne);
      // 关闭对话框
      this.dialogVisible = false;
    },
    //清空购物车
    clearCartProducts() {
      this.$store.dispatch("clearProduceAction");
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      const totalSum = val.reduce((sum, item) => {
        return sum + item.num;
      }, 0);
      this.num = totalSum;
      const totalPrice = val.reduce((sum, item) => {
        return parseFloat(sum) + parseFloat(item.total_num);
      }, 0);
      this.priceSum = totalPrice.toFixed(2);
    },
  },
};
</script>
<style>
.btn_info button {
  width: 25px;
  height: 25px;
}
.spanCount {
  display: inline-block;
  width: 40px;
  text-align: center;
}
.foot {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
