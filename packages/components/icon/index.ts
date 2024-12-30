import { withInstall } from '../../utils'
import Icon from './src/icon.vue'

export const QsIcon = withInstall(Icon)
export default QsIcon

export * from './src/icon'

declare module 'vue' {
  export interface GlobalComponents {
    QsIcon: typeof QsIcon
  }
} 