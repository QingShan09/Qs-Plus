<template>
  <div class="app-wrapper">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-content">
        <div class="left">
          <div class="logo" @click="router.push('/')">
            <Icon icon="mdi:cube-outline" class="logo-icon" />
            <span>QS Plus</span>
          </div>
          <nav class="nav-menu">
            <router-link to="/" class="nav-item" :class="{ active: currentBasePath === '' }">首页</router-link>
            <router-link to="/guide" class="nav-item" :class="{ active: currentBasePath === 'guide' }">指南</router-link>
            <router-link to="/components" class="nav-item" :class="{ active: currentBasePath === 'components' }">组件</router-link>
            <router-link to="/resource" class="nav-item" :class="{ active: currentBasePath === 'resource' }">资源</router-link>
          </nav>
        </div>
        <div class="right">
          <div class="search-box">
            <Icon icon="mdi:magnify" class="search-icon" />
            <input 
              type="text" 
              placeholder="搜索组件..." 
              v-model="searchKeyword"
              @focus="handleSearchFocus"
              @blur="handleSearchBlur"
            />
            <!-- 搜索结果 -->
            <div class="search-result" v-show="showSearchResult && searchResults.length > 0">
              <div 
                v-for="item in searchResults" 
                :key="item.path"
                class="search-item"
                @mousedown="handleSearchItemClick(item)"
              >
                <div class="item-icon">
                  <Icon :icon="item.type === 'component' ? 'mdi:puzzle' : 'mdi:book'" />
                </div>
                <div class="item-content">
                  <div class="item-title">{{ item.title }}</div>
                  <div class="item-desc">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
          <span class="version">v1.0.0</span>
          <a href="https://github.com/QingShan09/Qs-Plus" target="_blank" class="github-link">
            <Icon icon="mdi:github" class="github-icon" />
          </a>
        </div>
      </div>
    </header>

    <div class="main-container">
      <!-- 侧边栏 -->
      <aside class="sidebar" :class="{ 'is-collapsed': isCollapsed }" v-if="showSidebar">
        <div class="sidebar-inner">
          <div class="menu-group" v-for="group in menuGroups" :key="group.title">
            <div class="group-title">{{ group.title }}</div>
            <div class="menu-items">
              <router-link
                v-for="item in group.items"
                :key="item.path"
                :to="item.path"
                class="menu-item"
                :class="{ active: route.path === item.path }"
              >
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
      </aside>

      <!-- 主内容区 -->
      <main class="content" :class="{ 'with-sidebar': showSidebar }">
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const route = useRoute()
const router = useRouter()
const isCollapsed = ref(false)
const searchKeyword = ref('')
const showSearchResult = ref(false)

// 计算当前路由的基础路径
const currentBasePath = computed(() => {
  const path = route.path
  return path.split('/')[1] // 获取第一级路径，如 'components'
})

// 判断是否显示侧边栏
const showSidebar = computed(() => {
  return currentBasePath.value === 'components'
})

// 菜单数据
const menuGroups = [
  {
    title: '基础组件',
    items: [
      { title: 'Button 按钮', path: '/components/button' },
      { title: 'Radio 单选框', path: '/components/radio' }
      // 其他组件将在开发完成后添加
    ]
  }
]

// 搜索数据
const searchData = [
  { title: 'Button 按钮', path: '/components/button', type: 'component', description: '常用的操作按钮' },
  { title: 'Radio 单选框', path: '/components/radio', type: 'component', description: '在一组备选项中进行单选' },
  { title: 'Icon 图标', path: '/components/icon', type: 'component', description: '语义化的矢量图形' },
  { title: '安装', path: '/guide#installation', type: 'guide', description: '安装说明' },
  { title: '快速开始', path: '/guide#usage', type: 'guide', description: '快速上手指南' },
  { title: '主题定制', path: '/guide#theme', type: 'guide', description: '自定义主题配置' },
  // ... 更多搜索数据
]

// 搜索结果
const searchResults = computed(() => {
  if (!searchKeyword.value) return []
  const keyword = searchKeyword.value.toLowerCase()
  return searchData.filter(item => 
    item.title.toLowerCase().includes(keyword) || 
    item.description.toLowerCase().includes(keyword)
  ).slice(0, 8)
})

// 处理搜索结果点击
const handleSearchItemClick = (item: any) => {
  router.push(item.path)
  searchKeyword.value = ''
  showSearchResult.value = false
}

