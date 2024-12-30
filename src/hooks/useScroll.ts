import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = (sections: string[]) => {
  const activeSection = ref(sections[0])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      activeSection.value = sectionId
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100 // 添加偏移量以提前触发
    let currentSection = sections[0]

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element && element.offsetTop <= scrollPosition) {
        currentSection = section
      }
    }

    activeSection.value = currentSection
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始化时执行一次
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    activeSection,
    scrollToSection
  }
} 