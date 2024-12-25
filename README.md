# QS Plus

<p align="center">
  <img src="http://www.qingshan.ink:3089/v1/common/files/preview/img/1731480874530.jpg" width="200" height="200" alt="QS Plus Logo" style="border-radius: 100px">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/qs-plus">
    <img src="https://img.shields.io/npm/v/qs-plus.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/qs-plus">
    <img src="https://img.shields.io/npm/dm/qs-plus.svg" alt="Downloads">
  </a>
  <a href="https://github.com/QingShan09/Qs-Plus/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/qs-plus.svg" alt="License">
  </a>
</p>

<p align="center">一个基于 Vue 3 的现代化轻量级组件库</p>

## ✨ 特性

- 🌈 提供了丰富的组件和功能
- 📦 开箱即用的高质量 Vue 3 组件
- 🛡 使用 TypeScript 开发，提供完整的类型定义
- ⚡️ 全面基于 Composition API
- 🎨 支持主题定制，可配置的主题系统
- 📱 支持移动端，响应式设计
- 🔥 支持按需引入和 Tree Shaking
- 📝 详细的文档和示例

## 🚀 安装

```bash
npm install qs-plus
```

## 🌈 使用

```js
// main.js
import { createApp } from 'vue'
import QsPlus from 'qs-plus'
import 'qs-plus/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(QsPlus)
app.mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <qs-button type="primary">按钮</qs-button>
</template>
```

## 📦 组件列表

### 🎯 通用组件
<table>
  <thead>
    <tr>
      <th>组件名称</th>
      <th>描述</th>
      <th>特点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Button 按钮</td>
      <td>常用的操作按钮</td>
      <td>
        <ul>
          <li>支��多种类型：primary、success、warning、danger</li>
          <li>支持图标按钮和文字按钮</li>
          <li>可自定义大小和形状</li>
          <li>支持加载状态和禁用状态</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Icon 图标</td>
      <td>语义化的矢量图形</td>
      <td>
        <ul>
          <li>基于 Material Design Icons</li>
          <li>支持自定义颜色和大小</li>
          <li>提供丰富的图标集合</li>
          <li>支持动画效果</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Link 链接</td>
      <td>文字超链接</td>
      <td>
        <ul>
          <li>支持下划线和悬浮效果</li>
          <li>多种状态：默认、主要、成功、警告、危险</li>
          <li>支持禁用状态</li>
          <li>可配置图标</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 📐 布局组件
<table>
  <thead>
    <tr>
      <th>组件名称</th>
      <th>描述</th>
      <th>特点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Grid 栅格</td>
      <td>24 栅格系统</td>
      <td>
        <ul>
          <li>支持响应式布局</li>
          <li>可设置间距（gutter）</li>
          <li>支持 flex 布局</li>
          <li>可设置偏移量</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Layout 布局</td>
      <td>页面整体布局</td>
      <td>
        <ul>
          <li>支持上中下布局</li>
          <li>支持侧边栏</li>
          <li>可自定义宽度和高度</li>
          <li>响应式收缩</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Space 间距</td>
      <td>元素间距组件</td>
      <td>
        <ul>
          <li>支持水平和垂直方向</li>
          <li>可自定义间距大小</li>
          <li>支持环绕模式</li>
          <li>支持对齐方式设置</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 📝 表单组件
<table>
  <thead>
    <tr>
      <th>组件名称</th>
      <th>描述</th>
      <th>特点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Input 输入框</td>
      <td>文本输入框</td>
      <td>
        <ul>
          <li>支持多种类型：text、password、number等</li>
          <li>支持前缀和后缀图标</li>
          <li>可清空和密码显示切换</li>
          <li>支持输入限制和验证</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Select 选择器</td>
      <td>下拉选择器</td>
      <td>
        <ul>
          <li>单选和多选模式</li>
          <li>支持选项分组</li>
          <li>可搜索和远程搜索</li>
          <li>支持自定义选项内容</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Switch 开关</td>
      <td>开关选择器</td>
      <td>
        <ul>
          <li>支持自定义颜色</li>
          <li>可设置加载状态</li>
          <li>支持文字和图标</li>
          <li>支持禁用状态</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 📊 数据展示
<table>
  <thead>
    <tr>
      <th>组件名称</th>
      <th>描述</th>
      <th>特点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table 表格</td>
      <td>数据表格</td>
      <td>
        <ul>
          <li>支持固定表头和列</li>
          <li>支持排序和筛选</li>
          <li>自定义单元格内容</li>
          <li>支持展开行和树形数据</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Tag 标签</td>
      <td>标记和分类</td>
      <td>
        <ul>
          <li>多种预设颜色</li>
          <li>可关闭和动态编辑</li>
          <li>支持圆角设置</li>
          <li>支持图标</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Progress 进度条</td>
      <td>进度显示</td>
      <td>
        <ul>
          <li>支持线形和环形</li>
          <li>自定义颜色和渐变</li>
          <li>支持进度格式化</li>
          <li>支持动画效果</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### 💫 反馈组件
<table>
  <thead>
    <tr>
      <th>组件名称</th>
      <th>描述</th>
      <th>特点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alert 警告</td>
      <td>警告提示</td>
      <td>
        <ul>
          <li>四种主要类型</li>
          <li>可关闭和自定义关闭按钮</li>
          <li>支持图标和描述</li>
          <li>支持自定义图标</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Message 消息</td>
      <td>全局提示</td>
      <td>
        <ul>
          <li>支持多种类型</li>
          <li>可设置显示时长</li>
          <li>支持手动关闭</li>
          <li>支持自定义内容</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Modal 对话框</td>
      <td>模态对话框</td>
      <td>
        <ul>
          <li>支持自定义内容</li>
          <li>多种预设类型</li>
          <li>支持异步关闭</li>
          <li>可拖拽和全屏</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 🎨 主题定制

QS Plus 提供了灵活的主题配置，你可以通过修改 CSS 变量来自定义���题：

```css
:root {
  --qs-primary-color: #409EFF;
  --qs-success-color: #67C23A;
  --qs-warning-color: #E6A23C;
  --qs-danger-color: #F56C6C;
  --qs-info-color: #909399;
}
```

## 🔨 开发

```bash
# 克隆项目
git clone https://github.com/QingShan09/Qs-Plus.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📄 文档

访问 [QS Plus 文档](https://github.com/QingShan09/Qs-Plus) 查看详细文档。

## 🤝 贡献

欢迎提交 [Issue](https://github.com/QingShan09/Qs-Plus/issues) 或 [Pull Request](https://github.com/QingShan09/Qs-Plus/pulls)！

## 📄 许可证

[MIT](https://github.com/QingShan09/Qs-Plus/blob/main/LICENSE) 
