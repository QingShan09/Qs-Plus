<template>
  <button
    :class="[
      'qs-button',
      type ? `qs-button--${type}` : '',
      size ? `qs-button--${size}` : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <i v-if="loading" class="qs-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonProps } from './button'

export default defineComponent({
  name: 'QsButton',
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

    &:before {
      pointer-events: none;
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: rgba(255, 255, 255, 0.35);
    }
  }
}
</style> 