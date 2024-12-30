import type { ExtractPropTypes, PropType } from 'vue'

export type SelectValue = string | number
export type SelectOption = {
  label: string
  value: SelectValue
  disabled?: boolean
  [key: string]: any
}

export const selectProps = {
  modelValue: {
    type: [String, Number, Array] as PropType<SelectValue | SelectValue[]>,
    default: undefined
  },
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => []
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  filterable: {
    type: Boolean,
    default: false
  },
  remote: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'small' | 'default' | 'large'>,
    default: 'default'
  },
  popperClass: {
    type: String,
    default: ''
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  labelKey: {
    type: String,
    default: 'label'
  },
  remoteMethod: {
    type: Function as PropType<(query: string) => void>,
    default: undefined
  }
} as const

export const selectEmits = {
  'update:modelValue': (value: SelectValue | SelectValue[] | undefined) => true,
  'change': (value: SelectValue | SelectValue[] | undefined) => true,
  'clear': () => true,
  'visible-change': (visible: boolean) => true,
  'remove-tag': (value: SelectValue) => true,
  'search': (query: string) => true,
  'focus': (event: FocusEvent) => true,
  'blur': (event: FocusEvent) => true
} as const

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits 