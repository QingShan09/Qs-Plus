import { withInstall } from '../../utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const QsCheckbox = withInstall(Checkbox)
export const QsCheckboxGroup = withInstall(CheckboxGroup)
export default QsCheckbox

export * from './src/checkbox'
export * from './src/checkbox-group' 