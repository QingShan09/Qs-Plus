<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Checkbox 多选框</h1>
      <p>一组备选项中进行多选。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#disabled" :class="{ active: activeSection === 'disabled' }" @click.prevent="scrollToSection('disabled')">禁用状态</a>
        <a href="#group" :class="{ active: activeSection === 'group' }" @click.prevent="scrollToSection('group')">多选框组</a>
        <a href="#indeterminate" :class="{ active: activeSection === 'indeterminate' }" @click.prevent="scrollToSection('indeterminate')">中间状态</a>
        <a href="#border" :class="{ active: activeSection === 'border' }" @click.prevent="scrollToSection('border')">带边框</a>
        <a href="#button" :class="{ active: activeSection === 'button' }" @click.prevent="scrollToSection('button')">按钮样式</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-checkbox">
            <qs-checkbox v-model="checked1">选项1</qs-checkbox>
            <qs-checkbox v-model="checked2">选项2</qs-checkbox>
            <div style="margin-top: 8px;">选中的值：{{ checked1 ? '选项1已选中' : '选项1未选中' }}, {{ checked2 ? '选项2已选中' : '选项2未选中' }}</div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            单独使用可以表示两种状态之间的切换。
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
          <div class="demo-checkbox">
            <qs-checkbox v-model="checked3" disabled>禁用选项1</qs-checkbox>
            <qs-checkbox v-model="checked4" disabled>禁用选项2</qs-checkbox>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            使用 disabled 属性禁用多选框。
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

    <div class="demo-card" id="group">
      <h2>多选框组</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-checkbox">
            <qs-checkbox-group v-model="checkedGroup">
              <qs-checkbox label="选项1"></qs-checkbox>
              <qs-checkbox label="选项2"></qs-checkbox>
              <qs-checkbox label="选项3"></qs-checkbox>
            </qs-checkbox-group>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            使用 CheckboxGroup 组件可以方便地管理多个复选框。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.group, 3)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.group }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="indeterminate">
      <h2>中间状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-checkbox">
            <qs-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
            >全选</qs-checkbox>
            <div style="margin-top: 15px;">
              <qs-checkbox-group v-model="checkedCities">
                <qs-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</qs-checkbox>
              </qs-checkbox-group>
            </div>
            <div style="margin-top: 8px;">当前选中：{{ checkedCities.join('、') }}</div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            通过 indeterminate 属性可以实现 checkbox 的不确定状态，常用于实现全选的效果。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.indeterminate, 4)">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.indeterminate }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="button">
      <h2>按钮样式</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-checkbox">
            <div style="margin-bottom: 20px;">
              <qs-checkbox-group v-model="checkedButtons1" button>
                <qs-checkbox label="选项1">选项1</qs-checkbox>
                <qs-checkbox label="选项2">选项2</qs-checkbox>
                <qs-checkbox label="选项3">选项3</qs-checkbox>
              </qs-checkbox-group>
            </div>
            <div style="margin-bottom: 20px;">
              <qs-checkbox-group v-model="checkedButtons2" button size="large">
                <qs-checkbox label="选项1">选项1</qs-checkbox>
                <qs-checkbox label="选项2" disabled>选项2</qs-checkbox>
                <qs-checkbox label="选项3">选项3</qs-checkbox>
              </qs-checkbox-group>
            </div>
            <div>
              <qs-checkbox-group
                v-model="checkedButtons3"
                button
                size="small"
                fill="#626aef"
                text-color="#fff"
              >
                <qs-checkbox label="选项1">选项1</qs-checkbox>
                <qs-checkbox label="选项2">选项2</qs-checkbox>
                <qs-checkbox label="选项3">选项3</qs-checkbox>
              </qs-checkbox-group>
            </div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            使用 button 属性可以将复选框渲染为按钮样式，通过 fill 和 text-color 属性可以自定义按钮的颜色。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.button, 5)">
                <template #icon>
                  <Icon :icon="copied5 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied5 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.button }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode5">
            <span>{{ showCode5 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="api-table" id="api">
      <h2>API</h2>
      <div class="api-table">
        <h3>Checkbox 属性</h3>
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
              <td>—</td>
            </tr>
            <tr>
              <td>label</td>
              <td>选中状态的值</td>
              <td>string / number / boolean</td>
              <td>—</td>
            </tr>
            <tr>
              <td>indeterminate</td>
              <td>设置不确定状态，仅负责样式控制</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否显示边框</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>button</td>
              <td>是否显示为按钮样式</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否显示加载状态</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>color</td>
              <td>自定义颜色</td>
              <td>string</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

        <h3>Checkbox Group 属性</h3>
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
              <td>array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>size</td>
              <td>尺寸</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>min</td>
              <td>可被勾选的最小数量</td>
              <td>number</td>
              <td>—</td>
            </tr>
            <tr>
              <td>max</td>
              <td>可被勾选的最大数量</td>
              <td>number</td>
              <td>—</td>
            </tr>
            <tr>
              <td>vertical</td>
              <td>是否垂直排列</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>button</td>
              <td>是否显示为按钮样式</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>text-color</td>
              <td>按钮形式下选中状态的文本颜色</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>fill</td>
              <td>按钮形式下选中状态的填充色</td>
              <td>string</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useScroll } from '@/hooks/useScroll'

const { activeSection, scrollToSection } = useScroll([
  'basic',
  'disabled',
  'group',
  'indeterminate',
  'border',
  'button',
  'api'
])

// 基础用法
const checked1 = ref(false)
const checked2 = ref(false)

// 禁用状态
const checked3 = ref(true)
const checked4 = ref(false)

// 多选框组
const checkedGroup = ref(['选项1'])

// 中间状态
const checkAll = ref(false)
const isIndeterminate = ref(true)
const cities = ['上海', '北京', '广州', '深圳']
const checkedCities = ref(['上海', '北京'])

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? [...cities] : []
  isIndeterminate.value = false
}

