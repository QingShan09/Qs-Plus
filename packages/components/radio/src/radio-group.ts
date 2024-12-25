import type { RadioSize } from './radio'

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as () => RadioSize,
    default: 'default'
  }
} as const

export const radioGroupEmits = {
  'update:modelValue': (val: string | number | boolean) => true,
  'change': (val: string | number | boolean) => true
} 