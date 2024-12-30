<template>
  <div
    :class="[
      'qs-input',
      {
        'is-disabled': disabled,
        'is-readonly': readonly,
        [`qs-input--${size}`]: size,
        'is-focus': focused,
        'is-textarea': type === 'textarea',
        'is-search': type === 'search'
      }
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 前置内容 -->
    <div v-if="$slots.prefix || prefixIcon" class="qs-input__prefix">
      <slot name="prefix">
        <Icon v-if="prefixIcon" :icon="prefixIcon" />
      </slot>
    </div>

    <!-- 输入框主体 -->
    <template v-if="type !== 'textarea'">
      <input
        ref="input"
        v-bind="attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :class="{ 'is-disabled': disabled }"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        :name="name"
        :form="form"
        :tabindex="tabindex"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
      />
      <!-- 搜索图标 -->
      <Icon
        v-if="type === 'search'"
        class="qs-input__search"
        icon="mdi:magnify"
        @click="handleSearch"
      />
    </template>

    <!-- 文本域模式 -->
    <template v-else>
      <textarea
        ref="textarea"
        v-bind="attrs"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :rows="rows"
        :autocomplete="autocomplete"
        :name="name"
        :form="form"
        :tabindex="tabindex"
        :style="textareaStyle"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
      />
    </template>

    <!-- 后置内容 -->
    <div v-if="$slots.suffix || suffixIcon || showClear || showPassword || showWordLimit" class="qs-input__suffix">
      <slot name="suffix">
        <!-- 清空按钮 -->
        <Icon
          v-if="showClear"
          class="qs-input__clear"
          icon="mdi:close-circle"
          @click="handleClear"
        />
        <!-- 密码显示切换 -->
        <Icon
          v-if="showPassword"
          class="qs-input__password"
          :icon="passwordVisible ? 'mdi:eye-off' : 'mdi:eye'"
          @click="handlePasswordVisible"
        />
        <!-- 字数统计 -->
        <span v-if="showWordLimit" class="qs-input__count">
          {{ valueLength }}/{{ maxlength }}
        </span>
        <!-- 自定义后缀图标 -->
        <Icon v-if="suffixIcon" :icon="suffixIcon" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, useAttrs, onMounted, onUpdated } from 'vue'
import { Icon } from '@iconify/vue'
import { inputProps, inputEmits } from './input'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'QsInput'
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const attrs = useAttrs()

// 状态变量
const input = ref<HTMLInputElement>()
const textarea = ref<HTMLTextAreaElement>()
const focused = ref(false)
const hovering = ref(false)
const isComposing = ref(false)
const passwordVisible = ref(false)

// 计算属性
const showClear = computed(() => {
  return props.clearable &&
    !props.disabled &&
    !props.readonly &&
    !!props.modelValue &&
    (focused.value || hovering.value)
})

const valueLength = computed(() => {
  return String(props.modelValue).length
})

const textareaStyle = computed(() => {
  const style: CSSProperties = {}
  if (props.type === 'textarea') {
    style.resize = props.resize
    if (props.autosize) {
      style.height = 'auto'
      const minRows = typeof props.autosize === 'object' ? props.autosize.minRows : undefined
      const maxRows = typeof props.autosize === 'object' ? props.autosize.maxRows : undefined
      if (minRows) {
        style.minHeight = `${minRows * 24}px`
      }
      if (maxRows) {
        style.maxHeight = `${maxRows * 24}px`
      }
    }
  }
  return style
})

// 方法
const focus = () => {
  if (props.type === 'textarea') {
    textarea.value?.focus()
  } else {
    input.value?.focus()
  }
}

const blur = () => {
  if (props.type === 'textarea') {
    textarea.value?.blur()
  } else {
    input.value?.blur()
  }
}

const handleInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement | HTMLTextAreaElement

  if (isComposing.value) return

  let formattedValue = value
  if (props.formatter && !isComposing.value) {
    formattedValue = props.formatter(value)
  }

  if (value !== formattedValue) {
    ;(event.target as HTMLInputElement).value = formattedValue
  }

  emit('update:modelValue', formattedValue)
  emit('input', formattedValue)

  nextTick(updateTextareaHeight)
}

const handleChange = (event: Event) => {
  const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value
  emit('change', value)
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('change', '')
  emit('clear')
}

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  focus()
}

