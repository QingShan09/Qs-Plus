<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Radio 单选框</h1>
      <p>在一组备选项中进行单选。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#disabled" :class="{ active: activeSection === 'disabled' }" @click.prevent="scrollToSection('disabled')">禁用状态</a>
        <a href="#border" :class="{ active: activeSection === 'border' }" @click.prevent="scrollToSection('border')">带边框</a>
        <a href="#size" :class="{ active: activeSection === 'size' }" @click.prevent="scrollToSection('size')">不同尺寸</a>
        <a href="#group" :class="{ active: activeSection === 'group' }" @click.prevent="scrollToSection('group')">单选框组</a>
        <a href="#button" :class="{ active: activeSection === 'button' }" @click.prevent="scrollToSection('button')">按钮样式</a>
        <a href="#vertical" :class="{ active: activeSection === 'vertical' }" @click.prevent="scrollToSection('vertical')">垂直布局</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-radio">
            <qs-radio v-model="radio1" label="1">选项1</qs-radio>
            <qs-radio v-model="radio1" label="2">选项2</qs-radio>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
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
          <div class="demo-radio">
            <qs-radio v-model="radio2" label="1" disabled>禁用选项1</qs-radio>
            <qs-radio v-model="radio2" label="2" disabled>禁用选项2</qs-radio>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            使用 disabled 属性禁用单选框。
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

    <div class="demo-card" id="border">
      <h2>带边框</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-radio">
            <qs-radio v-model="radio3" label="1" border>选项1</qs-radio>
            <qs-radio v-model="radio3" label="2" border>选项2</qs-radio>
            <qs-radio v-model="radio3" label="3" border disabled>禁用选项3</qs-radio>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            使用 border 属性为单选框添加边框。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.border, 3)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.border }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="size">
      <h2>不同尺寸</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-radio">
            <div style="margin-bottom: 16px;">
              <qs-radio v-model="radio4" label="1" border size="large">大型选项1</qs-radio>
              <qs-radio v-model="radio4" label="2" border size="large">大型选项2</qs-radio>
            </div>
            <div style="margin-bottom: 16px;">
              <qs-radio v-model="radio5" label="1" border>默认选项1</qs-radio>
              <qs-radio v-model="radio5" label="2" border>默认选项2</qs-radio>
            </div>
            <div>
              <qs-radio v-model="radio6" label="1" border size="small">小型选项1</qs-radio>
              <qs-radio v-model="radio6" label="2" border size="small">小型选项2</qs-radio>
            </div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            使用 size 属性改变单选框的尺寸，可选值为 large、default、small。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.size, 4)">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.size }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="group">
      <h2>单选框组</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-radio">
            <qs-radio-group v-model="radio7">
              <qs-radio label="1">选项1</qs-radio>
              <qs-radio label="2">选项2</qs-radio>
              <qs-radio label="3">选项3</qs-radio>
            </qs-radio-group>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            使用 Radio Group 组件可以实现一组互斥的单选框。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.group, 5)">
                <template #icon>
                  <Icon :icon="copied5 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied5 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.group }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode5">
            <span>{{ showCode5 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="button">
      <h2>按钮样式</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-radio">
            <div style="margin-bottom: 16px;">
              <qs-radio-group v-model="radio8">
                <qs-radio label="1" button>选项1</qs-radio>
                <qs-radio label="2" button>选项2</qs-radio>
                <qs-radio label="3" button>选项3</qs-radio>
              </qs-radio-group>
            </div>
            <div style="margin-bottom: 16px;">
              <qs-radio-group v-model="radio9" button-style="solid">
                <qs-radio label="1" button>选项1</qs-radio>
                <qs-radio label="2" button>选项2</qs-radio>
                <qs-radio label="3" button>选项3</qs-radio>
              </qs-radio-group>
            </div>
            <div>
              <qs-radio-group v-model="radio10" size="small" button-style="solid" text-color="#fff" fill="#626aef">
                <qs-radio label="1" button>选项1</qs-radio>
                <qs-radio label="2" button>选项2</qs-radio>
                <qs-radio label="3" button>选项3</qs-radio>
              </qs-radio-group>
            </div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            使用 button 属性可以将单选框渲染为按钮样式，通过 button-style 属性可以设置按钮的风格。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.button, 6)">
                <template #icon>
                  <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied6 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.button }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="vertical">
      <h2>垂直布局</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-radio">
            <qs-radio-group v-model="radio11" vertical>
              <qs-radio label="1">选项1</qs-radio>
              <qs-radio label="2">选项2</qs-radio>
              <qs-radio label="3">选项3</qs-radio>
            </qs-radio-group>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode7 }">
          <div class="description">
            使用 vertical 属性可以将单选框组垂直排列。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.vertical, 7)">
                <template #icon>
                  <Icon :icon="copied7 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied7 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.vertical }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode7">
            <span>{{ showCode7 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode7 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="api">
      <h2>API</h2>
      <div class="api-table">
        <h3>Radio 属性</h3>
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
              <td>v-model</td>
              <td>绑定值</td>
              <td>string / number / boolean</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>label</td>
              <td>单选框的值</td>
              <td>string / number / boolean</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否显示边框</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>单选框的尺寸</td>
              <td>string</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>name</td>
              <td>原生 name 属性</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>button</td>
              <td>是否使用按钮样式</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>button-style</td>
              <td>按钮风格样式</td>
              <td>string</td>
              <td>outline / solid</td>
              <td>outline</td>
            </tr>
          </tbody>
        </table>

        <h3>Radio Group 属性</h3>
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
              <td>v-model</td>
              <td>绑定值</td>
              <td>string / number / boolean</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>size</td>
              <td>单选框组的尺寸</td>
              <td>string</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用所有子单选框</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>name</td>
              <td>原生 name 属性</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>text-color</td>
              <td>按钮形式的 Radio 激活时的文本颜色</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>fill</td>
              <td>按钮形式的 Radio 激活时的填充色和边框色</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>vertical</td>
              <td>是否垂直排列</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>button-style</td>
              <td>按钮风格样式</td>
              <td>string</td>
              <td>outline / solid</td>
              <td>outline</td>
            </tr>
          </tbody>
        </table>

        <h3>Radio 事件</h3>
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
              <td>change</td>
              <td>绑定值变化时触发的事件</td>
              <td>(value: string | number | boolean)</td>
            </tr>
          </tbody>
        </table>

        <h3>Radio Group 事件</h3>
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
              <td>change</td>
              <td>绑定值变化时触发的事件</td>
              <td>(value: string | number | boolean)</td>
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

// 示例数据
const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
const radio5 = ref('1')
const radio6 = ref('1')
const radio7 = ref('1')
const radio8 = ref('1')
const radio9 = ref('1')
const radio10 = ref('1')
const radio11 = ref('1')

// 控制代码显示状态
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const showCode7 = ref(false)

// 控制复制按钮状态
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)
const copied7 = ref(false)

// 导航菜单激活状态
const activeSection = ref('basic')

const sections = ['basic', 'disabled', 'border', 'size', 'group', 'button', 'vertical', 'api']
const sectionOffsets = ref<{ [key: string]: number }>({})

const scrollToSection = (section: string) => {
  const element = document.getElementById(section)
  if (element) {
    const offset = element.offsetTop - 80
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 100

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

// 控制代码显示/隐藏
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value
const toggleCode6 = () => showCode6.value = !showCode6.value
const toggleCode7 = () => showCode7.value = !showCode7.value

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
      }
    }
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 代码示例
const codeSnippets = {
  basic: `<template>
  <qs-radio v-model="radio" label="1">选项1</qs-radio>
  <qs-radio v-model="radio" label="2">选项2</qs-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('1')
<\/script>`,
  disabled: `<template>
  <qs-radio v-model="radio" label="1" disabled>禁用选项1</qs-radio>
  <qs-radio v-model="radio" label="2" disabled>禁用选项2</qs-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('1')
<\/script>`,
  border: `<template>
  <qs-radio v-model="radio" label="1" border>选项1</qs-radio>
  <qs-radio v-model="radio" label="2" border>选项2</qs-radio>
  <qs-radio v-model="radio" label="3" border disabled>禁用选项3</qs-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('1')
<\/script>`,
  size: `<template>
  <div>
    <qs-radio v-model="radio1" label="1" border size="large">大型选项1</qs-radio>
    <qs-radio v-model="radio1" label="2" border size="large">大型选项2</qs-radio>
  </div>
  <div>
    <qs-radio v-model="radio2" label="1" border>默认选项1</qs-radio>
    <qs-radio v-model="radio2" label="2" border>默认选项2</qs-radio>
  </div>
  <div>
    <qs-radio v-model="radio3" label="1" border size="small">小型选项1</qs-radio>
    <qs-radio v-model="radio3" label="2" border size="small">小型选项2</qs-radio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
<\/script>`,
  group: `<template>
  <qs-radio-group v-model="radio">
    <qs-radio label="1">选项1</qs-radio>
    <qs-radio label="2">选项2</qs-radio>
    <qs-radio label="3">选项3</qs-radio>
  </qs-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('1')
<\/script>`,
  button: `<template>
  <div>
    <qs-radio-group v-model="radio1">
      <qs-radio label="1" button>选项1</qs-radio>
      <qs-radio label="2" button>选项2</qs-radio>
      <qs-radio label="3" button>选项3</qs-radio>
    </qs-radio-group>
  </div>
  <div>
    <qs-radio-group v-model="radio2" button-style="solid">
      <qs-radio label="1" button>选项1</qs-radio>
      <qs-radio label="2" button>选项2</qs-radio>
      <qs-radio label="3" button>选项3</qs-radio>
    </qs-radio-group>
  </div>
  <div>
    <qs-radio-group v-model="radio3" size="small" button-style="solid" text-color="#fff" fill="#626aef">
      <qs-radio label="1" button>选项1</qs-radio>
      <qs-radio label="2" button>选项2</qs-radio>
      <qs-radio label="3" button>选项3</qs-radio>
    </qs-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
<\/script>`,
  vertical: `<template>
  <qs-radio-group v-model="radio" vertical>
    <qs-radio label="1">选项1</qs-radio>
    <qs-radio label="2">选项2</qs-radio>
    <qs-radio label="3">选项3</qs-radio>
  </qs-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('1')
<\/script>`
}

// 监听滚动事件
onMounted(() => {
  updateSectionOffsets()
  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('resize', updateSectionOffsets)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', updateSectionOffsets)
})
</script>

<style lang="scss" scoped>
.demo-radio {
  .qs-radio {
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
</style> 