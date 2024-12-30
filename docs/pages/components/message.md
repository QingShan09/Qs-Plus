# Message 消息提示

全局展示操作反馈信息。

## 基础用法

从顶部出现，3 秒后自动消失。

:::demo
message/basic
:::

## 不同类型

用来显示「成功、警告、消息、错误」类的操作反馈。

:::demo 当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置 `type` 字段可以定义不同的状态，默认为 `info`。此时正文内容以 `content` 的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 `Message.success(content)` 这样直接调用。
message/types
:::

## 可关闭的消息提示

可以添加关闭按钮。

:::demo 默认的 Message 是不可以被人工关闭的。如果需要可手动关闭的 Message，可以使用 `closable` 字段。此外，Message 拥有可控的 `duration`，设置 `0` 为不会被自动关闭，默认为 3000 毫秒。
message/closable
:::

## API

### Message 配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 消息文字 | string | — |
| type | 消息类型 | 'success' \| 'warning' \| 'info' \| 'error' | 'info' |
| duration | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | number | 3000 |
| closable | 是否显示关闭按钮 | boolean | false |
| onClose | 关闭时的回调函数 | () => void | — |

### Message 方法

调用 Message 或 Message.success 等方法会返回一个引用，可以通过该引用关闭弹窗。

```ts
const message = Message('这是一条消息提示')
message.close()
```

| 方法名 | 说明 | 参数类型 | 返回值类型 |
| --- | --- | --- | --- |
| Message | 显示消息提示 | MessageOptions \| string | MessageHandler |
| Message.success | 显示成功消息 | MessageOptions \| string | MessageHandler |
| Message.warning | 显示警告消息 | MessageOptions \| string | MessageHandler |
| Message.error | 显示错误消息 | MessageOptions \| string | MessageHandler |
| Message.info | 显示普通消息 | MessageOptions \| string | MessageHandler |

### MessageHandler

| 方法名 | 说明 | 参数类型 | 返回值类型 |
| --- | --- | --- | --- |
| close | 关闭当前的 Message | — | void | 