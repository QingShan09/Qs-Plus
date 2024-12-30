export const iconProps = {
  icon: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '16px'
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  rotate: {
    type: Number,
    default: 0
  },
  spin: {
    type: Boolean,
    default: false
  }
} as const 