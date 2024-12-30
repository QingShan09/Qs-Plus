import type { Nullable } from './types'

export const isServer = typeof window === 'undefined'

export const on = function(
  element: Element | HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

export const off = function(
  element: Element | HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}

export const hasClass = function(el: Element, cls: string): boolean {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').includes(' ' + cls + ' ')
  }
}

export const addClass = function(el: Element, cls: string): void {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export const removeClass = function(el: Element, cls: string): void {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = curClass.trim()
  }
}

export const getStyle = function(
  element: HTMLElement,
  styleName: string
): string | null {
  if (isServer) return null
  if (!element || !styleName) return null
  styleName = camelize(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const style = element.style[styleName as any]
    if (style) return style
    const computed = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[styleName as any] : ''
  } catch (e) {
    return element.style[styleName as any]
  }
}

export const setStyle = function(
  element: HTMLElement,
  styleName: string | Record<string, string | number>,
  value?: string | number
): void {
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    for (const prop in styleName) {
      if (Object.prototype.hasOwnProperty.call(styleName, prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelize(styleName)
    element.style[styleName as any] = value as any
  }
}

export const removeStyle = function(
  element: HTMLElement,
  style: string | string[]
): void {
  if (!element || !style) return

  if (typeof style === 'string') {
    element.style.removeProperty(style)
  } else {
    style.forEach(prop => {
      element.style.removeProperty(prop)
    })
  }
}

// 转换为驼峰命名
function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

// 获取元素的偏移量
export const getOffset = function(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const win = el.ownerDocument.defaultView!
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  }
}

// 获取滚动容器
export const getScrollContainer = function(
  el: HTMLElement,
  vertical?: boolean
): Window | Nullable<HTMLElement> {
  let parent: HTMLElement = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, vertical)) {
      return parent
    }
    parent = parent.parentNode as HTMLElement
  }
  return parent
}

// 判断是否是滚动元素
export const isScroll = function(
  el: HTMLElement,
  vertical?: boolean
): boolean {
  const determinedDirection = vertical !== null && vertical !== undefined
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow')

  return overflow?.match(/(scroll|auto|overlay)/) !== null
}

// 获取滚动距离
export const getScrolls = function(el: HTMLElement) {
  const win = el.ownerDocument.defaultView!
  return {
    top: win.pageYOffset || document.documentElement.scrollTop,
    left: win.pageXOffset || document.documentElement.scrollLeft
  }
}

// 滚动到指定位置
export const scrollTo = function(
  el: HTMLElement,
  options: {
    top?: number
    left?: number
    behavior?: ScrollBehavior
  }
) {
  const win = el.ownerDocument.defaultView!
  win.scrollTo(options)
} 