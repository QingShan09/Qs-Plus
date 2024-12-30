<template>
  <label
    :class="[
      'qs-checkbox',
      {
        'is-checked': isChecked,
        'is-disabled': isDisabled,
        'is-indeterminate': indeterminate,
        'is-bordered': border,
        'is-button': button,
        'is-loading': loading,
        [`qs-checkbox--${checkboxSize}`]: checkboxSize
      }
    ]"
    :style="checkboxStyle"
  >
    <span
      :class="[
        'qs-checkbox__input',
        {
          'is-checked': isChecked,
          'is-disabled': isDisabled,
          'is-indeterminate': indeterminate,
          'is-loading': loading
        }
      ]"
    >
      <input
        ref="checkboxRef"
        type="checkbox"
        :class="'qs-checkbox__original'"
        :value="label"
        :name="name"
        :disabled="isDisabled"
        :checked="isChecked"
        @change="handleChange"
      >
      <span class="qs-checkbox__inner" :style="innerStyle"></span>
      <span v-if="loading" class="qs-checkbox__loading">
        <svg class="loading-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 100-768 384 384 0 000 768z" fill="#E6E6E6"/>
          <path d="M512 64a448 448 0 110 896 448 448 0 010-896zm0 832a384 384 0 100-768 384 384 0 000 768z" fill="#989898"/>
          <animateTransform attributeName="transform" type="rotate" from="0 512 512" to="360 512 512" dur="1s" repeatCount="indefinite"/>
        </svg>
      </span>
    </span>
    <span v-if="$slots.default || label" :class="['qs-checkbox__label', { 'is-button': button }]" :style="labelStyle">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, inject } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import type { CheckboxValueType } from './checkbox'

defineOptions({
  name: 'QsCheckbox'
})

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

// 注入 checkbox-group 的上下文
const checkboxGroup = inject('checkboxGroupKey', undefined)

const checkboxRef = ref<HTMLInputElement>()

// 计算是否禁用
const isDisabled = computed(() => {
  const groupDisabled = checkboxGroup?.disabled?.value
  return props.disabled || groupDisabled || props.loading
})

// 计算尺寸
const checkboxSize = computed(() => {
  return props.size || checkboxGroup?.size?.value || 'default'
})

// 计算是否选中
const isChecked = computed(() => {
  if (checkboxGroup) {
    const groupValue = checkboxGroup.modelValue.value as CheckboxValueType[]
    return groupValue.includes(props.label!)
  }
  return props.modelValue === props.trueValue
})

// 计算样式
const checkboxStyle = computed(() => {
  const style: Record<string, string> = {}
  if (checkboxGroup?.fill?.value && props.button) {
    style['--checkbox-button-checked-bg'] = checkboxGroup.fill.value
  }
  if (props.color) {
    style['--checkbox-checked-color'] = props.color
  }
  return style
})

const innerStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) {
    if (isChecked.value) {
      style.borderColor = props.color
      style.backgroundColor = props.color
    } else {
      style.borderColor = props.color
    }
  }
  return style
})

const labelStyle = computed(() => {
  const style: Record<string, string> = {}
  if (checkboxGroup?.textColor?.value && props.button && isChecked.value) {
    style.color = checkboxGroup.textColor.value
  }
  return style
})

// 处理变更
const handleChange = async (event: Event) => {
  if (props.loading) return
  
  if (props.beforeChange) {
    emit('beforeChange')
    const shouldChange = await props.beforeChange()
    if (!shouldChange) {
      event.preventDefault()
      if (checkboxRef.value) {
        checkboxRef.value.checked = isChecked.value
      }
      return
    }
  }

  const target = event.target as HTMLInputElement
  const checked = target.checked

  if (checkboxGroup) {
    const groupValue = [...checkboxGroup.modelValue.value] as CheckboxValueType[]
    const label = props.label!
    const index = groupValue.indexOf(label)

    if (checked && index === -1) {
      groupValue.push(label)
    } else if (!checked && index > -1) {
      groupValue.splice(index, 1)
    }

    checkboxGroup.modelValue.value = groupValue
  } else {
    const value = checked ? props.trueValue : props.falseValue
    emit('update:modelValue', value)
    emit('change', value, event)
  }
}
</script>

