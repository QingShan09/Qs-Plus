<template>
  <div
    :class="[
      'qs-switch',
      customClass,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-checked': checked,
        [`qs-switch--${size}`]: size,
        'is-inline-prompt': inlinePrompt,
        'is-bordered': bordered,
        'is-round': round
      }
    ]"
    :style="[switchStyle, customStyle]"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="disabled"
    @click.prevent="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <input
      ref="input"
      type="checkbox"
      class="qs-switch__input"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      @change="handleChange"
      @keydown.enter="handleClick"
    >
    <span
      :class="[
        'qs-switch__core',
        {
          'is-checked': checked,
          'is-loading': loading,
          'is-hover': isHover
        }
      ]"
      :style="coreStyle"
    >
      <div class="qs-switch__rail"></div>
      <div class="qs-switch__action">
        <span v-if="loading" class="qs-switch__loading">
          <svg class="loading-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 100-768 384 384 0 000 768z" fill="currentColor" fill-opacity="0.3"/>
            <path d="M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 100-768 384 384 0 000 768z" fill="currentColor" fill-opacity="0.9">
              <animateTransform attributeName="transform" type="rotate" from="0 512 512" to="360 512 512" dur="1s" repeatCount="indefinite"/>
            </path>
          </svg>
        </span>
        <span v-else-if="inlinePrompt && (checked ? activeIcon : inactiveIcon)" class="qs-switch__icon">
          <Icon :icon="checked ? activeIcon : inactiveIcon" />
        </span>
      </div>
      <template v-if="inlinePrompt">
        <span v-if="activeText || activeIcon" class="qs-switch__inner is-active" :style="activeTextStyle">
          <Icon v-if="activeIcon" :icon="activeIcon" />
          <span v-else>{{ activeText }}</span>
        </span>
        <span v-if="inactiveText || inactiveIcon" class="qs-switch__inner is-inactive" :style="inactiveTextStyle">
          <Icon v-if="inactiveIcon" :icon="inactiveIcon" />
          <span v-else>{{ inactiveText }}</span>
        </span>
      </template>
    </span>
    <template v-if="!inlinePrompt">
      <span v-if="activeText || activeIcon" class="qs-switch__label is-active" :style="activeTextStyle">
        <Icon v-if="activeIcon" :icon="activeIcon" />
        <span v-else>{{ activeText }}</span>
      </span>
      <span v-if="inactiveText || inactiveIcon" class="qs-switch__label is-inactive" :style="inactiveTextStyle">
        <Icon v-if="inactiveIcon" :icon="inactiveIcon" />
        <span v-else>{{ inactiveText }}</span>
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { switchProps, switchEmits } from './switch'
import type { SwitchValueType } from './switch'

defineOptions({
  name: 'QsSwitch'
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const input = ref<HTMLInputElement>()
const isChanging = ref(false)
const isHover = ref(false)

// 计算是否选中
const checked = computed(() => props.modelValue === props.activeValue)

// 计算开关样式
const switchStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }
  return style
})

// 计算核心样式
const coreStyle = computed(() => {
  const style: Record<string, string> = {}
  if (checked.value) {
    style['--switch-checked-color'] = props.activeColor || ''
    style['--switch-checked-border-color'] = props.activeColor || ''
  } else {
    style['--switch-unchecked-color'] = props.inactiveColor || ''
    style['--switch-unchecked-border-color'] = props.inactiveColor || ''
  }
  return style
})

// 计算激活文本样式
const activeTextStyle = computed(() => {
  return {
    color: checked.value ? (props.activeTextColor || props.activeColor) : ''
  }
})

// 计算未激活文本样式
const inactiveTextStyle = computed(() => {
  return {
    color: !checked.value ? (props.inactiveTextColor || props.inactiveColor) : ''
  }
})

// 处理鼠标进入
const handleMouseEnter = () => {
  if (!props.disabled && !props.loading) {
    isHover.value = true
  }
}

// 处理鼠标离开
const handleMouseLeave = () => {
  isHover.value = false
}

// 处理点击事件
const handleClick = async () => {
  if (props.disabled || props.loading || isChanging.value) return

  isChanging.value = true
  
  if (props.beforeChange) {
    emit('beforeChange')
    try {
      const shouldChange = await props.beforeChange()
      if (!shouldChange) {
        isChanging.value = false
        return
      }
    } catch (err) {
      isChanging.value = false
      return
    }
  }

  const newValue = checked.value ? props.inactiveValue : props.activeValue
  emit('update:modelValue', newValue)
  emit('change', newValue, new Event('change'))
  
  // 如果设置了延迟切换,则等待指定时间后再改变状态
  if (props.delay > 0) {
    setTimeout(() => {
      isChanging.value = false
    }, props.delay)
  } else {
    isChanging.value = false
  }
}

// 处理变更事件
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.checked ? props.activeValue : props.inactiveValue
  emit('update:modelValue', value)
}

