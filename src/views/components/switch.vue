<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Switch 开关</h1>
      <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#disabled" :class="{ active: activeSection === 'disabled' }" @click.prevent="scrollToSection('disabled')">禁用状态</a>
        <a href="#text" :class="{ active: activeSection === 'text' }" @click.prevent="scrollToSection('text')">文字描述</a>
        <a href="#icon" :class="{ active: activeSection === 'icon' }" @click.prevent="scrollToSection('icon')">使用图标</a>
        <a href="#size" :class="{ active: activeSection === 'size' }" @click.prevent="scrollToSection('size')">不同尺寸</a>
        <a href="#color" :class="{ active: activeSection === 'color' }" @click.prevent="scrollToSection('color')">自定义颜色</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-switch">
            <qs-switch v-model="value1" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            绑定 v-model 到一个 Boolean 类型的变量。
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
          <div class="demo-switch">
            <qs-switch v-model="value2" disabled />
            <qs-switch v-model="value3" disabled />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            设置 disabled 属性，接受一个 Boolean，设置 true 即可禁用。
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

    <div class="demo-card" id="text">
      <h2>文字描述</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-switch">
            <qs-switch
              v-model="value4"
              active-text="开启"
              inactive-text="关闭"
            />
            <qs-switch
              v-model="value5"
              inline-prompt
              active-text="开"
              inactive-text="关"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            使用 active-text 和 inactive-text 属性来设置开关的文字描述。使用 inline-prompt 属性可以控制文字显示在开关内部。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.text, 3)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.text }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="icon">
      <h2>使用图标</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-switch">
            <qs-switch
              v-model="value6"
              active-icon="mdi:check"
              inactive-icon="mdi:close"
            />
            <qs-switch
              v-model="value7"
              inline-prompt
              active-icon="mdi:check"
              inactive-icon="mdi:close"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            使用 active-icon 和 inactive-icon 属性来设置开关的图标。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.icon, 4)">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.icon }}</code></pre>
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
          <div class="demo-switch">
            <qs-switch v-model="value8" size="large" />
            <qs-switch v-model="value9" />
            <qs-switch v-model="value10" size="small" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            设置 size 属性，可选值为 large / default / small。
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

    <div class="demo-card" id="color">
      <h2>自定义颜色</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-switch">
            <qs-switch
              v-model="value11"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
            <qs-switch
              v-model="value12"
              active-color="#626aef"
              inactive-color="#dcdfe6"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            使用 active-color 和 inactive-color 属性来设置开关的颜色。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.color, 6)">
                <template #icon>
                  <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied6 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.color }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
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
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>model-value / v-model</td>
              <td>绑定值</td>
              <td>string / number / boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否显示加载中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>开关的尺寸</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>width</td>
              <td>开关的宽度</td>
              <td>string / number</td>
              <td>—</td>
            </tr>
            <tr>
              <td>inline-prompt</td>
              <td>文字或图标是否显示在开关内</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>active-icon</td>
              <td>打开时所显示图标</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>inactive-icon</td>
              <td>关闭时所显示图标</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>active-text</td>
              <td>打开时的文字描述</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>inactive-text</td>
              <td>关闭时的文字描述</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>active-value</td>
              <td>打开时的值</td>
              <td>string / number / boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>inactive-value</td>
              <td>关闭时的值</td>
              <td>string / number / boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>active-color</td>
              <td>打开时的背景色</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>inactive-color</td>
              <td>关闭时的背景色</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>name</td>
              <td>原生 name 属性</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>validate-event</td>
              <td>是否触发表单验证</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>before-change</td>
              <td>切换前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换</td>
              <td>function</td>
              <td>—</td>
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
              <td>change</td>
              <td>状态发生变化时的回调函数</td>
              <td>val: 新状态的值</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScroll } from '@/hooks/useScroll'

const { activeSection, scrollToSection } = useScroll([
  'basic',
  'disabled',
  'text',
  'icon',
  'size',
  'color',
  'api'
])

// 基础用法
const value1 = ref(false)

// 禁用状态
const value2 = ref(true)
const value3 = ref(false)

// 文字描述
const value4 = ref(false)
const value5 = ref(false)

// 使用图标
const value6 = ref(false)
const value7 = ref(false)

// 不同尺寸
const value8 = ref(false)
const value9 = ref(false)
const value10 = ref(false)

// 自定义颜色
const value11 = ref(false)
const value12 = ref(false)

// 代码展示控制
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)

// 切换代码显示
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value
const toggleCode6 = () => showCode6.value = !showCode6.value

// 复制代码
const copyCode = async (event: Event, code: string, index: number) => {
  try {
    await navigator.clipboard.writeText(code)
    switch (index) {
      case 1:
        copied1.value = true
        break
      case 2:
        copied2.value = true
        break
      case 3:
        copied3.value = true
        break
      case 4:
        copied4.value = true
        break
      case 5:
        copied5.value = true
        break
      case 6:
        copied6.value = true
        break
    }
    setTimeout(() => {
      copied1.value = false
      copied2.value = false
      copied3.value = false
      copied4.value = false
      copied5.value = false
      copied6.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

// 代码片段
const codeSnippets = {
  basic: `<template>
  <qs-switch v-model="value1" />
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(false)
<\/script>`,
  disabled: `<template>
  <qs-switch v-model="value2" disabled />
  <qs-switch v-model="value3" disabled />
</template>

<script setup>
import { ref } from 'vue'

const value2 = ref(true)
const value3 = ref(false)
<\/script>`,
  text: `<template>
  <qs-switch
    v-model="value4"
    active-text="开启"
    inactive-text="关闭"
  />
  <qs-switch
    v-model="value5"
    inline-prompt
    active-text="开"
    inactive-text="关"
  />
</template>

<script setup>
import { ref } from 'vue'

const value4 = ref(false)
const value5 = ref(false)
<\/script>`,
  icon: `<template>
  <qs-switch
    v-model="value6"
    active-icon="mdi:check"
    inactive-icon="mdi:close"
  />
  <qs-switch
    v-model="value7"
    inline-prompt
    active-icon="mdi:check"
    inactive-icon="mdi:close"
  />
</template>

<script setup>
import { ref } from 'vue'

const value6 = ref(false)
const value7 = ref(false)
<\/script>`,
  size: `<template>
  <qs-switch v-model="value8" size="large" />
  <qs-switch v-model="value9" />
  <qs-switch v-model="value10" size="small" />
</template>

<script setup>
import { ref } from 'vue'

const value8 = ref(false)
const value9 = ref(false)
const value10 = ref(false)
<\/script>`,
  color: `<template>
  <qs-switch
    v-model="value11"
    active-color="#13ce66"
    inactive-color="#ff4949"
  />
  <qs-switch
    v-model="value12"
    active-color="#626aef"
    inactive-color="#dcdfe6"
  />
</template>

<script setup>
import { ref } from 'vue'

const value11 = ref(false)
const value12 = ref(false)
<\/script>`
}
</script>

<style lang="scss" scoped>
.demo-switch {
  .qs-switch {
    margin-right: 20px;
    margin-bottom: 15px;
  }
}

.demo-table {
  margin-top: 24px;

  h3 {
    margin: 32px 0 16px;
    font-weight: 600;
    font-size: 18px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 14px;

    th, td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid var(--demo-border-color);
    }

    th {
      font-weight: 600;
      color: var(--demo-text-color);
      background-color: var(--demo-bg-color-light);
    }

    td {
      color: var(--demo-text-color-secondary);
    }
  }
}
</style> 