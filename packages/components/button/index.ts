import { App } from 'vue'
import Button from './src/button.vue'

export const QsButton = Button

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}

export * from './src/button' 