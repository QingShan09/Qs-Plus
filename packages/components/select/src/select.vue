<template>
  <div
    class="qs-select"
    :class="[
      {
        'is-disabled': disabled,
        'is-multiple': multiple,
        'is-clearable': clearable,
        'is-focus': visible,
        'is-filterable': filterable
      },
      size ? `qs-select--${size}` : ''
    ]"
    @click.stop="toggleMenu"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="selectRef"
  >
    <div class="qs-select__wrapper" ref="reference">
      <!-- 多选标签 -->
      <div 
        class="qs-select__tags" 
        v-if="multiple && selectedLabels.length" 
        ref="tags"
        @click.stop
      >
        <span
          v-for="(item, index) in displayTags"
          :key="index"
          class="qs-select__tag"
          :class="{ 'is-disabled': disabled }"
        >
          <span class="qs-select__tag-text">{{ item }}</span>
          <Icon 
            v-if="!disabled"
            class="qs-select__tag-close"
            icon="mdi:close"
            @click.stop="removeTag(getTagValue(index))"
          />
        </span>
        <span 
          v-if="selectedLabels.length > maxTagCount"
          class="qs-select__tag qs-select__tag--more"
        >
          +{{ selectedLabels.length - maxTagCount }}
        </span>
      </div>

      <!-- 输入框 -->
      <div class="qs-select__input-wrap">
        <input
          ref="input"
          v-model="query"
          type="text"
          class="qs-select__input"
          :placeholder="currentPlaceholder"
          :readonly="!filterable && !remote"
          :disabled="disabled"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown.enter.prevent="handleEnterSelect"
          @keydown.esc.stop.prevent="handleEscCancel"
          @keydown.delete="handleDelete"
          @keydown.tab="visible = false"
          @keydown.up.prevent="highlight('prev')"
          @keydown.down.prevent="highlight('next')"
          @input="handleQueryChange"
        >
        
        <!-- 单选显示值 -->
        <span
          v-if="!multiple && !query && selectedLabel"
          class="qs-select__placeholder"
        >
          {{ selectedLabel }}
        </span>

        <!-- 占位符 -->
        <span
          v-if="!multiple && !query && !selectedLabel"
          class="qs-select__placeholder"
        >
          {{ placeholder }}
        </span>
      </div>

      <!-- 后缀图标 -->
      <div class="qs-select__suffix">
        <Icon
          v-if="clearable && showClear"
          class="qs-select__clear"
          icon="mdi:close-circle"
          @click.stop="handleClear"
        />
        <Icon
          v-if="loading"
          class="qs-select__loading is-loading"
          icon="mdi:loading"
        />
        <Icon
          v-else
          class="qs-select__arrow"
          :class="{ 'is-reverse': visible }"
          icon="mdi:chevron-down"
        />
      </div>
    </div>

    <!-- 下拉面板 -->
    <transition name="qs-zoom-in-top">
      <div
        v-show="visible"
        class="qs-select__dropdown"
        :class="[popperClass]"
        ref="dropdown"
        :style="dropdownStyle"
      >
        <!-- 加载状态 -->
        <div v-if="loading" class="qs-select__loading-text">
          <Icon icon="mdi:loading" class="is-loading" />
          <span>加载中...</span>
        </div>

        <!-- 空状态 -->
        <div v-else-if="filteredOptions.length === 0" class="qs-select__empty">
          {{ remote ? '无匹配数据' : '暂无数据' }}
        </div>

        <!-- 选项列表 -->
        <div v-else class="qs-select__list" ref="listRef">
          <div
            v-for="(option, index) in filteredOptions"
            :key="index"
            class="qs-select__option"
            :class="{
              'is-disabled': option.disabled,
              'is-selected': isOptionSelected(option),
              'is-highlighted': index === highlightIndex
            }"
            @click.stop="handleOptionSelect(option)"
            @mouseenter="highlightIndex = index"
          >
            <slot name="option" :option="option">
              <span class="qs-select__option-text">{{ option[labelKey] }}</span>
            </slot>
            <Icon
              v-if="isOptionSelected(option)"
              class="qs-select__option-check"
              icon="mdi:check"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { useClickOutside } from '@/hooks/useClickOutside'
import { selectProps, selectEmits, type SelectOption, type SelectValue } from './select'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'QsSelect'
})

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

// refs
const selectRef = ref<HTMLElement>()
const reference = ref<HTMLElement>()
const input = ref<HTMLInputElement>()
const dropdown = ref<HTMLElement>()
const tags = ref<HTMLElement>()
const listRef = ref<HTMLElement>()

