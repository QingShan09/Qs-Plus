import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import highlight from './directives/highlight'

// 引入代码高亮样式
import 'highlight.js/styles/github.css'
// 引入组件库
import QsPlus from '../packages'
// 引入组件库样式
// import '../packages/theme-chalk/src/index.scss'

// 创建应用实例
const app = createApp(App)

// 注册路由
app.use(router)
// 注册组件库
app.use(QsPlus)
// 注册代码高亮指令
app.directive('highlightjs', highlight)

// 挂载应用
app.mount('#app')