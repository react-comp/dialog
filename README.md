# Introduction

dialog

# Install

npm

```shell
npm install @react-comp/dialog
```

yarn

```shell
yarn add @react-comp/dialog
```

# Demo

[demo](https://react-comp.github.io/dialog/)

## Usage

```js
import Dialog from "@react-comp/dialog";
import "@react-comp/dialog/dist/dialog.css";

// ...
```

## Props

```js
export interface DialogProps {
  children?: React.ReactNode, // 内容
  visible?: boolean,          // 对话框是否可见
  maskStyle?: string,         // 遮罩层的样式
  contentStyle?: string,       // 内容的样式
  maskClosable?: boolean,     // 是否能通过点击遮罩层关闭对话框
  onClose?: () => void;       // Props.maskClosable 值为 true 时的遮罩层点击回调
}
```
