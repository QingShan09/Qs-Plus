<template>
  <label
    :class="[
      'qs-radio-button',
      {
        'is-active': isChecked,
        'is-disabled': isDisabled,
        [`qs-radio-button--${radioSize}`]: radioSize
      }
    ]"
  >
    <input
      type="radio"
      :value="value"
      :disabled="isDisabled"
      v-model="model"
      class="qs-radio-button__original"
      @change="handleChange"
    >
    <span class="qs-radio-button__inner">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { radioButtonProps } from './radio'

export default defineComponent({
  name: 'QsRadioButton',
  props: radioButtonProps,
  emits: ['change'],
  setup(props, { emit }) {
    const radioGroup = inject('radioGroup', null)

    if (!radioGroup) {
      console.error('[QsRadioButton] must be used inside QsRadioGroup')
      return {}
    }

    const isDisabled = computed(() => props.disabled || radioGroup.disabled.value)
    const radioSize = computed(() => radioGroup.size.value)

    const model = computed({
      get() {
        return radioGroup.modelValue.value
      },
      set(val) {
        radioGroup.changeEvent(val)
      }
    })

    const isChecked = computed(() => model.value === props.value)

    const handleChange = () => {
      emit('change', model.value)
    }

    return {
      isDisabled,
      radioSize,
      model,
      isChecked,
      handleChange
    }
  }
})
</script>

<style scoped lang="scss">
.qs-radio-button {
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;

  &:first-child .qs-radio-button__inner {
    border-left: 1px solid var(--border-color, #dcdfe6);
    border-radius: 4px 0 0 4px;
  }

  &:last-child .qs-radio-button__inner {
    border-radius: 0 4px 4px 0;
  }

  &.is-active {
    .qs-radio-button__inner {
      color: var(--white, #fff);
      background-color: var(--primary-color, #409eff);
      border-color: var(--primary-color, #409eff);
      box-shadow: -1px 0 0 0 var(--primary-color, #409eff);
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .qs-radio-button__inner {
      color: var(--disabled-color, #c0c4cc);
      cursor: not-allowed;
      background-color: var(--disabled-bg-color, #f5f7fa);
      border-color: var(--disabled-border-color, #e4e7ed);
    }

    &.is-active .qs-radio-button__inner {
      background-color: var(--disabled-active-color, #a0cfff);
      border-color: var(--disabled-active-color, #a0cfff);
      box-shadow: none;
    }
  }

  &--large {
    .qs-radio-button__inner {
      padding: 12px 20px;
      font-size: 16px;
    }
  }

  &--small {
    .qs-radio-button__inner {
      padding: 8px 12px;
      font-size: 12px;
    }
  }
}

.qs-radio-button__original {
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

.qs-radio-button__inner {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  background: var(--white, #fff);
  border: 1px solid var(--border-color, #dcdfe6);
  border-left: 0;
  color: var(--text-color, #606266);
  padding: 10px 16px;
  font-size: 14px;
  transition: all .3s;
  user-select: none;
}
</style> 