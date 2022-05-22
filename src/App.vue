<template>
  <!-- <div class="wrap">
    <div class="left">
      <div class="title">后台管理界面</div>
      <div>
        <router-link to="/">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ba633cb8=""
          >
            <path
              fill="currentColor"
              d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
            ></path>
            <path
              fill="currentColor"
              d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
            ></path>
            <path
              fill="currentColor"
              d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
            ></path>
          </svg>
          <span>商品列表</span>
        </router-link>
      </div>

      <div>
        <router-link to="/cart">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ba633cb8=""
          >
            <path
              fill="currentColor"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
            ></path>
          </svg>
          <span>购物车</span>
        </router-link>
      </div>
    </div>
    <div style="clear: right"></div>
    <div class="right">
      <router-view />
    </div>
  </div> -->
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
// * {
//   margin: 0;
//   padding: 0;
// }
// .wrap {
//   margin-top: 150px;
// }
// .left {
//   .title {
//     font-weight: 700;
//     font-size: 24px;
//   }
//   float: left;
//   display: inline-block;
//   margin-left: 80px;
//   color: black;
//   div {
//     text-align: left;
//     height: 50px;
//     line-height: 50px;
//   }
//   a {
//     text-decoration: none;
//     width: 100px;
//     font-size: 14px;
//     svg {
//       width: 20px;
//       height: 20px;
//       vertical-align: middle;
//     }
//     span {
//       display: inline-block;
//       vertical-align: middle;
//       margin-left: 5px;
//     }
//   }
// }
</style>