// 监听值变化
watch(() => props.modelValue, (val) => {
  if (props.validateEvent) {
    emit('validate')
  }
})
</script>

<style lang="scss" scoped>
.qs-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 32px;
  vertical-align: middle;
  cursor: pointer;

  &__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }

  &__core {
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: 40px;
    height: 20px;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    overflow: hidden;

    &.is-checked {
      .qs-switch__rail {
        background-color: var(--switch-checked-color, var(--demo-primary-color));
        border-color: var(--switch-checked-border-color, var(--demo-primary-color));
      }

      .qs-switch__action {
        left: calc(100% - 18px);
        color: var(--switch-checked-color, var(--demo-primary-color));
        transform: scale(1.2);
        
        &::before {
          background-color: var(--demo-bg-color);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
        }
      }

      .qs-switch__inner {
        &.is-active {
          opacity: 1;
          transform: translateX(0);
        }

        &.is-inactive {
          opacity: 0;
          transform: translateX(10px);
        }
      }
    }

    &.is-loading {
      cursor: not-allowed;
      
      .qs-switch__action {
        color: var(--demo-text-color-secondary);
        animation: none;
        transform: scale(1);
      }
    }

    &.is-hover:not(.is-checked):not(.is-disabled) {
      .qs-switch__rail {
        border-color: var(--demo-border-color-hover);
      }

      .qs-switch__action {
        transform: scale(1.1);
      }
    }
  }

  &__rail {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--switch-unchecked-border-color, var(--demo-border-color));
    border-radius: inherit;
    background: var(--switch-unchecked-color, #dcdfe6);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__action {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dcdfe6;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--demo-bg-color);
      transition: all 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
      z-index: 1;
    }

    .qs-switch__loading,
    .qs-switch__icon {
      position: relative;
      z-index: 2;
      font-size: 12px;
    }
  }

  &__inner {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 12px;
    padding: 0 5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: var(--demo-bg-color);
    user-select: none;
    z-index: 1;

    &.is-active {
      left: 0;
      opacity: 0;
      transform: translateX(-10px);
    }

    &.is-inactive {
      right: 0;
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__label {
    display: inline-block;
    font-size: 14px;
    padding: 0 5px;
    color: var(--demo-text-color);
    transition: color 0.3s;
    user-select: none;

    &.is-active {
      color: var(--demo-primary-color);
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .qs-switch__core {
      cursor: not-allowed;

      .qs-switch__rail {
        background-color: var(--demo-disabled-bg-color, #f5f7fa);
        border-color: var(--demo-border-color);
      }

      &.is-checked {
        .qs-switch__rail {
          background-color: var(--demo-disabled-primary-color, #a0cfff);
          border-color: var(--demo-disabled-primary-color, #a0cfff);
        }
      }
    }

    .qs-switch__action {
      color: var(--demo-text-color-disabled);
      
      &::before {
        background-color: var(--demo-bg-color);
        box-shadow: none;
        border: 1px solid var(--demo-border-color);
      }
    }

    .qs-switch__label {
      color: var(--demo-text-color-disabled);

      &.is-active {
        color: var(--demo-disabled-primary-color, #a0cfff);
      }
    }
  }

  &.is-bordered {
    padding: 0 12px;
    border: 1px solid var(--demo-border-color);
    border-radius: 4px;
    box-sizing: border-box;
    
    &.is-checked {
      border-color: var(--demo-primary-color);
    }
    
    &.is-disabled {
      border-color: var(--demo-border-color);
    }
  }

  &.is-round {
    .qs-switch__core {
      border-radius: 10px;
    }
  }

  &--large {
    font-size: 16px;
    height: 40px;

    .qs-switch__core {
      min-width: 50px;
      height: 24px;
    }

    .qs-switch__action {
      width: 20px;
      height: 20px;
      font-size: 14px;
    }

    &.is-checked {
      .qs-switch__action {
        left: calc(100% - 22px);
      }
    }

    .qs-switch__label {
      font-size: 16px;
    }
  }

  &--small {
    font-size: 12px;
    height: 24px;

    .qs-switch__core {
      min-width: 30px;
      height: 16px;
    }

    .qs-switch__action {
      width: 12px;
      height: 12px;
      font-size: 10px;
    }

    &.is-checked {
      .qs-switch__action {
        left: calc(100% - 14px);
      }
    }

    .qs-switch__label {
      font-size: 12px;
    }
  }

  &.is-inline-prompt {
    .qs-switch__core {
      min-width: 50px;
      padding: 0 25px;
    }

    &.qs-switch--small {
      .qs-switch__core {
        min-width: 40px;
        padding: 0 20px;
      }
    }

    &.qs-switch--large {
      .qs-switch__core {
        min-width: 60px;
        padding: 0 30px;
      }
    }
  }
}

@keyframes loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style> 