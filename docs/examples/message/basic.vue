<template>
  <div class="example-message">
    <div class="example-message__item">
      <QsButton @click="showMessage">显示普通消息</QsButton>
      <QsButton type="primary" @click="showSuccess">显示成功消息</QsButton>
      <QsButton type="warning" @click="showWarning">显示警告消息</QsButton>
      <QsButton type="danger" @click="showError">显示错误消息</QsButton>
    </div>
    <div class="example-message__item">
      <QsButton @click="showClosable">可关闭的消息</QsButton>
      <QsButton @click="showCustomDuration">自定义显示时长</QsButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QsMessage } from '@qs-plus/components'

const showMessage = () => {
  QsMessage.info('这是一条消息提示')
}

const showSuccess = () => {
  QsMessage.success('操作成功')
}

const showWarning = () => {
  QsMessage.warning('警告信息')
}

const showError = () => {
  QsMessage.error('错误信息')
}

const showClosable = () => {
  QsMessage({
    content: '这是一条可关闭的消息',
    closable: true,
    onClose: () => {
      console.log('消息被关闭')
    }
  })
}

const showCustomDuration = () => {
  QsMessage({
    content: '这条消息将在 10 秒后消失',
    duration: 10000
  })
}
</script>

<style lang="scss" scoped>
.example-message {
  &__item {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
  }
}
</style> 