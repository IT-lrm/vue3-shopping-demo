import { datePickTypes } from 'element-plus';
import { createStore } from 'vuex'

export default createStore({
  state: {
    // 商品列表
    good_list: [
      {
        id: 1,
        name: '护手霜',
        price: 10.9,
        checked: true
      },
      {
        id: 2,
        name: '精华',
        price: 109.9,
        checked: true
      },
      {
        id: 3,
        name: '洗面奶',
        price: 59.9,
        checked: true
      }
    ],
    // 添加购物车 购物车列表
    adds: []
  },
  getters: {
    // 实现购物车列表映射
    cartProducts(state) {
      return state.adds.map((item1) => {
        let product = state.good_list.find((item2) => { return item2.id == item1.id });
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          checked: product.checked,
          num: item1.num,
          total_num: (product.price * item1.num).toFixed(2)
        }
      })
    },
    // 购物车总数量
    totalNum(state, getters) {
      let num = 0
      getters.cartProducts.forEach((item) => {
        num += item.num;
      });
      return num
    },
    // 购物车总价格
    totalPrice(state, getters) {
      // console.log("getters.cartProducts:", getters.cartProducts)
      let sum = 0
      getters.cartProducts.forEach((item) => {
        sum += parseFloat(item.total_num);
      });
      return sum
    },
  },
  mutations: {
    // 添加购物车操作
    addCart(state, data) {
      console.log(state)
      // 在购物车数组中根据对应查找，有 数量就+1 没有就行进行添加
      let recode = state.adds.find((item) => { return item.id == data.id })
      if (!recode) {//第一次添加
        state.adds.push({
          id: data.id,
          num: 1
        })
      } else {
        recode.num++
      }
    },

    //改变购物车商品数量
    numChange(state, data) {
      state.adds.forEach((item) => {
        if (item.id == data.id) {
          item.num = data.num
        }
      })
    },
    // 删除指定商品
    deleteProduct(state, date) {
      let index = state.adds.findIndex((item) => {
        if (item.id == date.id) {
          return true
        }
        return false
      })
      state.adds.splice(index, 1)
    },


    // 删除全部商品
    clearProducts(state) {
      state.adds = []
    }
  },
  actions: {
    // 添加购物车操作
    addCartAction({ commit }, payload) {
      commit('addCart', payload)
    },

    // 改变购物车的商品数量的操作
    numChangeAction({ commit }, payload) {
      commit('numChange', payload)
    },

    // 删除指定商品
    deleteProductAction({ commit }, data) {
      commit('deleteProduct', data)
    },

    // 清空购物车
    clearProduceAction({ commit }) {
      commit('clearProducts')
    }
  },
  modules: {
  },
  // plugins: [persistedstate({ storage: window.sessionStorage })]
})
