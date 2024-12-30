import type { Component, ComputedOptions, MethodOptions } from 'vue'
import type { Plugin } from 'vue'

export type ComponentType = Component<any, any, any, ComputedOptions, MethodOptions>

export type Nullable<T> = T | null

export type Recordable<T = any> = Record<string, T>

export type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type TimeoutHandle = ReturnType<typeof setTimeout>

export type IntervalHandle = ReturnType<typeof setInterval>

export type SFCWithInstall<T> = T & Plugin & {
  name: string
} 