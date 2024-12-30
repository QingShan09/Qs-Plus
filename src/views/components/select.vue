<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Select 选择器</h1>
      <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#disabled" :class="{ active: activeSection === 'disabled' }" @click.prevent="scrollToSection('disabled')">禁用状态</a>
        <a href="#clearable" :class="{ active: activeSection === 'clearable' }" @click.prevent="scrollToSection('clearable')">可清空</a>
        <a href="#multiple" :class="{ active: activeSection === 'multiple' }" @click.prevent="scrollToSection('multiple')">多选</a>
        <a href="#filterable" :class="{ active: activeSection === 'filterable' }" @click.prevent="scrollToSection('filterable')">可搜索</a>
        <a href="#remote" :class="{ active: activeSection === 'remote' }" @click.prevent="scrollToSection('remote')">远程搜索</a>
        <a href="#size" :class="{ active: activeSection === 'size' }" @click.prevent="scrollToSection('size')">不同尺寸</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-selects">
            <qs-select v-model="value1" :options="options1" placeholder="请选择" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            适用广泛的基础单选。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.basic, 'basic')">
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
          <div class="demo-selects">
            <qs-select v-model="value2" :options="options1" disabled placeholder="请选择" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            选择器不可用状态。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.disabled, 'disabled')">
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
          <div class="demo-selects">
            <qs-select v-model="value3" :options="options1" clearable placeholder="请选择" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            包含清空按钮，可将选择器清空为初始状态。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.clearable, 'clearable')">
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

    <div class="demo-card" id="multiple">
      <h2>多选</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-selects">
            <qs-select v-model="value4" :options="options1" multiple placeholder="请选择" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            适用性较广的基础多选，用 Tag 展示已选项。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.multiple, 'multiple')">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.multiple }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="filterable">
      <h2>可搜索</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-selects">
            <qs-select v-model="value5" :options="options1" filterable placeholder="请选择" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            可以利用搜索功能快速查找选项。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.filterable, 'filterable')">
                <template #icon>
                  <Icon :icon="copied5 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied5 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.filterable }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode5">
            <span>{{ showCode5 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="remote">
      <h2>远程搜索</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-selects">
            <qs-select
              v-model="value6"
              :options="options2"
              remote
              :loading="loading"
              :remote-method="remoteMethod"
              placeholder="请输入关键字"
            />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            从服务器搜索数据，输入关键字进行查找。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.remote, 'remote')">
                <template #icon>
                  <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied6 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.remote }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="size">
      <h2>不同尺寸</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-selects">
            <qs-select v-model="value7" :options="options1" size="large" placeholder="大型" />
            <qs-select v-model="value8" :options="options1" placeholder="默认" />
            <qs-select v-model="value9" :options="options1" size="small" placeholder="小型" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode7 }">
          <div class="description">
            提供了 large、default 和 small 三种尺寸。
          </div>
          <div class="code-content">
            <div class="code-header">
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.size, 'size')">
                <template #icon>
                  <Icon :icon="copied7 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied7 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.size }}</code></pre>
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
        <h3>Select 属性</h3>
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
              <td>modelValue / v-model</td>
              <td>选中项绑定值</td>
              <td>string / number / string[] / number[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>options</td>
              <td>选项数据</td>
              <td>SelectOption[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>占位文本</td>
              <td>string</td>
              <td>请选择</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>是否可以清空选项</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>是否多选</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>filterable</td>
              <td>是否可搜索</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>remote</td>
              <td>是否为远程搜索</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否正在从远程获取数据</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>输入框尺寸</td>
              <td>'large' / 'default' / 'small'</td>
              <td>default</td>
            </tr>
          </tbody>
        </table>

        <h3>Select 事件</h3>
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
              <td>选中值发生变化时触发</td>
              <td>(value: SelectValue | SelectValue[]) => void</td>
            </tr>
            <tr>
              <td>clear</td>
              <td>点击清空按钮时触发</td>
              <td>() => void</td>
            </tr>
            <tr>
              <td>visible-change</td>
              <td>下拉框出现/隐藏时触发</td>
              <td>(visible: boolean) => void</td>
            </tr>
            <tr>
              <td>remove-tag</td>
              <td>多选模式下移除tag时触发</td>
              <td>(value: SelectValue) => void</td>
            </tr>
            <tr>
              <td>search</td>
              <td>搜索输入时触发</td>
              <td>(query: string) => void</td>
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
import type { SelectOption } from 'packages/components/select/src/select'

// 基础数据
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]

const options2 = ref<SelectOption[]>([])
const loading = ref(false)

// 各个示例的数据
const value1 = ref<string>('')
const value2 = ref<string>('')
const value3 = ref<string>('')
const value4 = ref<string[]>([])
const value5 = ref<string>('')
const value6 = ref<string>('')
const value7 = ref<string>('')
const value8 = ref<string>('')
const value9 = ref<string>('')

// 代码展示控制
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const showCode7 = ref(false)

// 远程搜索方法
const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      options2.value = Array.from({ length: 5 }, (_, index) => ({
        label: query + '-选项' + (index + 1),
        value: String(index + 1)
      }))
      loading.value = false
    }, 1000)
  } else {
    options2.value = []
  }
}

