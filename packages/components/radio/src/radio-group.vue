<template>
  <div
    :class="[
      'qs-radio-group',
      size ? `qs-radio-group--${size}` : ''
    ]"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, computed } from 'vue'
import { radioGroupProps } from './radio'

export default defineComponent({
  name: 'QsRadioGroup',
  props: radioGroupProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const changeEvent = (value: string | number | boolean) => {
      emit('update:modelValue', value)
      emit('change', value)
    }

    provide('radioGroup', {
      modelValue: computed(() => props.modelValue),
      size: computed(() => props.size),
      disabled: computed(() => props.disabled),
      changeEvent
    })

    return {
      changeEvent
    }
  }
})
</script>

<style scoped lang="scss">
.qs-radio-group {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style> 