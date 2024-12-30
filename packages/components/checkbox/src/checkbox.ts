import type { ExtractPropTypes, PropType } from 'vue'

export type CheckboxValueType = string | number | boolean
export type CheckboxSize = 'large' | 'default' | 'small'

export const checkboxProps = {
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<CheckboxValueType | CheckboxValueType[]>,
    default: undefined
  },
  label: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: undefined
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<CheckboxSize>,
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
  checked: {
    type: Boolean,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  trueValue: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: true
  },
  falseValue: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: false
  },
  beforeChange: {
    type: Function as PropType<() => Promise<boolean> | boolean>,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  }
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export const checkboxEmits = {
  'update:modelValue': (value: CheckboxValueType | CheckboxValueType[]) => true,
  'change': (value: CheckboxValueType | CheckboxValueType[], evt: Event) => true,
  'beforeChange': () => true
}

export type CheckboxEmits = typeof checkboxEmits 