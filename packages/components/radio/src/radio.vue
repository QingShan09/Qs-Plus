<template>
  <label
    :class="[
      'qs-radio',
      {
        'is-checked': isChecked,
        'is-disabled': isDisabled,
        [`qs-radio--${radioSize}`]: radioSize
      }
    ]"
  >
    <span class="qs-radio__input">
      <input
        type="radio"
        :value="value"
        :disabled="isDisabled"
        v-model="model"
        class="qs-radio__original"
        @change="handleChange"
      >
      <span class="qs-radio__inner"></span>
    </span>
    <span class="qs-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { radioProps } from './radio'

export default defineComponent({
  name: 'QsRadio',
  props: radioProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const radioGroup = inject('radioGroup', null)

    const isDisabled = computed(() => props.disabled || radioGroup?.disabled)
    const radioSize = computed(() => props.size || radioGroup?.size || 'default')

    const model = computed({
      get() {
        return radioGroup ? radioGroup.modelValue : props.modelValue
      },
      set(val) {
        if (radioGroup) {
          radioGroup.changeEvent(val)
        } else {
          emit('update:modelValue', val)
        }
        emit('change', val)
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
.qs-radio {
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-right: 16px;
  font-size: 14px;
  line-height: 1;

  &:last-child {
    margin-right: 0;
  }

  &.is-disabled {
    cursor: not-allowed;
    color: var(--disabled-color, #c0c4cc);

    .qs-radio__input {
      cursor: not-allowed;

      .qs-radio__inner {
        background-color: var(--disabled-bg-color, #f5f7fa);
        border-color: var(--disabled-border-color, #e4e7ed);

        &::after {
          background-color: var(--disabled-color, #c0c4cc);
        }
      }

      .qs-radio__original {
        cursor: not-allowed;
      }
    }
  }

  &.is-checked {
    .qs-radio__input {
      .qs-radio__inner {
        border-color: var(--primary-color, #409eff);
        background-color: var(--primary-color, #409eff);

        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }

    .qs-radio__label {
      color: var(--primary-color, #409eff);
    }
  }

  &--large {
    font-size: 16px;

    .qs-radio__input {
      .qs-radio__inner {
        width: 18px;
        height: 18px;

        &::after {
          width: 6px;
          height: 6px;
        }
      }
    }
  }

  &--small {
    font-size: 12px;

    .qs-radio__input {
      .qs-radio__inner {
        width: 14px;
        height: 14px;

        &::after {
          width: 4px;
          height: 4px;
        }
      }
    }
  }
}

.qs-radio__input {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  outline: none;
  position: relative;
  cursor: pointer;

  .qs-radio__original {
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

  .qs-radio__inner {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid var(--border-color, #dcdfe6);
    border-radius: 50%;
    background-color: var(--white, #fff);
    transition: all 0.3s;

    &::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: var(--white, #fff);
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
  }
}

.qs-radio__label {
  padding-left: 8px;
  line-height: 1;
  transition: color 0.3s;
}
</style> 