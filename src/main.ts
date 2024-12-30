import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// highlight.js
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import scss from 'highlight.js/lib/languages/scss'
import 'highlight.js/styles/atom-one-dark.css'

// 注册语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('vue', xml)
hljs.registerLanguage('scss', scss)

// 导入组件库
import QsPlus from '../packages'

// 导入样式
import './assets/styles/index.scss'

// 导入高亮指令
import highlight from './directives/highlight'

const app = createApp(App)

// 注册高亮指令
app.directive('highlight', highlight)

app.use(router)
app.use(QsPlus)

app.mount('#app')