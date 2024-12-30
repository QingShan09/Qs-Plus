<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Input 输入框</h1>
      <p>通过鼠标或键盘输入字符。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#disabled" :class="{ active: activeSection === 'disabled' }" @click.prevent="scrollToSection('disabled')">禁用状态</a>
        <a href="#clearable" :class="{ active: activeSection === 'clearable' }" @click.prevent="scrollToSection('clearable')">可清空</a>
        <a href="#password" :class="{ active: activeSection === 'password' }" @click.prevent="scrollToSection('password')">密码输入框</a>
        <a href="#textarea" :class="{ active: activeSection === 'textarea' }" @click.prevent="scrollToSection('textarea')">文本域</a>
        <a href="#limit" :class="{ active: activeSection === 'limit' }" @click.prevent="scrollToSection('limit')">输入长度限制</a>
        <a href="#formatter" :class="{ active: activeSection === 'formatter' }" @click.prevent="scrollToSection('formatter')">格式化输入</a>
        <a href="#search" :class="{ active: activeSection === 'search' }" @click.prevent="scrollToSection('search')">搜索框</a>
        <a href="#slots" :class="{ active: activeSection === 'slots' }" @click.prevent="scrollToSection('slots')">插槽</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input v-model="input1" placeholder="请输入内容" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            使用 v-model 实现数据的双向绑定。
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
          <div class="demo-inputs">
            <qs-input v-model="input2" disabled placeholder="禁用状态的输入框" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            通过 disabled 属性指定是否禁用输入框。
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

    <div class="demo-card" id="clearable">
      <h2>可清空</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input v-model="input3" clearable placeholder="请输入内容" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            使用 clearable 属性即可得到一个可清空的输入框。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.clearable, 3)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.clearable }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="password">
      <h2>密码输入框</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input v-model="password" type="password" show-password placeholder="请输入密码" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            使用 show-password 属性即可得到一个可切换显示隐藏的密码框。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.password, 6)">
                <template #icon>
                  <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied6 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.password }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="textarea">
      <h2>文本域</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input
              v-model="textarea1"
              type="textarea"
              :rows="3"
              placeholder="固定高度的文本域"
            />
            <qs-input
              v-model="textarea2"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 6 }"
              placeholder="自适应高度的文本域"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode7 }">
          <div class="description">
            使用 type="textarea" 属性来将 input 元素转换为原生的 textarea。通过设置 rows 属性指定显示行数，使用 autosize 属性可以使得文本域的高度能够根据内容自动进行调整。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.textarea, 7)">
                <template #icon>
                  <Icon :icon="copied7 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied7 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.textarea }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode7">
            <span>{{ showCode7 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode7 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="limit">
      <h2>输入长度限制</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input
              v-model="text1"
              maxlength="10"
              show-word-limit
              placeholder="最多输入10个字符"
            />
            <qs-input
              v-model="textarea3"
              type="textarea"
              maxlength="100"
              show-word-limit
              placeholder="最多输入100个字符的文本域"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode8 }">
          <div class="description">
            使用 maxlength 和 show-word-limit 属性来限制输入长度并显示字数统计。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.limit, 8)">
                <template #icon>
                  <Icon :icon="copied8 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied8 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.limit }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode8">
            <span>{{ showCode8 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode8 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="formatter">
      <h2>格式化输入</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input
              v-model="number"
              :formatter="(value: string) => value.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
              :parser="(value: string) => value.replace(/,/g, '')"
              placeholder="输入数字自动添加千分位"
            />
            <qs-input
              v-model="phone"
              :formatter="(value: string) => value.replace(/(\\d{3})(\\d{4})(\\d{4})/, '$1-$2-$3')"
              :parser="(value: string) => value.replace(/-/g, '')"
              maxlength="11"
              placeholder="输入手机号自动添加分隔符"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode9 }">
          <div class="description">
            使用 formatter 和 parser 属性对输入的内容进行格式化。formatter 用于格式化展示的内容，parser 用于解析输入的内容。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.formatter, 9)">
                <template #icon>
                  <Icon :icon="copied9 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied9 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.formatter }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode9">
            <span>{{ showCode9 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode9 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="search">
      <h2>搜索框</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input
              v-model="searchText"
              type="search"
              placeholder="输入关键词后按回车或点击搜索图标"
              @search="handleSearch"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode10 }">
          <div class="description">
            使用 type="search" 属性来创建一个搜索框，可以通过 search 事件来处理搜索操作。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.search, 10)">
                <template #icon>
                  <Icon :icon="copied10 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied10 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.search }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode10">
            <span>{{ showCode10 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode10 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="slots">
      <h2>插槽</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-inputs">
            <qs-input v-model="slotInput1" placeholder="使用插槽自定义前置内容">
              <template #prefix>
                <div class="slot-prefix">￥</div>
              </template>
            </qs-input>
            <qs-input v-model="slotInput2" placeholder="使用插槽自定义后置内容">
              <template #suffix>
                <div class="slot-suffix">.com</div>
              </template>
            </qs-input>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode11 }">
          <div class="description">
            通过 prefix 和 suffix 插槽可以自定义输入框前后的内容。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.slots, 11)">
                <template #icon>
                  <Icon :icon="copied11 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied11 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.slots }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode11">
            <span>{{ showCode11 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode11 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="api-table" id="api">
      <h2>API</h2>
      <div class="api-table">
        <h3>Input 属性</h3>
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
              <td>string / number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>type</td>
              <td>类型</td>
              <td>string</td>
              <td>text / password / number / textarea / search</td>
              <td>text</td>
            </tr>
            <tr>
              <td>size</td>
              <td>输入框尺寸</td>
              <td>string</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>输入框占位文本</td>
              <td>string</td>
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
              <td>readonly</td>
              <td>是否只读</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>是否可清空</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>show-password</td>
              <td>是否显示切换密码图标</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>show-word-limit</td>
              <td>是否显示字数统计</td>
              <td>boolean</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>最大输入长度</td>
              <td>number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>minlength</td>
              <td>最小输入长度</td>
              <td>number</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>formatter</td>
              <td>输入值的格式化函数</td>
              <td>function</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>parser</td>
              <td>输入值的解析函数</td>
              <td>function</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>rows</td>
              <td>文本域行数</td>
              <td>number</td>
              <td>—</td>
              <td>2</td>
            </tr>
            <tr>
              <td>autosize</td>
              <td>文本域自适应高度</td>
              <td>boolean / object</td>
              <td>—</td>
              <td>false</td>
            </tr>
            <tr>
              <td>resize</td>
              <td>文本域缩放方向</td>
              <td>string</td>
              <td>none / both / horizontal / vertical</td>
              <td>vertical</td>
            </tr>
            <tr>
              <td>prefix-icon</td>
              <td>输入框头部图标</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>suffix-icon</td>
              <td>输入框尾部图标</td>
              <td>string</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <h3>Input 事件</h3>
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
              <td>input</td>
              <td>在输入框值改变时触发</td>
              <td>(value: string | number)</td>
            </tr>
            <tr>
              <td>change</td>
              <td>在输入框值改变时触发</td>
              <td>(value: string | number)</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>在输入框获得焦点时触发</td>
              <td>(event: FocusEvent)</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>在输入框失去焦点时触发</td>
              <td>(event: FocusEvent)</td>
            </tr>
            <tr>
              <td>clear</td>
              <td>在点击由 clearable 属性生成的清空按钮时触发</td>
              <td>—</td>
            </tr>
            <tr>
              <td>search</td>
              <td>在搜索框按下回车或点击搜索图标时触发</td>
              <td>(value: string)</td>
            </tr>
            <tr>
              <td>compositionstart</td>
              <td>在输入法编辑器开始新的输入时触发</td>
              <td>(event: CompositionEvent)</td>
            </tr>
            <tr>
              <td>compositionupdate</td>
              <td>在输入法编辑器更新时触发</td>
              <td>(event: CompositionEvent)</td>
            </tr>
            <tr>
              <td>compositionend</td>
              <td>在输入法编辑器结束输入时触发</td>
              <td>(event: CompositionEvent)</td>
            </tr>
            <tr>
              <td>mouseenter</td>
              <td>在鼠标移入输入框时触发</td>
              <td>(event: MouseEvent)</td>
            </tr>
            <tr>
              <td>mouseleave</td>
              <td>在鼠标移出输入框时触发</td>
              <td>(event: MouseEvent)</td>
            </tr>
          </tbody>
        </table>

        <h3>Input 插槽</h3>
        <table>
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>prefix</td>
              <td>输入框头部内容</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>输入框尾部内容</td>
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
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const input7 = ref('')
const input8 = ref('')
const password = ref('')
const textarea1 = ref('')
const textarea2 = ref('')
const text1 = ref('')
const textarea3 = ref('')
const number = ref('')
const phone = ref('')
const searchText = ref('')
const slotInput1 = ref('')
const slotInput2 = ref('')

// 控制代码显示状态
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const showCode7 = ref(false)
const showCode8 = ref(false)
const showCode9 = ref(false)
const showCode10 = ref(false)
const showCode11 = ref(false)

// 控制复制按钮状态
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)
const copied7 = ref(false)
const copied8 = ref(false)
const copied9 = ref(false)
const copied10 = ref(false)
const copied11 = ref(false)

// 导航菜单激活状态
const activeSection = ref('basic')

const sections = ['basic', 'disabled', 'clearable', 'password', 'textarea', 'limit', 'formatter', 'search', 'slots', 'api']
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

// 控制代码显示/隐藏
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value
const toggleCode6 = () => showCode6.value = !showCode6.value
const toggleCode7 = () => showCode7.value = !showCode7.value
const toggleCode8 = () => showCode8.value = !showCode8.value
const toggleCode9 = () => showCode9.value = !showCode9.value
const toggleCode10 = () => showCode10.value = !showCode10.value
const toggleCode11 = () => showCode11.value = !showCode11.value

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
        case 9:
          copied9.value = true
          setTimeout(() => copied9.value = false, 2000)
          break
        case 10:
          copied10.value = true
          setTimeout(() => copied10.value = false, 2000)
          break
        case 11:
          copied11.value = true
          setTimeout(() => copied11.value = false, 2000)
          break
      }
    }
  } catch (err) {
    console.error('复制失败:', err)
  }
}

