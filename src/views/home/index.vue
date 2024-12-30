<template>
  <div class="home-page">
    <div class="decoration circle-1"></div>
    <div class="decoration circle-2"></div>
    <div class="hero">
      <div class="hero-content">
        <h1>QS Plus</h1>
        <p class="description">一个基于 Vue 3 的现代化轻量级组件库</p>
        <p class="sub-description">简约而不简单，为开发者提供优雅的开发体验</p>
        <div class="actions">
          <qs-button type="primary" size="large" @click="router.push('/guide')">
            <template #icon><Icon icon="mdi:book-open-page-variant" /></template>
            开始使用
          </qs-button>
          <qs-button size="large" @click="router.push('/components')">
            <template #icon><Icon icon="mdi:cube-scan" /></template>
            组件文档
          </qs-button>
        </div>
        <div class="github-stats">
          <a href="https://github.com/QingShan09/Qs-Plus" target="_blank" class="github-stat">
            <Icon icon="mdi:star" />
            <span>Stars</span>
          </a>
          <a href="https://github.com/QingShan09/Qs-Plus" target="_blank" class="github-stat">
            <Icon icon="mdi:source-fork" />
            <span>Forks</span>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="preview-carousel">
          <div class="carousel-container">
            <div class="carousel-card" :style="{ transform: `rotateY(${currentAngle}deg) translateZ(300px)` }">
              <div class="feature-card modern-design">
                <div class="card-icon">
                  <Icon icon="mdi:palette-outline" />
                </div>
                <h3>现代化设计</h3>
                <p>遵循最新的设计趋势和规范，提供美观且实用的组件样式，支持亮色和暗色主题。</p>
                <div class="card-bg"></div>
              </div>
            </div>
            <div class="carousel-card" :style="{ transform: `rotateY(${currentAngle + 120}deg) translateZ(300px)` }">
              <div class="feature-card typescript">
                <div class="card-icon">
                  <Icon icon="mdi:language-typescript" />
                </div>
                <h3>TypeScript 支持</h3>
                <p>使用 TypeScript 开发，提供完整的类型定义，让开发智能和安全。</p>
                <div class="card-bg"></div>
              </div>
            </div>
            <div class="carousel-card" :style="{ transform: `rotateY(${currentAngle + 240}deg) translateZ(300px)` }">
              <div class="feature-card customization">
                <div class="card-icon">
                  <Icon icon="mdi:tune-variant" />
                </div>
                <h3>高度可定制</h3>
                <p>提供丰富的配置选项和主题系统，让组件完美适配您的品牌调性。</p>
                <div class="card-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="feature-item">
        <div class="icon">
          <Icon icon="mdi:lightning-bolt" />
        </div>
        <h3>快速上手</h3>
        <p>简单易用的 API，详细的文档说明，让开发更轻松</p>
      </div>
      <div class="feature-item">
        <div class="icon">
          <Icon icon="mdi:palette" />
        </div>
        <h3>主题定制</h3>
        <p>可配置的主题系统，轻松打造专属的组件风格</p>
      </div>
      <div class="feature-item">
        <div class="icon">
          <Icon icon="mdi:cube-outline" />
        </div>
        <h3>组件丰富</h3>
        <p>提供丰富的基础组件和业务组件，满足各种场景需求</p>
      </div>
      <div class="feature-item">
        <div class="icon">
          <Icon icon="mdi:rocket-launch" />
        </div>
        <h3>性能优秀</h3>
        <p>基于 Vue 3 + TypeScript，性能出色，体积轻量</p>
      </div>
    </div>

    <div class="quick-start">
      <h2>快速开始</h2>
      <div class="install-steps">
        <div class="step">
          <div class="step-header">
            <div class="step-number">01</div>
            <h3>安装依赖</h3>
          </div>
          <div class="code-block">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">npm</span>
                <span class="divider"></span>
                <span class="file-name">terminal</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode('install')">
                <template #icon>
                  <Icon :icon="copied ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <div class="code-content">
              <pre v-highlight><code class="language-shell">npm install qs-plus</code></pre>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-header">
            <div class="step-number">02</div>
            <h3>引入组件库</h3>
          </div>
          <div class="code-block">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">js</span>
                <span class="divider"></span>
                <span class="file-name">main.js</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode('import')">
                <template #icon>
                  <Icon :icon="copied ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <div class="code-content">
              <pre v-highlight><code class="language-javascript">import { createApp } from 'vue'
