let audioContext: AudioContext | null = null

export function initAudioContext() {
  if (audioContext) return

  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
    if (AudioContextClass) {
      audioContext = new AudioContextClass()
      // 只有在用户交互时才恢复音频上下文
      document.addEventListener('click', () => {
        audioContext?.resume()
      }, { once: true })
    }
  } catch (error) {
    console.warn('AudioContext initialization failed:', error)
  }
}

export function getAudioContext() {
  return audioContext
} 