// 状态
const visible = ref(false)
const query = ref('')
const selectedLabel = ref('')
const highlightIndex = ref(-1)
const hovering = ref(false)
const maxTagCount = 3

// 计算属性
const showClear = computed(() =>
  props.clearable &&
  !props.disabled &&
  (hovering.value || visible.value) &&
  (props.multiple ? (props.modelValue as SelectValue[])?.length > 0 : props.modelValue !== undefined)
)

const currentPlaceholder = computed(() => {
  if (props.multiple) {
    return props.placeholder
  } else {
    return query.value || selectedLabel.value ? '' : props.placeholder
  }
})

const selectedValues = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) ? props.modelValue : []
  }
  return props.modelValue
})

const selectedLabels = computed(() => {
  if (props.multiple) {
    return (props.modelValue as SelectValue[])?.map(value => {
      const option = props.options.find(opt => opt[props.valueKey] === value)
      return option ? option[props.labelKey] : value
    }) || []
  }
  return []
})

const displayTags = computed(() => {
  return selectedLabels.value.slice(0, maxTagCount)
})

const filteredOptions = computed(() => {
  let options = props.options

  if (props.filterable && !props.remote && query.value) {
    // 本地搜索过滤
    options = options.filter(option => 
      String(option[props.labelKey])
        .toLowerCase()
        .includes(query.value.toLowerCase())
    )
  }

  return options
})

// 下拉面板位置
const dropdownStyle = ref<CSSProperties>({
  minWidth: '0',
  position: 'fixed' as const,
  left: '0',
  top: '0',
  maxHeight: '256px',
  overflowY: 'auto',
  zIndex: 1000
})

// 更新下拉面板位置
const updateDropdownPosition = () => {
  if (!selectRef.value || !dropdown.value) return

  const selectRect = selectRef.value.getBoundingClientRect()
  const dropdownRect = dropdown.value.getBoundingClientRect()

  // 计算可用空间
  const spaceBelow = window.innerHeight - selectRect.bottom
  const spaceAbove = selectRect.top
  const maxHeight = 256
  const dropdownHeight = Math.min(dropdownRect.height || maxHeight, maxHeight)

  // 默认向下展开
  let top = selectRect.bottom + 4
  let transformOrigin = 'top'

  // 如果下方空间不足且上方空间足够，向上展开
  if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
    top = selectRect.top - dropdownHeight - 4
    transformOrigin = 'bottom'
  }

  dropdownStyle.value = {
    position: 'fixed' as const,
    left: `${selectRect.left}px`,
    top: `${top}px`,
    minWidth: `${selectRect.width}px`,
    maxHeight: `${maxHeight}px`,
    overflowY: 'auto',
    transformOrigin,
    zIndex: 1000
  }
}

// 监听滚动事件
const handleScroll = () => {
  if (visible.value) {
    updateDropdownPosition()
  }
}

// 切换下拉菜单
const toggleMenu = () => {
  if (props.disabled) return
  
  if (!visible.value) {
    visible.value = true
    if (props.filterable) {
      query.value = ''
      input.value?.focus()
    }
    // 在显示下拉框时更新位置
    nextTick(() => {
      updateDropdownPosition()
    })
  } else if (!props.filterable && !props.multiple) {
    visible.value = false
  }
  
  emit('visible-change', visible.value)
}

// 处理选项选择
const handleOptionSelect = (option: SelectOption) => {
  if (option.disabled) return

  const value = option[props.valueKey] as SelectValue
  const label = option[props.labelKey] as string

  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = values.indexOf(value)
    
    if (index > -1) {
      values.splice(index, 1)
    } else {
      values.push(value)
    }
    
    emit('update:modelValue', values)
    emit('change', values)
    
    if (props.filterable) {
      input.value?.focus()
      query.value = ''
    }
  } else {
    selectedLabel.value = label
    emit('update:modelValue', value)
    emit('change', value)
    visible.value = false
  }
}

// 处理清空
const handleClear = (e: MouseEvent) => {
  e.stopPropagation()
  const value = props.multiple ? [] : undefined
  selectedLabel.value = ''
  emit('update:modelValue', value)
  emit('change', value)
  emit('clear')
  query.value = ''
}

// 处理鼠标移入移出
const handleMouseEnter = () => {
  hovering.value = true
}

const handleMouseLeave = () => {
  hovering.value = false
}

