import type { App } from 'vue'
import QsIcon from './components/icon/icon.vue'
import QsButton from './components/button/button.vue'
import BackToTop from './components/back-to-top/back-to-top.vue'

// 导出单个组件
export { QsIcon, QsButton, BackToTop }

// 导出Vue插件
export default {
  install: (app: App) => {
    app.component('QsIcon', QsIcon)
    app.component('QsButton', QsButton)
    app.component('BackToTop', BackToTop)
  }
} 