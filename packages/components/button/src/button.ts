export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'text' | 'link'
export type ButtonSize = 'large' | 'default' | 'small'
export type ButtonShape = 'circle' | 'round'

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
  }
} as const 