const handleMouseEnter = (event: MouseEvent) => {
  hovering.value = true
  emit('mouseenter', event)
}

const handleMouseLeave = (event: MouseEvent) => {
  hovering.value = false
  emit('mouseleave', event)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
  if (props.type === 'search' && event.key === 'Enter') {
    handleSearch()
  }
}

const handleSearch = () => {
  emit('search', String(props.modelValue))
}

const handleCompositionStart = (event: CompositionEvent) => {
  isComposing.value = true
  emit('compositionstart', event)
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  isComposing.value = false
  emit('compositionend', event)
  handleInput(event)
}

const updateTextareaHeight = () => {
  if (props.type !== 'textarea' || !props.autosize) return

  const textareaEl = textarea.value
  if (!textareaEl) return

  textareaEl.style.height = 'auto'
  const height = textareaEl.scrollHeight
  const { minRows, maxRows } = typeof props.autosize === 'object' ? props.autosize : {}
  
  let newHeight = height
  if (minRows) {
    newHeight = Math.max(minRows * 24, newHeight)
  }
  if (maxRows) {
    newHeight = Math.min(maxRows * 24, newHeight)
  }
  
  textareaEl.style.height = `${newHeight}px`
}

// 监听值变化
watch(
  () => props.modelValue,
  () => {
    if (props.type === 'textarea') {
      nextTick(updateTextareaHeight)
    }
  }
)

// 生命周期钩子
onMounted(() => {
  if (props.type === 'textarea') {
    updateTextareaHeight()
  }
})

onUpdated(() => {
  if (props.type === 'textarea') {
    nextTick(updateTextareaHeight)
  }
})
</script>

<style lang="scss" scoped>
.qs-input {
  position: relative;
  display: inline-flex;
  width: 100%;
  font-size: 14px;
  line-height: 1.5;

  input,
  textarea {
    width: 100%;
    padding: 8px 12px;
    color: var(--demo-text-color);
    font-size: inherit;
    background-color: var(--demo-bg-color);
    border: 1px solid var(--demo-border-color);
    border-radius: var(--demo-radius-base);
    outline: none;
    transition: all 0.3s;

    &::placeholder {
      color: var(--demo-text-color-secondary);
    }

    &:hover {
      border-color: var(--demo-primary-hover);
    }

    &:focus {
      border-color: var(--demo-primary-color);
      box-shadow: 0 0 0 2px rgba(var(--demo-primary-color), 0.1);
    }

    &:disabled {
      color: var(--demo-text-color-secondary);
      background-color: var(--demo-bg-color-light);
      cursor: not-allowed;
    }
  }

  textarea {
    min-height: 60px;
    resize: vertical;
  }

  &--large {
    font-size: 16px;

    input,
    textarea {
      padding: 10px 16px;
    }
  }

  &--small {
    font-size: 12px;

    input,
    textarea {
      padding: 6px 8px;
    }
  }

  &__prefix,
  &__suffix {
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    color: var(--demo-text-color-secondary);
    background-color: var(--demo-bg-color);
    border: 1px solid var(--demo-border-color);

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }

  &__prefix {
    border-right: none;
    border-top-left-radius: var(--demo-radius-base);
    border-bottom-left-radius: var(--demo-radius-base);

    + input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &__suffix {
    border-left: none;
    border-top-right-radius: var(--demo-radius-base);
    border-bottom-right-radius: var(--demo-radius-base);

    input + & {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &__clear,
  &__password,
  &__search {
    cursor: pointer;
    margin: 0 4px;
    color: var(--demo-text-color-secondary);
    transition: color 0.3s;

    &:hover {
      color: var(--demo-text-color);
    }
  }

  &__count {
    margin-left: 8px;
    font-size: 12px;
    color: var(--demo-text-color-secondary);
  }

  &.is-disabled {
    .qs-input__prefix,
    .qs-input__suffix {
      background-color: var(--demo-bg-color-light);
      cursor: not-allowed;
    }
  }

  &.is-textarea {
    display: block;
  }

  &.is-search {
    position: relative;

    input {
      padding-right: 32px;
    }

    .qs-input__search {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--demo-text-color-secondary);
      transition: color 0.3s;
      z-index: 2;

      &:hover {
        color: var(--demo-text-color);
      }
    }
  }
}
</style> 