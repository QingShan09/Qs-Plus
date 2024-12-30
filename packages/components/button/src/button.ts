export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'text' | 'link'
export type ButtonSize = 'large' | 'default' | 'small'
export type ButtonShape = 'circle' | 'round'
export type ButtonIconPosition = 'left' | 'right'

export const buttonProps = {
  type: {
    type: String as () => ButtonType,
    default: 'default'
  },
  size: {
    type: String as () => ButtonSize,
    default: 'default'
  },
  shape: {
    type: String as () => ButtonShape,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconPosition: {
    type: String as () => ButtonIconPosition,
    default: 'left'
  },
  block: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  gradient: {
    type: Boolean,
    default: false
  }
} as const

export const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
} as const 