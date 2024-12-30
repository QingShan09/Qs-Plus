<template>
  <button
    :class="[
      'qs-button',
      type ? `qs-button--${type}` : '',
      size ? `qs-button--${size}` : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': shape === 'round',
        'is-circle': shape === 'circle',
        'is-plain': plain,
        'is-block': block,
        'is-gradient': gradient
      }
    ]"
    :disabled="disabled || loading"
    :style="buttonStyle"
    @click="handleClick"
    @touchstart="handleTouchStart"
  >
    <span v-if="loading" class="loading-icon">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" />
      </svg>
    </span>
    <template v-else>
      <Icon v-if="icon && iconPosition === 'left'" :icon="icon" />
      <span v-if="$slots.default" :class="{ 'has-icon': icon || loading }">
        <slot></slot>
      </span>
      <Icon v-if="icon && iconPosition === 'right'" :icon="icon" />
    </template>
    <span class="ripple-container"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { buttonProps } from './button'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'QsButton',
  components: {
    Icon
  },
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (evt: MouseEvent) => {
      emit('click', evt)
    }

    const handleTouchStart = (event: TouchEvent) => {
      const button = event.currentTarget as HTMLButtonElement;
      const rippleContainer = button.querySelector('.ripple-container') as HTMLElement;
      const rect = button.getBoundingClientRect();
      const touch = event.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      rippleContainer.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    const buttonStyle = computed(() => {
      if (!props.color) return {}

      const style: CSSProperties = {}
      
      if (props.gradient) {
        style.background = `linear-gradient(45deg, ${props.color}, ${adjustColor(props.color, 40)})`
        style.borderColor = 'transparent'
      } else if (props.plain) {
        style.color = props.color
        style.borderColor = props.color
        style.background = 'transparent'
      } else {
        style.background = props.color
        style.borderColor = props.color
      }

      return style
    })

    // 调整颜色亮度
    const adjustColor = (color: string, amount: number) => {
      return color.replace(/^#/, '').replace(/../g, color => 
        ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).slice(-2)
      )
    }

    return {
      handleClick,
      handleTouchStart,
      buttonStyle
    }
  }
})
</script>

