import type { ExtractPropTypes, PropType } from 'vue'

export type SwitchValueType = string | number | boolean
export type SwitchSize = 'large' | 'default' | 'small'

export const switchProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<SwitchValueType>,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<SwitchSize>,
    default: 'default'
  },
  width: {
    type: [String, Number],
    default: ''
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: String,
    default: ''
  },
  inactiveIcon: {
    type: String,
    default: ''
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  activeValue: {
    type: [String, Number, Boolean] as PropType<SwitchValueType>,
    default: true
  },
  inactiveValue: {
    type: [String, Number, Boolean] as PropType<SwitchValueType>,
    default: false
  },
  activeColor: {
    type: String,
    default: ''
  },
  inactiveColor: {
    type: String,
    default: ''
  },
  activeTextColor: {
    type: String,
    default: ''
  },
  inactiveTextColor: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  beforeChange: {
    type: Function as PropType<() => Promise<boolean> | boolean>,
    default: undefined
  },
  delay: {
    type: Number,
    default: 0
  },
  bordered: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: true
  },
  customClass: {
    type: String,
    default: ''
  },
  customStyle: {
    type: Object as PropType<Record<string, string>>,
    default: () => ({})
  }
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  'update:modelValue': (value: SwitchValueType) => true,
  'change': (value: SwitchValueType, evt: Event) => true,
  'beforeChange': () => true,
  'validate': () => true
}

export type SwitchEmits = typeof switchEmits 