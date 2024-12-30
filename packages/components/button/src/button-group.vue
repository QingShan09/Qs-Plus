<template>
  <div
    class="qs-button-group"
    :class="[
      size ? `qs-button-group--${size}` : '',
      type ? `qs-button-group--${type}` : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { buttonGroupProps } from './button'

export default defineComponent({
  name: 'QsButtonGroup',
  props: buttonGroupProps
})
</script>

<style lang="scss">
.qs-button-group {
  display: inline-flex;
  vertical-align: middle;

  .qs-button {
    position: relative;
    border-radius: 0;
    margin-right: -1px;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      margin-right: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    &:hover {
      z-index: 1;
    }

    &:active {
      z-index: 2;
    }

    &.is-disabled {
      z-index: 0;
    }
  }

  // 尺寸变体
  &--large {
    .qs-button {
      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }

  &--small {
    .qs-button {
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }

  // 类型变体
  &--primary,
  &--success,
  &--warning,
  &--danger {
    .qs-button {
      border-color: rgba(255, 255, 255, 0.3);
      
      &:not(:first-child) {
        border-left-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style> 