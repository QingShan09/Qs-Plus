import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export * from './types'
export * from './vue'
export * from './dom' 