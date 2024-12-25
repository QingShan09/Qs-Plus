<template>
  <div class="component-demo">
    <h1>Button 按钮</h1>
    <p>按钮用于开始一个即时操作。</p>

    <div class="demo-card">
      <h2>按钮类型</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-button type="primary">Primary</qs-button>
            <qs-button>Default</qs-button>
            <qs-button type="dashed">Dashed</qs-button>
            <qs-button type="text">Text</qs-button>
            <qs-button type="link">Link</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
          </div>
          <div class="code-content">
            <pre><code class="language-vue">{{ buttonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode1">
            <span>{{ showCode1 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode1 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <h2>图标按钮</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-button type="primary" icon="mdi:search">Search</qs-button>
            <qs-button icon="mdi:plus">Add</qs-button>
            <qs-button type="primary" icon="mdi:edit" />
            <qs-button type="primary" shape="circle" icon="mdi:search" />
            <qs-button icon="mdi:download">Download</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            带图标的按钮可增强按钮的可识别性（有文字）或节省空间（无文字）。
          </div>
          <div class="code-content">
            <pre><code class="language-vue">{{ iconButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode2">
            <span>{{ showCode2 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode2 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <h2>按钮尺寸</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-radio-group v-model="size">
              <qs-radio-button value="large">Large</qs-radio-button>
              <qs-radio-button value="default">Default</qs-radio-button>
              <qs-radio-button value="small">Small</qs-radio-button>
            </qs-radio-group>
            <div style="margin-top: 16px">
              <qs-button type="primary" :size="size">Primary</qs-button>
              <qs-button :size="size">Default</qs-button>
              <qs-button type="dashed" :size="size">Dashed</qs-button>
            </div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            按钮有大、中、小三种尺寸。通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。
          </div>
          <div class="code-content">
            <pre><code class="language-vue">{{ sizeButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <h2>不可用状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-button type="primary" disabled>Primary(disabled)</qs-button>
            <qs-button disabled>Default(disabled)</qs-button>
            <qs-button type="dashed" disabled>Dashed(disabled)</qs-button>
            <qs-button type="text" disabled>Text(disabled)</qs-button>
            <qs-button type="link" disabled>Link(disabled)</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
          </div>
          <div class="code-content">
            <pre><code class="language-vue">{{ disabledButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="api-doc">
      <h2>API</h2>
      <table>
        <thead>
          <tr>
            <th>参数</th>
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
            <td>primary | dashed | text | link</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮大小</td>
            <td>string</td>
            <td>large | default | small</td>
            <td>default</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>按钮失效状态</td>
            <td>boolean</td>
            <td>-</td>
            <td>false</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>图标类型</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>按钮形状</td>
            <td>string</td>
            <td>circle | round</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const size = ref('default')

const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value

const buttonCode = `<template>
  <qs-button type="primary">Primary</qs-button>
  <qs-button>Default</qs-button>
  <qs-button type="dashed">Dashed</qs-button>
  <qs-button type="text">Text</qs-button>
  <qs-button type="link">Link</qs-button>
</template>`

const iconButtonCode = `<template>
  <qs-button type="primary" icon="mdi:search">Search</qs-button>
  <qs-button icon="mdi:plus">Add</qs-button>
  <qs-button type="primary" icon="mdi:edit" />
  <qs-button type="primary" shape="circle" icon="mdi:search" />
  <qs-button icon="mdi:download">Download</qs-button>
</template>`

const sizeButtonCode = `<template>
  <qs-radio-group v-model="size">
    <qs-radio-button value="large">Large</qs-radio-button>
    <qs-radio-button value="default">Default</qs-radio-button>
    <qs-radio-button value="small">Small</qs-radio-button>
  </qs-radio-group>
  
  <qs-button type="primary" :size="size">Primary</qs-button>
  <qs-button :size="size">Default</qs-button>
  <qs-button type="dashed" :size="size">Dashed</qs-button>
</template>

<script>
export default {
  data() {
    return {
      size: 'default'
    }
  }
}
<\/script>`

const disabledButtonCode = `<template>
  <qs-button type="primary" disabled>Primary(disabled)</qs-button>
  <qs-button disabled>Default(disabled)</qs-button>
  <qs-button type="dashed" disabled>Dashed(disabled)</qs-button>
  <qs-button type="text" disabled>Text(disabled)</qs-button>
  <qs-button type="link" disabled>Link(disabled)</qs-button>
</template>`
</script>

<style scoped lang="scss">
.component-demo {
  padding: 32px;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    margin: 0 0 24px;
    font-size: 32px;
    font-weight: 600;
    color: #1a1a1a;
    position: relative;
    padding-bottom: 16px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 48px;
      height: 3px;
      background: #409EFF;
      border-radius: 3px;
    }
  }

  p {
    font-size: 16px;
    color: #5e6d82;
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .demo-card {
    margin: 32px 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;

    h2 {
      margin: 0;
      padding: 24px;
      font-size: 20px;
      font-weight: 500;
      color: #1a1a1a;
      border-bottom: 1px solid #f0f0f0;
    }
  }

  .demo-block {
    border: none;

    .source {
      padding: 32px;
      background-color: #fff;
    }

    .demo-buttons {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .meta {
      background-color: #fafafa;

      .description {
        padding: 24px;
        font-size: 14px;
        line-height: 1.6;
        color: #666;
        border-bottom: 1px solid #f0f0f0;

        code {
          background-color: #f5f7fa;
          border-radius: 4px;
          color: #476582;
          padding: 3px 6px;
          font-size: 13px;
          transition: all 0.3s;

          &:hover {
            background-color: #e6effb;
          }
        }
      }

      .code-content {
        display: none;
        
        pre {
          margin: 0;
          padding: 24px;
          background-color: #fafafa;
          overflow: auto;

          code {
            color: #476582;
            font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;
            font-size: 13px;
            line-height: 1.8;
            padding: 0;
          }
        }
      }

      &.is-expanded {
        .code-content {
          display: block;
        }
      }

      .code-control {
        border-top: 1px solid #f0f0f0;
        height: 48px;
        background-color: #fff;
        color: #909399;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;

        &:hover {
          color: #409EFF;
          background-color: #f9fafc;
        }

        span {
          font-size: 14px;
          margin-right: 8px;
        }
      }
    }
  }

  .api-doc {
    margin-top: 48px;
    background: #fff;
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    h2 {
      margin: 0 0 24px;
      font-size: 20px;
      font-weight: 500;
      color: #1a1a1a;
      position: relative;
      padding-bottom: 16px;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 32px;
        height: 2px;
        background: #409EFF;
        border-radius: 2px;
      }
    }

    table {
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 0;
      border-collapse: collapse;
      border-radius: 4px;
      overflow: hidden;
      
      th, td {
        text-align: left;
        padding: 16px;
        border-bottom: 1px solid #f0f0f0;
      }

      th {
        color: #1a1a1a;
        font-weight: 500;
        background-color: #fafafa;
        white-space: nowrap;
      }

      td {
        color: #606266;
        line-height: 1.6;
      }

      tr:last-child td {
        border-bottom: none;
      }

      tr:hover td {
        background-color: #f5f7fa;
      }
    }
  }

  .demo-button-group {
    .qs-button-group {
      margin-right: 20px;
    }
  }
}
</style>