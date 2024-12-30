import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxSize, CheckboxValueType } from './checkbox'

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<CheckboxValueType[]>,
    default: () => []
  },
  size: {
    type: String as PropType<CheckboxSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number,
    default: undefined
  },
  max: {
    type: Number,
    default: undefined
  },
  vertical: {
    type: Boolean,
    default: false
  },
  button: {
    type: Boolean,
    default: false
  },
  textColor: {
    type: String,
    default: undefined
  },
  fill: {
    type: String,
    default: undefined
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  tag: {
    type: String,
    default: 'div'
  },
  options: {
    type: Array as PropType<Array<CheckboxValueType | { label: string, value: CheckboxValueType, disabled?: boolean }>>,
    default: () => []
  }
} as const

export const checkboxGroupEmits = {
  'update:modelValue': (value: CheckboxValueType[]) => true,
  'change': (value: CheckboxValueType[]) => true
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits 