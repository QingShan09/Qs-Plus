<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Icon 图标</h1>
      <p>QS Plus 的图标使用 Material Design Icons，点击图标即可复制图标名称。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#size" :class="{ active: activeSection === 'size' }" @click.prevent="scrollToSection('size')">图标尺寸</a>
        <a href="#state" :class="{ active: activeSection === 'state' }" @click.prevent="scrollToSection('state')">图标状态</a>
        <a href="#interactive" :class="{ active: activeSection === 'interactive' }" @click.prevent="scrollToSection('interactive')">交互功能</a>
        <a href="#collection" :class="{ active: activeSection === 'collection' }" @click.prevent="scrollToSection('collection')">图标集合</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-icon icon="mdi:home" />
            <qs-icon icon="mdi:account" type="primary" />
            <qs-icon icon="mdi:check" type="success" />
            <qs-icon icon="mdi:alert" type="warning" />
            <qs-icon icon="mdi:close" type="danger" />
            <qs-icon icon="mdi:information" type="info" />
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-icon icon="mdi:heart" color="#ff4d4f" />
            <qs-icon icon="mdi:star" color="#faad14" />
            <qs-icon icon="mdi:thumb-up" color="#52c41a" />
            <qs-icon icon="mdi:message" color="#1677ff" />
            <qs-icon icon="mdi:bell" color="#722ed1" />
            <qs-icon icon="mdi:share" color="#eb2f96" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            使用 type 属性设置预设类型，或使用 color 属性自定义颜色。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain data-index="1" @click="copyCode($event, basicCode)">
                <template #icon>
                  <Icon :icon="copied1 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied1 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ basicCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode1">
            <span>{{ showCode1 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode1 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="size">
      <h2>图标尺寸</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-icon icon="mdi:star" size="small" />
            <qs-icon icon="mdi:star" />
            <qs-icon icon="mdi:star" size="large" />
            <qs-icon icon="mdi:star" customSize="32px" />
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-icon icon="mdi:heart" size="small" type="danger" />
            <qs-icon icon="mdi:heart" type="danger" />
            <qs-icon icon="mdi:heart" size="large" type="danger" />
            <qs-icon icon="mdi:heart" customSize="32px" type="danger" />
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-icon icon="mdi:thumb-up" size="small" type="primary" />
            <qs-icon icon="mdi:thumb-up" type="primary" />
            <qs-icon icon="mdi:thumb-up" size="large" type="primary" />
            <qs-icon icon="mdi:thumb-up" customSize="32px" type="primary" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            使用 size 属性设置预设尺寸，或使用 customSize 自定义大小。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain data-index="2" @click="copyCode($event, sizeCode)">
                <template #icon>
                  <Icon :icon="copied2 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied2 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ sizeCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode2">
            <span>{{ showCode2 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode2 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="state">
      <h2>图标状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-icon icon="mdi:heart" disabled />
            <qs-icon icon="mdi:refresh" loading />
            <qs-icon icon="mdi:refresh" rotating />
            <qs-icon icon="mdi:arrow-right" :rotate="90" />
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-icon icon="mdi:account" disabled type="primary" />
            <qs-icon icon="mdi:cloud-upload" loading type="primary" />
            <qs-icon icon="mdi:cog" rotating type="primary" />
            <qs-icon icon="mdi:chevron-right" :rotate="90" type="primary" />
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-icon icon="mdi:bell" effect="light" type="warning" />
            <qs-icon icon="mdi:bell" type="warning" />
            <qs-icon icon="mdi:bell" effect="dark" type="warning" />
            <qs-icon icon="mdi:bell-off" type="warning" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            支持禁用、加载中、旋转、透明度等多种状态。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain data-index="3" @click="copyCode($event, stateCode)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ stateCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="interactive">
      <h2>交互功能</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-icon 
              icon="mdi:thumb-up" 
              clickable 
              type="primary"
              @click="handleIconClick"
              @mouseenter="handleIconHover"
              @mouseleave="handleIconLeave"
            />
            <qs-icon 
              icon="mdi:heart" 
              clickable 
              type="danger"
              @click="handleIconClick"
              @mouseenter="handleIconHover"
              @mouseleave="handleIconLeave"
            />
            <qs-icon 
              icon="mdi:star" 
              clickable 
              type="warning"
              @click="handleIconClick"
              @mouseenter="handleIconHover"
              @mouseleave="handleIconLeave"
            />
            <qs-icon 
              icon="mdi:bookmark" 
              clickable 
              type="success"
              @click="handleIconClick"
              @mouseenter="handleIconHover"
              @mouseleave="handleIconLeave"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            设置 clickable 属性使图标可点击，支持 click、mouseenter、mouseleave 事件。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain data-index="4" @click="copyCode($event, interactiveCode)">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ interactiveCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="collection">
      <div class="collection-header">
        <h2>图标集合</h2>
        <div class="icon-search">
          <qs-icon icon="mdi:magnify" class="search-icon" />
          <input 
            type="text" 
            v-model="searchKeyword" 
            placeholder="搜索图标，比如 'home'、'user'、'setting' 等"
          >
        </div>
      </div>
      <div class="demo-block">
        <div class="source">
          <div class="icon-grid">
            <template v-if="searchKeyword">
              <div 
                v-for="icon in filteredIcons" 
                :key="icon.name"
                class="icon-item"
                :data-category="icon.category"
                @click="copyIconName(icon.name)"
              >
                <qs-icon :icon="icon.name" />
                <span>{{ icon.title }}</span>
              </div>
            </template>
            <template v-else>
              <div v-for="category in iconCategories" :key="category.name" class="icon-category">
                <h3>{{ category.title }}</h3>
                <div class="icon-list">
                  <div 
                    v-for="icon in category.icons" 
                    :key="icon.name"
                    class="icon-item"
                    :data-category="category.name"
                    @click="copyIconName(icon.name)"
                  >
                    <qs-icon :icon="icon.name" />
                    <span>{{ icon.title }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="api-table" id="api">
      <h2>API</h2>
      <div class="api-table">
        <h3>属性</h3>
        <table>
          <thead>
            <tr>
              <th>属性名</th>
              <th>说明</th>
              <th>类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>icon</td>
              <td>图标名称</td>
              <td>string</td>
              <td>Material Design Icons 名称</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>图标尺寸</td>
              <td>string</td>
              <td>small / default / large</td>
              <td>default</td>
            </tr>
            <tr>
              <td>customSize</td>
              <td>自定义尺寸</td>
              <td>string</td>
              <td>CSS 字体大小值</td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>图标颜色</td>
              <td>string</td>
              <td>CSS 颜色值</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>图标类型</td>
              <td>string</td>
              <td>primary / success / warning / danger / info</td>
              <td>-</td>
            </tr>
            <tr>
              <td>effect</td>
              <td>图标效果</td>
              <td>string</td>
              <td>light / dark</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否加载中</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rotating</td>
              <td>是否旋转</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>rotate</td>
              <td>旋转角度</td>
              <td>number</td>
              <td>-</td>
              <td>0</td>
            </tr>
            <tr>
              <td>clickable</td>
              <td>是否可点击</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>

        <h3>事件</h3>
        <table>
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td>点击图标时触发</td>
              <td>(event: MouseEvent)</td>
            </tr>
            <tr>
              <td>mouseenter</td>
              <td>鼠标进入图标时触发</td>
              <td>(event: MouseEvent)</td>
            </tr>
            <tr>
              <td>mouseleave</td>
              <td>鼠标离开图标时触发</td>
              <td>(event: MouseEvent)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="message-toast" :class="{ show: showMessage }">{{ messageText }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import QsIcon from '@/components/icon/icon.vue'
import { copyText } from '@/utils/clipboard'

// 控制代码显示
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)

// 控制复制状态
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)

// 当前激活的导航项
const activeSection = ref('basic')

// 滚动到指定区域
const scrollToSection = (section: string) => {
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = section
  }
}

// 提示消息
const showMessage = ref(false)
const messageText = ref('')

// 显示提示消息
const showToast = (text: string) => {
  messageText.value = text
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 2000)
}

// 代码示例
const basicCode = `<template>
  <!-- 使用预设类型 -->
  <qs-icon icon="mdi:home" />
  <qs-icon icon="mdi:account" type="primary" />
  <qs-icon icon="mdi:check" type="success" />
  <qs-icon icon="mdi:alert" type="warning" />
  <qs-icon icon="mdi:close" type="danger" />
  <qs-icon icon="mdi:information" type="info" />

  <!-- 自定义颜色 -->
  <qs-icon icon="mdi:heart" color="#ff4d4f" />
  <qs-icon icon="mdi:star" color="#faad14" />
  <qs-icon icon="mdi:thumb-up" color="#52c41a" />
  <qs-icon icon="mdi:message" color="#1677ff" />
  <qs-icon icon="mdi:bell" color="#722ed1" />
  <qs-icon icon="mdi:share" color="#eb2f96" />
</template>`

const sizeCode = `<template>
  <!-- 使用预设尺寸 -->
  <qs-icon icon="mdi:star" size="small" />
  <qs-icon icon="mdi:star" />
  <qs-icon icon="mdi:star" size="large" />
  <qs-icon icon="mdi:star" customSize="32px" />

  <!-- 带类型的不同尺寸 -->
  <qs-icon icon="mdi:heart" size="small" type="danger" />
  <qs-icon icon="mdi:heart" type="danger" />
  <qs-icon icon="mdi:heart" size="large" type="danger" />
  <qs-icon icon="mdi:heart" customSize="32px" type="danger" />

  <!-- 带类型的不同尺寸 -->
  <qs-icon icon="mdi:thumb-up" size="small" type="primary" />
  <qs-icon icon="mdi:thumb-up" type="primary" />
  <qs-icon icon="mdi:thumb-up" size="large" type="primary" />
  <qs-icon icon="mdi:thumb-up" customSize="32px" type="primary" />
</template>`

const stateCode = `<template>
  <!-- 基础状态 -->
  <qs-icon icon="mdi:heart" disabled />
  <qs-icon icon="mdi:refresh" loading />
  <qs-icon icon="mdi:refresh" rotating />
  <qs-icon icon="mdi:arrow-right" :rotate="90" />

  <!-- 带类型的状态 -->
  <qs-icon icon="mdi:account" disabled type="primary" />
  <qs-icon icon="mdi:cloud-upload" loading type="primary" />
  <qs-icon icon="mdi:cog" rotating type="primary" />
  <qs-icon icon="mdi:chevron-right" :rotate="90" type="primary" />

  <!-- 不同效果 -->
  <qs-icon icon="mdi:bell" effect="light" type="warning" />
  <qs-icon icon="mdi:bell" type="warning" />
  <qs-icon icon="mdi:bell" effect="dark" type="warning" />
  <qs-icon icon="mdi:bell-off" type="warning" />
</template>`

const interactiveCode = `<template>
  <!-- 不同类型的可点击图标 -->
  <qs-icon 
    icon="mdi:thumb-up" 
    clickable 
    type="primary"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
  <qs-icon 
    icon="mdi:heart" 
    clickable 
    type="danger"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
  <qs-icon 
    icon="mdi:star" 
    clickable 
    type="warning"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
  <qs-icon 
    icon="mdi:bookmark" 
    clickable 
    type="success"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
</template>

<script setup>
const handleClick = () => {
  console.log('Icon clicked!')
}

const handleMouseEnter = () => {
  console.log('Mouse entered!')
}

const handleMouseLeave = () => {
  console.log('Mouse left!')
}
<\/script>`

// 切换代码显示
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value

// 复制代码
const copyCode = async (event: MouseEvent, code: string) => {
  const success = await copyText(code)
  if (success) {
    const button = event.currentTarget as HTMLButtonElement
    const index = button.dataset.index || '1'
    switch (index) {
      case '1':
        copied1.value = true
        setTimeout(() => copied1.value = false, 2000)
        break
      case '2':
        copied2.value = true
        setTimeout(() => copied2.value = false, 2000)
        break
      case '3':
        copied3.value = true
        setTimeout(() => copied3.value = false, 2000)
        break
      case '4':
        copied4.value = true
        setTimeout(() => copied4.value = false, 2000)
        break
    }
  }
}

// 复制图标名称
const copyIconName = async (name: string) => {
  const success = await copyText(name)
  if (success) {
    showToast(`图标 "${name}" 已复制到剪贴板`)
  }
}

// 图标分类
const iconCategories = [
  {
    name: 'common',
    title: '常用图标',
    icons: [
      { name: 'mdi:home', title: 'home' },
      { name: 'mdi:account', title: 'account' },
      { name: 'mdi:cog', title: 'settings' },
      { name: 'mdi:heart', title: 'heart' },
      { name: 'mdi:star', title: 'star' },
      { name: 'mdi:check', title: 'check' },
      { name: 'mdi:close', title: 'close' },
      { name: 'mdi:plus', title: 'plus' },
      { name: 'mdi:minus', title: 'minus' },
      { name: 'mdi:delete', title: 'delete' },
      { name: 'mdi:magnify', title: 'search' },
      { name: 'mdi:pencil', title: 'edit' }
    ]
  },
  {
    name: 'arrow',
    title: '箭头图标',
    icons: [
      { name: 'mdi:chevron-up', title: 'chevron-up' },
      { name: 'mdi:chevron-down', title: 'chevron-down' },
      { name: 'mdi:chevron-left', title: 'chevron-left' },
      { name: 'mdi:chevron-right', title: 'chevron-right' },
      { name: 'mdi:arrow-up', title: 'arrow-up' },
      { name: 'mdi:arrow-down', title: 'arrow-down' },
      { name: 'mdi:arrow-left', title: 'arrow-left' },
      { name: 'mdi:arrow-right', title: 'arrow-right' },
      { name: 'mdi:menu-up', title: 'menu-up' },
      { name: 'mdi:menu-down', title: 'menu-down' },
      { name: 'mdi:menu-left', title: 'menu-left' },
      { name: 'mdi:menu-right', title: 'menu-right' }
    ]
  },
  {
    name: 'tips',
    title: '提示图标',
    icons: [
      { name: 'mdi:information', title: 'info' },
      { name: 'mdi:alert', title: 'warning' },
      { name: 'mdi:alert-circle', title: 'error' },
      { name: 'mdi:check-circle', title: 'success' },
      { name: 'mdi:help-circle', title: 'help' },
      { name: 'mdi:bell', title: 'notification' },
      { name: 'mdi:bell-ring', title: 'bell-ring' },
      { name: 'mdi:bell-off', title: 'bell-off' },
      { name: 'mdi:alert-octagon', title: 'alert-octagon' },
      { name: 'mdi:alert-box', title: 'alert-box' },
      { name: 'mdi:progress-check', title: 'progress-check' },
      { name: 'mdi:progress-alert', title: 'progress-alert' }
    ]
  },
  {
    name: 'edit',
    title: '编辑图标',
    icons: [
      { name: 'mdi:pencil', title: 'edit' },
      { name: 'mdi:delete', title: 'delete' },
      { name: 'mdi:content-copy', title: 'copy' },
      { name: 'mdi:content-paste', title: 'paste' },
      { name: 'mdi:content-cut', title: 'cut' },
      { name: 'mdi:format-bold', title: 'bold' },
      { name: 'mdi:format-italic', title: 'italic' },
      { name: 'mdi:format-underline', title: 'underline' },
      { name: 'mdi:format-list-bulleted', title: 'list' },
      { name: 'mdi:format-list-numbered', title: 'numbered-list' },
      { name: 'mdi:format-align-left', title: 'align-left' },
      { name: 'mdi:format-align-center', title: 'align-center' },
      { name: 'mdi:format-align-right', title: 'align-right' },
      { name: 'mdi:format-align-justify', title: 'align-justify' },
      { name: 'mdi:undo', title: 'undo' },
      { name: 'mdi:redo', title: 'redo' }
    ]
  },
  {
    name: 'file',
    title: '文件图标',
    icons: [
      { name: 'mdi:file', title: 'file' },
      { name: 'mdi:file-plus', title: 'file-add' },
      { name: 'mdi:file-minus', title: 'file-remove' },
      { name: 'mdi:file-edit', title: 'file-edit' },
      { name: 'mdi:file-remove', title: 'file-delete' },
      { name: 'mdi:file-download', title: 'file-download' },
      { name: 'mdi:file-upload', title: 'file-upload' },
      { name: 'mdi:folder', title: 'folder' },
      { name: 'mdi:folder-plus', title: 'folder-add' },
      { name: 'mdi:folder-minus', title: 'folder-remove' },
      { name: 'mdi:folder-open', title: 'folder-open' },
      { name: 'mdi:cloud-upload', title: 'cloud-upload' },
      { name: 'mdi:cloud-download', title: 'cloud-download' },
      { name: 'mdi:zip-box', title: 'zip' },
      { name: 'mdi:pdf-box', title: 'pdf' },
      { name: 'mdi:image', title: 'image' }
    ]
  },
  {
    name: 'media',
    title: '媒体图标',
    icons: [
      { name: 'mdi:play', title: 'play' },
      { name: 'mdi:pause', title: 'pause' },
      { name: 'mdi:stop', title: 'stop' },
      { name: 'mdi:skip-previous', title: 'previous' },
      { name: 'mdi:skip-next', title: 'next' },
      { name: 'mdi:volume-high', title: 'volume' },
      { name: 'mdi:volume-medium', title: 'volume-medium' },
      { name: 'mdi:volume-low', title: 'volume-low' },
      { name: 'mdi:volume-off', title: 'mute' },
      { name: 'mdi:replay', title: 'replay' },
      { name: 'mdi:shuffle', title: 'shuffle' },
      { name: 'mdi:repeat', title: 'repeat' }
    ]
  },
  {
    name: 'device',
    title: '设备图标',
    icons: [
      { name: 'mdi:laptop', title: 'laptop' },
      { name: 'mdi:desktop-mac', title: 'desktop' },
      { name: 'mdi:tablet', title: 'tablet' },
      { name: 'mdi:cellphone', title: 'mobile' },
      { name: 'mdi:keyboard', title: 'keyboard' },
      { name: 'mdi:mouse', title: 'mouse' },
      { name: 'mdi:monitor', title: 'monitor' },
      { name: 'mdi:printer', title: 'printer' },
      { name: 'mdi:speaker', title: 'speaker' },
      { name: 'mdi:headphones', title: 'headphones' },
      { name: 'mdi:camera', title: 'camera' },
      { name: 'mdi:video', title: 'video' }
    ]
  },
  {
    name: 'social',
    title: '社交图标',
    icons: [
      { name: 'mdi:github', title: 'github' },
      { name: 'mdi:google', title: 'google' },
      { name: 'mdi:facebook', title: 'facebook' },
      { name: 'mdi:twitter', title: 'twitter' },
      { name: 'mdi:instagram', title: 'instagram' },
      { name: 'mdi:linkedin', title: 'linkedin' },
      { name: 'mdi:youtube', title: 'youtube' },
      { name: 'mdi:wechat', title: 'wechat' },
      { name: 'mdi:qqchat', title: 'qq' },
      { name: 'mdi:weibo', title: 'weibo' },
      { name: 'mdi:telegram', title: 'telegram' },
      { name: 'mdi:discord', title: 'discord' }
    ]
  }
]

// 事件处理函数
const handleIconClick = () => {
  showToast('图标被点击了！')
}

const handleIconHover = () => {
  showToast('鼠标进入图标！')
}

const handleIconLeave = () => {
  showToast('鼠标离开图标！')
}

// 搜索关键字
const searchKeyword = ref('')

// 所有图标列表
const allIcons = computed(() => {
  return iconCategories.reduce((acc, category) => {
    return acc.concat(category.icons.map(icon => ({
      ...icon,
      category: category.name
    })))
  }, [] as { name: string; title: string; category: string }[])
})

// 过滤后的图标列表
const filteredIcons = computed(() => {
  if (!searchKeyword.value) return allIcons.value
  const keyword = searchKeyword.value.toLowerCase()
  return allIcons.value.filter(icon => 
    icon.title.toLowerCase().includes(keyword) || 
    icon.name.toLowerCase().includes(keyword)
  )
})
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';

// 组件特定样式
.icon-grid {
  display: grid;
  gap: 32px;
}

.icon-category {
  margin-bottom: 0;
  background: var(--demo-bg-color);
  border-radius: var(--demo-radius-base);
  padding: 20px;
  border: 1px solid var(--demo-border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--demo-text-color);
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "";
      width: 3px;
      height: 14px;
      background: var(--demo-primary-color);
      border-radius: 1.5px;
    }
  }
}

.icon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  border-radius: 6px;
  background: var(--demo-bg-color);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;

  // 为不同类型的图标设置不同的颜色
  &[data-category="common"] .iconify {
    color: #4468eb; // 主要蓝色
  }
  
  &[data-category="arrow"] .iconify {
    color: #06b6d4; // 青色
  }
  
  &[data-category="tips"] .iconify {
    color: #10b981; // 绿色
  }
  
  &[data-category="edit"] .iconify {
    color: #8b5cf6; // 紫色
  }
  
  &[data-category="file"] .iconify {
    color: #f59e0b; // 橙色
  }
  
  &[data-category="media"] .iconify {
    color: #ef4444; // 红色
  }
  
  &[data-category="device"] .iconify {
    color: #6366f1; // 靛蓝色
  }
  
  &[data-category="social"] .iconify {
    color: #ec4899; // 粉色
  }

  &:hover {
    background: var(--demo-bg-color-light);
    border-color: var(--demo-primary-color);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    .iconify {
      transform: scale(1.1);
    }
  }

  .iconify {
    font-size: 24px;
    transition: all 0.2s ease;
  }

  span {
    font-size: 12px;
    color: var(--demo-text-color-secondary);
    text-align: center;
  }
}

// 搜索结果样式
.icon-grid:has(> .icon-item) {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  padding: 24px;
  background: var(--demo-bg-color-light);
  border-radius: var(--demo-radius-base);
}

.message-toast {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 9999;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: var(--demo-success-color);
    border-radius: 50%;
    flex-shrink: 0;
  }

  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

// 添加动画
@keyframes toast-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes toast-out {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
}

.icon-spin {
  animation: icon-spin 1s infinite linear;
}

@keyframes icon-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.icon-search {
  position: relative;
  margin-bottom: 24px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  .search-icon {
    position: absolute;
    left: 12px;
    top: 30%;
    transform: translateY(-50%);
    color: var(--demo-text-color-secondary);
    font-size: 18px;
    pointer-events: none;
    opacity: 0.7;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 16px 0 38px;
    border: 1px solid var(--demo-border-color);
    border-radius: 6px;
    font-size: 14px;
    color: var(--demo-text-color);
    background: var(--demo-bg-color);
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);

    &:hover {
      border-color: var(--demo-primary-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    &:focus {
      outline: none;
      border-color: var(--demo-primary-color);
      box-shadow: 0 0 0 3px rgba(var(--demo-primary-color-rgb), 0.1);
    }

    &::placeholder {
      color: var(--demo-text-color-secondary);
      opacity: 0.7;
    }
  }
}

.collection-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 24px;

  h2 {
    margin: 0;
    white-space: nowrap;
  }

  .icon-search {
    margin: 0;
    flex: 1;
    max-width: none;
  }
}
</style> 