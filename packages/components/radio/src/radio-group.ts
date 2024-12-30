import type { ExtractPropTypes, PropType } from 'vue'
import type { RadioSize, RadioValueType } from './radio'

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean] as unknown as PropType<RadioValueType>,
    default: undefined
  },
  size: {
    type: String as unknown as PropType<RadioSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: undefined
  },
  textColor: {
    type: String,
    default: undefined
  },
  fill: {
    type: String,
    default: undefined
  },
  vertical: {
    type: Boolean,
    default: false
  },
  buttonStyle: {
    type: String as unknown as PropType<'outline' | 'solid'>,
    default: 'outline'
  }
} as const

export const radioGroupEmits = {
  'update:modelValue': (value: RadioValueType) => true,
  'change': (value: RadioValueType) => true
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupEmits = typeof radioGroupEmits 