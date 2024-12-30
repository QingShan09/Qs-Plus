<template>
  <div class="guide-page">
    <div 
      class="mobile-mask" 
      :class="{ 'mobile-visible': mobileMenuVisible }"
      @click="toggleMobileMenu"
    ></div>

    <div class="mobile-menu-btn" @click="toggleMobileMenu">
      <Icon :icon="mobileMenuVisible ? 'mdi:close' : 'mdi:menu'" />
    </div>

    <div class="guide-content">
      <h1>指南</h1>
      <p class="introduction">QS Plus 是一个基于 Vue 3 的组件库，提供了丰富的基础组件和业务组件，帮助开发者快速构建企业级应用。</p>

      <div class="section">
        <h2 id="installation">安装</h2>
        <p>使用包管理器安装：</p>
        <div class="code-block">
          <div class="tabs">
            <span 
              v-for="(tab, index) in installTabs" 
              :key="tab"
              class="tab-item"
              :class="{ active: activeInstallTab === index }"
              @click="activeInstallTab = index"
            >
              {{ tab }}
            </span>
          </div>
          <pre><code>{{ installCommands[activeInstallTab] }}</code></pre>
          <qs-button 
            size="small" 
            icon="mdi:content-copy"
            @click="copyInstallCommand"
          >
            {{ copyStatus.install ? '已复制' : '复制' }}
          </qs-button>
        </div>
      </div>

      <div class="section">
        <h2 id="usage">使用</h2>
        <p>在 main.ts/js 中引入组件库：</p>
        <div class="code-block">
          <div class="code-header">
            <div class="header-left">
              <span class="lang">vue</span>
              <span class="divider"></span>
              <span class="file-name">示例代码</span>
            </div>
            <qs-button class="copy-btn" size="small" plain @click="() => copyCode('usage', codeSnippets.usage)">
              <template #icon>
                <Icon :icon="copyStatus.usage ? 'mdi:check' : 'mdi:content-copy'" />
              </template>
              {{ copyStatus.usage ? '已复制' : '复制代码' }}
            </qs-button>
          </div>
          <pre v-highlight><code class="language-vue">{{ codeSnippets.usage }}</code></pre>
        </div>
      </div>

      <div class="section">
        <h2 id="theme">主题定制</h2>
        <p>QS Plus 提供了一套默认主题，你可以通过修改 CSS 变量来自定义主题：</p>
        <div class="code-block">
          <pre><code>{{ codeSnippets.theme }}</code></pre>
          <qs-button 
            size="small" 
            icon="mdi:content-copy"
            @click="() => copyCode('theme', codeSnippets.theme)"
          >
            {{ copyStatus.theme ? '已复制' : '复制' }}
          </qs-button>
        </div>
      </div>

      <div class="section">
        <h2 id="browser-support">浏览器支持</h2>
        <p>QS Plus 支持所有现代浏览器：</p>
        <ul class="browser-list">
          <li>
            <Icon icon="mdi:microsoft-edge" />
            <span>Edge ≥ 79</span>
          </li>
          <li>
            <Icon icon="mdi:firefox" />
            <span>Firefox ≥ 78</span>
          </li>
          <li>
            <Icon icon="mdi:google-chrome" />
            <span>Chrome ≥ 64</span>
          </li>
          <li>
            <Icon icon="mdi:apple-safari" />
            <span>Safari ≥ 12</span>
          </li>
          <li>
            <Icon icon="mdi:opera" />
            <span>Opera ≥ 51</span>
          </li>
          <li>
            <Icon icon="mdi:electron-framework" />
            <span>Electron ≥ 12</span>
          </li>
        </ul>
      </div>

      <div class="section">
        <h2 id="contribution">贡献指南</h2>
        <p>如果你想参与贡献，可以：</p>
        <ul class="contribution-list">
          <li>报告 Bug</li>
          <li>提交 Pull Request</li>
          <li>改进文档</li>
          <li>分享使用经验</li>
        </ul>
        <p>在提交 PR 之前，请确保：</p>
        <ul class="contribution-list">
          <li>运行 npm run test 确保所有测试通过</li>
          <li>遵循现有的代码风格</li>
          <li>在 CHANGELOG.md 中描述你的改动</li>
        </ul>
      </div>
    </div>

    <div 
      class="guide-nav"
      :class="{ 'mobile-visible': mobileMenuVisible }"
    >
      <div 
        v-for="section in sections" 
        :key="section.id"
        class="nav-item" 
        :class="{ active: activeSection === section.id }"
      >
        <a 
          :href="'#' + section.id" 
          @click="handleNavClick"
        >
          {{ section.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { copyText } from '@/utils/clipboard'

const sections = [
  { id: 'installation', title: '安装' },
  { id: 'usage', title: '使用' },
  { id: 'theme', title: '主题定制' },
  { id: 'browser-support', title: '浏览器支持' },
  { id: 'contribution', title: '贡献指南' }
]

const activeSection = ref('installation')
const activeInstallTab = ref(0)
const copyStatus = ref<{ [key: string]: boolean }>({
  install: false,
  usage: false,
  theme: false
})

const installTabs = ['npm', 'yarn', 'pnpm']
const installCommands = [
  'npm install qs-plus',
  'yarn add qs-plus',
  'pnpm add qs-plus'
]

const codeSnippets = {
  usage: `import { createApp } from 'vue'
import QsPlus from 'qs-plus'
import 'qs-plus/dist/style.css'

const app = createApp(App)
app.use(QsPlus)
app.mount('#app')`,
  theme: `:root {
  --primary-color: #409EFF;
  --success-color: #67C23A;
  --warning-color: #E6A23C;
  --danger-color: #F56C6C;
  --info-color: #909399;
  --text-color: #2C3E50;
  --border-color: #DCDFE6;
  --background-color: #FFFFFF;
}`
}

const copied = ref(false)

const copyCode = async (type: 'theme' | 'usage', code: string) => {
  const success = await copyText(code)
  if (success) {
    copyStatus.value[type] = true
    setTimeout(() => {
      copyStatus.value[type] = false
    }, 2000)
  }
}

const copyInstallCommand = () => {
  const command = installCommands[activeInstallTab.value]
  const textarea = document.createElement('textarea')
  textarea.value = command
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  
  // 更新复制状态
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const updateActiveSection = () => {
  const sections = document.querySelectorAll('.section')
  const scrollTop = window.scrollY
  const scrollBottom = scrollTop + window.innerHeight
  let current = ''

  for (const section of sections) {
    const el = section as HTMLElement
    const { offsetTop, offsetHeight } = el
    const sectionTop = offsetTop
    const sectionBottom = sectionTop + offsetHeight

    // 当前部分在视口中
    if (
      (scrollTop <= sectionTop && sectionTop < scrollBottom) || // 部分顶部在视口中
      (scrollTop <= sectionBottom && sectionBottom < scrollBottom) || // 部分底部在视口中
      (scrollTop >= sectionTop && sectionBottom >= scrollBottom) // 部分完全覆盖视口
    ) {
      const id = section.querySelector('h2')?.getAttribute('id')
      if (id) {
        current = id
        break
      }
    }
  }

  if (current) {
    activeSection.value = current
    // 更新 URL hash，但不触发滚动
    history.replaceState(null, '', `#${current}`)
  }
}

// 添加平滑滚动
const scrollToSection = (id: string) => {
  const section = document.querySelector(`#${id}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// 修改导航栏点击事件处理
const handleNavClick = (e: MouseEvent) => {
  e.preventDefault()
  const target = e.currentTarget as HTMLAnchorElement
  const id = target.getAttribute('href')?.slice(1)
  if (id) {
    scrollToSection(id)
    activeSection.value = id
    // 在移动端点击导航后关闭菜单
    mobileMenuVisible.value = false
  }
}

// 添加移动端菜单状态
const mobileMenuVisible = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  // 重置移动端菜单状态
  mobileMenuVisible.value = false
})
</script>

<style scoped lang="scss">
.guide-page {
  display: flex;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  position: relative;

  .mobile-menu-btn {
    display: none;
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #409EFF;
    color: #fff;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1001;
    transition: all 0.3s;

    .iconify {
      font-size: 24px;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .guide-content {
    flex: 1;
    max-width: 800px;

    h1 {
      font-size: 36px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 24px;
    }

    .introduction {
      font-size: 16px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 48px;
    }

    .section {
      margin-bottom: 48px;

      h2 {
        font-size: 24px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0 0 16px;
        padding-top: 24px;
      }

      p {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin: 0 0 16px;
      }

      .code-block {
        position: relative;
        background: #f8f9fb;
        border-radius: 8px;
        margin: 16px 0;

        .tabs {
          padding: 12px 16px;
          border-bottom: 1px solid #eee;

          .tab-item {
            display: inline-block;
            padding: 4px 12px;
            font-size: 13px;
            color: #666;
            cursor: pointer;
            border-radius: 4px;
            transition: all 0.2s;

            &.active {
              color: #409EFF;
              background: #f0f7ff;
            }

            &:hover:not(.active) {
              color: #409EFF;
            }
          }
        }

        pre {
          margin: 0;
          padding: 20px;
          font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, monospace;
          font-size: 14px;
          line-height: 1.6;
          color: #476582;
          overflow-x: auto;
        }

        .qs-button {
          position: absolute;
          top: 12px;
          right: 12px;
          opacity: 0;
          transition: opacity 0.2s;
        }

        &:hover .qs-button {
          opacity: 1;
        }
      }

      .browser-list {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        list-style: none;
        padding: 0;
        margin: 16px 0;

        li {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;

          .iconify {
            font-size: 24px;
            color: #409EFF;
          }

          span {
            font-size: 13px;
          }
        }
      }

      .contribution-list {
        padding-left: 20px;
        margin: 16px 0;

        li {
          color: #666;
          line-height: 1.8;
        }
      }
    }
  }

  .guide-nav {
    width: 200px;
    position: sticky;
    top: 100px;
    height: fit-content;
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;

    .nav-item {
      margin-bottom: 12px;

      a {
        display: block;
        padding: 8px 12px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          color: #409EFF;
          background: #f0f7ff;
        }
      }

      &.active a {
        color: #409EFF;
        background: #f0f7ff;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 768px) {
  .guide-page {
    padding: 20px;
    flex-direction: column;

    .mobile-menu-btn {
      display: flex;
    }

    .guide-nav {
      position: fixed;
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      min-width: unset;
      margin-bottom: 0;
      padding: 20px;
      border-radius: 20px 20px 0 0;
      transform: translateY(100%);
      opacity: 0;
      visibility: hidden;
      z-index: 1000;
      box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
      background: #fff;

      &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 4px;
        background: #ddd;
        border-radius: 2px;
      }

      &.mobile-visible {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;

        & + .mobile-mask {
          opacity: 1;
          visibility: visible;
        }
      }

      .nav-item {
        margin-bottom: 4px;
        text-align: center;

        a {
          padding: 12px 16px;
          font-size: 15px;
          border-radius: 8px;
          display: block;
          color: #606266;
          text-decoration: none;
          transition: all 0.3s;

          &:active {
            background: #f0f7ff;
          }
        }

        &.active a {
          color: #409EFF;
          background: #f0f7ff;
          font-weight: 500;
        }
      }
    }
  }
}

// 暗色主题适配
@media (prefers-color-scheme: dark) {
  @media (max-width: 768px) {
    .guide-nav {
      background: rgba(26, 26, 26, 0.98);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);

      &::before {
        background: #666;
      }

      .nav-item {
        a {
          color: #999;
        }

        &.active a {
          color: #409EFF;
          background: rgba(64, 158, 255, 0.1);
        }
      }
    }
  }
}

// 添加遮罩层
.mobile-mask {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 999;
}

@media (max-width: 768px) {
  .mobile-mask {
    display: block;
  }
}
</style> 