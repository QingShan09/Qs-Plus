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
  <a href="https://github.com/your-username/qs-plus/blob/main/LICENSE">
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

- 通用
  - Button 按钮
  - Icon 图标
  - Link 链接

- 布局
  - Grid 栅格
  - Layout 布局
  - Space 间距

- 表单
  - Input 输入框
  - Select 选择器
  - Radio 单选框
  - Checkbox 复选框
  - Switch 开关
  - Slider 滑块

- 数据展示
  - Table 表格
  - Tag 标签
  - Progress 进度条
  - Tree 树形控件

- 反馈
  - Alert 警告
  - Message 消息
  - Modal 对话框
  - Notification 通知

## 🎨 主题定制

QS Plus 提供了灵活的主题配置，你可以通过修改 CSS 变量来自定义主题：

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
git clone https://github.com/your-username/qs-plus.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## ��� 文档

访问 [QS Plus 文档](http://your-domain.com) 查看详细文档。

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

## 📄 许可证

[MIT](LICENSE) 