<style lang="scss" scoped>
.qs-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--demo-text-color);
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  &.is-button {
    margin-right: 0;
    padding: 8px 15px;
    border: 1px solid var(--demo-border-color);
    border-radius: 0;
    
    &:first-child {
      border-radius: var(--demo-radius-base) 0 0 var(--demo-radius-base);
    }
    
    &:last-child {
      border-radius: 0 var(--demo-radius-base) var(--demo-radius-base) 0;
    }

    &:not(:first-child) {
      margin-left: -1px;
    }

    &.is-checked {
      color: #fff;
      background-color: var(--checkbox-button-checked-bg, var(--demo-primary-color));
      border-color: var(--checkbox-button-checked-bg, var(--demo-primary-color));
      
      &:not(:first-child) {
        box-shadow: -1px 0 0 0 #fff;
      }
    }

    .qs-checkbox__input {
      display: none;
    }

    .qs-checkbox__label {
      padding: 0;
    }
  }

  &.is-bordered {
    padding: 8px 15px;
    border-radius: var(--demo-radius-base);
    border: 1px solid var(--demo-border-color);
    box-sizing: border-box;

    &.qs-checkbox--large {
      padding: 10px 20px;
      font-size: 16px;

      .qs-checkbox__inner {
        width: 16px;
        height: 16px;
      }
    }

    &.qs-checkbox--small {
      padding: 6px 12px;
      font-size: 12px;

      .qs-checkbox__inner {
        width: 12px;
        height: 12px;
      }
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--demo-text-color-disabled);

    .qs-checkbox__input {
      cursor: not-allowed;

      &.is-disabled {
        .qs-checkbox__inner {
          background-color: var(--demo-bg-color-light);
          border-color: var(--demo-border-color);
          cursor: not-allowed;

          &::after {
            border-color: var(--demo-text-color-disabled);
          }
        }
      }
    }
  }

  &.is-loading {
    cursor: default;

    .qs-checkbox__inner {
      opacity: 0.5;
    }
  }

  &__input {
    position: relative;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    outline: none;
    cursor: pointer;

    &.is-checked {
      .qs-checkbox__inner {
        background-color: var(--checkbox-checked-color, var(--demo-primary-color));
        border-color: var(--checkbox-checked-color, var(--demo-primary-color));

        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }

    &.is-indeterminate {
      .qs-checkbox__inner {
        background-color: var(--checkbox-checked-color, var(--demo-primary-color));
        border-color: var(--checkbox-checked-color, var(--demo-primary-color));

        &::after {
          transform: translate(-50%, -50%) scaleY(1);
          border: none;
          height: 2px;
          background-color: var(--demo-bg-color);
          left: 50%;
          top: 50%;
          width: 8px;
        }
      }
    }

    &.is-loading {
      cursor: default;
    }
  }

  &__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  &__inner {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    background-color: var(--demo-bg-color);
    border: 1px solid var(--demo-border-color);
    border-radius: 2px;
    transition: all 0.3s;

    &::after {
      position: absolute;
      content: '';
      top: 1px;
      left: 4px;
      width: 3px;
      height: 7px;
      border: 1px solid var(--demo-bg-color);
      border-left: 0;
      border-top: 0;
      transform: rotate(45deg) scaleY(0);
      transition: transform 0.15s ease-in;
      transform-origin: center;
    }
  }

  &__label {
    padding-left: 8px;
    line-height: 1;

    &.is-button {
      padding-left: 0;
    }
  }

  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading-icon {
      width: 14px;
      height: 14px;
      animation: loading-rotate 2s linear infinite;
    }
  }

  &:hover:not(.is-disabled):not(.is-loading) {
    .qs-checkbox__inner {
      border-color: var(--checkbox-checked-color, var(--demo-primary-color));
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