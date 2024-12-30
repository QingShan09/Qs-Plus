import { createVNode, render, isVNode, nextTick, type VNode } from 'vue'
import MessageConstructor from './message.vue'
import type { MessageOptions, MessageInstance, MessageConfigOptions, MessageType, MessageHandler } from './message'

let seed = 1
const instances: VNode[] = []
let zIndex = 2000

// 默认配置
const defaultConfig: MessageConfigOptions = {
  max: Infinity,
  offset: 20,
  position: 'top',
  duration: 3000,
  closable: false,
  showIcon: true,
  zIndex: 2000,
  gap: 16,
  grouping: true
}

// 创建容器
const createContainer = (position: string) => {
  const containerClass = `qs-message-container qs-message-container-${position}`
  let container = document.querySelector(`.qs-message-container-${position}`) as HTMLElement | null
  if (!container) {
    container = document.createElement('div')
    container.className = containerClass
    container.style.zIndex = '9999'
    document.body.appendChild(container)
  }
  return container
}

// 获取偏移量
const getVerticalOffset = (position: string) => {
  const instances = document.querySelectorAll(`.qs-message-container-${position} .qs-message`)
  const gap = defaultConfig.gap || 12
  let offset = defaultConfig.offset || 20

  instances.forEach((instance) => {
    offset += (instance as HTMLElement).offsetHeight + gap
  })

  return offset
}

// 更新位置
const updatePosition = (position: string) => {
  const container = document.querySelector(`.qs-message-container-${position}`) as HTMLElement
  if (!container) return

  const messages = container.querySelectorAll('.qs-message')
  const gap = defaultConfig.gap || 12
  let height = 0

  messages.forEach((el) => {
    const element = el as HTMLElement
    element.style.marginBottom = `${gap}px`
    height += element.offsetHeight + gap
  })

  // 更新容器高度
  container.style.height = `${height}px`
}

// 关闭消息
const closeMessage = (instance: VNode) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  instances.splice(idx, 1)
  const position = instance.props?.position || 'top'
  
  // 延迟更新位置，等待动画完成
  setTimeout(() => {
    updatePosition(position)
  }, 300)
}

// 创建消息实例
const createMessage = (options: MessageOptions | string): MessageHandler => {
  if (typeof window === 'undefined') {
    return {
      close: () => {}
    }
  }

  const position = typeof options === 'string' ? 'top' : (options.position || 'top')
  const container = createContainer(position)
  const id = `message_${seed++}`
  const userOnClose = typeof options === 'string' ? undefined : options.onClose

  // 处理选项
  const props = {
    ...defaultConfig,
    ...(typeof options === 'string' ? { content: options, type: 'info' } : options),
    id,
    zIndex: zIndex++,
    position,
    onClose: () => {
      userOnClose?.()
      closeMessage(vm)
    },
    onDestroy: () => {
      render(null, container)
      if (container.childNodes.length === 0) {
        container.remove()
      }
    }
  }

  // 处理最大显示数量
  if (instances.length >= (defaultConfig.max || Infinity)) {
    const firstInstance = instances[0]
    firstInstance.component?.exposed?.close()
  }

  // 创建虚拟节点
  const vm = createVNode(
    MessageConstructor,
    props,
    isVNode(props.content)
      ? {
          default: () => props.content
        }
      : null
  )

  // 确保组件实例的属性被正确设置
  if (vm.component) {
    vm.component.props = props
  }

  // 渲染
  render(vm, container)
  instances.push(vm)
  
  // 更新位置
  nextTick(() => {
    updatePosition(position)
  })

  return {
    close: () => vm.component?.exposed?.close()
  }
}

// 创建消息方法
const message = ((options: MessageOptions | string) => {
  console.log('调用消息方法:', options)
  return createMessage(options)
}) as MessageInstance

// 添加类型方法
const types: MessageType[] = ['success', 'warning', 'info', 'error']

types.forEach(type => {
  message[type] = (options: MessageOptions | string) => {
    console.log(`调用 ${type} 类型消息:`, options)
    if (typeof options === 'string') {
      options = {
        content: options,
        type
      }
    } else {
      options.type = type
    }
    return createMessage(options)
  }
})

// 添加全局方法
message.closeAll = () => {
  instances.forEach(instance => {
    instance.component?.exposed?.close()
  })
}

message.config = (options: MessageConfigOptions) => {
  Object.assign(defaultConfig, options)
}

export default message 