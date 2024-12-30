import type { ExtractPropTypes, PropType } from 'vue'

export type InputType = 'text' | 'password' | 'number' | 'textarea' | 'search'
export type InputSize = 'large' | 'default' | 'small'

export const inputProps = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'default'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: Number,
    default: undefined
  },
  minlength: {
    type: Number,
    default: undefined
  },
  formatter: {
    type: Function as PropType<(value: string) => string>,
    default: undefined
  },
  parser: {
    type: Function as PropType<(value: string) => string>,
    default: undefined
  },
  rows: {
    type: Number,
    default: 2
  },
  autosize: {
    type: [Boolean, Object] as PropType<boolean | { minRows?: number, maxRows?: number }>,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  name: {
    type: String,
    default: ''
  },
  form: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  resize: {
    type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
    default: 'vertical'
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  'update:modelValue': (value: string | number) => true,
  input: (value: string | number) => true,
  change: (value: string | number) => true,
  focus: (event: FocusEvent) => event instanceof FocusEvent,
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  clear: () => true,
  keydown: (event: KeyboardEvent) => true,
  compositionstart: (event: CompositionEvent) => event instanceof CompositionEvent,
  compositionupdate: (event: CompositionEvent) => event instanceof CompositionEvent,
  compositionend: (event: CompositionEvent) => event instanceof CompositionEvent,
  mouseenter: (event: MouseEvent) => event instanceof MouseEvent,
  mouseleave: (event: MouseEvent) => event instanceof MouseEvent,
  search: (value: string) => true
}

export type InputEmits = typeof inputEmits 