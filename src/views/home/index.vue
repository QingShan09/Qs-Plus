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
              <qs-button class="copy-btn" size="small" plain @click="handleCopy('install')">
                <template #icon>
                  <Icon :icon="installCopyState ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ installCopyState ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <div class="code-content">
              <pre><code>npm install qs-plus</code></pre>
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
              <qs-button class="copy-btn" size="small" plain @click="handleCopy('import')">
                <template #icon>
                  <Icon :icon="importCopyState ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ importCopyState ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <div class="code-content">
              <pre><code>import { createApp } from 'vue'
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
            <h3>开���使用</h3>
          </div>
          <div class="code-block">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">App.vue</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="handleCopy('usage')">
                <template #icon>
                  <Icon :icon="usageCopyState ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ usageCopyState ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <div class="code-content">
              <pre><code>&lt;template&gt;
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

    <div class="about-author">
      <h2>关于作者</h2>
      <div class="author-content">
        <div class="author-avatar">
          <img src="http://www.qingshan.ink:3089/v1/common/files/preview/img/1731480874530.jpg" alt="作者头像" />
        </div>
        <div class="author-info">
          <h3>前端开发工程师</h3>
          <p>热爱开源，专注于 Vue.js 生态系统，致力于为开发者提供更好的开发工具。</p>
          <div class="social-links">
            <a href="https://github.com/QingShan09" target="_blank">
              <Icon icon="mdi:github" />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank">
              <Icon icon="mdi:twitter" />
            </a>
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

const router = useRouter()
const installCopyState = ref(false)
const importCopyState = ref(false)
const usageCopyState = ref(false)

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

