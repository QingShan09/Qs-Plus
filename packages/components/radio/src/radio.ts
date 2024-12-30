import type { ExtractPropTypes, PropType } from 'vue'

export type RadioSize = 'large' | 'default' | 'small'
export type RadioValueType = string | number | boolean
export type RadioButtonStyle = 'outline' | 'solid'

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean] as unknown as PropType<RadioValueType>,
    default: undefined
  },
  label: {
    type: [String, Number, Boolean] as unknown as PropType<RadioValueType>,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as unknown as PropType<RadioSize>,
    default: 'default'
  },
  name: {
    type: String,
    default: undefined
  },
  border: {
    type: Boolean,
    default: false
  },
  button: {
    type: Boolean,
    default: false
  },
  buttonStyle: {
    type: String as unknown as PropType<RadioButtonStyle>,
    default: 'outline'
  },
  textColor: {
    type: String,
    default: undefined
  },
  fill: {
    type: String,
    default: undefined
  }
} as const

export type RadioProps = ExtractPropTypes<typeof radioProps>

export const radioEmits = {
  'update:modelValue': (value: RadioValueType) => true,
  'change': (value: RadioValueType) => true
}

export type RadioEmits = typeof radioEmits 