<template>
  <transition
    name="qs-message-fade"
    @before-leave="onBeforeLeave"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="[
        'qs-message',
        `qs-message--${type}`,
        customClass,
        { 'is-center': center, 'is-closable': closable }
      ]"
      role="alert"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <!-- 遮罩层 -->
      <div
        v-if="showMask"
        :class="['qs-message__mask', { 'is-clickable': maskClosable }]"
        @click="maskClosable && close()"
      />

      <div class="qs-message__content">
        <!-- 图标 -->
        <span v-if="showIcon" class="qs-message__icon" :class="type">
          <Icon v-if="icon" :icon="icon" />
          <Icon v-else :icon="typeIcon" />
        </span>

        <!-- 内容 -->
        <slot>
          <p v-if="!dangerouslyUseHTMLString" class="qs-message__text">
            {{ content }}
          </p>
          <p v-else v-html="content" class="qs-message__text"></p>
        </slot>

        <!-- 关闭按钮 -->
        <div v-if="closable" class="qs-message__close" @click="close">
          <Icon icon="mdi:close" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { messageProps } from './message'
import type { MessageType } from './message'

const props = defineProps(messageProps)
const emit = defineEmits<{
  (e: 'destroy'): void
  (e: 'close'): void
}>()

// 控制显示
const visible = ref(true)

// 计时器
let timer: NodeJS.Timeout | null = null
let remainingTime = ref(props.duration)
let startTime: number | null = null

// 计算图标
const typeIcon = computed(() => {
  const iconMap: Record<MessageType, string> = {
    success: 'mdi:check-circle',
    warning: 'mdi:alert',
    error: 'mdi:close-circle',
    info: 'mdi:information'
  }
  return iconMap[props.type]
})

// 开始计时
const startTimer = () => {
  if (props.duration > 0) {
    startTime = Date.now()
    timer = setTimeout(() => {
      close()
    }, remainingTime.value)
  }
}

// 暂停计时
const pauseTimer = () => {
  if (timer && startTime) {
    clearTimeout(timer)
    timer = null
    const elapsedTime = Date.now() - startTime
    remainingTime.value = Math.max(0, remainingTime.value - elapsedTime)
  }
}

// 清除计时
const clearTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

// 鼠标事件处理
const onMouseEnter = () => {
  if (props.pauseOnHover) {
    pauseTimer()
  }
}

const onMouseLeave = () => {
  if (props.pauseOnHover) {
    startTimer()
  }
}

// 关闭前的处理
const onBeforeLeave = () => {
  // 移除元素的尺寸，避免影响其他消息的位置计算
  const el = document.getElementById(props.id)
  if (el) {
    el.style.height = '0'
    el.style.margin = '0'
    el.style.padding = '0'
    el.style.overflow = 'hidden'
  }
}

// 关闭消息
const close = () => {
  visible.value = false
  clearTimer()
  emit('close')
}

// 监听属性变化
watch(
  () => props.duration,
  (val) => {
    remainingTime.value = val
    clearTimer()
    if (visible.value) {
      startTimer()
    }
  }
)

// 生命周期钩子
onMounted(() => {
  console.log('消息组件已挂载:', props)
  startTimer()
})

onBeforeUnmount(() => {
  clearTimer()
})

// 暴露方法
defineExpose({
  close
})
</script> 