export type RadioSize = 'large' | 'default' | 'small'

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  value: {
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

export const radioGroupProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  size: {
    type: String as () => RadioSize,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export const radioButtonProps = {
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export const radioEmits = {
  'update:modelValue': (val: string | number | boolean) => true,
  'change': (val: string | number | boolean) => true
} 