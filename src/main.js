import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-Plus UI库以及图标
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as ElIcon from '@element-plus/icons-vue'


const app = createApp(App)

// 通过for循环将图标以组件的形式全部引入 in属性 of值
// Object.keys(ElementPlusIconsVue).forEach((key)=>{
//   app.component(key,ElementPlusIconsVue[key])
// })

for (let iconName in ElIcon){
  app.component(iconName, ElIcon[iconName])
}
app.use(store).use(router).use(ElementPlus).mount('#app')