watch(checkedCities, (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}, { deep: true })

// 按钮样式
const checkedButtons1 = ref(['选项1'])
const checkedButtons2 = ref(['选项1'])
const checkedButtons3 = ref(['选项1'])

// 代码展示控制
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)

// 切换代码显示
const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value

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
    }
    setTimeout(() => {
      copied1.value = false
      copied2.value = false
      copied3.value = false
      copied4.value = false
      copied5.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

// 代码片段
const codeSnippets = {
  basic: `<template>
  <qs-checkbox v-model="checked1">选项1</qs-checkbox>
  <qs-checkbox v-model="checked2">选项2</qs-checkbox>
  <div style="margin-top: 8px;">
    选中的值：{{ checked1 ? '选项1已选中' : '选项1未选中' }}, 
    {{ checked2 ? '选项2已选中' : '选项2未选中' }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(false)
<\/script>`,
  disabled: `<template>
  <qs-checkbox v-model="checked3" disabled>禁用选项1</qs-checkbox>
  <qs-checkbox v-model="checked4" disabled>禁用选项2</qs-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checked3 = ref(true)
const checked4 = ref(false)
<\/script>`,
  group: `<template>
  <qs-checkbox-group v-model="checkedGroup">
    <qs-checkbox label="选项1"></qs-checkbox>
    <qs-checkbox label="选项2"></qs-checkbox>
    <qs-checkbox label="选项3"></qs-checkbox>
  </qs-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const checkedGroup = ref(['选项1'])
<\/script>`,
  indeterminate: `<template>
  <qs-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >全选</qs-checkbox>
  <div style="margin-top: 15px;">
    <qs-checkbox-group v-model="checkedCities">
      <qs-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</qs-checkbox>
    </qs-checkbox-group>
  </div>
  <div style="margin-top: 8px;">当前选中：{{ checkedCities.join('、') }}</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const cities = ['上海', '北京', '广州', '深圳']
const checkedCities = ref(['上海', '北京'])

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? [...cities] : []
  isIndeterminate.value = false
}

watch(checkedCities, (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}, { deep: true })
<\/script>`,
  button: `<template>
  <div>
    <qs-checkbox-group v-model="checkedButtons1" button>
      <qs-checkbox label="选项1">选项1</qs-checkbox>
      <qs-checkbox label="选项2">选项2</qs-checkbox>
      <qs-checkbox label="选项3">选项3</qs-checkbox>
    </qs-checkbox-group>
  </div>
  <div style="margin-top: 20px;">
    <qs-checkbox-group v-model="checkedButtons2" button size="large">
      <qs-checkbox label="选项1">选项1</qs-checkbox>
      <qs-checkbox label="选项2" disabled>选项2</qs-checkbox>
      <qs-checkbox label="选项3">选项3</qs-checkbox>
    </qs-checkbox-group>
  </div>
  <div style="margin-top: 20px;">
    <qs-checkbox-group
      v-model="checkedButtons3"
      button
      size="small"
      fill="#626aef"
      text-color="#fff"
    >
      <qs-checkbox label="选项1">选项1</qs-checkbox>
      <qs-checkbox label="选项2">选项2</qs-checkbox>
      <qs-checkbox label="选项3">选项3</qs-checkbox>
    </qs-checkbox-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedButtons1 = ref(['选项1'])
const checkedButtons2 = ref(['选项1'])
const checkedButtons3 = ref(['选项1'])
<\/script>`
}
</script>

<style lang="scss" scoped>
.demo-checkbox {
  .qs-checkbox {
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