<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Button 按钮</h1>
      <p>按钮用于开始一个即时操作，触发业务逻辑时使用。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#disabled" :class="{ active: activeSection === 'disabled' }" @click.prevent="scrollToSection('disabled')">禁用状态</a>
        <a href="#icon" :class="{ active: activeSection === 'icon' }" @click.prevent="scrollToSection('icon')">图标按钮</a>
        <a href="#loading" :class="{ active: activeSection === 'loading' }" @click.prevent="scrollToSection('loading')">加载状态</a>
        <a href="#size" :class="{ active: activeSection === 'size' }" @click.prevent="scrollToSection('size')">不同尺寸</a>
        <a href="#group" :class="{ active: activeSection === 'group' }" @click.prevent="scrollToSection('group')">按钮组</a>
        <a href="#block" :class="{ active: activeSection === 'block' }" @click.prevent="scrollToSection('block')">块级按钮</a>
        <a href="#color" :class="{ active: activeSection === 'color' }" @click.prevent="scrollToSection('color')">自定义颜色</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button>默认按钮</qs-button>
            <qs-button type="primary">主要按钮</qs-button>
            <qs-button type="success">成功按钮</qs-button>
            <qs-button type="warning">警告按钮</qs-button>
            <qs-button type="danger">危险按钮</qs-button>
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-button type="text">文本按钮</qs-button>
            <qs-button type="link">链接按钮</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            使用 type 属性来定义按钮的样式。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.basic, 1)">
                <template #icon>
                  <Icon :icon="copied1 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied1 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.basic }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode1">
            <span>{{ showCode1 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode1 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="disabled">
      <h2>禁用状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button disabled>默认按钮</qs-button>
            <qs-button type="primary" disabled>主要按钮</qs-button>
            <qs-button type="success" disabled>成功按钮</qs-button>
            <qs-button type="warning" disabled>警告按钮</qs-button>
            <qs-button type="danger" disabled>危险按钮</qs-button>
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-button type="text" disabled>文本按钮</qs-button>
            <qs-button type="link" disabled>链接按钮</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            使用 disabled 属性来控制按钮是否为禁用状态。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.disabled, 2)">
                <template #icon>
                  <Icon :icon="copied2 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied2 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.disabled }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode2">
            <span>{{ showCode2 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode2 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="icon">
      <h2>图标按钮</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button icon="mdi:plus">添加</qs-button>
            <qs-button icon="mdi:delete" type="danger">删除</qs-button>
            <qs-button icon="mdi:refresh" type="primary">刷新</qs-button>
            <qs-button icon="mdi:search" shape="circle"></qs-button>
            <qs-button icon="mdi:heart" type="danger" shape="circle"></qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            使用 icon 属性为按钮添加图标，shape 属性可以设置按钮形状。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.icon, 3)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.icon }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="loading">
      <h2>加载状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button loading>加载中</qs-button>
            <qs-button type="primary" loading>加载中</qs-button>
            <qs-button type="success" loading></qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            通过 loading 属性设置按钮的加载状态。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.loading, 4)">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.loading }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="size">
      <h2>不同尺寸</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button size="large" type="primary">大型按钮</qs-button>
            <qs-button type="primary">默认按钮</qs-button>
            <qs-button size="small" type="primary">小型按钮</qs-button>
          </div>
          <div class="demo-buttons is-horizontal" style="margin-top: 16px;">
            <qs-button size="large" type="primary" shape="round">大型按钮</qs-button>
            <qs-button type="primary" shape="round">默认按钮</qs-button>
            <qs-button size="small" type="primary" shape="round">小型按钮</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            使用 size 属性设置按钮大小，可选值为 large、default、small。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.size, 5)">
                <template #icon>
                  <Icon :icon="copied5 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied5 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.size }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode5">
            <span>{{ showCode5 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="group">
      <h2>按钮组</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-vertical" style="margin-bottom: 16px;">
            <qs-button-group>
              <qs-button type="primary" icon="mdi:chevron-left">上一页</qs-button>
              <qs-button type="primary" icon="mdi:chevron-right" icon-position="right">下一页</qs-button>
            </qs-button-group>
          </div>
          <div class="demo-buttons is-vertical">
            <qs-button-group>
              <qs-button type="primary" icon="mdi:format-align-left"></qs-button>
              <qs-button type="primary" icon="mdi:format-align-center"></qs-button>
              <qs-button type="primary" icon="mdi:format-align-right"></qs-button>
              <qs-button type="primary" icon="mdi:format-align-justify"></qs-button>
            </qs-button-group>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            使用 qs-button-group 组件来创建按钮组，可用于分组显示一系列相关操作。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.group, 6)">
                <template #icon>
                  <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied6 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.group }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="block">
      <h2>块级按钮</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-vertical">
            <qs-button type="primary" block>块级按钮</qs-button>
            <qs-button type="success" block>块级按钮</qs-button>
            <qs-button block>块级按钮</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode7 }">
          <div class="description">
            使用 block 属性将按钮设置为块级元素，宽度将充满父容器。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.block, 7)">
                <template #icon>
                  <Icon :icon="copied7 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied7 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.block }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode7">
            <span>{{ showCode7 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode7 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="color">
      <h2>自定义颜色</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button color="#626aef">#626aef</qs-button>
            <qs-button color="#626aef" plain>朴素按钮</qs-button>
            <qs-button color="rgba(98, 106, 239, 0.9)">透明度</qs-button>
            <qs-button color="#626aef" gradient>渐变按钮</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode8 }">
          <div class="description">
            使用 color 属性来自定义按钮颜色，支持 hex/rgb/hsl 等格式，配合 plain/gradient 属性可以实现更多效果。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.color, 8)">
                <template #icon>
                  <Icon :icon="copied8 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied8 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.color }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode8">
            <span>{{ showCode8 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode8 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="api-table" id="api">
      <h2>API</h2>
      <div class="api-table">
        <h3>Button 属性</h3>
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
              <td>type</td>
              <td>按钮类型</td>
              <td>string</td>
              <td>primary / success / warning / danger / text / link</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮尺寸</td>
              <td>string</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>按钮形状</td>
              <td>string</td>
              <td>circle / round</td>
              <td>-</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否加载中状态</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用状态</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>图标名称</td>
              <td>string</td>
              <td>参考 Material Design Icons</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon-position</td>
              <td>图标位置</td>
              <td>string</td>
              <td>left / right</td>
              <td>left</td>
            </tr>
            <tr>
              <td>block</td>
              <td>是否为块级元素</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否为朴素按钮</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>color</td>
              <td>自定义按钮颜色</td>
              <td>string</td>
              <td>hex/rgb/hsl 格式</td>
              <td>-</td>
            </tr>
            <tr>
              <td>gradient</td>
              <td>是否为渐变按钮</td>
              <td>boolean</td>
              <td>-</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>

        <h3>Button Group 属性</h3>
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
              <td>size</td>
              <td>按钮组尺寸</td>
              <td>string</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>type</td>
              <td>按钮组类型</td>
              <td>string</td>
              <td>primary / success / warning / danger</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3>Button 事件</h3>
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
              <td>点击按钮时触发</td>
              <td>(event: MouseEvent)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { copyText } from '@/utils/clipboard'

// 控制代码显示状态
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const showCode7 = ref(false)
const showCode8 = ref(false)

// 控制复制按钮状态
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)
const copied7 = ref(false)
const copied8 = ref(false)

// 导航菜单激活状态
const activeSection = ref('basic')

const sections = ['basic', 'disabled', 'icon', 'loading', 'size', 'group', 'block', 'color', 'api']
const sectionOffsets = ref<{ [key: string]: number }>({})

const scrollToSection = (section: string) => {
  const element = document.getElementById(section)
  if (element) {
    const offset = element.offsetTop - 80 // 减去一些顶部空间
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100 // 添加一些偏移量以提前激活

  // 找到当前滚动位置对应的最近section
  let currentSection = sections[0]
  for (const section of sections) {
    if (scrollPosition >= sectionOffsets.value[section]) {
      currentSection = section
    }
  }
  
  activeSection.value = currentSection
}

const updateSectionOffsets = () => {
  sections.forEach(section => {
    const element = document.getElementById(section)
    if (element) {
      sectionOffsets.value[section] = element.offsetTop
    }
  })
}

onMounted(() => {
  updateSectionOffsets()
  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('resize', updateSectionOffsets)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', updateSectionOffsets)
})

// 切换代码显示
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value
const toggleCode6 = () => showCode6.value = !showCode6.value
const toggleCode7 = () => showCode7.value = !showCode7.value
const toggleCode8 = () => showCode8.value = !showCode8.value

// 复制代码
const copyCode = async (event: Event, code: string, index: number) => {
  try {
    const success = await copyText(code)
    if (success) {
      switch (index) {
        case 1:
          copied1.value = true
          setTimeout(() => copied1.value = false, 2000)
          break
        case 2:
          copied2.value = true
          setTimeout(() => copied2.value = false, 2000)
          break
        case 3:
          copied3.value = true
          setTimeout(() => copied3.value = false, 2000)
          break
        case 4:
          copied4.value = true
          setTimeout(() => copied4.value = false, 2000)
          break
        case 5:
          copied5.value = true
          setTimeout(() => copied5.value = false, 2000)
          break
        case 6:
          copied6.value = true
          setTimeout(() => copied6.value = false, 2000)
          break
        case 7:
          copied7.value = true
          setTimeout(() => copied7.value = false, 2000)
          break
        case 8:
          copied8.value = true
          setTimeout(() => copied8.value = false, 2000)
          break
      }
    }
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 代码示例
const codeSnippets = {
  basic: `<template>
  <qs-button>默认按钮</qs-button>
  <qs-button type="primary">主要按钮</qs-button>
  <qs-button type="success">成功按钮</qs-button>
  <qs-button type="warning">警告按钮</qs-button>
  <qs-button type="danger">危险按钮</qs-button>
  
  <qs-button type="text">文本按钮</qs-button>
  <qs-button type="link">链接按钮</qs-button>
</template>`,
  disabled: `<template>
  <qs-button disabled>默认按钮</qs-button>
  <qs-button type="primary" disabled>主要按钮</qs-button>
  <qs-button type="success" disabled>成功按钮</qs-button>
  <qs-button type="warning" disabled>警告按钮</qs-button>
  <qs-button type="danger" disabled>危险按钮</qs-button>
  
  <qs-button type="text" disabled>文本按钮</qs-button>
  <qs-button type="link" disabled>链接按钮</qs-button>
</template>`,
  icon: `<template>
  <qs-button icon="mdi:plus">添加</qs-button>
  <qs-button icon="mdi:delete" type="danger">删除</qs-button>
  <qs-button icon="mdi:refresh" type="primary">刷新</qs-button>
  <qs-button icon="mdi:search" shape="circle"></qs-button>
  <qs-button icon="mdi:heart" type="danger" shape="circle"></qs-button>
</template>`,
  loading: `<template>
  <qs-button loading>加载中</qs-button>
  <qs-button type="primary" loading>加载中</qs-button>
  <qs-button type="success" loading></qs-button>
</template>`,
  size: `<template>
  <qs-button size="large" type="primary">大型按钮</qs-button>
  <qs-button type="primary">默认按钮</qs-button>
  <qs-button size="small" type="primary">小型按钮</qs-button>

  <qs-button size="large" type="primary" shape="round">大型按钮</qs-button>
  <qs-button type="primary" shape="round">默认按钮</qs-button>
  <qs-button size="small" type="primary" shape="round">小型按钮</qs-button>
</template>`,
  group: `<template>
  <qs-button-group>
    <qs-button type="primary" icon="mdi:chevron-left">上一页</qs-button>
    <qs-button type="primary" icon="mdi:chevron-right" icon-position="right">下一页</qs-button>
  </qs-button-group>

  <qs-button-group>
    <qs-button type="primary" icon="mdi:format-align-left"></qs-button>
    <qs-button type="primary" icon="mdi:format-align-center"></qs-button>
    <qs-button type="primary" icon="mdi:format-align-right"></qs-button>
    <qs-button type="primary" icon="mdi:format-align-justify"></qs-button>
  </qs-button-group>
</template>`,
  block: `<template>
  <qs-button type="primary" block>块级按钮</qs-button>
  <qs-button type="success" block>块级按钮</qs-button>
  <qs-button block>块级按钮</qs-button>
</template>`,
  color: `<template>
  <qs-button color="#626aef">#626aef</qs-button>
  <qs-button color="#626aef" plain>朴素按钮</qs-button>
  <qs-button color="rgba(98, 106, 239, 0.9)">透明度</qs-button>
  <qs-button color="#626aef" gradient>渐变按钮</qs-button>
</template>`
}
</script>

<style lang="scss" scoped>
.demo-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color-light);

  .demo-nav {
    margin-top: 16px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    a {
      color: var(--text-color-secondary);
      text-decoration: none;
      transition: color 0.2s;
      font-size: 14px;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
}

.api-table {
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin: 24px 0 16px;
    color: var(--text-color);

    &:first-child {
      margin-top: 0;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
    font-size: 14px;
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid var(--border-color-light);
      color: var(--text-color);
    }

    th {
      font-weight: 500;
      background-color: var(--bg-color-light);
      white-space: nowrap;
    }

    td {
      color: var(--text-color-secondary);
    }

    tr:hover td {
      background-color: var(--bg-color-light);
    }
  }
}

@media (max-width: 768px) {
  .api-table {
    overflow-x: auto;
    
    table {
      min-width: 600px;
    }
  }
}

.component-demo {
  scroll-padding-top: 100px; // 为固定导航栏预留空间
  scroll-behavior: smooth;
}

@media (max-width: 768px) {
  .component-demo {
    padding-top: 80px; // 为固定导航栏预留空间
  }
}
</style>