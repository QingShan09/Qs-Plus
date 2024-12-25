<template>
  <router-view></router-view>
</template>

<style>
:root {
  --primary-color: #409EFF;
  --success-color: #67C23A;
  --warning-color: #E6A23C;
  --danger-color: #F56C6C;
  --info-color: #909399;
  --text-color: #2C3E50;
  --text-color-secondary: #606266;
  --border-color: #DCDFE6;
  --border-color-light: #E4E7ED;
  --background-color: #FFFFFF;
  --background-color-light: #F5F7FA;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: var(--text-color);
  background-color: var(--background-color-light);
}

#app {
  height: 100%;
}

/* 代码高亮样式优化 */
.hljs {
  background: #f8f9fb !important;
  padding: 24px !important;
  border-radius: 8px;
  font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #476582;
  margin: 0;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
}

.hljs-keyword,
.hljs-literal,
.hljs-symbol,
.hljs-name {
  color: #0550ae;
}

.hljs-link {
  color: #0550ae;
  text-decoration: underline;
}

.hljs-built_in,
.hljs-type {
  color: #0550ae;
}

.hljs-number,
.hljs-class {
  color: #098658;
}

.hljs-string,
.hljs-meta .hljs-string {
  color: #a31515;
}

.hljs-regexp,
.hljs-template-tag {
  color: #9a5334;
}

.hljs-subst,
.hljs-function,
.hljs-title,
.hljs-params,
.hljs-formula {
  color: #1a1a1a;
}

.hljs-comment,
.hljs-quote {
  color: #6a737d;
  font-style: italic;
}

.hljs-doctag {
  color: #0550ae;
}

.hljs-meta,
.hljs-meta .hljs-keyword,
.hljs-tag {
  color: #0550ae;
}

.hljs-variable,
.hljs-template-variable {
  color: #ac4142;
}

.hljs-attr,
.hljs-attribute,
.hljs-builtin-name {
  color: #0550ae;
}

.hljs-section {
  color: #0550ae;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

/* 滚动条美化 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background: #cfd7e6;
  border-radius: 4px;
  
  &:hover {
    background: #a3afc4;
  }
}

::-webkit-scrollbar-track {
  background: #f5f7fa;
  border-radius: 4px;
}

/* 过渡动画优化 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 全局链接样式 */
a {
  color: #409EFF;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #66b1ff;
  }
}
</style>