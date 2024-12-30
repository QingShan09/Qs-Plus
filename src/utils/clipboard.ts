/**
 * 复制文本到剪贴板
 * @param text 要复制的文本
 * @returns Promise<boolean> 是否复制成功
 */
export const copyText = async (text: string): Promise<boolean> => {
  try {
    // 优先使用现代的 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }

    // 降级方案：使用 execCommand
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.cssText = `
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: 2em;
      height: 2em;
      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      background: transparent;
    `
    document.body.appendChild(textArea)
    textArea.select()
    
    try {
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    } catch (err) {
      document.body.removeChild(textArea)
      return false
    }
  } catch (err) {
    console.error('复制失败:', err)
    return false
  }
} 