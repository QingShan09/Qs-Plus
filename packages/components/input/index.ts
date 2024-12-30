import { withInstall } from '../../utils'
import Input from './src/input.vue'

export const QsInput = withInstall(Input)
export default QsInput

export * from './src/input'

declare module 'vue' {
  export interface GlobalComponents {
    QsInput: typeof QsInput
  }
} 