import QsPlus from 'qs-plus'
import 'qs-plus/dist/style.css'

const app = createApp(App)
app.use(QsPlus)</code></pre>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-header">
            <div class="step-number">03</div>
            <h3>开始使用</h3>
          </div>
          <div class="code-block">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">App.vue</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode('usage')">
                <template #icon>
                  <Icon :icon="copied ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <div class="code-content">
              <pre v-highlight><code class="language-vue">&lt;template&gt;
  &lt;!-- 基础按钮 --&gt;
  &lt;qs-button type="primary"&gt;按钮&lt;/qs-button&gt;

  &lt;!-- 图标按钮 --&gt;
  &lt;qs-button type="primary" icon="mdi:search"&gt;Search&lt;/qs-button&gt;
  &lt;qs-button icon="mdi:plus"&gt;Add&lt;/qs-button&gt;
  &lt;qs-button type="primary" icon="mdi:edit" /&gt;
  &lt;qs-button type="primary" shape="circle" icon="mdi:search" /&gt;
  &lt;qs-button icon="mdi:download"&gt;Download&lt;/qs-button&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-team">
      <h2>团队成员</h2>
      <div class="team-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <div class="member-avatar">
            <img :src="member.avatar" :alt="member.name" />
          </div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="bio">{{ member.bio }}</p>
            <div class="social-links">
              <a v-if="member.github" :href="member.github" target="_blank">
                <Icon icon="mdi:github" />
              </a>
              <a v-if="member.twitter" :href="member.twitter" target="_blank">
                <Icon icon="mdi:twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { copyText } from '@/utils/clipboard'

const router = useRouter()
const copied = ref(false)

const codeSnippets = {
  install: 'npm install qs-plus',
  import: `import { createApp } from 'vue'
import QsPlus from 'qs-plus'
import 'qs-plus/dist/style.css'

const app = createApp(App)
app.use(QsPlus)`,
  usage: `<template>
  &lt;!-- 基础按钮 --&gt;
  &lt;qs-button type="primary"&gt;按钮&lt;/qs-button&gt;

  &lt;!-- 图标按钮 --&gt;
  &lt;qs-button type="primary" icon="mdi:search"&gt;Search&lt;/qs-button&gt;
  &lt;qs-button icon="mdi:plus"&gt;Add&lt;/qs-button&gt;
  &lt;qs-button type="primary" icon="mdi:edit" /&gt;
  &lt;qs-button type="primary" shape="circle" icon="mdi:search" /&gt;
  &lt;qs-button icon="mdi:download"&gt;Download&lt;/qs-button&gt;
&lt;/template&gt;`
}

