import { withInstall } from '../../utils'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

export const QsRadio = withInstall(Radio)
export const QsRadioGroup = withInstall(RadioGroup)
export default QsRadio

export * from './src/radio'
export * from './src/radio-group' 