const handleCopy = async (type: 'install' | 'import' | 'usage') => {
  try {
    await navigator.clipboard.writeText(codeSnippets[type])
    const stateMap = {
      install: installCopyState,
      import: importCopyState,
      usage: usageCopyState
    }
    stateMap[type].value = true
    setTimeout(() => {
      stateMap[type].value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
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
</script>

<style scoped lang="scss">
.home-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(240, 247, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 600px;
    background: linear-gradient(135deg, rgba(64, 158, 255, 0.1) 0%, rgba(54, 207, 201, 0.1) 100%);
    z-index: -1;
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 0;
    gap: 60px;
    position: relative;
    z-index: 1;

    .hero-content {
      flex: 1;

      h1 {
        font-size: 56px;
        font-weight: 600;
        background: linear-gradient(45deg, #409EFF, #36cfc9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 0 24px;
        text-shadow: 0 2px 10px rgba(64, 158, 255, 0.2);
      }

      .description {
        font-size: 28px;
        color: #1a1a1a;
        margin-bottom: 16px;
        font-weight: 500;
      }

      .sub-description {
        font-size: 18px;
        color: #666;
        margin-bottom: 40px;
      }

      .actions {
        display: flex;
        gap: 16px;
        margin-bottom: 32px;

        .qs-button {
          min-width: 140px;
          
          :deep(.icon) {
            margin-right: 8px;
          }
        }
      }

      .github-stats {
        display: flex;
        gap: 16px;

        .github-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;

          &:hover {
            color: #409EFF;
          }

          .icon {
            font-size: 18px;
          }
        }
      }
    }

    .hero-image {
      flex: 1;
      max-width: 500px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
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
          animation: float 6s ease-in-out infinite;

          .carousel-card {
            position: absolute;
            width: 300px;
            height: 200px;
            left: 50%;
            top: 50%;
            margin-left: -150px;
            margin-top: -100px;
            transition: transform 1s ease;
            cursor: pointer;

            .feature-card {
              width: 100%;
              height: 100%;
              background: #fff;
              border-radius: 20px;
              padding: 40px;
              position: relative;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              transition: all 0.3s;

              &:hover {
                transform: translateY(-8px);
                box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.15);

                .card-icon {
                  transform: scale(1.1);
                }

                .card-bg {
                  transform: rotate(30deg) scale(1.2);
                }
              }

              .card-icon {
                width: 64px;
                height: 64px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                margin-bottom: 24px;
                position: relative;
                z-index: 1;
                transition: all 0.3s;
              }

              h3 {
                font-size: 24px;
                font-weight: 600;
                color: #1a1a1a;
                margin: 0 0 16px;
                position: relative;
                z-index: 1;
              }

              p {
                font-size: 16px;
                line-height: 1.6;
                color: #666;
                margin: 0;
                position: relative;
                z-index: 1;
              }

              .card-bg {
                position: absolute;
                width: 300px;
                height: 300px;
                border-radius: 50%;
                right: -100px;
                bottom: -100px;
                opacity: 0.1;
                transition: all 0.6s;
              }

              &.modern-design {
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
                
                .card-icon {
                  color: #409EFF;
                  background: #ecf5ff;
                }

                .card-bg {
                  background: #409EFF;
                }
              }

              &.typescript {
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);

                .card-icon {
                  color: #3178c6;
                  background: #e6f3ff;
                }

                .card-bg {
                  background: #3178c6;
                }
              }

              &.customization {
                background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);

                .card-icon {
                  color: #67c23a;
                  background: #f0f9eb;
                }

                .card-bg {
                  background: #67c23a;
                }
              }
            }
          }
        }
      }
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 80px 0;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 60px;
    margin: 40px 0;
    border: 1px solid rgba(64, 158, 255, 0.1);

    .feature-item {
      text-align: center;
      padding: 40px 24px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(64, 158, 255, 0.1);
      box-shadow: 0 8px 24px rgba(64, 158, 255, 0.06);
      border-radius: 12px;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
        border-color: #409EFF;

        .icon {
          background: linear-gradient(135deg, #409EFF, #36cfc9);
          color: #fff;
        }
      }

      .icon {
        width: 56px;
        height: 56px;
        margin: 0 auto 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(64, 158, 255, 0.1);
        border-radius: 16px;
        color: #409EFF;
        font-size: 28px;
        transition: all 0.3s;
      }

      h3 {
        font-size: 20px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0 0 16px;
      }

      p {
        font-size: 14px;
        color: #666;
        margin: 0;
        line-height: 1.6;
      }
    }
  }

  .quick-start {
    padding: 80px 0;
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 60px;
    margin: 40px 0;
    border: 1px solid rgba(64, 158, 255, 0.1);

    h2 {
      font-size: 36px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 48px;
      text-align: center;
    }

    .install-steps {
      max-width: 800px;
      margin: 0 auto;

      .step {
        margin-bottom: 40px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(64, 158, 255, 0.1);
        box-shadow: 0 8px 24px rgba(64, 158, 255, 0.06);
        border-radius: 16px;
        padding: 24px;
        transition: all 0.3s;

        &:hover {
          box-shadow: 0 12px 32px rgba(64, 158, 255, 0.12);
          border-color: rgba(64, 158, 255, 0.3);
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;

          .step-number {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: rgba(64, 158, 255, 0.1);
            color: #409EFF;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
          }

          h3 {
            font-size: 20px;
            font-weight: 500;
            color: #1a1a1a;
            margin: 0;
          }
        }

        .code-block {
          background: #1e1e1e;
          border-radius: 12px;
          overflow: hidden;

          .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: #2d2d2d;
            border-bottom: 1px solid #3d3d3d;

            .header-left {
              display: flex;
              align-items: center;
              gap: 8px;

              .lang {
                text-transform: uppercase;
                color: #409EFF;
                font-size: 12px;
                font-weight: 600;
              }

              .divider {
                width: 1px;
                height: 12px;
                background: #4d4d4d;
              }

              .file-name {
                color: #999;
                font-size: 12px;
              }
            }

            .copy-btn {
              height: 28px;
              padding: 0 12px;
              border-color: #4d4d4d;
              color: #d4d4d4;

              &:hover {
                border-color: #409EFF;
                color: #409EFF;
              }

              :deep(.icon) {
                margin-right: 4px;
                font-size: 16px;
              }
            }
          }

          .code-content {
            padding: 16px;
            background: #1e1e1e;

            pre {
              margin: 0;
              font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, monospace;
              font-size: 14px;
              line-height: 1.6;
              color: #d4d4d4;

              code {
                .keyword {
                  color: #c678dd;
                }
                .string {
                  color: #98c379;
                }
                .function {
                  color: #61afef;
                }
              }
            }
          }
        }
      }
    }
  }

  .about-author {
    padding: 80px 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    margin-bottom: 40px;
    position: relative;
    z-index: 1;

    h2 {
      font-size: 36px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 48px;
      text-align: center;
    }

    .author-content {
      display: flex;
      align-items: center;
      gap: 40px;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 40px;

      .author-avatar {
        flex-shrink: 0;
        width: 120px;
        height: 120px;
        border-radius: 60px;
        overflow: hidden;
        border: 4px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 8px 24px rgba(64, 158, 255, 0.12);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }

      .author-info {
        flex: 1;

        h3 {
          font-size: 24px;
          font-weight: 500;
          color: #1a1a1a;
          margin: 0 0 16px;
        }

        p {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 24px;
        }

        .social-links {
          display: flex;
          gap: 16px;

          a {
            color: #666;
            font-size: 24px;
            transition: color 0.2s;

            &:hover {
              color: #409EFF;
            }
          }
        }
      }
    }
  }
}

