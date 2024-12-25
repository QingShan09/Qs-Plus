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
        'is-circle': shape === 'circle'
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-icon">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" />
      </svg>
    </span>
    <Icon v-else-if="icon" :icon="icon" />
    <span v-if="$slots.default" :class="{ 'has-icon': icon || loading }">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { buttonProps } from './button'

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

    return {
      handleClick
    }
  }
})
</script>

<style lang="scss">
.qs-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: .1s;
  font-weight: 500;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
  gap: 6px;

  .iconify {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }

  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }

  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }

  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }

  &--text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;

    &:hover,
    &:focus {
      color: #66b1ff;
      border-color: transparent;
      background-color: transparent;
    }
  }

  &--link {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: #66b1ff;
    }
  }

  &.is-disabled,
  &.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ebeef5;
  }

  &.is-loading {
    position: relative;
    pointer-events: none;

    .loading-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .circular {
      width: 14px;
      height: 14px;
      animation: loading-rotate 2s linear infinite;
    }

    .path {
      stroke-dasharray: 90,150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: currentColor;
      stroke-linecap: round;
      animation: loading-dash 1.5s ease-in-out infinite;
    }
  }

  &.is-round {
    border-radius: 20px;
    padding: 8px 20px;
  }

  &.is-circle {
    border-radius: 50%;
    padding: 8px;
    width: 32px;
    height: 32px;
  }

  &--large {
    height: 40px;
    padding: 12px 20px;
    font-size: 16px;

    &.is-circle {
      width: 40px;
      height: 40px;
    }

    .iconify {
      font-size: 18px;
    }
  }

  &--small {
    height: 24px;
    padding: 5px 12px;
    font-size: 12px;

    &.is-circle {
      width: 24px;
      height: 24px;
    }

    .iconify {
      font-size: 14px;
    }
  }
}

@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -120px;
  }
}
</style> 