// 示例代码
const codeSnippets: { [key: string]: string } = {
  basic: `<template>
  <qs-select v-model="value1" :options="options1" placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]
<\/script>`,

  disabled: `<template>
  <qs-select v-model="value2" :options="options1" disabled placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value2 = ref('')
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]
<\/script>`,

  clearable: `<template>
  <qs-select v-model="value3" :options="options1" clearable placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value3 = ref('')
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]
<\/script>`,

  multiple: `<template>
  <qs-select v-model="value4" :options="options1" multiple placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value4 = ref([])
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]
<\/script>`,

  filterable: `<template>
  <qs-select v-model="value5" :options="options1" filterable placeholder="请选择" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value5 = ref('')
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]
<\/script>`,

  remote: `<template>
  <qs-select
    v-model="value6"
    :options="options2"
    :loading="loading"
    :remote-method="remoteMethod"
    placeholder="请输入关键字"
    remote
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value6 = ref('')
const options2 = ref([])
const loading = ref(false)

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      options2.value = Array.from({ length: 5 }, (_, index) => ({
        label: query + '-选项' + (index + 1),
        value: String(index + 1)
      }))
      loading.value = false
    }, 1000)
  } else {
    options2.value = []
  }
}
<\/script>`,

  size: `<template>
  <qs-select v-model="value7" :options="options1" size="large" placeholder="大型" />
  <qs-select v-model="value8" :options="options1" placeholder="默认" />
  <qs-select v-model="value9" :options="options1" size="small" placeholder="小型" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const options1 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
  { label: '选项5', value: '5' }
]
<\/script>`
}

// 获取示例代码的方法
const getCode = (type: string) => {
  return codeSnippets[type]
}

// 控制复制按钮状态
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)
const copied7 = ref(false)


// 复制代码
const copyCode = async (event: Event, code: string, index: keyof typeof codeSnippets) => {
  try {
    const success = await copyText(code)
    if (success) {
      switch (index) {
        case 'basic':
          copied1.value = true
          setTimeout(() => copied1.value = false, 2000)
          break
        case 'disabled':
          copied2.value = true
          setTimeout(() => copied2.value = false, 2000)
          break
        case 'clearable':
          copied3.value = true
          setTimeout(() => copied3.value = false, 2000)
          break
        case 'multiple':
          copied4.value = true
          setTimeout(() => copied4.value = false, 2000)
          break
        case 'filterable':
          copied5.value = true
          setTimeout(() => copied5.value = false, 2000)
          break
        case 'remote':
          copied6.value = true
          setTimeout(() => copied6.value = false, 2000)
          break
        case 'size':
          copied7.value = true
          setTimeout(() => copied7.value = false, 2000)
          break
      }
    }
  } catch (error) {
    console.error('复制失败:', error)
  }
}

// 导航菜单激活状态
const activeSection = ref('basic')

const sections = ['basic', 'disabled', 'clearable', 'multiple', 'filterable', 'remote', 'size', 'api']
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

// 控制代码显示/隐藏
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value
const toggleCode6 = () => showCode6.value = !showCode6.value
const toggleCode7 = () => showCode7.value = !showCode7.value
</script>

<style lang="scss" scoped>






</style> 