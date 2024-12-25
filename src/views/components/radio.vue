<template>
  <div class="component-page">
    <h1>Radio 单选框</h1>
    <p class="component-description">在一组备选项中进行单选。</p>

    <div class="section">
      <h2>基础用法</h2>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
      <div class="example-box">
        <div class="example-content">
          <qs-radio v-model="radio1" value="1">选项1</qs-radio>
          <qs-radio v-model="radio1" value="2">选项2</qs-radio>
        </div>
        <div class="example-code">
          <div class="code-header">
            <div class="header-left">
              <span class="lang">vue</span>
              <span class="divider"></span>
              <span class="file-name">radio.vue</span>
            </div>
            <qs-button class="copy-btn" size="small" plain @click="handleCopy('basic')">
              <template #icon>
                <Icon :icon="basicCopyState ? 'mdi:check' : 'mdi:content-copy'" />
              </template>
              {{ basicCopyState ? '已复制' : '复制代码' }}
            </qs-button>
          </div>
          <div class="code-content">
            <pre><code>{{ codeSnippets.basic }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>禁用状态</h2>
      <p>单选框不可用的状态。</p>
      <div class="example-box">
        <div class="example-content">
          <qs-radio v-model="radio2" value="1" disabled>禁用选项1</qs-radio>
          <qs-radio v-model="radio2" value="2" disabled>禁用选项2</qs-radio>
        </div>
        <div class="example-code">
          <div class="code-header">
            <div class="header-left">
              <span class="lang">vue</span>
              <span class="divider"></span>
              <span class="file-name">radio.vue</span>
            </div>
            <qs-button class="copy-btn" size="small" plain @click="handleCopy('disabled')">
              <template #icon>
                <Icon :icon="disabledCopyState ? 'mdi:check' : 'mdi:content-copy'" />
              </template>
              {{ disabledCopyState ? '已复制' : '复制代码' }}
            </qs-button>
          </div>
          <div class="code-content">
            <pre><code>{{ codeSnippets.disabled }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>单选框组</h2>
      <p>适用于在多个互斥的选项中选择的场景。</p>
      <div class="example-box">
        <div class="example-content">
          <qs-radio-group v-model="radio3">
            <qs-radio value="1">选项1</qs-radio>
            <qs-radio value="2">选项2</qs-radio>
            <qs-radio value="3">选项3</qs-radio>
          </qs-radio-group>
        </div>
        <div class="example-code">
          <div class="code-header">
            <div class="header-left">
              <span class="lang">vue</span>
              <span class="divider"></span>
              <span class="file-name">radio.vue</span>
            </div>
            <qs-button class="copy-btn" size="small" plain @click="handleCopy('group')">
              <template #icon>
                <Icon :icon="groupCopyState ? 'mdi:check' : 'mdi:content-copy'" />
              </template>
              {{ groupCopyState ? '已复制' : '复制代码' }}
            </qs-button>
          </div>
          <div class="code-content">
            <pre><code>{{ codeSnippets.group }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>按钮样式</h2>
      <p>按钮样式的单选组合。</p>
      <div class="example-box">
        <div class="example-content">
          <qs-radio-group v-model="radio4">
            <qs-radio-button value="1">选项1</qs-radio-button>
            <qs-radio-button value="2">选项2</qs-radio-button>
            <qs-radio-button value="3">选项3</qs-radio-button>
          </qs-radio-group>
        </div>
        <div class="example-code">
          <div class="code-header">
            <div class="header-left">
              <span class="lang">vue</span>
              <span class="divider"></span>
              <span class="file-name">radio.vue</span>
            </div>
            <qs-button class="copy-btn" size="small" plain @click="handleCopy('button')">
              <template #icon>
                <Icon :icon="buttonCopyState ? 'mdi:check' : 'mdi:content-copy'" />
              </template>
              {{ buttonCopyState ? '已复制' : '复制代码' }}
            </qs-button>
          </div>
          <div class="code-content">
            <pre><code>{{ codeSnippets.button }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>不同尺寸</h2>
      <p>Radio 组件提供了三种不同的尺寸。</p>
      <div class="example-box">
        <div class="example-content">
          <div class="size-demo">
            <qs-radio-group v-model="radio5" size="large">
              <qs-radio-button value="1">选项1</qs-radio-button>
              <qs-radio-button value="2">选项2</qs-radio-button>
            </qs-radio-group>
          </div>
          <div class="size-demo">
            <qs-radio-group v-model="radio5">
              <qs-radio-button value="1">选项1</qs-radio-button>
              <qs-radio-button value="2">选项2</qs-radio-button>
            </qs-radio-group>
          </div>
          <div class="size-demo">
            <qs-radio-group v-model="radio5" size="small">
              <qs-radio-button value="1">选项1</qs-radio-button>
              <qs-radio-button value="2">选项2</qs-radio-button>
            </qs-radio-group>
          </div>
        </div>
        <div class="example-code">
          <div class="code-header">
            <div class="header-left">
              <span class="lang">vue</span>
              <span class="divider"></span>
              <span class="file-name">radio.vue</span>
            </div>
            <qs-button class="copy-btn" size="small" plain @click="handleCopy('size')">
              <template #icon>
                <Icon :icon="sizeCopyState ? 'mdi:check' : 'mdi:content-copy'" />
              </template>
              {{ sizeCopyState ? '已复制' : '复制代码' }}
            </qs-button>
          </div>
          <div class="code-content">
            <pre><code>{{ codeSnippets.size }}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>API</h2>
      <h3>Radio Props</h3>
      <div class="api-table">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v-model</td>
              <td>绑定值</td>
              <td>string / number / boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>value</td>
              <td>单选框的值</td>
              <td>string / number / boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Radio Group Props</h3>
      <div class="api-table">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v-model</td>
              <td>绑定值</td>
              <td>string / number / boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>单选框组尺寸</td>
              <td>large / default / small</td>
              <td>default</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用所有单选框</td>
              <td>boolean</td>
              <td>false</td>
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

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
const radio5 = ref('1')

const basicCopyState = ref(false)
const disabledCopyState = ref(false)
const groupCopyState = ref(false)
const buttonCopyState = ref(false)
const sizeCopyState = ref(false)

const codeSnippets = {
  basic: '<template>\n  <qs-radio v-model="radio1" value="1">选项1</qs-radio>\n  <qs-radio v-model="radio1" value="2">选项2</qs-radio>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\n\nconst radio1 = ref(\'1\')\n<\/script>',
  disabled: '<template>\n  <qs-radio v-model="radio2" value="1" disabled>禁用选项1</qs-radio>\n  <qs-radio v-model="radio2" value="2" disabled>禁用选项2</qs-radio>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\n\nconst radio2 = ref(\'1\')\n<\/script>',
  group: '<template>\n  <qs-radio-group v-model="radio3">\n    <qs-radio value="1">选项1</qs-radio>\n    <qs-radio value="2">选项2</qs-radio>\n    <qs-radio value="3">选项3</qs-radio>\n  </qs-radio-group>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\n\nconst radio3 = ref(\'1\')\n<\/script>',
  button: '<template>\n  <qs-radio-group v-model="radio4">\n    <qs-radio-button value="1">选项1</qs-radio-button>\n    <qs-radio-button value="2">选项2</qs-radio-button>\n    <qs-radio-button value="3">选项3</qs-radio-button>\n  </qs-radio-group>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\n\nconst radio4 = ref(\'1\')\n<\/script>',
  size: '<template>\n  <qs-radio-group v-model="radio5" size="large">\n    <qs-radio-button value="1">选项1</qs-radio-button>\n    <qs-radio-button value="2">选项2</qs-radio-button>\n  </qs-radio-group>\n\n  <qs-radio-group v-model="radio5">\n    <qs-radio-button value="1">选项1</qs-radio-button>\n    <qs-radio-button value="2">选项2</qs-radio-button>\n  </qs-radio-group>\n\n  <qs-radio-group v-model="radio5" size="small">\n    <qs-radio-button value="1">选项1</qs-radio-button>\n    <qs-radio-button value="2">选项2</qs-radio-button>\n  </qs-radio-group>\n</template>\n\n<script setup lang="ts">\nimport { ref } from \'vue\'\n\nconst radio5 = ref(\'1\')\n<\/script>'
}

const handleCopy = async (type: 'basic' | 'disabled' | 'group' | 'button' | 'size') => {
  try {
    await navigator.clipboard.writeText(codeSnippets[type])
    const stateMap = {
      basic: basicCopyState,
      disabled: disabledCopyState,
      group: groupCopyState,
      button: buttonCopyState,
      size: sizeCopyState
    }
    stateMap[type].value = true
    setTimeout(() => {
      stateMap[type].value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<style scoped lang="scss">
.component-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 16px;
  }

  .component-description {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
  }

  .section {
    margin-bottom: 48px;

    h2 {
      font-size: 24px;
      font-weight: 500;
      margin: 0 0 16px;
    }

    p {
      font-size: 14px;
      color: #666;
      margin: 0 0 24px;
    }
  }

  .example-box {
    border: 1px solid #e4e7ed;
    border-radius: 8px;
    margin-bottom: 24px;

    .example-content {
      padding: 24px;
      border-bottom: 1px solid #e4e7ed;
    }

    .example-code {
      background-color: #fafafa;

      .code-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        border-bottom: 1px solid #e4e7ed;

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;

          .lang {
            color: #409eff;
            font-size: 12px;
          }

          .divider {
            width: 1px;
            height: 12px;
            background-color: #e4e7ed;
          }

          .file-name {
            font-size: 12px;
            color: #666;
          }
        }
      }

      .code-content {
        padding: 16px;

        pre {
          margin: 0;
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
          }
        }
      }
    }
  }

  .size-demo {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .api-table {
    margin-top: 24px;

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 40px;

      th, td {
        text-align: left;
        padding: 12px;
        border-bottom: 1px solid #e4e7ed;
      }

      th {
        font-weight: 500;
        color: #1a1a1a;
        background-color: #fafafa;
      }

      td {
        color: #666;
      }
    }
  }
}
</style> 