// 添加背景装饰
.decoration {
  position: fixed;
  pointer-events: none;
  z-index: 0;

  &.circle-1 {
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(64, 158, 255, 0.05), rgba(54, 207, 201, 0.05));
    top: -200px;
    right: -200px;
  }

  &.circle-2 {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(54, 207, 201, 0.05), rgba(64, 158, 255, 0.05));
    bottom: -100px;
    left: -100px;
  }
}

@media (max-width: 1024px) {
  .home-page {
    .hero {
      flex-direction: column;
      text-align: center;
      padding: 40px 0;

      .hero-content {
        .actions {
          justify-content: center;
        }

        .github-stats {
          justify-content: center;
        }
      }
    }

    .features {
      grid-template-columns: repeat(2, 1fr);
      padding: 40px 0;
    }
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 16px;

    .hero {
      padding: 40px 0;
      gap: 32px;

      .hero-content {
        h1 {
          font-size: 36px;
        }

        .description {
          font-size: 20px;
        }

        .sub-description {
          font-size: 16px;
        }

        .actions {
          flex-direction: column;
          width: 100%;
          gap: 12px;
          margin-bottom: 24px;

          .qs-button {
            width: 100%;
            justify-content: center;
            min-height: 44px;
          }
        }

        .github-stats {
          justify-content: center;
          margin-bottom: 32px;
        }
      }

      .hero-image {
        display: none;
      }
    }

    .features {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 32px 20px;
      margin: 24px 0;

      .feature-item {
        padding: 24px 16px;

        .icon {
          width: 48px;
          height: 48px;
          font-size: 24px;
          margin-bottom: 16px;
        }

        h3 {
          font-size: 18px;
          margin: 0 0 12px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    .quick-start {
      padding: 40px 20px;
      margin: 24px 0;

      h2 {
        font-size: 28px;
        margin: 0 0 32px;
      }

      .install-steps {
        .step {
          margin-bottom: 24px;
          padding: 16px;

          .step-header {
            gap: 12px;
            margin-bottom: 16px;

            .step-number {
              width: 32px;
              height: 32px;
              font-size: 14px;
            }

            h3 {
              font-size: 18px;
            }
          }

          .code-block {
            .code-header {
              padding: 8px 12px;

              .header-left {
                .lang {
                  font-size: 11px;
                }

                .file-name {
                  font-size: 11px;
                }
              }

              .copy-btn {
                height: 24px;
                padding: 0 8px;
                font-size: 12px;

                :deep(.icon) {
                  font-size: 14px;
                }
              }
            }

            .code-content {
              padding: 12px;

              pre {
                font-size: 12px;
                line-height: 1.5;
                overflow-x: auto;
                white-space: pre;
                -webkit-overflow-scrolling: touch;
              }
            }
          }
        }
      }
    }

    .about-author {
      padding: 40px 20px;
      margin: 24px 0;

      h2 {
        font-size: 28px;
        margin: 0 0 32px;
      }

      .author-content {
        flex-direction: column;
        gap: 24px;
        padding: 0;
        text-align: center;

        .author-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50px;
        }

        .author-info {
          h3 {
            font-size: 20px;
            margin: 0 0 12px;
          }

          p {
            font-size: 14px;
            margin: 0 0 16px;
          }

          .social-links {
            justify-content: center;
            
            a {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 12px;

    .hero {
      .hero-content {
        h1 {
          font-size: 32px;
        }

        .description {
          font-size: 18px;
        }
      }
    }

    .quick-start {
      .code-block {
        border-radius: 8px;

        .code-content {
          pre {
            font-size: 11px;
          }
        }
      }
    }
  }
}

// 添加平板端断点
@media (min-width: 769px) and (max-width: 1024px) {
  .home-page {
    padding: 24px;

    .hero {
      gap: 40px;

      .hero-content {
        h1 {
          font-size: 44px;
        }

        .description {
          font-size: 24px;
        }
      }
    }

    .features {
      grid-template-columns: repeat(2, 1fr);
      padding: 40px;
    }

    .quick-start {
      padding: 40px;
    }

    .about-author {
      padding: 40px;
    }
  }
}

// 添加横屏模式支持
@media (max-height: 600px) and (orientation: landscape) {
  .home-page {
    .hero {
      padding: 20px 0;

      .hero-image {
        height: 260px;
      }
    }

    .features {
      padding: 30px;
    }

    .quick-start, .about-author {
      padding: 30px;
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
</style> 