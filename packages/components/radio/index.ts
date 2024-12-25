import { App } from 'vue'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'
import RadioButton from './src/radio-button.vue'

export const QsRadio = Radio
export const QsRadioGroup = RadioGroup
export const QsRadioButton = RadioButton

export default {
  install(app: App) {
    app.component(Radio.name, Radio)
    app.component(RadioGroup.name, RadioGroup)
    app.component(RadioButton.name, RadioButton)
  }
}

export * from './src/radio' 