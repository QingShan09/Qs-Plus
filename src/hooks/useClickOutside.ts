import { onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from '@vue/runtime-core'

export function useClickOutside(
  elements: (Ref<HTMLElement | undefined> | HTMLElement)[],
  callback: () => void
) {
  const handler = (e: MouseEvent) => {
    const path = e.composedPath()
    const isClickOutside = !elements.some(element => {
      const el = element instanceof HTMLElement ? element : element.value
      return el && path.includes(el)
    })
    
    if (isClickOutside) {
      callback()
    }
  }

  const addClickOutside = () => {
    document.addEventListener('click', handler)
  }

  const removeClickOutside = () => {
    document.removeEventListener('click', handler)
  }

  return {
    addClickOutside,
    removeClickOutside
  }
} 