// 处理输入框事件
const handleFocus = (e: FocusEvent) => {
  emit('focus', e)
}

const handleBlur = (e: FocusEvent) => {
  emit('blur', e)
}

const isOptionSelected = (option: SelectOption) => {
  if (props.multiple) {
    return (selectedValues.value as any[])?.includes(option[props.valueKey])
  }
  return props.modelValue === option[props.valueKey]
}

const removeTag = (value: SelectValue) => {
  if (props.disabled) return
  
  const values = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const index = values.indexOf(value)
  
  if (index > -1) {
    values.splice(index, 1)
    emit('update:modelValue', values)
    emit('change', values)
    emit('remove-tag', value)
  }
}

const highlight = (direction: 'prev' | 'next') => {
  if (!visible.value) {
    visible.value = true
    return
  }

  if (filteredOptions.value.length === 0) return

  if (direction === 'prev') {
    highlightIndex.value = highlightIndex.value > 0
      ? highlightIndex.value - 1
      : filteredOptions.value.length - 1
  } else {
    highlightIndex.value = highlightIndex.value < filteredOptions.value.length - 1
      ? highlightIndex.value + 1
      : 0
  }

  const option = filteredOptions.value[highlightIndex.value]
  if (option.disabled) {
    highlight(direction)
  }
}

const handleEnterSelect = () => {
  if (!visible.value) {
    visible.value = true
  } else if (highlightIndex.value !== -1) {
    handleOptionSelect(filteredOptions.value[highlightIndex.value])
  }
}

const handleEscCancel = () => {
  visible.value = false
}

const handleDelete = () => {
  if (props.multiple && (selectedValues.value as any[])?.length && !query.value) {
    removeTag((selectedValues.value as any[])[(selectedValues.value as any[]).length - 1])
  }
}

const handleRemoteSearch = () => {
  if (props.remote && query.value) {
    props.remoteMethod?.(query.value)
  } else if (props.remote) {
    emit('update:modelValue', props.multiple ? [] : undefined)
  }
}

const handleQueryChange = () => {
  if (props.remote) {
    handleRemoteSearch()
  }
  emit('search', query.value)
  
  // 搜索时展开下拉面板
  if (!visible.value) {
    visible.value = true
  }
  
  // 重置高亮索引
  highlightIndex.value = -1
}

const getTagValue = (index: number) => {
  const values = selectedValues.value as any[]
  return values?.[index]
}

// 点击外部关闭
const handleClickOutside = (e: Event) => {
  const target = e.target as Node
  if (selectRef.value && !selectRef.value.contains(target)) {
    visible.value = false
    query.value = ''
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// 监听可见性变化
watch(visible, (val) => {
  if (!val) {
    query.value = ''
    highlightIndex.value = -1
  } else {
    // 显示时更新位置
    nextTick(() => {
      updateDropdownPosition()
    })
  }
})

// 监听值变化
watch(() => props.modelValue, (val) => {
  if (!props.multiple) {
    const option = props.options.find(opt => opt[props.valueKey] === val)
    selectedLabel.value = option ? option[props.labelKey] : ''
  }
}, { immediate: true })

// 监听窗口大小变化和滚动
onMounted(() => {
  window.addEventListener('resize', updateDropdownPosition)
  window.addEventListener('scroll', handleScroll, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDropdownPosition)
  window.removeEventListener('scroll', handleScroll, true)
})

// 处理选项变化
watch(() => props.options, () => {
  if (!props.multiple && props.modelValue !== undefined) {
    const option = props.options.find(opt => opt[props.valueKey] === props.modelValue)
    selectedLabel.value = option ? option[props.labelKey] : ''
  }
}, { deep: true })

const handleOptionClick = (option: SelectOption, e: MouseEvent) => {
  if (option.disabled) return
  e.stopPropagation() // 阻止事件冒泡

  const value = option[props.valueKey] as SelectValue
  const label = String(option[props.labelKey]) // 确保label是字符串类型

  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = values.indexOf(value)
    
    if (index > -1) {
      values.splice(index, 1)
    } else {
      values.push(value)
    }
    
    emit('update:modelValue', values)
    emit('change', values)
  } else {
    selectedLabel.value = label
    emit('update:modelValue', value)
    emit('change', value)
    visible.value = false
  }
}

const handleInputClick = (e: MouseEvent) => {
  if (props.disabled) return
  e.stopPropagation() // 阻止事件冒泡
  visible.value = !visible.value
}
</script>

<style lang="scss">
@import './select.scss';
</style> 