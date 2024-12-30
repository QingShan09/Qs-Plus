import type { App, Component } from 'vue'
import * as components from './components'
import { QsMessage } from './components/message'

export * from './components'

export const install = function(app: App) {
  console.log('注册组件库')
  
  // 注册组件
  Object.entries(components).forEach(([name, component]) => {
    console.log('注册组件:', name)
    if (name === 'QsMessage') {
      // 注册 Message 组件
      console.log('注册 Message 组件')
      app.use(QsMessage)
      return
    }
    app.component(name, component as Component)
  })
}

export default {
  install
} 