// 搜索处理函数
const handleSearch = (value: string) => {
  console.log('搜索:', value)
}

// 代码示例
const codeSnippets = {
  basic: `<template>
  <qs-input v-model="input" placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
<\/script>`,
  disabled: `<template>
  <qs-input v-model="input" disabled placeholder="禁用状态的输入框" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
<\/script>`,
  clearable: `<template>
  <qs-input v-model="input" clearable placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
<\/script>`,
  password: `<template>
  <qs-input
    v-model="password"
    type="password"
    show-password
    placeholder="请输入密码"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
<\/script>`,
  textarea: `<template>
  <qs-input
    v-model="textarea1"
    type="textarea"
    :rows="3"
    placeholder="固定高度的文本域"
  />
  <qs-input
    v-model="textarea2"
    type="textarea"
    :autosize="{ minRows: 2, maxRows: 6 }"
    placeholder="自适应高度的文本域"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const textarea1 = ref('')
const textarea2 = ref('')
<\/script>`,
  limit: `<template>
  <qs-input
    v-model="text1"
    maxlength="10"
    show-word-limit
    placeholder="最多输入10个字符"
  />
  <qs-input
    v-model="textarea3"
    type="textarea"
    maxlength="100"
    show-word-limit
    placeholder="最多输入100个字符的文本域"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text1 = ref('')
const textarea3 = ref('')
<\/script>`,
  formatter: `<template>
  <qs-input
    v-model="number"
    :formatter="(value: string) => value.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
    :parser="(value: string) => value.replace(/,/g, '')"
    placeholder="输入数字自动添加千分位"
  />
  <qs-input
    v-model="phone"
    :formatter="(value: string) => value.replace(/(\\d{3})(\\d{4})(\\d{4})/, '$1-$2-$3')"
    :parser="(value: string) => value.replace(/-/g, '')"
    maxlength="11"
    placeholder="输入手机号自动添加分隔符"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const number = ref('')
const phone = ref('')
<\/script>`,
  search: `<template>
  <qs-input
    v-model="searchText"
    type="search"
    placeholder="输入关键词后按回车或点击搜索图标"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchText = ref('')
const handleSearch = (value: string) => {
  console.log('搜索:', value)
}
<\/script>`,
  slots: `<template>
  <qs-input v-model="slotInput1" placeholder="使用插槽自定义前置内容">
    <template #prefix>
      <div class="slot-prefix">￥</div>
    </template>
  </qs-input>
  <qs-input v-model="slotInput2" placeholder="使用插槽自定义后置内容">
    <template #suffix>
      <div class="slot-suffix">.com</div>
    </template>
  </qs-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slotInput1 = ref('')
const slotInput2 = ref('')
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
.demo-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
}

.demo-table {
  margin-top: 40px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 32px 0 16px;
    color: var(--demo-text-color);

    &:first-child {
      margin-top: 0;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--demo-text-color);
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid var(--demo-border-color);
      
      &:first-child {
        font-weight: 500;
      }
    }
    
    th {
      font-weight: 600;
      background-color: var(--demo-bg-color-light);
      color: var(--demo-text-color);
    }
    
    td {
      color: var(--demo-text-color-secondary);
    }
  }
}
</style> 