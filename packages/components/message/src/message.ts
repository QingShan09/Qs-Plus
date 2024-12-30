import type { ExtractPropTypes, PropType, VNode } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'
export type MessagePosition = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'

export interface MessageConfigOptions {
  // 最大显示数量
  max?: number
  // 距离顶部/底部的距离
  offset?: number
  // 消息展示位置
  position?: MessagePosition
  // 消息持续时间
  duration?: number
  // 是否显示关闭按钮
  closable?: boolean
  // 是否显示图标
  showIcon?: boolean
  // 层级
  zIndex?: number
  // 消息间距
  gap?: number
  // 是否合并相同内容的消息
  grouping?: boolean
}

export interface MessageOptions {
  // 消息内容
  content: string | VNode
  // 消息类型
  type?: MessageType
  // 显示时间,单位毫秒,设为 0 则不会自动关闭
  duration?: number
  // 是否显示关闭按钮
  closable?: boolean
  // 关闭时的回调函数
  onClose?: () => void
  // 是否显示图标
  showIcon?: boolean
  // 自定义图标
  icon?: string
  // 消息的唯一标识
  id?: string
  // 自定义样式类名
  customClass?: string
  // 层级
  zIndex?: number
  // 偏移距离
  offset?: number
  // 是否支持 HTML 内容
  dangerouslyUseHTMLString?: boolean
  // 是否显示背景遮罩
  showMask?: boolean
  // 点击遮罩是否关闭
  maskClosable?: boolean
  // 消息位置
  position?: MessagePosition
  // 是否居中显示
  center?: boolean
  // 鼠标悬停时是否暂停计时
  pauseOnHover?: boolean
}

export const messageProps = {
  id: {
    type: String,
    required: true
  },
  content: {
    type: [String, Object] as PropType<string | VNode>,
    required: true
  },
  type: {
    type: String as PropType<MessageType>,
    values: ['success', 'warning', 'info', 'error'] as const,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 3000
  },
  closable: {
    type: Boolean,
    default: false
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  icon: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  zIndex: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 20
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  showMask: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  position: {
    type: String as PropType<MessagePosition>,
    values: ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'] as const,
    default: 'top'
  },
  center: {
    type: Boolean,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
} as const

export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>

export interface MessageHandler {
  // 关闭当前消息
  close: () => void
}

export interface MessageInstance {
  // 创建消息
  (options: MessageOptions | string): MessageHandler
  // 成功消息
  success: (options: MessageOptions | string) => MessageHandler
  // 警告消息
  warning: (options: MessageOptions | string) => MessageHandler
  // 错误消息
  error: (options: MessageOptions | string) => MessageHandler
  // 信息消息
  info: (options: MessageOptions | string) => MessageHandler
  // 关闭所有消息
  closeAll: () => void
  // 更新配置
  config: (options: MessageConfigOptions) => void
}

export type { MessageHandler as MessageFn } 