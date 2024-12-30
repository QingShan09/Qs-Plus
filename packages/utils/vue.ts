import type { App, Component } from 'vue'
import type { SFCWithInstall } from './types'

export const withInstall = <T extends Component>(comp: T) => {
  const c = comp as SFCWithInstall<T>
  
  c.install = (app: App) => {
    app.component(c.name, comp)
  }
  
  return c
}

export const withNoopInstall = <T>(comp: T) => {
  const c = comp as SFCWithInstall<T>
  c.install = function() {}
  return c
}

export const noop = () => {} 