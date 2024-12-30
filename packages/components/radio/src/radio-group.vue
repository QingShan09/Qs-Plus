<template>
  <div
    :class="[
      'qs-radio-group',
      {
        'is-vertical': vertical
      }
    ]"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'
import { radioGroupProps, radioGroupEmits } from './radio-group'

defineOptions({
  name: 'QsRadioGroup'
})

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const radioGroupValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
    emit('change', val)
  }
})

// 提供给子组件的数据
provide('radioGroupKey', {
  name: props.name,
  modelValue: radioGroupValue,
  size: computed(() => props.size),
  disabled: computed(() => props.disabled),
  textColor: computed(() => props.textColor),
  fill: computed(() => props.fill),
  buttonStyle: computed(() => props.buttonStyle)
})
</script>

<style lang="scss" scoped>
.qs-radio-group {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  &.is-vertical {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style> 