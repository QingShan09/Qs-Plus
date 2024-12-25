import type { App } from 'vue'
import * as components from './components'

export * from './components'

export const install = function(app: App) {
  Object.entries(components).forEach(([name, component]) => {
    if (component.install) {
      app.use(component)
    } else if (component.name) {
      app.component(component.name, component)
    }
  })
}

export default {
  install
} 