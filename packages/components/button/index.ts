import { withInstall } from '../../utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const QsButton = withInstall(Button)
export const QsButtonGroup = withInstall(ButtonGroup)
export default QsButton

export * from './src/button'

declare module 'vue' {
  export interface GlobalComponents {
    QsButton: typeof QsButton
    QsButtonGroup: typeof QsButtonGroup
  }
} 