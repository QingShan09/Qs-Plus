<template>
  <component
    :is="tag"
    :class="[
      'qs-checkbox-group',
      {
        'is-vertical': vertical,
        'is-button': button,
        [`qs-checkbox-group--${size}`]: size
      }
    ]"
    role="group"
    :aria-label="label"
  >
    <template v-if="options.length > 0">
      <qs-checkbox
        v-for="(option, index) in normalizedOptions"
        :key="index"
        v-model="currentValue"
        :disabled="option.disabled || disabled"
        :label="option.value"
        :size="size"
        :border="border"
        :button="button"
      >
        {{ option.label }}
      </qs-checkbox>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>

<script setup lang="ts">
import { provide, computed, watch } from 'vue'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group'
import type { CheckboxValueType } from './checkbox'

defineOptions({
  name: 'QsCheckboxGroup'
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

// 当前值
const currentValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxValueType[]) {
    if (props.max !== undefined && val.length > props.max) return
    if (props.min !== undefined && val.length < props.min) return
    emit('update:modelValue', val)
    emit('change', val)
  }
})

// 处理 options
const normalizedOptions = computed(() => {
  return props.options.map(option => {
    if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
      return {
        label: String(option),
        value: option,
        disabled: false
      }
    }
    return {
      ...option,
      label: option.label || String(option.value),
      disabled: option.disabled || false
    }
  })
})

// 提供给子组件的数据
provide('checkboxGroupKey', {
  name: 'checkbox-group',
  modelValue: currentValue,
  size: computed(() => props.size),
  disabled: computed(() => props.disabled),
  min: computed(() => props.min),
  max: computed(() => props.max),
  fill: computed(() => props.fill),
  textColor: computed(() => props.textColor)
})

// 监听值变化，触发验证
watch(
  () => currentValue.value,
  (val) => {
    if (props.validateEvent) {
      // 这里可以添加表单验证逻辑
    }
  }
)
</script>

<style lang="scss" scoped>
.qs-checkbox-group {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  &.is-vertical {
    flex-direction: column;
    align-items: flex-start;
  }

  &.is-button {
    display: inline-flex;
    gap: 0;

    .qs-checkbox {
      margin-right: 0;
    }
  }

  &--large {
    .qs-checkbox {
      font-size: 16px;
    }
  }

  &--small {
    .qs-checkbox {
      font-size: 12px;
    }
  }
}
</style> 