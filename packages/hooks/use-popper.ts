import { createPopper } from '@popperjs/core'
import type { Instance as PopperInstance, Options } from '@popperjs/core'
import type { Ref } from 'vue'

export function usePopper(
  referenceEl: Ref<HTMLElement | undefined>,
  popperEl: Ref<HTMLElement | undefined>,
  options: Partial<Options> = {}
) {
  let popperInstance: PopperInstance | null = null

  const initPopper = () => {
    if (!referenceEl.value || !popperEl.value) return

    if (popperInstance) {
      popperInstance.destroy()
      popperInstance = null
    }

    popperInstance = createPopper(referenceEl.value, popperEl.value, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 4]
          }
        },
        {
          name: 'preventOverflow',
          options: {
            padding: 8
          }
        }
      ],
      ...options
    })
  }

  const updatePopper = () => {
    popperInstance?.update()
  }

  const destroyPopper = () => {
    if (popperInstance) {
      popperInstance.destroy()
      popperInstance = null
    }
  }

  return {
    initPopper,
    updatePopper,
    destroyPopper
  }
} 