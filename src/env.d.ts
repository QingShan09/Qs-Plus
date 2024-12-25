/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@iconify/vue' {
  import { DefineComponent } from 'vue'
  export const Icon: DefineComponent<{
    icon: string
    color?: string
    width?: string | number
    height?: string | number
  }>
} 