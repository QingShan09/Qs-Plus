<template>
  <label
    :class="[
      'qs-radio',
      {
        'is-checked': isChecked,
        'is-disabled': isDisabled,
        'is-bordered': border && !button,
        'is-button': button,
        [`qs-radio--${radioSize}`]: border || button,
        [`qs-radio--button-${buttonStyle}`]: button
      }
    ]"
    :style="radioStyle"
  >
    <span
      v-if="!button"
      :class="[
        'qs-radio__input',
        {
          'is-checked': isChecked,
          'is-disabled': isDisabled
        }
      ]"
    >
      <input
        ref="radioRef"
        v-model="currentValue"
        type="radio"
        :class="'qs-radio__original'"
        :value="label"
        :name="name || radioGroup?.name"
        :disabled="isDisabled"
        @change="handleChange"
      >
      <span class="qs-radio__inner"></span>
    </span>
    <span v-if="button" class="qs-radio__button-inner">
      <slot>{{ label }}</slot>
    </span>
    <span v-else class="qs-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, inject } from 'vue'
import { radioProps, radioEmits } from './radio'
import type { RadioValueType } from './radio'

defineOptions({
  name: 'QsRadio'
})

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const radioRef = ref<HTMLInputElement>()

// 注入 radio group 的数据
const radioGroup = inject<{
  name: string | undefined
  modelValue: { value: RadioValueType }
  size: { value: string }
  disabled: { value: boolean }
  textColor: { value: string | undefined }
  fill: { value: string | undefined }
  buttonStyle: { value: string }
} | undefined>('radioGroupKey', undefined)

const currentValue = computed({
  get() {
    const val = radioGroup ? radioGroup.modelValue.value : props.modelValue
    return val ?? ''
  },
  set(val: RadioValueType) {
    if (radioGroup) {
      radioGroup.modelValue.value = val
    } else {
      emit('update:modelValue', val)
    }
  }
})

const isChecked = computed(() => {
  return currentValue.value === props.label
})

const isDisabled = computed(() => {
  return radioGroup ? radioGroup.disabled.value || props.disabled : props.disabled
})

const radioSize = computed(() => {
  return radioGroup ? radioGroup.size.value : props.size
})

const radioStyle = computed(() => {
  if (!props.button) return {}
  
  const style: Record<string, string> = {}
  if (isChecked.value) {
    if (radioGroup?.textColor?.value) {
      style.color = radioGroup.textColor.value
    }
    if (radioGroup?.fill?.value) {
      style['background-color'] = radioGroup.fill.value
      style['border-color'] = radioGroup.fill.value
    }
  }
  return style
})

const handleChange = () => {
  const val = currentValue.value
  if (val !== undefined) {
    emit('change', val)
  }
}
</script>

<style lang="scss" scoped>
.qs-radio {
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

  &.is-bordered {
    padding: 8px 15px;
    border-radius: var(--demo-radius-base);
    border: 1px solid var(--demo-border-color);
    box-sizing: border-box;

    &.qs-radio--large {
      padding: 10px 20px;
      font-size: 16px;

      .qs-radio__inner {
        width: 16px;
        height: 16px;
      }
    }

    &.qs-radio--small {
      padding: 6px 12px;
      font-size: 12px;

      .qs-radio__inner {
        width: 12px;
        height: 12px;
      }
    }
  }

  &.is-button {
    margin-right: 0;
    padding: 8px 15px;
    border: 1px solid var(--demo-border-color);
    border-left: 0;
    background-color: var(--demo-bg-color);
    color: var(--demo-text-color);
    transition: all 0.3s;

    &:first-child {
      border-left: 1px solid var(--demo-border-color);
      border-radius: var(--demo-radius-base) 0 0 var(--demo-radius-base);
    }

    &:last-child {
      border-radius: 0 var(--demo-radius-base) var(--demo-radius-base) 0;
    }

    &.is-checked {
      color: var(--demo-primary-color);
      border-color: var(--demo-primary-color);
      z-index: 1;

      &.qs-radio--button-solid {
        background-color: var(--demo-primary-color);
        color: #fff;
      }
    }

    &.is-disabled {
      cursor: not-allowed;
      color: var(--demo-text-color-disabled);
      background-color: var(--demo-bg-color-light);
      border-color: var(--demo-border-color);

      &.is-checked {
        color: var(--demo-text-color-disabled);
        background-color: var(--demo-bg-color-light);
        border-color: var(--demo-border-color);
      }
    }

    &.qs-radio--large {
      padding: 10px 20px;
      font-size: 16px;
    }

    &.qs-radio--small {
      padding: 6px 12px;
      font-size: 12px;
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--demo-text-color-disabled);

    .qs-radio__input {
      cursor: not-allowed;

      &.is-disabled {
        .qs-radio__inner {
          background-color: var(--demo-bg-color-light);
          border-color: var(--demo-border-color);
          cursor: not-allowed;

          &::after {
            background-color: var(--demo-text-color-disabled);
          }
        }
      }
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
      .qs-radio__inner {
        border-color: var(--demo-primary-color);
        background-color: var(--demo-primary-color);

        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
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
    border-radius: 50%;
    transition: all 0.3s;

    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      background-color: var(--demo-bg-color);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
  }

  &__label {
    padding-left: 8px;
    line-height: 1;
  }

  &__button-inner {
    line-height: 1;
  }

  &:hover:not(.is-disabled) {
    .qs-radio__inner {
      border-color: var(--demo-primary-color);
    }
  }
}
</style> 