const copyCode = async (type: 'install' | 'import' | 'usage') => {
  const text = type === 'install' ? codeSnippets.install :
               type === 'import' ? codeSnippets.import :
               codeSnippets.usage
  
  const success = await copyText(text)
  if (success) {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

const currentAngle = ref(0)
let animationInterval: number

const startCarouselAnimation = () => {
  animationInterval = window.setInterval(() => {
    currentAngle.value -= 120
  }, 3000)
}

onMounted(() => {
  startCarouselAnimation()
})

onUnmounted(() => {
  if (animationInterval) {
    clearInterval(animationInterval)
  }
})

const teamMembers = [
  {
    name: '青山',
    role: '前端开发工程师',
    bio: '热爱开源，专注于 Vue.js 生态系统，致力于为开发者提供更好的开发工具。',
    avatar: 'http://www.qingshan.ink:3089/v1/common/files/preview/img/1731480874530.jpg',
    github: 'https://github.com/QingShan09',
    twitter: 'https://twitter.com/your-twitter'
  },

]
</script>

<style scoped lang="scss">
.home-page {
  padding: 0;
  max-width: 100%;
  margin: 0;
  background: linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  // 背景装饰
  .decoration {
    position: fixed;
    pointer-events: none;
    z-index: 0;

    &.circle-1 {
      width: 1200px;
      height: 1200px;
      top: -400px;
      right: -200px;
      background: radial-gradient(circle at center, rgba(64, 158, 255, 0.03) 0%, transparent 70%);
      filter: blur(60px);
      animation: float 20s ease-in-out infinite;
    }

    &.circle-2 {
      width: 800px;
      height: 800px;
      bottom: -200px;
      left: -200px;
      background: radial-gradient(circle at center, rgba(54, 207, 201, 0.03) 0%, transparent 70%);
      filter: blur(60px);
      animation: float 15s ease-in-out infinite reverse;
    }
  }

  // 英雄区域
  .hero {
    position: relative;
    padding: 120px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    gap: 60px;

    .hero-content {
      flex: 1;
      max-width: 600px;

      h1 {
        font-size: 64px;
        font-weight: 700;
        margin: 0;
        background: linear-gradient(135deg, #1a1a1a, #666);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        line-height: 1.2;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -16px;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #409EFF, #36cfc9);
          border-radius: 2px;
        }
      }

      .description {
        font-size: 28px;
        color: #1a1a1a;
        margin: 40px 0 20px;
        font-weight: 500;
      }

      .sub-description {
        font-size: 18px;
        color: #666;
        margin-bottom: 40px;
        line-height: 1.6;
      }

      .actions {
        display: flex;
        gap: 20px;
        margin-bottom: 40px;

        .qs-button {
          height: 48px;
          padding: 0 32px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(64, 158, 255, 0.25);
          }

          :deep(.icon) {
            font-size: 20px;
            margin-right: 8px;
          }
        }
      }

      .github-stats {
        display: flex;
        gap: 24px;

        .github-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;

          &:hover {
            color: #409EFF;
            transform: translateY(-2px);
          }

          .icon {
            font-size: 24px;
          }
        }
      }
    }

    .hero-image {
      flex: 1;
      max-width: 600px;
      height: 500px;
      position: relative;
      perspective: 1000px;

      .preview-carousel {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;

        .carousel-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;

          .carousel-card {
            position: absolute;
            width: 400px;
            height: 280px;
            left: 50%;
            top: 50%;
            margin-left: -200px;
            margin-top: -140px;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

            .feature-card {
              width: 100%;
              height: 100%;
              padding: 40px;
              background: rgba(255, 255, 255, 0.9);
              backdrop-filter: blur(20px);
              border-radius: 24px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;

              &:hover {
                transform: translateY(-8px);
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);

                .card-icon {
                  transform: scale(1.1);
                }
              }

              .card-icon {
                width: 64px;
                height: 64px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                margin-bottom: 24px;
                transition: all 0.3s ease;
                background: linear-gradient(135deg, rgba(64, 158, 255, 0.1), rgba(54, 207, 201, 0.1));
                color: #409EFF;
              }

              h3 {
                font-size: 24px;
                font-weight: 600;
                color: #1a1a1a;
                margin: 0 0 16px;
              }

              p {
                font-size: 16px;
                line-height: 1.6;
                color: #666;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }

  // 特性区域
  .features {
    padding: 100px 40px;
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    .feature-item {
      padding: 40px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        border-color: #409EFF;

        .icon {
          transform: scale(1.1) rotate(10deg);
          background: linear-gradient(135deg, #409EFF, #36cfc9);
          color: white;
        }
      }

      .icon {
        width: 64px;
        height: 64px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        margin-bottom: 24px;
        background: linear-gradient(135deg, rgba(64, 158, 255, 0.1), rgba(54, 207, 201, 0.1));
        color: #409EFF;
        transition: all 0.3s ease;
      }

      h3 {
        font-size: 20px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 16px;
      }

      p {
        font-size: 15px;
        line-height: 1.6;
        color: #666;
        margin: 0;
      }
    }
  }

  // 快速开始区域
  .quick-start {
    padding: 100px 40px;
    max-width: 1440px;
    margin: 0 auto;

    h2 {
      font-size: 48px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 60px;
      background: linear-gradient(135deg, #1a1a1a, #666);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -16px;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #409EFF, #36cfc9);
        border-radius: 2px;
      }
    }

    .install-steps {
      max-width: 800px;
      margin: 0 auto;

      .step {
        margin-bottom: 40px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        }

        .step-header {
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);

          .step-number {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 600;
            background: linear-gradient(135deg, rgba(64, 158, 255, 0.1), rgba(54, 207, 201, 0.1));
            color: #409EFF;
          }

          h3 {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0;
          }
        }

        .code-block {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(64, 158, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;

          &:hover {
            border-color: rgba(64, 158, 255, 0.3);
            box-shadow: 0 8px 24px rgba(64, 158, 255, 0.1);
          }

          .code-header {
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(64, 158, 255, 0.05);
            border-bottom: 1px solid rgba(64, 158, 255, 0.1);

            .header-left {
              display: flex;
              align-items: center;
              gap: 12px;

              .lang {
                text-transform: uppercase;
                color: #409EFF;
                font-size: 13px;
                font-weight: 600;
              }

              .divider {
                width: 1px;
                height: 14px;
                background: rgba(64, 158, 255, 0.2);
              }

              .file-name {
                color: #666;
                font-size: 13px;
              }
            }

            .copy-btn {
              height: 32px;
              padding: 0 16px;
              font-size: 13px;
              border-radius: 6px;
              color: #409EFF;
              transition: all 0.3s ease;

              &:hover {
                background: rgba(64, 158, 255, 0.1);
                border-color: rgba(64, 158, 255, 0.2);
              }

              :deep(.icon) {
                font-size: 16px;
                margin-right: 6px;
              }
            }
          }

          .code-content {
            padding: 20px;

            pre {
              margin: 0;
              font-family: 'Fira Code', monospace;
              font-size: 14px;
              line-height: 1.6;
              overflow-x: auto;

              code {
                background: transparent;
                padding: 0;
              }
            }
          }
        }

        // 暗色主题适配
        @media (prefers-color-scheme: dark) {
          .code-block {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(64, 158, 255, 0.2);

            &:hover {
              border-color: rgba(64, 158, 255, 0.4);
              box-shadow: 0 8px 24px rgba(64, 158, 255, 0.15);
            }

            .code-header {
              background: rgba(64, 158, 255, 0.1);
              border-bottom-color: rgba(64, 158, 255, 0.2);

              .header-left {
                .file-name {
                  color: #999;
                }
              }
            }

            .code-content {
              pre {
                code {
                  color: #e4e4e4;
                }
              }
            }
          }
        }
      }
    }
  }

  // 移动端适配
  @media (max-width: 1024px) {
    .hero {
      flex-direction: column;
      padding: 80px 24px;
      text-align: center;

      .hero-content {
        max-width: 100%;

        h1 {
          font-size: 48px;

          &::after {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .actions {
          justify-content: center;
        }

        .github-stats {
          justify-content: center;
        }
      }

      .hero-image {
        display: none;
      }
    }

    .features {
      padding: 60px 24px;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 60px 20px;

      .hero-content {
        h1 {
          font-size: 36px;
        }

        .description {
          font-size: 24px;
        }

        .sub-description {
          font-size: 16px;
        }

        .actions {
          flex-direction: column;

          .qs-button {
            width: 100%;
          }
        }
      }
    }

    .features {
      padding: 40px 20px;
      grid-template-columns: 1fr;
    }

    .quick-start {
      padding: 40px 20px;

      h2 {
        font-size: 32px;
      }

      .install-steps {
        .step {
          .step-header {
            padding: 16px 20px;

            .step-number {
              width: 40px;
              height: 40px;
              font-size: 16px;
            }

            h3 {
              font-size: 18px;
            }
          }

          .code-block {
            .code-header {
              padding: 12px 16px;
            }

            .code-content {
              padding: 16px;

              pre {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }

  // 暗色主题
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%);

    .hero {
      .hero-content {
        h1 {
          background: linear-gradient(135deg, #fff, #999);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          color: #fff;
        }

        .sub-description {
          color: #999;
        }
      }
    }

    .features {
      .feature-item {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);

        h3 {
          color: #fff;
        }

        p {
          color: #999;
        }
      }
    }

    .quick-start {
      h2 {
        background: linear-gradient(135deg, #fff, #999);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .step {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);

        .step-header {
          border-color: rgba(255, 255, 255, 0.1);

          h3 {
            color: #fff;
          }
        }
      }
    }
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.about-team {
  padding: 100px 40px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;

  h2 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 80px;
    background: linear-gradient(135deg, #1a1a1a, #666);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -16px;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #409EFF, #36cfc9);
      border-radius: 2px;
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding: 0 20px;

    .team-member {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
      padding: 40px;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 120px;
        background: linear-gradient(135deg, rgba(64, 158, 255, 0.1), rgba(54, 207, 201, 0.1));
        z-index: 0;
      }

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        border-color: #409EFF;

        .member-avatar {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(64, 158, 255, 0.2);

          img {
            transform: scale(1.1);
          }
        }

        .social-links a {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .member-avatar {
        width: 120px;
        height: 120px;
        margin: 0 auto 24px;
        border-radius: 60px;
        overflow: hidden;
        position: relative;
        z-index: 1;
        transition: all 0.3s ease;
        border: 4px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
      }

      .member-info {
        position: relative;
        z-index: 1;

        h3 {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px;
        }

        .role {
          font-size: 16px;
          font-weight: 500;
          color: #409EFF;
          margin: 0 0 16px;
          opacity: 0.9;
        }

        .bio {
          font-size: 15px;
          line-height: 1.6;
          color: #666;
          margin: 0 0 24px;
          padding: 0 20px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px;

          a {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background: rgba(64, 158, 255, 0.1);
            color: #409EFF;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 20px;
            transition: all 0.3s ease;
            opacity: 0.8;
            transform: translateY(10px);

            &:hover {
              background: #409EFF;
              color: white;
              transform: translateY(-4px);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 80px 24px;

    h2 {
      font-size: 40px;
      margin-bottom: 60px;
    }

    .team-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 20px;

    h2 {
      font-size: 32px;
      margin-bottom: 40px;
    }

    .team-grid {
      grid-template-columns: 1fr;
      gap: 24px;

      .team-member {
        padding: 30px 20px;

        &::before {
          height: 100px;
        }

        .member-avatar {
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
        }

        .member-info {
          h3 {
            font-size: 20px;
          }

          .role {
            font-size: 14px;
            margin-bottom: 12px;
          }

          .bio {
            font-size: 14px;
            padding: 0 10px;
            margin-bottom: 20px;
          }

          .social-links {
            gap: 12px;

            a {
              width: 36px;
              height: 36px;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    h2 {
      background: linear-gradient(135deg, #fff, #999);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .team-grid {
      .team-member {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);

        &::before {
          background: linear-gradient(135deg, rgba(64, 158, 255, 0.15), rgba(54, 207, 201, 0.15));
        }

        .member-avatar {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .member-info {
          h3 {
            color: #fff;
          }

          .role {
            color: #409EFF;
          }

          .bio {
            color: #999;
          }

          .social-links {
            a {
              background: rgba(64, 158, 255, 0.15);
              color: #409EFF;

              &:hover {
                background: #409EFF;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}

.team-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #f8fafc, #fff);

  .section-title {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      font-size: 36px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;

    .team-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 32px;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.05);
      max-width: 360px;
      margin: 0 auto;
      width: 100%;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
      }

      .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin: 0 auto 24px;
        overflow: hidden;
        border: 4px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        h3 {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .role {
          font-size: 16px;
          color: #666;
          margin-bottom: 16px;
        }

        .description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px;

          a {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            background: rgba(0, 0, 0, 0.04);
            transition: all 0.2s;

            &:hover {
              background: #409EFF;
              color: #fff;
              transform: scale(1.1);
            }

            .icon {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

// 移动端适配
@media (max-width: 768px) {
  .team-section {
    padding: 60px 0;

    .section-title {
      margin-bottom: 40px;
      padding: 0 24px;

      h2 {
        font-size: 28px;
      }

      p {
        font-size: 14px;
      }
    }

    .team-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 24px;
      padding: 0 16px;

      .team-card {
        padding: 24px;

        .avatar {
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
        }

        .info {
          h3 {
            font-size: 20px;
          }

          .role {
            font-size: 14px;
            margin-bottom: 12px;
          }

          .description {
            font-size: 13px;
            margin-bottom: 20px;
          }

          .social-links {
            gap: 12px;

            a {
              width: 32px;
              height: 32px;

              .icon {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}

// 暗色主题
@media (prefers-color-scheme: dark) {
  .team-section {
    background: linear-gradient(180deg, #1a1a1a, #141414);

    .section-title {
      h2 {
        color: #fff;
      }

      p {
        color: #999;
      }
    }

    .team-grid {
      .team-card {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);

        &:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .avatar {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .info {
          h3 {
            color: #fff;
          }

          .role,
          .description {
            color: #999;
          }

          .social-links {
            a {
              color: #999;
              background: rgba(255, 255, 255, 0.1);

              &:hover {
                background: #409EFF;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style> 