<style lang="scss">
.qs-button {
  // 基础变量
  --button-height-sm: 24px;
  --button-height-md: 32px;
  --button-height-lg: 40px;
  --button-font-sm: 14px;
  --button-font-md: 14px;
  --button-font-lg: 16px;
  --button-padding-sm: 8px 12px;
  --button-padding-md: 8px 16px;
  --button-padding-lg: 10px 20px;
  
  // 颜色变量
  --button-primary: #1677ff;
  --button-primary-hover: #4096ff;
  --button-primary-active: #0958d9;
  --button-success: #52c41a;
  --button-success-hover: #73d13d;
  --button-success-active: #389e0d;
  --button-warning: #faad14;
  --button-warning-hover: #ffc53d;
  --button-warning-active: #d48806;
  --button-danger: #ff4d4f;
  --button-danger-hover: #ff7875;
  --button-danger-active: #d9363e;
  --button-default-border: #d9d9d9;
  --button-default-hover: #4096ff;
  --button-default-color: rgba(0, 0, 0, 0.88);
  --button-disabled-bg: rgba(0, 0, 0, 0.04);
  --button-disabled-color: rgba(0, 0, 0, 0.25);
  --button-disabled-border: #d9d9d9;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background-color: #ffffff;
  border: 1px solid var(--button-default-border);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: var(--button-height-md);
  padding: var(--button-padding-md);
  font-size: var(--button-font-md);
  border-radius: 6px;
  color: var(--button-default-color);
  line-height: 1;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);

  &:hover {
    color: var(--button-primary);
    border-color: var(--button-primary);
  }

  &:active {
    color: var(--button-primary-active);
    border-color: var(--button-primary-active);
  }

  .iconify {
    font-size: inherit;
    vertical-align: -0.125em;
    margin-right: 8px;
  }

  // 主要按钮
  &--primary {
    color: #fff;
    background: var(--button-primary);
    border-color: var(--button-primary);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

    &:hover {
      color: #fff;
      background: var(--button-primary-hover);
      border-color: var(--button-primary-hover);
    }

    &:active {
      color: #fff;
      background: var(--button-primary-active);
      border-color: var(--button-primary-active);
    }
  }

  // 成功按钮
  &--success {
    color: #fff;
    background: var(--button-success);
    border-color: var(--button-success);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

    &:hover {
      color: #fff;
      background: var(--button-success-hover);
      border-color: var(--button-success-hover);
    }

    &:active {
      color: #fff;
      background: var(--button-success-active);
      border-color: var(--button-success-active);
    }
  }

  // 警告按钮
  &--warning {
    color: #fff;
    background: var(--button-warning);
    border-color: var(--button-warning);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

    &:hover {
      color: #fff;
      background: var(--button-warning-hover);
      border-color: var(--button-warning-hover);
    }

    &:active {
      color: #fff;
      background: var(--button-warning-active);
      border-color: var(--button-warning-active);
    }
  }

  // 危险按钮
  &--danger {
    color: #fff;
    background: var(--button-danger);
    border-color: var(--button-danger);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

    &:hover {
      color: #fff;
      background: var(--button-danger-hover);
      border-color: var(--button-danger-hover);
    }

    &:active {
      color: #fff;
      background: var(--button-danger-active);
      border-color: var(--button-danger-active);
    }
  }

  // 文本按钮
  &--text {
    color: var(--button-default-color);
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    padding: 4px 8px;

    &:hover {
      color: var(--button-default-hover);
      background: rgba(0, 0, 0, 0.06);
    }

    &:active {
      background: rgba(0, 0, 0, 0.08);
    }
  }

  // 链接按钮
  &--link {
    color: var(--button-primary);
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    padding: 4px 8px;

    &:hover {
      color: var(--button-primary-hover);
    }

    &:active {
      color: var(--button-primary-active);
    }
  }

  // 禁用状态
  &.is-disabled {
    cursor: not-allowed;
    border-color: var(--button-disabled-border);
    color: var(--button-disabled-color);
    background: var(--button-disabled-bg);
    text-shadow: none;
    box-shadow: none;

    &.qs-button--text,
    &.qs-button--link {
      background: transparent;
      border-color: transparent;
    }

    &.qs-button--primary,
    &.qs-button--success,
    &.qs-button--warning,
    &.qs-button--danger {
      color: rgba(255, 255, 255, 0.8);
      background: rgba(0, 0, 0, 0.25);
      border-color: transparent;
    }
  }

  // 加载状态
  &.is-loading {
    position: relative;
    cursor: default;
    pointer-events: none;

    &::before {
      position: absolute;
      top: -1px;
      right: -1px;
      bottom: -1px;
      left: -1px;
      z-index: 1;
      display: block;
      background: #fff;
      border-radius: inherit;
      opacity: 0.35;
      transition: opacity 0.2s;
      content: '';
      pointer-events: none;
    }

    .loading-icon {
      margin-right: 8px;

      .circular {
        width: 14px;
        height: 14px;
        animation: button-loading-rotate 1s linear infinite;
      }

      .path {
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
      }
    }
  }

  // 圆角和圆形
  &.is-round {
    border-radius: var(--button-height-md);
    padding: 0 var(--button-height-md);
  }

  &.is-circle {
    min-width: var(--button-height-md);
    padding: 0;
    border-radius: 50%;

    .iconify {
      margin: 0;
    }
  }

  // 尺寸变体
  &--large {
    height: var(--button-height-lg);
    padding: var(--button-padding-lg);
    font-size: var(--button-font-lg);
    border-radius: 8px;

    &.is-round {
      border-radius: var(--button-height-lg);
      padding: 0 var(--button-height-lg);
    }

    &.is-circle {
      min-width: var(--button-height-lg);
    }
  }

  &--small {
    height: var(--button-height-sm);
    padding: var(--button-padding-sm);
    font-size: var(--button-font-sm);
    border-radius: 4px;

    &.is-round {
      border-radius: var(--button-height-sm);
      padding: 0 var(--button-height-sm);
    }

    &.is-circle {
      min-width: var(--button-height-sm);
    }
  }

  // 涟漪效果
  .ripple-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    pointer-events: none;
  }

  .ripple {
    position: absolute;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: button-ripple 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes button-ripple {
    from {
      width: 0;
      height: 0;
      opacity: 0.6;
    }
    to {
      width: 160%;
      height: 160%;
      opacity: 0;
    }
  }

  @keyframes button-loading-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  // 块级按钮
  &.is-block {
    display: flex;
    width: 100%;
  }

  // 朴素按钮
  &.is-plain {
    background: transparent;

    &:hover {
      color: var(--button-primary);
      background: rgba(var(--button-primary-rgb), 0.1);
    }

    &:active {
      background: rgba(var(--button-primary-rgb), 0.2);
    }

    &.qs-button--primary {
      color: var(--button-primary);
      border-color: var(--button-primary);

      &:hover {
        color: var(--button-primary-hover);
        border-color: var(--button-primary-hover);
        background: rgba(var(--button-primary-rgb), 0.1);
      }

      &:active {
        color: var(--button-primary-active);
        border-color: var(--button-primary-active);
        background: rgba(var(--button-primary-rgb), 0.2);
      }
    }

    &.qs-button--success {
      color: var(--button-success);
      border-color: var(--button-success);

      &:hover {
        color: var(--button-success-hover);
        border-color: var(--button-success-hover);
        background: rgba(var(--button-success-rgb), 0.1);
      }

      &:active {
        color: var(--button-success-active);
        border-color: var(--button-success-active);
        background: rgba(var(--button-success-rgb), 0.2);
      }
    }

    &.qs-button--warning {
      color: var(--button-warning);
      border-color: var(--button-warning);

      &:hover {
        color: var(--button-warning-hover);
        border-color: var(--button-warning-hover);
        background: rgba(var(--button-warning-rgb), 0.1);
      }

      &:active {
        color: var(--button-warning-active);
        border-color: var(--button-warning-active);
        background: rgba(var(--button-warning-rgb), 0.2);
      }
    }

    &.qs-button--danger {
      color: var(--button-danger);
      border-color: var(--button-danger);

      &:hover {
        color: var(--button-danger-hover);
        border-color: var(--button-danger-hover);
        background: rgba(var(--button-danger-rgb), 0.1);
      }

      &:active {
        color: var(--button-danger-active);
        border-color: var(--button-danger-active);
        background: rgba(var(--button-danger-rgb), 0.2);
      }
    }
  }

  // 渐变按钮
  &.is-gradient {
    border: none;
    background-image: linear-gradient(45deg, var(--button-primary), var(--button-primary-hover));
    color: #fff;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 0.8;
    }

    &.qs-button--success {
      background-image: linear-gradient(45deg, var(--button-success), var(--button-success-hover));
    }

    &.qs-button--warning {
      background-image: linear-gradient(45deg, var(--button-warning), var(--button-warning-hover));
    }

    &.qs-button--danger {
      background-image: linear-gradient(45deg, var(--button-danger), var(--button-danger-hover));
    }
  }

  // 图标位置
  .iconify {
    &.icon-right {
      margin: 0 0 0 8px;
    }
  }

  // 更新颜色变量，添加 RGB 值
  --button-primary-rgb: 22, 119, 255;
  --button-success-rgb: 82, 196, 26;
  --button-warning-rgb: 250, 173, 20;
  --button-danger-rgb: 255, 77, 79;
}
</style> 