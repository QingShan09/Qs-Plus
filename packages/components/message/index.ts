import type { App } from 'vue'
import Message from './src/method'
import MessageConstructor from './src/message.vue'
import './src/message.scss'

const install = (app: App) => {
  console.log('注册消息组件')
  app.config.globalProperties.$message = Message
}

export const QsMessage = Object.assign(Message, { install })
export default QsMessage

export * from './src/message'

declare module 'vue' {
  export interface GlobalComponents {
    QsMessage: typeof MessageConstructor
  }

  export interface ComponentCustomProperties {
    $message: typeof Message
  }
} 