// 处理搜索框焦点
const handleSearchFocus = () => {
  showSearchResult.value = true
}

// 处理搜索框失焦
const handleSearchBlur = () => {
  setTimeout(() => {
    showSearchResult.value = false
  }, 200)
}
</script>

<style scoped lang="scss">
.app-wrapper {
  min-height: 100vh;
  background-color: #fff;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 1000;

  .header-content {
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;

    .left {
      display: flex;
      align-items: center;

      .logo {
        display: flex;
        align-items: center;
        margin-right: 48px;

        .logo-icon {
          width: 32px;
          height: 32px;
          color: #409EFF;
          margin-right: 8px;
        }

        span {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
        }
      }

      .nav-menu {
        display: flex;
        gap: 32px;

        .nav-item {
          color: #606266;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
          padding: 8px 0;
          position: relative;

          &:hover, &.router-link-active {
            color: #409EFF;
          }

          &.router-link-active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #409EFF;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 24px;

      .search-box {
        position: relative;
        display: flex;
        align-items: center;
        background: #f5f7fa;
        border-radius: 4px;
        padding: 6px 12px;
        width: 200px;
        transition: all 0.3s;

        &:hover, &:focus-within {
          background: #ebeef5;
          width: 300px;
        }

        .search-icon {
          width: 16px;
          height: 16px;
          color: #909399;
          margin-right: 8px;
        }

        input {
          border: none;
          background: none;
          outline: none;
          font-size: 14px;
          color: #606266;
          width: 100%;

          &::placeholder {
            color: #c0c4cc;
          }
        }

        .search-result {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: #fff;
          border-radius: 4px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          max-height: 400px;
          overflow-y: auto;
          z-index: 1000;

          .search-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background: #f5f7fa;
            }

            .item-icon {
              width: 32px;
              height: 32px;
              background: #f0f7ff;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #409EFF;
            }

            .item-content {
              flex: 1;
              min-width: 0;

              .item-title {
                font-size: 14px;
                font-weight: 500;
                color: #1a1a1a;
                margin-bottom: 4px;
              }

              .item-desc {
                font-size: 12px;
                color: #909399;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }

      .version {
        color: #909399;
        font-size: 14px;
      }

      .github-link {
        color: #606266;
        transition: color 0.2s;

        &:hover {
          color: #409EFF;
        }

        .github-icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

.main-container {
  display: flex;
  padding-top: 64px;
  min-height: calc(100vh - 64px);
}

.sidebar {
  width: 260px;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
  height: calc(100vh - 64px);
  position: fixed;
  top: 64px;
  left: 0;
  transition: all 0.3s;
  box-shadow: 1px 0 8px rgba(0, 0, 0, 0.05);

  /* 隐藏默认滚动条 */
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
  }

  .sidebar-inner {
    padding: 16px 0;
  }

  .menu-group {
    margin-bottom: 24px;
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 24px;
      right: 24px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
    }

    .group-title {
      padding: 0 24px 8px;
      color: #1a1a1a;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      opacity: 0.6;
    }

    .menu-items {
      .menu-item {
        display: block;
        padding: 10px 24px;
        color: #606266;
        text-decoration: none;
        font-size: 14px;
        transition: all 0.25s ease;
        position: relative;
        margin: 2px 0;

        &:hover {
          color: #409EFF;
          background: linear-gradient(90deg, rgba(64, 158, 255, 0.04), rgba(64, 158, 255, 0.02));
          padding-left: 28px;
        }

        &.active {
          color: #409EFF;
          background: linear-gradient(90deg, rgba(64, 158, 255, 0.1), rgba(64, 158, 255, 0.05));
          font-weight: 500;
          padding-left: 28px;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 16px;
            background: #409EFF;
            border-radius: 0 3px 3px 0;
          }
        }
      }
    }
  }
}

.content {
  flex: 1;
  padding: 32px 48px;
  background: #fff;
  min-height: calc(100vh - 64px);
  transition: margin-left 0.3s;

  &.with-sidebar {
    margin-left: 260px;
  }

  .content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .header-content {
    padding: 0 16px;
  }

  .content {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none !important;
  }

  .search-box {
    display: none !important;
  }

  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s;

    &.is-visible {
      transform: translateX(0);
    }
  }

  .content {
    margin-left: 0;
    padding: 16px;
  }
}

.nav-menu {
  .nav-item {
    &.active {
      color: #409EFF;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #409EFF;
      }
    }
  }
}
</style> 