<template>
  <div class="resource-page">
    <h1>资源</h1>
    <p class="description">这里提供了一些与 QS Plus 相关的资源和工具，帮助你更好地使用组件库。</p>

    <div class="resource-grid">
      <div class="resource-card">
        <div class="icon">
          <Icon icon="mdi:github" />
        </div>
        <div class="content">
          <h3>源码仓库</h3>
          <p>访问 GitHub 仓库，获取最新源码</p>
          <qs-button type="primary" icon="mdi:open-in-new">查看源码</qs-button>
        </div>
      </div>

      <div class="resource-card">
        <div class="icon">
          <Icon icon="mdi:palette" />
        </div>
        <div class="content">
          <h3>主题生成器</h3>
          <p>在线配置并生成自定义主题</p>
          <qs-button type="primary" icon="mdi:open-in-new">立即使用</qs-button>
        </div>
      </div>

      <div class="resource-card">
        <div class="icon">
          <Icon icon="mdi:file-document" />
        </div>
        <div class="content">
          <h3>更新日志</h3>
          <p>了解组件库的版本更新记录</p>
          <qs-button type="primary" icon="mdi:open-in-new">查看日志</qs-button>
        </div>
      </div>

      <div class="resource-card">
        <div class="icon">
          <Icon icon="mdi:bug" />
        </div>
        <div class="content">
          <h3>问题反馈</h3>
          <p>提交 Bug 或功能建议</p>
          <qs-button type="primary" icon="mdi:open-in-new" @click="openLink('https://github.com/QingShan09/Qs-Plus/issues')">
            去反馈
          </qs-button>
        </div>
      </div>

      <div class="resource-card">
        <div class="icon">
          <Icon icon="mdi:puzzle" />
        </div>
        <div class="content">
          <h3>组件模板</h3>
          <p>快速创建自定义组件</p>
          <qs-button type="primary" icon="mdi:open-in-new">使用模板</qs-button>
        </div>
      </div>

      <div class="resource-card">
        <div class="icon">
          <Icon icon="mdi:book-open" />
        </div>
        <div class="content">
          <h3>设计指南</h3>
          <p>了解组件设计原则</p>
          <qs-button type="primary" icon="mdi:open-in-new">查看指南</qs-button>
        </div>
      </div>
    </div>

    <div class="tools-section">
      <h2>推荐工具</h2>
      <div class="tools-grid">
        <a href="#" class="tool-item">
          <Icon icon="mdi:language-typescript" />
          <span>TypeScript</span>
        </a>
        <a href="#" class="tool-item">
          <Icon icon="mdi:vuejs" />
          <span>Vue CLI</span>
        </a>
        <a href="#" class="tool-item">
          <Icon icon="mdi:nodejs" />
          <span>Node.js</span>
        </a>
        <a href="#" class="tool-item">
          <Icon icon="mdi:webpack" />
          <span>Webpack</span>
        </a>
        <a href="#" class="tool-item">
          <Icon icon="mdi:eslint" />
          <span>ESLint</span>
        </a>
        <a href="#" class="tool-item">
          <Icon icon="mdi:sass" />
          <span>Sass</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped lang="scss">
.resource-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 16px;
  }

  .description {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 48px;
  }

  .resource-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 64px;
  }

  .resource-card {
    background: #fff;
    border-radius: 8px;
    padding: 32px;
    display: flex;
    gap: 24px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .icon {
      width: 48px;
      height: 48px;
      background: #f0f7ff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #409EFF;
      flex-shrink: 0;
    }

    .content {
      flex: 1;

      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #1a1a1a;
        margin: 0 0 8px;
      }

      p {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin: 0 0 16px;
      }
    }
  }

  .tools-section {
    h2 {
      font-size: 24px;
      font-weight: 500;
      color: #1a1a1a;
      margin: 0 0 24px;
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
    }

    .tool-item {
      background: #fff;
      border-radius: 8px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }

      .iconify {
        font-size: 32px;
        color: #409EFF;
      }

      span {
        font-size: 14px;
        color: #666;
      }
    }
  }
}

@media (max-width: 1024px) {
  .resource-page {
    .resource-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .tools-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .resource-page {
    padding: 20px;

    .resource-grid {
      grid-template-columns: 1fr;
    }

    .tools-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style> 