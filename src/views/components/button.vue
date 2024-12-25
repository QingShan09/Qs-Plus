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
            <qs-button type="success">Success</qs-button>
            <qs-button type="warning">Warning</qs-button>
            <qs-button type="danger">Danger</qs-button>
            <qs-button>Default</qs-button>
            <qs-button type="text">Text</qs-button>
            <qs-button type="link">Link</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            按钮有七种类型：主按钮、成功按钮、警告按钮、危险按钮、默认按钮、文本按钮和链接按钮。
          </div>
          <div class="code-content">
            <div class="code-header">
              <button class="copy-btn" data-index="1" @click="copyCode($event, buttonCode)">
                <Icon :icon="copied1 ? 'mdi:check' : 'mdi:content-copy'" />
                {{ copied1 ? '已复制' : '复制代码' }}
              </button>
            </div>
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
            <qs-button type="primary" icon="mdi:magnify">搜索</qs-button>
            <qs-button type="success" icon="mdi:plus">新增</qs-button>
            <qs-button type="warning" icon="mdi:pencil">编辑</qs-button>
            <qs-button type="danger" icon="mdi:delete">删除</qs-button>
            <qs-button icon="mdi:download">下载</qs-button>
            <qs-button type="primary" icon="mdi:magnify" />
            <qs-button type="primary" shape="circle" icon="mdi:magnify" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            带图标的按钮可增强按钮的可识别性（有文字）或节省空间（无文字）。设置 icon 属性即可，icon 的列表可以参考 Material Design Icons，也可以设置在文字右边的 icon。
          </div>
          <div class="code-content">
            <div class="code-header">
              <button class="copy-btn" data-index="2" @click="copyCode($event, iconButtonCode)">
                <Icon :icon="copied2 ? 'mdi:check' : 'mdi:content-copy'" />
                {{ copied2 ? '已复制' : '复制代码' }}
              </button>
            </div>
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
      <h2>加载状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-button type="primary" loading>加载中</qs-button>
            <qs-button type="success" loading>加载中</qs-button>
            <qs-button type="warning" loading>加载中</qs-button>
            <qs-button type="danger" loading>加载中</qs-button>
            <qs-button loading>加载中</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            点击按钮后进行数据加载操作，在按钮上显示加载状态。要设置为 loading 状态，只要设置loading属性为true即可。
          </div>
          <div class="code-content">
            <div class="code-header">
              <button class="copy-btn" data-index="3" @click="copyCode($event, loadingButtonCode)">
                <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                {{ copied3 ? '已复制' : '复制代码' }}
              </button>
            </div>
            <pre><code class="language-vue">{{ loadingButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <h2>按钮尺寸</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-radio-group v-model="size" style="margin-bottom: 20px">
              <qs-radio-button value="large">大型按钮</qs-radio-button>
              <qs-radio-button value="default">默认按钮</qs-radio-button>
              <qs-radio-button value="small">小型按钮</qs-radio-button>
            </qs-radio-group>
            <div class="demo-size-buttons">
              <qs-button type="primary" :size="size">主要按钮</qs-button>
              <qs-button :size="size">默认按钮</qs-button>
              <qs-button type="danger" :size="size">危险按钮</qs-button>
              <qs-button type="primary" :size="size" icon="mdi:magnify">搜索</qs-button>
              <qs-button type="primary" :size="size" icon="mdi:magnify" />
            </div>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。使用 size 属性来设置按钮的大小。
          </div>
          <div class="code-content">
            <div class="code-header">
              <button class="copy-btn" data-index="4" @click="copyCode($event, sizeButtonCode)">
                <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                {{ copied4 ? '已复制' : '复制代码' }}
              </button>
            </div>
            <pre><code class="language-vue">{{ sizeButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <h2>按钮形状</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-button type="primary" shape="round" icon="mdi:magnify">圆角按钮</qs-button>
            <qs-button type="success" shape="round" icon="mdi:plus">圆角按钮</qs-button>
            <qs-button type="primary" shape="circle" icon="mdi:magnify" />
            <qs-button type="success" shape="circle" icon="mdi:plus" />
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            通过设置 shape 属性为 circle 或 round 来改变按钮的形状。
          </div>
          <div class="code-content">
            <div class="code-header">
              <button class="copy-btn" data-index="5" @click="copyCode($event, shapeButtonCode)">
                <Icon :icon="copied5 ? 'mdi:check' : 'mdi:content-copy'" />
                {{ copied5 ? '已复制' : '复制代码' }}
              </button>
            </div>
            <pre><code class="language-vue">{{ shapeButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode5">
            <span>{{ showCode5 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card">
      <h2>不可用状态</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons">
            <qs-button type="primary" disabled>禁用按钮</qs-button>
            <qs-button type="success" disabled>禁用按钮</qs-button>
            <qs-button type="warning" disabled>禁用按钮</qs-button>
            <qs-button type="danger" disabled>禁用按钮</qs-button>
            <qs-button disabled>禁用按钮</qs-button>
            <qs-button type="text" disabled>禁用按钮</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
          </div>
          <div class="code-content">
            <div class="code-header">
              <button class="copy-btn" data-index="6" @click="copyCode($event, disabledButtonCode)">
                <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                {{ copied6 ? '已复制' : '复制代码' }}
              </button>
            </div>
            <pre><code class="language-vue">{{ disabledButtonCode }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
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
            <td>primary / success / warning / danger / text / link</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮大小</td>
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
            <td>图标类型</td>
            <td>string</td>
            <td>参考 Material Design Icons</td>
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
const showCode5 = ref(false)
const showCode6 = ref(false)
const size = ref('default')

const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)

const copyCode = async (event: MouseEvent, code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    const button = event.currentTarget as HTMLButtonElement
    const index = button.getAttribute('data-index')
    const copiedRef = [copied1, copied2, copied3, copied4, copied5, copied6][Number(index) - 1]
    copiedRef.value = true
    setTimeout(() => {
      copiedRef.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

const toggleCode1 = () => showCode1.value = !showCode1.value
const toggleCode2 = () => showCode2.value = !showCode2.value
const toggleCode3 = () => showCode3.value = !showCode3.value
const toggleCode4 = () => showCode4.value = !showCode4.value
const toggleCode5 = () => showCode5.value = !showCode5.value
const toggleCode6 = () => showCode6.value = !showCode6.value

const buttonCode = `<template>
  <qs-button type="primary">Primary</qs-button>
  <qs-button type="success">Success</qs-button>
  <qs-button type="warning">Warning</qs-button>
  <qs-button type="danger">Danger</qs-button>
  <qs-button>Default</qs-button>
  <qs-button type="text">Text</qs-button>
  <qs-button type="link">Link</qs-button>
</template>`

const iconButtonCode = `<template>
  <qs-button type="primary" icon="mdi:magnify">搜索</qs-button>
  <qs-button type="success" icon="mdi:plus">新增</qs-button>
  <qs-button type="warning" icon="mdi:pencil">编辑</qs-button>
  <qs-button type="danger" icon="mdi:delete">删除</qs-button>
  <qs-button icon="mdi:download">下载</qs-button>
  <qs-button type="primary" icon="mdi:magnify" />
  <qs-button type="primary" shape="circle" icon="mdi:magnify" />
</template>`

const loadingButtonCode = `<template>
  <qs-button type="primary" loading>加载中</qs-button>
  <qs-button type="success" loading>加载中</qs-button>
  <qs-button type="warning" loading>加载中</qs-button>
  <qs-button type="danger" loading>加载中</qs-button>
  <qs-button loading>加载中</qs-button>
</template>`

const sizeButtonCode = `<template>
  <qs-radio-group v-model="size">
    <qs-radio-button value="large">大型按钮</qs-radio-button>
    <qs-radio-button value="default">默认按钮</qs-radio-button>
    <qs-radio-button value="small">小型按钮</qs-radio-button>
  </qs-radio-group>

  <qs-button type="primary" :size="size">主要按钮</qs-button>
  <qs-button :size="size">默认按钮</qs-button>
  <qs-button type="danger" :size="size">危险按钮</qs-button>
  <qs-button type="primary" :size="size" icon="mdi:magnify">搜索</qs-button>
  <qs-button type="primary" :size="size" icon="mdi:magnify" />
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

const shapeButtonCode = `<template>
  <qs-button type="primary" shape="round" icon="mdi:magnify">圆角按钮</qs-button>
  <qs-button type="success" shape="round" icon="mdi:plus">圆角按钮</qs-button>
  <qs-button type="primary" shape="circle" icon="mdi:magnify" />
  <qs-button type="success" shape="circle" icon="mdi:plus" />
</template>`

const disabledButtonCode = `<template>
  <qs-button type="primary" disabled>禁用按钮</qs-button>
  <qs-button type="success" disabled>禁用按钮</qs-button>
  <qs-button type="warning" disabled>禁用按钮</qs-button>
  <qs-button type="danger" disabled>禁用按钮</qs-button>
  <qs-button disabled>禁用按钮</qs-button>
  <qs-button type="text" disabled>禁用按钮</qs-button>
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
      align-items: center;

      .demo-size-buttons {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }
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
        position: relative;
        
        .code-header {
          position: absolute;
          right: 16px;
          top: 16px;
          z-index: 1;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          background-color: #fff;
          color: #606266;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: #409EFF;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }

          .iconify {
            font-size: 14px;
          }
        }

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
}

@media (max-width: 768px) {
  .component-demo {
    padding: 16px;

    .demo-card {
      margin: 24px 0;

      h2 {
        padding: 16px;
        font-size: 18px;
      }
    }

    .demo-block {
      .source {
        padding: 16px;
      }

      .demo-buttons {
        gap: 8px;
      }

      .meta {
        .description {
          padding: 16px;
        }

        .code-content {
          pre {
            padding: 16px;
          }
        }
      }
    }

    .api-doc {
      padding: 16px;
      margin-top: 32px;

      table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
}
</style>