<template>
  <i 
    :class="[
      'qs-icon',
      `qs-icon--${size}`,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-rotating': rotating,
        [`is-${type}`]: type,
        [`is-${effect}`]: effect
      }
    ]"
    :style="{
      color,
      fontSize: customSize,
      transform: `rotate(${rotate}deg)`,
      cursor: disabled ? 'not-allowed' : (clickable ? 'pointer' : 'inherit')
    }"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <Icon 
      :icon="loading ? 'mdi:loading' : icon"
      :style="{
        animation: loading || rotating ? 'icon-rotate 1s linear infinite' : ''
      }"
    />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
  // 图标名称
  icon: string
  // 图标大小
  size?: 'small' | 'default' | 'large'
  // 自定义大小
  customSize?: string
  // 图标颜色
  color?: string
  // 是否禁用
  disabled?: boolean
  // 是否加载中
  loading?: boolean
  // 是否旋转
  rotating?: boolean
  // 旋转角度
  rotate?: number
  // 图标类型
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  // 图标效果
  effect?: 'light' | 'dark'
  // 是否可点击
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  disabled: false,
  loading: false,
  rotating: false,
  rotate: 0,
  clickable: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'mouseenter', event: MouseEvent): void
  (e: 'mouseleave', event: MouseEvent): void
}>()

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}

// 处理鼠标进入事件
const handleMouseEnter = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('mouseenter', event)
}

// 处理鼠标离开事件
const handleMouseLeave = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('mouseleave', event)
}
</script>

<style lang="scss">
.qs-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.3s;
  
  // 尺寸
  &--small {
    font-size: 14px;
  }
  
  &--default {
    font-size: 16px;
  }
  
  &--large {
    font-size: 18px;
  }

  // 状态
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // 类型
  &.is-primary {
    color: var(--primary-color);
  }

  &.is-success {
    color: var(--success-color);
  }

  &.is-warning {
    color: var(--warning-color);
  }

  &.is-danger {
    color: var(--danger-color);
  }

  &.is-info {
    color: var(--info-color);
  }

  // 效果
  &.is-light {
    opacity: 0.8;
  }

  &.is-dark {
    opacity: 1;
  }
}

@keyframes icon-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style> 