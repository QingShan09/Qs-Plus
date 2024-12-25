<template>
  <div class="guide-page">
    <div class="guide-content">
      <h1>指南</h1>
      <p class="introduction">QS Plus 是一个基于 Vue 3 的组件库，提供了丰富的基础组件和业务组件，帮助开发者快速构建企业级应用。</p>

      <div class="section">
        <h2 id="installation">安装</h2>
        <p>使用包管理器安装 QS Plus</p>
        <div class="code-block">
          <div class="tabs">
            <span class="tab-item active">npm</span>
            <span class="tab-item">yarn</span>
            <span class="tab-item">pnpm</span>
          </div>
          <pre><code>npm install qs-plus</code></pre>
          <qs-button size="small" icon="mdi:content-copy">复制</qs-button>
        </div>
      </div>

      <div class="section">
        <h2 id="usage">使用</h2>
        <p>在 main.ts/js 中引入组件库：</p>
        <div class="code-block">
          <pre><code>import { createApp } from 'vue'
import QsPlus from 'qs-plus'
import 'qs-plus/dist/style.css'

const app = createApp(App)
app.use(QsPlus)
app.mount('#app')</code></pre>
          <qs-button size="small" icon="mdi:content-copy">复制</qs-button>
        </div>
      </div>

      <div class="section">
        <h2 id="theme">主题定制</h2>
        <p>QS Plus 提供了一套默认主题，你可以通过修改 CSS 变量来自定义主题：</p>
        <div class="code-block">
          <pre><code>:root {
  --primary-color: #409EFF;
  --success-color: #67C23A;
  --warning-color: #E6A23C;
  --danger-color: #F56C6C;
  --info-color: #909399;
  --text-color: #2C3E50;
  --border-color: #DCDFE6;
  --background-color: #FFFFFF;
}</code></pre>
          <qs-button size="small" icon="mdi:content-copy">复制</qs-button>
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
            <Icon icon="mdi:chrome" />
            <span>Chrome ≥ 64</span>
          </li>
          <li>
            <Icon icon="mdi:safari" />
            <span>Safari ≥ 12</span>
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

    <div class="guide-nav">
      <div class="nav-item" :class="{ active: activeSection === 'installation' }">
        <a href="#installation">安装</a>
      </div>
      <div class="nav-item" :class="{ active: activeSection === 'usage' }">
        <a href="#usage">使用</a>
      </div>
      <div class="nav-item" :class="{ active: activeSection === 'theme' }">
        <a href="#theme">主题定制</a>
      </div>
      <div class="nav-item" :class="{ active: activeSection === 'browser-support' }">
        <a href="#browser-support">浏览器支持</a>
      </div>
      <div class="nav-item" :class="{ active: activeSection === 'contribution' }">
        <a href="#contribution">贡献指南</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const activeSection = ref('installation')

const updateActiveSection = () => {
  const sections = document.querySelectorAll('.section')
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const id = section.querySelector('h2')?.id
    if (id && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      activeSection.value = id
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
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
        gap: 32px;
        list-style: none;
        padding: 0;
        margin: 24px 0;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #666;

          .iconify {
            font-size: 32px;
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

    .guide-nav {
      position: static;
      width: auto;
      margin-bottom: 24px;
    }
  }
}
</style> 