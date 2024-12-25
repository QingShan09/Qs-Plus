import type { Directive } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github.css'

// 注册需要的语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('vue', xml) // Vue 模板使用 XML 高亮

const highlight: Directive = {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
      hljs.highlightElement(block)
    })
  },
  updated(el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
      hljs.highlightElement(block)
    })
  }
}

export default highlight