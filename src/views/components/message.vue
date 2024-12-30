<template>
  <div class="component-demo">
    <div class="demo-header">
      <h1>Message 消息提示</h1>
      <p>全局展示操作反馈信息。</p>
      <nav class="demo-nav">
        <a href="#basic" :class="{ active: activeSection === 'basic' }" @click.prevent="scrollToSection('basic')">基础用法</a>
        <a href="#types" :class="{ active: activeSection === 'types' }" @click.prevent="scrollToSection('types')">不同类型</a>
        <a href="#closable" :class="{ active: activeSection === 'closable' }" @click.prevent="scrollToSection('closable')">可关闭的消息</a>
        <a href="#duration" :class="{ active: activeSection === 'duration' }" @click.prevent="scrollToSection('duration')">显示时长</a>
        <a href="#position" :class="{ active: activeSection === 'position' }" @click.prevent="scrollToSection('position')">消息位置</a>
        <a href="#mask" :class="{ active: activeSection === 'mask' }" @click.prevent="scrollToSection('mask')">遮罩层</a>
        <a href="#html" :class="{ active: activeSection === 'html' }" @click.prevent="scrollToSection('html')">HTML 内容</a>
        <a href="#api" :class="{ active: activeSection === 'api' }" @click.prevent="scrollToSection('api')">API</a>
      </nav>
    </div>

    <div class="demo-card" id="basic">
      <h2>基础用法</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showBasicMessage">显示消息提示</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode1 }">
          <div class="description">
            从顶部出现，3 秒后自动消失。
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

    <div class="demo-card" id="types">
      <h2>不同类型</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showInfo">信息提示</qs-button>
            <qs-button type="success" @click="showSuccess">成功提示</qs-button>
            <qs-button type="warning" @click="showWarning">警告提示</qs-button>
            <qs-button type="danger" @click="showError">错误提示</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode2 }">
          <div class="description">
            用来显示「成功、警告、消息、错误」类的操作反馈。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.types, 2)">
                <template #icon>
                  <Icon :icon="copied2 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied2 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.types }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode2">
            <span>{{ showCode2 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode2 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="closable">
      <h2>可关闭的消息</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showClosableMessage">显示可关闭消息</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode3 }">
          <div class="description">
            可以添加关闭按钮。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.closable, 3)">
                <template #icon>
                  <Icon :icon="copied3 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied3 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.closable }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode3">
            <span>{{ showCode3 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="duration">
      <h2>显示时长</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showCustomDuration">自定义显示时长</qs-button>
            <qs-button @click="showPermanent">不会自动关闭</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode4 }">
          <div class="description">
            可以自定义消息显示的时长，将 duration 设置为 0 则不会自动关闭。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.duration, 4)">
                <template #icon>
                  <Icon :icon="copied4 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied4 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.duration }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode4">
            <span>{{ showCode4 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="position">
      <h2>消息位置</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showTopMessage">顶部居中</qs-button>
            <qs-button @click="showTopLeftMessage">左上角</qs-button>
            <qs-button @click="showTopRightMessage">右上角</qs-button>
            <qs-button @click="showBottomMessage">底部居中</qs-button>
            <qs-button @click="showBottomLeftMessage">左下角</qs-button>
            <qs-button @click="showBottomRightMessage">右下角</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode5 }">
          <div class="description">
            可以设置消息出现的位置，支持 6 种不同位置。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.position, 5)">
                <template #icon>
                  <Icon :icon="copied5 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied5 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.position }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode5">
            <span>{{ showCode5 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="mask">
      <h2>遮罩层</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showMaskMessage">显示带遮罩的消息</qs-button>
            <qs-button @click="showMaskMessageNotClosable">显示不可点击遮罩的消息</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode6 }">
          <div class="description">
            可以添加遮罩层，使消息更加醒目，默认点击遮罩可关闭消息。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.mask, 6)">
                <template #icon>
                  <Icon :icon="copied6 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied6 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.mask }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode6">
            <span>{{ showCode6 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode6 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-card" id="html">
      <h2>HTML 内容</h2>
      <div class="demo-block">
        <div class="source">
          <div class="demo-buttons is-horizontal">
            <qs-button @click="showHtmlMessage">显示 HTML 内容</qs-button>
          </div>
        </div>
        <div class="meta" :class="{ 'is-expanded': showCode7 }">
          <div class="description">
            将 dangerouslyUseHTMLString 属性设置为 true，content 就会被当作 HTML 片段处理。
          </div>
          <div class="code-content">
            <div class="code-header">
              <div class="header-left">
                <span class="lang">vue</span>
                <span class="divider"></span>
                <span class="file-name">示例代码</span>
              </div>
              <qs-button class="copy-btn" size="small" plain @click="copyCode($event, codeSnippets.html, 7)">
                <template #icon>
                  <Icon :icon="copied7 ? 'mdi:check' : 'mdi:content-copy'" />
                </template>
                {{ copied7 ? '已复制' : '复制代码' }}
              </qs-button>
            </div>
            <pre v-highlight><code class="language-vue">{{ codeSnippets.html }}</code></pre>
          </div>
          <div class="code-control" @click="toggleCode7">
            <span>{{ showCode7 ? '隐藏代码' : '显示代码' }}</span>
            <Icon :icon="showCode7 ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </div>
      </div>
    </div>

    <div class="api-table" id="api">
      <h2>API</h2>
      <div class="api-table">
        <h3>Message 配置项</h3>
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
              <td>content</td>
              <td>消息文字</td>
              <td>string</td>
              <td>—</td>
            </tr>
            <tr>
              <td>type</td>
              <td>消息类型</td>
              <td>'success' | 'warning' | 'info' | 'error'</td>
              <td>'info'</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>显示时间，单位为毫秒。设为 0 则不会自动关闭</td>
              <td>number</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否显示关闭按钮</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>关闭时的回调函数</td>
              <td>() => void</td>
              <td>—</td>
            </tr>
            <tr>
              <td>position</td>
              <td>消息展示位置</td>
              <td>'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'</td>
              <td>'top'</td>
            </tr>
            <tr>
              <td>showMask</td>
              <td>是否显示背景遮罩</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maskClosable</td>
              <td>点击遮罩是否关闭消息</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>dangerouslyUseHTMLString</td>
              <td>是否将 content 属性作为 HTML 片段处理</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>center</td>
              <td>文字是否居中</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>grouping</td>
              <td>是否合并相同内容的消息</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>pauseOnHover</td>
              <td>鼠标悬停时是否暂停计时</td>
              <td>boolean</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>

        <h3>Message 方法</h3>
        <table>
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>参数类型</th>
              <th>返回值类型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Message</td>
              <td>显示消息提示</td>
              <td>MessageOptions | string</td>
              <td>MessageHandler</td>
            </tr>
            <tr>
              <td>Message.success</td>
              <td>显示成功消息</td>
              <td>MessageOptions | string</td>
              <td>MessageHandler</td>
            </tr>
            <tr>
              <td>Message.warning</td>
              <td>显示警告消息</td>
              <td>MessageOptions | string</td>
              <td>MessageHandler</td>
            </tr>
            <tr>
              <td>Message.error</td>
              <td>显示错误消息</td>
              <td>MessageOptions | string</td>
              <td>MessageHandler</td>
            </tr>
            <tr>
              <td>Message.info</td>
              <td>显示普通消息</td>
              <td>MessageOptions | string</td>
              <td>MessageHandler</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { Icon } from '@iconify/vue'
import { useScroll } from '@/hooks/useScroll'
import { copyText } from '@/utils/clipboard'
const { proxy } = getCurrentInstance()!

// 代码展示控制
const showCode1 = ref(false)
const showCode2 = ref(false)
const showCode3 = ref(false)
const showCode4 = ref(false)
const showCode5 = ref(false)
const showCode6 = ref(false)
const showCode7 = ref(false)

// 复制状态
const copied1 = ref(false)
const copied2 = ref(false)
const copied3 = ref(false)
const copied4 = ref(false)
const copied5 = ref(false)
const copied6 = ref(false)
const copied7 = ref(false)

// 代码片段
const codeSnippets = {
  basic: `<template>
  <qs-button @click="showMessage">显示消息提示</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showMessage = () => {
  QsMessage.info('这是一条消息提示')
}
<\/script>`,
  types: `<template>
  <qs-button @click="showInfo">信息提示</qs-button>
  <qs-button type="success" @click="showSuccess">成功提示</qs-button>
  <qs-button type="warning" @click="showWarning">警告提示</qs-button>
  <qs-button type="danger" @click="showError">错误提示</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showInfo = () => {
  QsMessage.info('这是一条信息提示')
}

const showSuccess = () => {
  QsMessage.success('这是一条成功提示')
}

const showWarning = () => {
  QsMessage.warning('这是一条警告提示')
}

const showError = () => {
  QsMessage.error('这是一条错误提示')
}
<\/script>`,
  closable: `<template>
  <qs-button @click="showClosableMessage">显示可关闭消息</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showClosableMessage = () => {
  QsMessage({
    content: '这是一条可关闭的消息',
    closable: true,
    onClose: () => {
      console.log('消息被关闭')
    }
  })
}
<\/script>`,
  duration: `<template>
  <qs-button @click="showCustomDuration">自定义显示时长</qs-button>
  <qs-button @click="showPermanent">不会自动关闭</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showCustomDuration = () => {
  QsMessage({
    content: '这条消息将在 10 秒后消失',
    duration: 10000
  })
}

const showPermanent = () => {
  QsMessage({
    content: '这条消息不会自动关闭',
    duration: 0,
    closable: true
  })
}
<\/script>`,
  position: `<template>
  <qs-button @click="showTopMessage">顶部居中</qs-button>
  <qs-button @click="showTopLeftMessage">左上角</qs-button>
  <qs-button @click="showTopRightMessage">右上角</qs-button>
  <qs-button @click="showBottomMessage">底部居中</qs-button>
  <qs-button @click="showBottomLeftMessage">左下角</qs-button>
  <qs-button @click="showBottomRightMessage">右下角</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showTopMessage = () => {
  QsMessage({
    content: '顶部居中的消息',
    position: 'top'
  })
}

const showTopLeftMessage = () => {
  QsMessage({
    content: '左上角的消息',
    position: 'top-left'
  })
}

const showTopRightMessage = () => {
  QsMessage({
    content: '右上角的消息',
    position: 'top-right'
  })
}

const showBottomMessage = () => {
  QsMessage({
    content: '底部居中的消息',
    position: 'bottom'
  })
}

const showBottomLeftMessage = () => {
  QsMessage({
    content: '左下角的消息',
    position: 'bottom-left'
  })
}

const showBottomRightMessage = () => {
  QsMessage({
    content: '右下角的消息',
    position: 'bottom-right'
  })
}
<\/script>`,
  mask: `<template>
  <qs-button @click="showMaskMessage">显示带遮罩的消息</qs-button>
  <qs-button @click="showMaskMessageNotClosable">显示不可点击遮罩的消息</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showMaskMessage = () => {
  QsMessage({
    content: '这是一条带遮罩的消息',
    showMask: true,
    duration: 0,
    closable: true
  })
}

const showMaskMessageNotClosable = () => {
  QsMessage({
    content: '这是一条带遮罩但不可点击关闭的消息',
    showMask: true,
    maskClosable: false,
    duration: 3000
  })
}
<\/script>`,
  html: `<template>
  <qs-button @click="showHtmlMessage">显示 HTML 内容</qs-button>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showHtmlMessage = () => {
  QsMessage({
    dangerouslyUseHTMLString: true,
    content: '<strong>这是 <i>HTML</i> 片段</strong>'
  })
}
<\/script>`
}

// 示例方法
const showBasicMessage = () => {
  console.log('点击了基础消息按钮')
  try {
    proxy!.$message('这是一条消息提示')
  } catch (error) {
    console.error('消息显示失败:', error)
  }
}

const showInfo = () => {
  console.log('点击了信息按钮')
  try {
    proxy!.$message.info('这是一条信息提示')
  } catch (error) {
    console.error('消息显示失败:', error)
  }
}

const showSuccess = () => {
  proxy!.$message.success('这是一条成功提示')
}

const showWarning = () => {
  proxy!.$message.warning('这是一条警告提示')
}

const showError = () => {
  proxy!.$message.error('这是一条错误提示')
}

const showClosableMessage = () => {
  proxy!.$message({
    content: '这是一条可关闭的消息',
    closable: true,
    duration: 0
  })
}

const showCustomDuration = () => {
  proxy!.$message({
    content: '这条消息将在 10 秒后消失',
    duration: 10000
  })
}

const showPermanent = () => {
  proxy!.$message({
    content: '这条消息不会自动关闭',
    duration: 0,
    closable: true
  })
}

const showTopMessage = () => {
  proxy!.$message({
    content: '顶部居中的消息',
    position: 'top'
  })
}

const showTopLeftMessage = () => {
  proxy!.$message({
    content: '左上角的消息',
    position: 'top-left'
  })
}

const showTopRightMessage = () => {
  proxy!.$message({
    content: '右上角的消息',
    position: 'top-right'
  })
}

const showBottomMessage = () => {
  proxy!.$message({
    content: '底部居中的消息',
    position: 'bottom'
  })
}

const showBottomLeftMessage = () => {
  proxy!.$message({
    content: '左下角的消息',
    position: 'bottom-left'
  })
}

const showBottomRightMessage = () => {
  proxy!.$message({
    content: '右下角的消息',
    position: 'bottom-right'
  })
}

const showMaskMessage = () => {
  proxy!.$message({
    content: '这是一条带遮罩的消息',
    showMask: true,
    duration: 0,
    closable: true
  })
}

const showMaskMessageNotClosable = () => {
  proxy!.$message({
    content: '这是一条带遮罩但不可点击关闭的消息',
    showMask: true,
    maskClosable: false,
    duration: 3000
  })
}

const showHtmlMessage = () => {
  proxy!.$message({
    content: '<strong>这是 <i>HTML</i> 片段</strong>',
    dangerouslyUseHTMLString: true
  })
}

// 代码展示切换
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

// 滚动相关
const { activeSection, scrollToSection } = useScroll([
  'basic',
  'types',
  'closable',
  'duration',
  'position',
  'mask',
  'html',
  'api'
])
</script> 